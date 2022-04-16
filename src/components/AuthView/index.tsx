import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import SearchBox from '../SearchBox';
import { Text, Button } from '@chakra-ui/react';
import './style.css';

interface AuthViewProps {
  user?: string;
  searchInput: string;
  handleChange: ChangeEventHandler;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleLogout: MouseEventHandler<HTMLButtonElement>;
}

const AuthView = ({
  handleChange,
  handleSubmit,
  handleLogout,
  user,
  searchInput,
}: AuthViewProps) => {
  return (
    <div>
      <div className="search-container">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" flex="1">
          Hello {user}, temukan lagu kesukaanmu disini!
        </Text>
        <Button
          colorScheme="purple"
          size="lg"
          height="50px"
          width="120px"
          onClick={handleLogout}
        >
          Logout
        </Button>
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

export default AuthView;
