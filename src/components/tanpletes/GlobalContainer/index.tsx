import { ReactNode } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import { EAnimesFileds } from '../../../hooks/useAnime';
import AnimesSection from '../../ui/AnimesSection';
import { useRouter } from 'next/router';

interface GlobalContainerProps {
  children: ReactNode;
}

function GlobalContainer({ children }: GlobalContainerProps) {

  const router = useRouter();
  return (
    <Container>
      <header>
        <img src="/images/banner.jpg" alt="banner" />
        <div>
          <nav>
            <ul>
              <li className={router.pathname === '/home'? 'active': ''}>
                <Link href='/home'>Home</Link>
              </li>
              <li className={router.pathname.includes('/animes')? 'active': ''}>
                <Link href='/animes'>Animes</Link>
              </li>
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
