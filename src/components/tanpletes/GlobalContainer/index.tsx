import { ReactNode } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import { EAnimesFileds } from '../../../hooks/useAnime';
import AnimesSection from '../../ui/AnimesSection';

interface GlobalContainerProps {
  children: ReactNode;
}

function GlobalContainer({ children }: GlobalContainerProps) {

  return (
    <Container>
      <header>
        <img src="/images/banner.jpg" alt="banner" />
        <div>
          <nav>
            <ul>
              <li className='active'>
                <Link href="/animes">Animes</Link>
              </li>
              {/* <li>
                <Link href="#">Mangás</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
        <div className='sections'>
          <AnimesSection
            title='Top Animes Favoritos'
            animesFileds={EAnimesFileds.FavoritesCount}
          />
          <AnimesSection
            title='Top Animes avaliados'
            animesFileds={EAnimesFileds.RatingRank}
          />
        </div>
      </main>
    </Container>
  );
};

export default GlobalContainer;
