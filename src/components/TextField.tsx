import { Input } from "./ui/input";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "./ui/form";

import eye from "@/assets/eye.png";
import eyeOff from "@/assets/eye-off.png";
import indonesia from "@/assets/indonesia.png";
import dropdown from "@/assets/dropdown.svg";
import { useState } from "react";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    name: string;
    label: string;
    type: string;
    required?: boolean;
}

const TextField = ({ control, name, label, type, required = false }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-1">
                    <FormLabel className="bodyMediumRegular text-[#4A505C] max-md:bodySmallRegular">
                        {label}{" "}
                        {required && <span className="text-[#D32E1F]">*</span>}
                    </FormLabel>
                    <FormControl>
                        <div className="flex h-[48px] gap-6 max-md:gap-3">
                            {type === "tel" && (
                                <div className="flex border-[1px] rounded-[6px] border-other-border">
                                    <div className="px-[10px] bg-other-background-base flex">
                                        <img
                                            src={indonesia}
                                            className="w-[24px] h-[24px] my-auto"
                                        />
                                    </div>
                                    <div className="flex items-center px-[10px] py-1 gap-2">
                                        <p className="bodyMediumRegular max-md:bodySmallRegular text-text-dark-primary w-[60px] max-md:w-fit">
                                            +62
                                        </p>
                                        <img
                                            src={dropdown}
                                            className="w-[24px] h-[24px]"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex-1 border-[1px] rounded-[6px] border-other-border flex items-center px-[10px]">
                                <Input
                                    type={
                                        type === "password" && showPassword
                                            ? "text"
                                            : type
                                    }
                                    className="bodyMediumRegular max-md:bodySmallRegular border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 !important p-0"
                                    {...field}
                                />
                                {type === "password" && (
                                    <img
                                        src={showPassword ? eye : eyeOff}
                                        className="h-[24px] w-[24px] cursor-pointer"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default TextField;
