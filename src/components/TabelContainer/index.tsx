import React from 'react';
import { Table, Thead, Tr, Th, TableContainer } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

interface Props {
  children: JSX.Element;
}

export const TabelContainer = ({ children }: Props) => {
  return (
    <TableContainer>
      <Table variant="unstyled" color="white">
        <Thead borderBottom={'1px solid #8c8c8c'}>
          <Tr>
            <Th style={{ display: 'flex', gap: '1rem' }}>
              <h5 style={{ fontSize: '1.25rem' }}>#</h5>
              <h5 style={{ fontSize: '1rem', opacity: '70%' }}>Title</h5>
            </Th>
            <Th style={{ fontSize: '1rem', opacity: '70%' }}>Album</Th>
            <Th style={{ fontSize: '1rem', opacity: '70%' }}>Date Added</Th>
            <Th style={{ fontSize: '1rem', opacity: '70%' }}>
              <TimeIcon boxSize={5} />
            </Th>
          </Tr>
        </Thead>
        {children}
      </Table>
    </TableContainer>
  );
};
