import { GetStaticProps } from 'next';
import { Container } from './styles';
import Head from 'next/head';
import { EAnimesFields, getAnimesFromApi, onlySomeAnimesFields } from '../../hooks/useAnime';
import AnimeCard from '../../components/general/AnimeCard';
import Link from 'next/link';
import moment from 'moment';
import { IAnime } from '../../models/anime';
interface HomeProps {
  popularityRankAnimes: IAnime[],
  mostRecentAnimes: IAnime[]
  date: string;
}

function Home({ popularityRankAnimes, mostRecentAnimes, date }: HomeProps) {
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
      <Container>
        <div>
          <header>
            <h3>
              Mais Populares em {moment().get('year')}
            </h3>
            <Link href={{
              pathname: `/animes`,
              query: {
                sort: EAnimesFields.PopularityRank,
                'filter[seasonYear]': moment().get('year')
              }
            }} >
              Ver todos
              </Link>
          </header>
          <div className='row'>
            {popularityRankAnimes.map((anime) => (
              <AnimeCard
                key={anime.id}
                anime={anime}
              />
            ))}
          </div>
          <header>
            <h3>Mais recentes</h3>
            <Link href={{
              pathname: `/animes`,
              query: {
                sort: EAnimesFields.StartDate,
              }
            }} >
              Ver todos
              </Link>
          </header>
          <div className='row'>
            {mostRecentAnimes.map((anime) => (
              <AnimeCard
                key={anime.id}
                anime={anime}
              />
            ))}
          </div>
          <div>Última atualização: {date}</div>
        </div>
       
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const responsePopularityRankAnimesPromise = getAnimesFromApi({
    'sort': `${EAnimesFields.PopularityRank}`,
    'fields[anime]': onlySomeAnimesFields,
    'filter[seasonYear]': moment().get('year'),
    'page[limit]': 20
  })

  const responseMostRecentAnimesPromise = getAnimesFromApi({
    'sort': EAnimesFields.StartDate,
    'fields[anime]': onlySomeAnimesFields,
    'page[limit]': 20
  });

  const [responsePopularityRankAnimes, responseMostRecentAnimes] = await Promise.all([
    responsePopularityRankAnimesPromise,
    responseMostRecentAnimesPromise
  ])

  const popularityRankAnimes: IAnime[] = responsePopularityRankAnimes.data.data;
  const mostRecentAnimes: IAnime[] = responseMostRecentAnimes.data.data;
  const now = new Date()
  const day = String(now.getDate()).padStart(2,'0')
  const month = String(now.getMonth() + 1).padStart(2,'0')
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2,'0')
  const minuts = String(now.getMinutes()).padStart(2,'0')
  return {
    props: {
      popularityRankAnimes,
      mostRecentAnimes,
      date: `${day}/${month}/${year} ${hours}:${minuts}`
    }, // will be passed to the page component as props
    revalidate: 60 * 60 * 4
  }
}

export default Home;
