"use client";

import { Stack } from "@mui/material";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

type Props = {
    from?: Date;
    fromName?: string;
    to?: Date;
    toName?: string;
    labelStart?: string;
    labelEnd?: string;
    minDate?: Date;
    maxDate?: Date;
};

export default function DateRangeField({
    from,
    fromName="from",
    to,
    toName="to",
    labelStart = "開始日",
    labelEnd = "終了日",
    minDate,
    maxDate,
}: Props) {
    const { control, setValue, getValues } = useFormContext();

    const start = useWatch({ control, name: "from" }) as Date | null;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
            <Stack direction="row" spacing={1} alignItems="center">
                {/* 開始 */}
                <Controller
                    name={fromName}
                    control={control}
                    defaultValue={from ? new Date(from) : null}
                    rules={{ required: "開始日を選択してください" }}
                    render={({ field, fieldState }) => (
                        <DatePicker
                            label={labelStart}
                            value={field.value ?? null}
                            onChange={(v) => {
                                field.onChange(v);
                                // 終了日が開始日より前なら、開始日に寄せる
                                const curEnd = getValues(`${to}`);
                                if (curEnd && v && curEnd.isBefore?.(v, "day")) {
                                    setValue(`${to}` as const, v, { shouldDirty: true });
                                }
                            }}
                            minDate={minDate}
                            maxDate={maxDate}
                            slotProps={{
                                textField: {
                                    name: field.name,          // ← name を渡す
                                    inputRef: field.ref,       // ← ref を渡す
                                    onBlur: field.onBlur,      // ← onBlur を渡す
                                    error: !!fieldState.error,
                                    helperText: fieldState.error?.message,
                                    fullWidth: true,
                                },
                            }}
                        />
                    )}
                />

                <span>〜</span>

                {/* 終了 */}
                <Controller
                    name={toName}
                    // name={`${to}` as const}
                    control={control}
                    defaultValue={to ? new Date(to) : null}
                    rules={{
                        required: "終了日を選択してください",
                        validate: (v, form) => {
                            const s: Date | null = form?.from ?? start ?? null;
                            if (s && v && v.isBefore?.(s, "day")) return "終了日は開始日以降にしてください";
                            return true;
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <DatePicker
                            label={labelEnd}
                            value={field.value ?? null}
                            onChange={(v) => field.onChange(v)}
                            // 開始日より前は選べない
                            minDate={start ?? minDate}
                            maxDate={maxDate}
                            slotProps={{
                                textField: {
                                    name: field.name,         // ← name を渡す
                                    inputRef: field.ref,      // ← ref を渡す
                                    onBlur: field.onBlur,     // ← onBlur を渡す
                                    error: !!fieldState.error,
                                    helperText: fieldState.error?.message,
                                    fullWidth: true,
                                },
                            }}
                        />
                    )}
                />
            </Stack>
        </LocalizationProvider>
    );
}
