"use client";

import { FormGroup, FormControl, FormControlLabel, Switch } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    name: string;
    label?: {
        true: string;
        false: string;
    };
    sx?: object;
};

export default function SwitchField({
    name,
    label,
    sx = { mt: 0 },
}: Props) {
    const {
        control,
        // register,
        formState: { errors },
    } = useFormContext();

    

    return (
        <FormControl fullWidth error={!!errors[name]} sx={sx}>
            <Controller
                name={name}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    name={field.name}
                                    // inputRef={field.ref}
                                    onBlur={field.onBlur}
                                    // checked={!!field.value}
                                    onChange={(_, checked) => field.onChange(checked)}
                                    checked={Boolean(field.value)}
                                    // {...register(name)}
                                    />
                            }
                            label={
                                !label
                                    ? ""
                                    : Boolean(field.value) ? label.true : label.false
                                }
                        />
                    </FormGroup>
                )}
            />
        </FormControl>
    );
}
