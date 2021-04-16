import { ReactNode, useCallback, useRef, useState } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import useAnime, { EAnimesFileds, onlySomeAnimesFilds } from '../../../hooks/useAnime';
import AnimesSection from '../../ui/AnimesSection';
import { useRouter } from 'next/router';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../../assets/colors';
import AnimesList from '../../ui/AnimesList';
import { useDebouncedCallback } from 'use-debounce';
interface GlobalContainerProps {
  children: ReactNode;
}

function GlobalContainer({ children }: GlobalContainerProps) {

  const { getAnimes, animes: animesFounded } = useAnime();

  const router = useRouter();

  const inputRef = useRef<any>();

  const [showSearche, setShowSearche] = useState(false);
  const [animeText, setAnimeText] = useState('');

  const handleChangeInput = useDebouncedCallback(() => {
    console.log(animeText);
    getAnimes({
      // 'sort': EAnimesFileds.CanonicalTitle,
      'filter[text]': animeText,
      "page[limit]": 20,
      "fields[anime]": onlySomeAnimesFilds
    });
  }, 1000);
  return (
    <Container>
      <header>
        <img src="/images/banner.jpg" alt="banner" />
        <div className={!showSearche ? 'd-none' : ''}>
          <div>
            <input
              type="text"
              placeholder='Pesquisar anime'
              onBlur={() => setShowSearche(false)}
              ref={inputRef}
              onChange={(e) => {
                setAnimeText(e.target.value);
                // handleChangeInput()
                handleChangeInput();
              }}
            />
            <IconButton
              onClick={() => setShowSearche(false)}

            >
              <AiOutlineClose size={24} color={colors.black} />
            </IconButton>
          </div>
          <div>
            <ul>
              {
                animesFounded.map((anime, i) => (
                  <a href="#" key={i}>
                    <AnimesList
                      anime={anime}
                    />
                  </a>
                ))
              }
            </ul>
          </div>
        </div>

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
                  onClick={() => {
                    setShowSearche(true);
                    inputRef.current.focus();
                  }}
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
