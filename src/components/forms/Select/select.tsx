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
                <select
                    multiple={true}
                    className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-full h-[200px] p-5"
                    ref={ref}
                    {...props}
                >
                    {

                        props.options.map((option) => (
                            <option className="p-3" key={option.value} value={option.value}>{option.label}</option>
                        ))

                    }

                </select>
            </div>
        );
    }
);

SelectSoftSkills.displayName = "SelectSoftSkills";