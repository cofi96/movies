import { useState, useMemo } from 'react';

export const useFormInput = (
  initialValue: string,
  validate: (newValue: string) => boolean = () => true,
) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState<boolean>(validate(value));
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [touched, setTouched] = useState<boolean>(false);
  const showError = useMemo(() => !isValid && touched, [isValid, touched]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTouched(true);
    const newValue = e.currentTarget.value;
    setValue(newValue);
    setIsEmpty(newValue.trim() === '');
    setIsValid(validate(newValue));
  };
  return {
    value,
    onChange,
    isValid,
    isEmpty,
    showError,
    setValue,
  };
};
