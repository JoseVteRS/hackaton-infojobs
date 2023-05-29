import { AppleIcon } from "@/components/icons/mac";
import { WindowIcon } from "@/components/icons/windows";
import { forwardRef } from "react";

type Option = {
  value: string;
  label: string;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label: string;
  options: Option[];
};

export const SelectSoftSkills = forwardRef<HTMLSelectElement, InputProps>(
  (props, ref) => {
    return (
      <div className="relative w-full mb-4">
        <span className="flex text-sm mb-1 relative font-semibold">
          <label>{props.label}</label>
        </span>
        <div className="text-xs flex gap-4">
          <span>
            Para seleccionar más de una opción, mantén presionada la tecla:
          </span>
          <div className="flex items-center gap-2">
            <span className="flex gap-1 items-center">
              <WindowIcon />
              <kbd>Ctrl</kbd>
            </span>
            <span className="flex gap-1 items-center">
              <AppleIcon />
              <kbd>Cmd</kbd>
            </span>
          </div>
        </div>
        <select
          multiple={true}
          className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-full h-[200px] p-5"
          ref={ref}
          {...props}
        >
          {props.options.map((option) => (
            <option className="p-3" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SelectSoftSkills.displayName = "SelectSoftSkills";
