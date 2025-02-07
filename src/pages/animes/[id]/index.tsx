import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, heightAnimeImage, widthAnimeImage } from './styles';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import { EAnimesFields, getAnimesFromApi, onlySomeAnimesFields } from '../../../hooks/useAnime';
import colors from '../../../assets/colors';
// import moment from 'moment';
import { getFormatDate, getScoreFormat } from '../../../utils';
import { getEpisodesFromApi } from '../../../hooks/useEpisode';
import Link from 'next/link';
// import { FaUserAlt } from 'react-icons/fa';
import EpisodeCard from '../../../components/general/EpisodeCard';
import { onlySomeCharacatersFields } from '../../../hooks/useCharacter';
import { IAnime } from '../../../models/anime';
import CharacterCard from '../../../components/general/CharacterCard';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ICharacter } from '../../../models/character';
import { IEpisode } from '../../../models/episode';
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image';
import { useMemo } from 'react';
interface AnimeProps {
  anime: IAnime;
  episodes: IEpisode[]
}

function Anime({ anime, episodes }: AnimeProps) {
  const router = useRouter();
  // const { animes, getAnimes } = useAnime();
  // const { episodes, getEpisodes } = useEpisode();

  const [showAllSynopsis, setShowAllSynopsis] = useState(true);

  const isLoading = useMemo(() => router.isFallback, [router])
  // useEffect(() => {
  //   const id = router.query.id;
  //   if (id) {
  //     getAnimes({
  //       'filter[id]': id as string,
  //       'include': 'characters.character',
  //       'fields[characters]': onlySomeCharacatersFields
  //     })
  //     getEpisodes(id as string, {});
  //   }
  // }, [router]);



  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     handleAppDimensions()
  //   })
  //   return () => window.removeEventListener('resize', () => { });
  // }, []);

  const handleShowAllSynopses = useCallback((synopsis: string | undefined) => {
    return showAllSynopsis && typeof synopsis === 'string' && synopsis?.length > 300 ? (
      `${synopsis.slice(0, 300)} `
    ) : (
      synopsis
    );
  }, [showAllSynopsis]);

  // const anime = useMemo(() => animes.length ? animes[0] : {} as IAnime, [animes]);
  // const wasAnimeLoaded = useMemo(()=> Object.keys(anime).length > 0 ,[anime]);

  console.log('isLoading: ',)
  if (isLoading) {
    return <p>loading...</p>
  }
  return (
    <Container>
      <div className='path'>
        <p><Link href={'/animes'}>Animes</Link> {">"} {anime?.attributes?.canonicalTitle}</p>
      </div>
      <div>
        <aside>
          <figure>
            <Image 
              height={heightAnimeImage} 
              width={widthAnimeImage} 
              src={anime?.attributes?.posterImage?.original} 
              alt={anime?.attributes?.canonicalTitle} 
              quality={0.1}
            />
          </figure>
          <ul>
            <li>
              <AiFillStar size={32} color={colors.yellow2} /> <p className='score'>{getScoreFormat(anime?.attributes?.averageRating)}</p>/10
            </li>
            <li>
              <b>Lançamento: </b><p>{getFormatDate(anime?.attributes?.startDate)}</p>
            </li>
            <li>
              <b>Finalizado em: </b><p>{anime?.attributes?.endDate ? getFormatDate(anime?.attributes?.endDate) : '?'}</p>
            </li>
            <li>
              <b>Status: </b><p>{anime?.attributes?.status ? anime?.attributes?.status : '?'}</p>
            </li>
            <li>
              <b>Categoria: </b><p>{anime?.attributes?.ageRatingGuide ? anime?.attributes?.ageRatingGuide : '?'}</p>
            </li>
            <li>
              <b>Classificação de idade: </b><p>{anime?.attributes?.ageRating ? anime?.attributes?.ageRating : '?'}</p>
            </li>
            <li>
              <b>Duração: </b><p>{anime?.attributes?.episodeLength ? anime?.attributes?.episodeLength : '?'} mim</p>
            </li>
            <li>
              <b>Tipo: </b><p>{anime?.attributes?.subtype ? anime?.attributes?.subtype : '?'}</p>
            </li>
          </ul>

        </aside>
        <section>
          <div className='canonicalTitle' ><h3>{anime?.attributes?.canonicalTitle}</h3></div>
          <div className='animeNumbersContainer'>
            <div className='animesNumbers'>
              {anime?.attributes?.ratingRank &&
                <div>
                  <span>Rank</span>
                  <b>#{anime?.attributes?.ratingRank}</b>
                </div>
              }
              <div>
                <span>Popularidade</span>
                <b>{anime?.attributes?.popularityRank}</b>
              </div>
              <div>
                <span>Usuários</span>
                <b>{anime?.attributes?.userCount}</b>
              </div>
              <div>
                <span>Favoritos</span>
                <b>{anime?.attributes?.favoritesCount}</b>
              </div>
              <div>
                <span>N° Eps</span>
                <b>{anime?.attributes?.episodeCount || '?'}</b>
              </div>
            </div>
          </div>
          <div className='sinopse'>
            <div><h4>Sinopse</h4></div>
            <p>
              {handleShowAllSynopses(anime?.attributes?.synopsis)}
              <span
                onClick={() => setShowAllSynopsis(currentShowAllSynopsis => !currentShowAllSynopsis)}
              >
                {
                  typeof anime?.attributes?.synopsis === 'string' && anime?.attributes?.synopsis.length > 300 && (
                    showAllSynopsis ?
                      '...Mostrar mais'
                      :
                      ' Mostrar menos'
                  )
                }
              </span>
            </p>
          </div>
          {
            anime?.attributes?.youtubeVideoId && (
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={`https://www.youtube.com/embed/${anime?.attributes?.youtubeVideoId}`}
                />
              </div>
            )
          }

          {episodes.length > 0 &&
            <div className='episodes'>
              <div><h4>Episódios</h4> <Link href='#'>Ver todos</Link> </div>
              <div>
                {
                  episodes.map((episode) => (
                    <EpisodeCard
                      key={episode.id}
                      episode={episode}
                    />
                  ))
                }
              </div>
            </div>
          }

          {anime.characters && anime.characters.length > 0 &&
            <div className='characters'>
              <div><h4>Personagens</h4></div>
              <div>
                {
                  anime.characters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      character={character}
                    />
                  ))
                }
              </div>
            </div>
          }
        </section>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const responseFavoritesPromise = getAnimesFromApi({
    "sort": EAnimesFields.FavoritesCount,
    "page[limit]": 5,
    "fields[anime]": onlySomeAnimesFields
  })

  const responseMostRatingAnimesPromise = getAnimesFromApi({
    "sort": EAnimesFields.RatingRank,
    "page[limit]": 5,
    "fields[anime]": onlySomeAnimesFields
  });

  const [responseFavorites, responseMostRatingAnimes] = await Promise.all([
    responseFavoritesPromise,
    responseMostRatingAnimesPromise
  ])

  const favoritesAnimes: IAnime[] = responseFavorites.data.data;
  const mostRatingAnimes: IAnime[] = responseMostRatingAnimes.data.data;

  const animes = [...favoritesAnimes, ...mostRatingAnimes];

  const paths = animes.map(({ id }) => ({
    params: { id }
  }))

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params;

  const responsePopularityRankAnimesPromise = getAnimesFromApi({
    'filter[id]': id as string,
    'include': 'characters.character',
    'fields[characters]': onlySomeCharacatersFields
  });
  const responseEpisodesPromise = getEpisodesFromApi(id as string, {});
  const [responsePopularityRankAnimes, responseEpisodes] = await Promise.all([
    responsePopularityRankAnimesPromise,
    responseEpisodesPromise
  ])
  const animesResponse: IAnime[] = responsePopularityRankAnimes.data.data;
  let characters = [];
  if (responsePopularityRankAnimes.data.included) {
    characters = responsePopularityRankAnimes.data.included;
    // console.log('characters: ', characters)
    characters = characters.filter(character => !!character.attributes.canonicalName)
    animesResponse[0].characters = characters as ICharacter[];
  }
  const anime = animesResponse?.length ? animesResponse[0] : {} as IAnime;
  const episodes = responseEpisodes.data.data;
  return {
    props: {
      anime,
      episodes
    },
    revalidate: 60 * 60 * 24 //24h
  }
}

export default Anime;
