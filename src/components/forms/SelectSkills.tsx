"use client";
import React, { forwardRef, useRef, useState } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  options: { id: string; name: string }[];
  selectedSkills: string[];
};

export const SelectSkills = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState<string[]>(props.selectedSkills);

    const divRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
      setIsFocused(true);
      if (isFocused) {
        setIsFocused(false);
      }
    };

    const handlePillClick = (skill: string) => {
      if (selectedSkills.includes(skill)) {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
      } else {
        setSelectedSkills([...selectedSkills, skill])
      }
    }

    return (
      <div className="relative w-full mb-4">
        <span className="flex text-sm mb-1 relative font-semibold">
          <label>{props.label}</label>
        </span>
        <div
          onFocus={handleFocus}
          className="flex items-center justify-start text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-full h-12"
        >
          <div className="pl-[1.25rem] pr-0 flex flex-1 flex-wrap py-[2px] px-[8px] relative overflow-hidden">
            {selectedSkills.map((skill) => (
              <Pill key={skill} >{skill}</Pill>
            ))}

            <div className="m-[2px] py-[2px] visible text-ij-black box-border">
              <div className="none">
                <input
                  type="text"
                  className="focus:outline-none w-full h-full"
                  ref={ref}
                  {...props}
                />
              </div>
            </div>
          </div>
        </div>
        {isFocused && (
          <div className="w-full h-[250px] border-2 border-primary-l4 mt-1 rounded overflow-y-scroll">
            {props.options.map((option) => {
              return (
                <div onClick={() => handlePillClick(option.name)} className="p-4 hover:bg-gray-200" key={option.id}>
                  {option.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

const Pill = ({ children, onClick }: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2">
      {children}
    </div>
  );
};

SelectSkills.displayName = "SelectSkills";
