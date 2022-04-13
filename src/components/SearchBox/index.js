import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({ handleChange, handleClick }) {
  return (
    <Paper
      sx={{
        backgroundColor: '#252836',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder="Search gif..."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleChange}
      />
      <IconButton onClick={handleClick} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
    </Paper>
  );
}
