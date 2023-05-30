import { forwardRef } from "react";

type InputProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> & {
    label: string;
    options: { id: string; name: string }[];
    isRequired?: boolean;
    isMultiple?: boolean;
};

export const SelectBasic = forwardRef<HTMLSelectElement, InputProps>(
    (props, ref) => {
        return (
            <div className="relative w-full mb-4">
                <span className="flex text-sm mb-1 gap-1 relative font-semibold">
                    <label>{props.label}</label>
                    {props?.isRequired && (
                        <span className="text-ij-gray font-normal">Obligatorio</span>
                    )}
                </span>
                <select
                    multiple={props.isMultiple}
                    className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-full h-16 p-5"
                    ref={ref}
                    {...props}
                >
                    {
                        props.options.map((option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
);

SelectBasic.displayName = "SelectBasic";