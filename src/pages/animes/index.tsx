import { useEffect/*, MouseEvent, useCallback, , useRef*/ } from 'react';
import { Container } from './styles';
import Head from 'next/head';
import GlobalContainer from '../../components/tanpletes/GlobalContainer';
import useAnime, { EAnimesFileds, onlySomeFilds } from '../../hooks/useAnime';
import AnimeCard from '../../components/ui/AnimeCard';
import Link from 'next/link';
import moment from 'moment';
// import Button from '../../../components/ui/Button';

function Animes() {
  const { animes: popularityRankAnimes, getAnimes: getPopularityRankAnimes } = useAnime();
  const { animes: mostRecentAnimes, getAnimes: getMostRecentAnimes } = useAnime();

  // const rowAnimes = useRef([]);

  useEffect(() => {
    getPopularityRankAnimes({
      'sort': EAnimesFileds.PopularityRank,
      'fields[anime]': onlySomeFilds,
      'filter[seasonYear]': moment().get('year'),
      'page[limit]': 8
    });
    getMostRecentAnimes({
      'sort': EAnimesFileds.StartDate,
      'fields[anime]': onlySomeFilds,
      'page[limit]': 8
    });
  }, []);



  // const handleDragStart = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, i: number) => {
  //   console.log(e)
  //   const pos = {
  //     // The current scroll 
  //     left: rowAnimes.current[i].scrollLeft,
  //     // Get the current mouse position
  //     x: e.clientX,
  //   };
  //   addEventListener('mousemove', dragMove);
  //   addEventListener('mouseup', dragEnd);

  //   /* ao ser arrastado */
  //   function dragMove(e: globalThis.MouseEvent) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;

  //     // Scroll the element
  //     rowAnimes.current[i].scrollLeft = pos.left - dx;
  //   }

  //   function dragEnd() {
  //     /* remove os eventos */
  //     removeEventListener('mousemove', dragMove);
  //     removeEventListener('mouseup', dragEnd);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>My Animes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalContainer>
        <Container>
          <div>
            <header><h3>Mais Populares em {moment().get('year')}</h3> <Link href='#'>Ver todos</Link> </header>
            <div className='row'>
              {popularityRankAnimes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                />
              ))}
            </div>
            <header><h3>Mais recentes</h3> <Link href='#'>Ver todos</Link> </header>
            <div className='row'>
              {mostRecentAnimes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                />
              ))}
            </div>
          </div>
        </Container>
      </GlobalContainer>
    </>
  );
};

export default Animes;
