import { ReactNode } from 'react';

import { Container } from './styles';

interface AnimesListProps {
  children: ReactNode;
}

function AnimesList({ children }: AnimesListProps) {
  return (
    <Container>
      <h1>AnimesList</h1>
      {children}
    </Container>
  );
};

export default AnimesList;
