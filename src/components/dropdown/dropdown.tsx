import React, { useState, useMemo, useEffect } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import {
  StyledDropdown,
  StyledDropdownLabel,
  StyledDropdownList,
  StyledDropdownOption,
  StyledDropdownSelected,
} from './dropdown.style';
import { SelectOption } from './dropdown.types';
import { MOVIE_OPTIONS } from '../../context/movies.context';

type MultipleSelectProps = {
  multiple: true;
  value: string[];
  onChange: (value: string[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value: string[];
  onChange: (value: string[]) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

function Dropdown({ multiple, value, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdownListHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(
    () => () => {
      onChange([MOVIE_OPTIONS[0].value]);
    },
    [],
  );

  const notSelcetedOptions = useMemo<SelectOption[]>(() => {
    if (!value) return [];
    return multiple ? options.filter((option) => !value.includes(option.value)) : options;
  }, [value]);

  const selectOptionHandler = (option: string) => {
    const removeSelectedOption = value?.filter((o) => o !== option) || [MOVIE_OPTIONS[0].value];
    const isOptoionSelected = value.includes(option);
    if (multiple) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isOptoionSelected ? onChange(removeSelectedOption) : onChange([...value, option]);
    } else {
      onChange([option]);
    }
    setIsOpen(false);
  };

  const selected = useMemo(
    () =>
      multiple
        ? [...value].slice(1).map((val) => (
            <StyledDropdownLabel
              key={val}
              onClick={(e) => {
                e.stopPropagation();
                selectOptionHandler(val);
              }}
            >
              {options.find((option) => option.value === val)?.label}
            </StyledDropdownLabel>
          ))
        : options.find((option) => option.value === value[0])?.label,
    [value],
  );

  return (
    <StyledDropdown $active={isOpen}>
      <StyledDropdownSelected onClick={toggleDropdownListHandler}>
        {selected}
        <HiOutlineChevronDown />
      </StyledDropdownSelected>
      <StyledDropdownList>
        {notSelcetedOptions.map((option) => (
          <StyledDropdownOption
            key={option.label}
            onClick={() => {
              selectOptionHandler(option.value);
            }}
          >
            {option?.label}
          </StyledDropdownOption>
        ))}
      </StyledDropdownList>
    </StyledDropdown>
  );
}

export default Dropdown;
