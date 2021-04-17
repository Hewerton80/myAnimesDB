import { ReactNode, useContext } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import { EAnimesFileds } from '../../../hooks/useAnime';
import AnimesSection from '../../ui/AnimesSection';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../../assets/colors';
import { SearchContex } from '../../../contexts/SearchContex';
import InputSearch from '../../ui/InputSearch';
interface GlobalContainerProps {
  children: ReactNode;
}

function GlobalContainer({ children }: GlobalContainerProps) {

  const router = useRouter();

  const { handleShowSearch } = useContext(SearchContex);

  return (
    <Container>
      <InputSearch/>
      <header>
        <img src="/images/banner.jpg" alt="banner" />
        <div>
          <nav>
            <ul>
              <li className={router.pathname === '/home' ? 'active' : ''}>
                <Link href='/home'>Home</Link>
              </li>
              <li className={router.pathname.includes('/animes') ? 'active' : ''}>
                <Link href='/animes'>Animes</Link>
              </li>
              <li>
                <IconButton
                  color='primary'
                  onClick={() => handleShowSearch(true)}
                >
                  <AiOutlineSearch color={colors.primary} size={24} />
                </IconButton>
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
