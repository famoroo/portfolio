"use client";

import {
    FormControl,
    TextField
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    name: string;
    label?: string;
    step?: number;
    min?: number;
    max?: number;
    sx?: object;
    errorText?: string;
};

const toStr = (v: unknown) =>
    v === undefined || v === null ? "" : String(v);

// -, ., -. の「入力途中」を許容
const isPartial = (s: string) => s === "" || s === "-" || s === "." || s === "-.";

const clamp = (n: number, min?: number, max?: number) => {
    if (min !== undefined && n < min) return min;
    if (max !== undefined && n > max) return max;
    return n;
};

export default function NumberInputField({
    name,
    label,
    step = 1,
    min,
    max,
    sx = { mt: 0 },
}: Props) {
    const {
        control,
        formState: { errors },
    } = useFormContext();

     // 整数/小数でパターンを切替。負数は min < 0 なら許可
    const isInteger = Number.isInteger(step);
    const allowNegative = min !== undefined ? min < 0 : true;
    const pattern = isInteger
        ? allowNegative ? "^-?[0-9]*$" : "^[0-9]*$"
        : allowNegative ? "^-?[0-9]*([.,][0-9]*)?$" : "^[0-9]*([.,][0-9]*)?$";

    const inputMode = isInteger ? "numeric" : "decimal";

    return (
        <FormControl fullWidth error={!!errors[name]} sx={sx}>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <>
                    <TextField
                        type="text" // ← iOS対策：textで制御
                        value={toStr(field.value)}
                        label={label ?? ""}
                        sx={sx}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        onFocus={(e) => e.target.select()}
                        slotProps={{
                            input: {
                                inputProps: {
                                    inputMode,
                                    pattern, // ← 渡されたminで負数可否を切替
                                },
                            },
                        }}
                        onChange={(e) => {
                            const v = e.target.value;
                            // 入力途中はそのまま保持
                            if (isPartial(v)) {
                                field.onChange(v);
                                return;
                            }
                            // パターンに合わない文字は拒否（任意：外してもOK）
                            if (!(new RegExp(pattern).test(v))) return;

                            field.onChange(v);
                        }}
                        onBlur={(e) => {
                            field.onBlur();
                            const raw = e.target.value.trim().replace(",", ".");
                            if (isPartial(raw)) {
                                field.onChange(undefined);
                                return;
                            }
                            const num = Number(raw);
                            if (Number.isNaN(num)) {
                                field.onChange(undefined);
                                return;
                            }
                            // ← ここで min / max が指定されていればだけクランプ
                            field.onChange(clamp(num, min, max));
                        }}
                    />
                    </>
                )}
            />
        </FormControl>
    );
}
