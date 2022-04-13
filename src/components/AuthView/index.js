import React from 'react';
import SearchBox from '../SearchBox';
import { Text, Button } from '@chakra-ui/react';
import './style.css';

const AuthView = ({
  handleChange,
  handleSubmit,
  handleLogout,
  user,
  searchInput,
}) => {
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
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
};

export default AuthView;
