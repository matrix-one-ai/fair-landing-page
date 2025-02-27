import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { useToggle } from "@/app/hooks/useToggle";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import ArrowIcon from "@/app/components/Icons/ArrowIcon";

interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  value?: string;
  placeholder?: string;
  onSelectOption?: (option: string) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  className,
  options,
  value = null,
  onSelectOption,
  placeholder = "",
  ...rest
}) => {
  const [isOpen, { toggle: toggleIsOpen, toggleOff: toggleOffIsOpen }] =
    useToggle(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(value);
  const dropdownContentRef = useOutsideClick<HTMLUListElement>(toggleOffIsOpen);

  // Handler for opening dropdown
  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      toggleIsOpen();
    },
    [toggleIsOpen],
  );

  // Handler for selecting an option
  const handleOptionClick = useCallback(
    (option: string) => {
      setSelectedOption(option);
      onSelectOption?.(option);
      toggleOffIsOpen();
    },
    [onSelectOption, toggleOffIsOpen],
  );

  return (
    <div className={clsx("relative w-full border-black", className)} {...rest}>
      <button
        onClick={handleOpen}
        className="w-full h-6 flex items-center flex-row-reverse justify-between px-2 text-left border border-inherit bg-gray rounded focus:outline-none"
      >
        <span className="float-right transform transition-transform duration-200 text-xs pb-0.5">
          <ArrowIcon className={clsx(!isOpen && "rotate-180")} />
        </span>
        <span className="pt-0.5">{selectedOption || placeholder}</span>
      </button>

      {isOpen && (
        <ul
          ref={dropdownContentRef}
          className="absolute top-5 w-full border bg-gray border-inherit border-t-0 max-h-60 overflow-y-auto z-10"
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-2 py-2 cursor-pointer hover:bg-black/10"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
