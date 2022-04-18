import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import SearchBox from '../SearchBox';
import { Text, Button } from '@chakra-ui/react';
import './style.css';

interface HeaderProps {
  user?: string;
  searchInput: string;
  handleChange: ChangeEventHandler;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({
  handleChange,
  handleSubmit,
  user,
  searchInput,
}: HeaderProps) => {
  return (
    <div>
      <div className="search-container">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" flex="1">
          Hello {user}, temukan lagu kesukaanmu disini!
        </Text>
      </div>

      <SearchBox
        handleChange={handleChange}
        handleSubmitIcon={handleSubmit}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
};

export default Header;
