import { ReactNode, useContext } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import { EAnimesFields } from '../../../hooks/useAnime';
import AnimesSection from '../../general/AnimesSection';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../../assets/colors';
import { SearchContex } from '../../../contexts/SearchContex';
import InputSearch from '../../general/InputSearch';
interface GlobalContainerProps {
  children: ReactNode;
}

function GlobalContainer({ children }: GlobalContainerProps) {

  const router = useRouter();

  const { handleShowSearch } = useContext(SearchContex);

  if (router.pathname === '/_error') {
    return <>{children}</>
  }
  return (
    <Container>
      <InputSearch />
      <header>
        <div className='hedaerContainer'>
          <nav className='nav'>
            <ul className='itens'>
              <li className={`item ${router.pathname === '/home' ? 'active' : ''}`}>
                <Link href='/home'>Home</Link>
              </li>
              <li className={`item ${router.pathname.includes('/animes') ? 'active' : ''}`}>
                <Link href='/animes'>Animes</Link>
              </li>
              <li className='item'>
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
        <div className='content'>
          {children}
        </div>
        <div className='sections'>
          <AnimesSection
            title='Top Animes Favoritos'
            animesFields={EAnimesFields.FavoritesCount}
          />
          <AnimesSection
            title='Top Animes avaliados'
            animesFields={EAnimesFields.RatingRank}
          />
        </div>
      </main>
    </Container>
  );
};

export default GlobalContainer;
