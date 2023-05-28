import { forwardRef } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

export const InputText = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className="relative w-full mb-4">
        <span className="flex text-sm mb-1 relative font-semibold">
          <label>{props.label}</label>
        </span>
        <input
          type="text"
          className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-full h-12 p-5"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputText.displayName = "InputText";
