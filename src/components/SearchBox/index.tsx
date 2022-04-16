import React from 'react';
import './style.css';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBoxProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  handleSubmitIcon: React.MouseEventHandler;
  searchInput: string;
}

const SearchBox = ({
  handleChange,
  handleSubmit,
  searchInput,
  handleSubmitIcon,
}: SearchBoxProps) => {
  const keyDownhandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <InputGroup size="lg" mt="4rem">
      <InputLeftElement
        onClick={handleSubmitIcon}
        // eslint-disable-next-line react/no-children-prop
        children={
          <button onClick={handleSubmit}>
            <SearchIcon color="#6C5ECf" />
          </button>
        }
      />
      <Input
        value={searchInput}
        onKeyDown={keyDownhandler}
        name="searchInput"
        type="text"
        placeholder="Search your song..."
        onChange={handleChange}
        backgroundColor="gray.800"
        border="none"
      />
    </InputGroup>
  );
};

export default SearchBox;
