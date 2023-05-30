import { ChevronDown } from "@/components/icons/chevron-down";
import { CloseIcon } from "@/components/icons/close-icon";
import { forwardRef, useEffect, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import "./select.css";

type Option = {
    value: string;
    label: string;
};

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    isMulti?: boolean;
    isSearchable?: boolean;
    placeHolder: string;
    options: Option[];
    setValue?: UseFormSetValue<any>
};

export const SelectSoftSkills = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {

        const [showMenu, setShowMenu] = useState(false);
        const [selectedValue, setSelectedValue] = useState<Option[]>(props.isMulti ? [] : null);
        const [searchValue, setSearchValue] = useState("");
        const searchRef = useRef<HTMLInputElement>(null);
        const inputRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            setSearchValue("");
            if (showMenu && searchRef.current) {
                searchRef.current.focus();
            }
        }, [showMenu]);



        const handleInputClick = () => {
            setShowMenu(!showMenu);
        };

        const getDisplay = () => {
            if (!selectedValue || selectedValue.length === 0) {
                return props.placeHolder;
            }
            if (props.isMulti) {
                return (
                    <div className="dropdown-tags">
                        {selectedValue.map((option) => (
                            <div key={option.value} className="dropdown-tag-item">
                                {option.label}
                                <span
                                    onClick={(e) => onTagRemove(e, option)}
                                    className="dropdown-tag-close"
                                >
                                    <CloseIcon />
                                </span>
                            </div>
                        ))}
                    </div>
                );
            }
            return selectedValue.label;
        };

        const removeOption = (option: Option) => {
            return selectedValue.filter((o) => o.value !== option.value);
        };

        const onTagRemove = (e: React.MouseEvent, option: Option) => {
            e.stopPropagation();
            const newValue = removeOption(option);
            setSelectedValue(newValue);

        };

        const onItemClick = (option: Option) => {
            let newValue;
            if (props.isMulti) {
                if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                    newValue = removeOption(option);
                } else {
                    newValue = [...selectedValue, option];
                }
            } else {
                newValue = option;
            }
            props.setValue(newValue);
            setSelectedValue(newValue);
        };

        const isSelected = (option: Option) => {
            if (props.isMulti) {
                return selectedValue.filter((o) => o.value === option.value).length > 0;
            }

            if (!selectedValue) {
                return false;
            }

            return selectedValue.value === option.value;
        };

        const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
        };

        const getOptions = () => {
            if (!searchValue) {
                return props.options;
            }

            return props.options.filter(
                (option) =>
                    option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
            );
        };

        const handleSelectChange = (value: Option | Option[]) => {
            setSelectedValue(value);
            if (props.onChange) {
                props.onChange(value);
            }
        };

        return (
            <div className="dropdown-container">
                <span className="flex text-sm mb-1 relative font-semibold">
                    <label>{props.label}</label>
                </span>
                <input type="text" ref={ref} {...props} />
                <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                    <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                        <div className="dropdown-tool">
                            <ChevronDown />
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div className="dropdown-menu">
                        {props.isSearchable && (
                            <div className="search-box">
                                <input
                                    onChange={onSearch}
                                    value={searchValue}
                                    ref={searchRef}
                                    className="search-input"
                                    placeholder="Buscar"
                                />
                            </div>
                        )}
                        {getOptions().map((option) => (
                            <div
                                onClick={() => onItemClick(option)}
                                key={option.value}
                                className={`dropdown-item ${isSelected(option) && "selected"}`}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

SelectSoftSkills.displayName = "SelectSoftSkills";
