import React, { useState } from 'react';
import { StyledInput } from './StyledInput';
// import useDebounce from 'Helpers/debounce';

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>('');
  // const debouncedValue = useDebounce<string>(value, 500);

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <form>
      <StyledInput value={value} onChange={eventHandler} />
    </form>
  );
};
