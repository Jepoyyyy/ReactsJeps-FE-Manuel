import * as React from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { textInputVariants, type TextInputVariants } from './variant';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TextInputVariants {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, fieldSize, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
      <div className="relative w-full">
        <input
          type={inputType}
          className={cn(textInputVariants({ variant: type === "file" ? "file" : variant, fieldSize, className }))}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
          >
            {isPasswordVisible ? <EyeClosedIcon className="w-4 h-4" /> : <EyeOpenIcon className="w-4 h-4" />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };