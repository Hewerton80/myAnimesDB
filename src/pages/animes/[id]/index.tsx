import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from './styles';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai';
import useAnime, { EAnimesFields, getAnimesFromApi, onlySomeAnimesFields } from '../../../hooks/useAnime';
import colors from '../../../assets/colors';
// import moment from 'moment';
import { getFormatDate, getScoreFormat } from '../../../utils';
import useEpisode, { getEpisodesFromApi } from '../../../hooks/useEpisode';
import Link from 'next/link';
// import { FaUserAlt } from 'react-icons/fa';
import EpisodeCard from '../../../components/ui/EpisodeCard';
import { onlySomeCharacatersFields } from '../../../hooks/useCharacter';
import { IAnime } from '../../../models/anime';
import CharacterCard from '../../../components/ui/CharacterCard';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ICharacter } from '../../../models/character';
import { IEpisode } from '../../../models/episode';


interface AnimeProps {
  anime: IAnime;
  episodes: IEpisode[]
}
function Anime({ anime, episodes }: AnimeProps) {
  const router = useRouter();
  // const { animes, getAnimes } = useAnime();
  // const { episodes, getEpisodes } = useEpisode();
  const iframeRef = useRef<any>();

  const [showAllSynopsis, setShowAllSynopsis] = useState(true);

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

  const handleAppDimensions = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.style.height = `${iframeRef?.current?.offsetWidth * 0.56}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      handleAppDimensions()
    })
    return () => window.removeEventListener('resize', () => { });
  }, []);

  const handleShowAllSynopses = useCallback((synopsis: string | undefined) => {
    return showAllSynopsis && typeof synopsis === 'string' && synopsis?.length > 300 ? (
      `${synopsis.slice(0, 300)} `
    ) : (
      synopsis
    );
  }, [showAllSynopsis]);

  // const anime = useMemo(() => animes.length ? animes[0] : {} as IAnime, [animes]);
  // const wasAnimeLoaded = useMemo(()=> Object.keys(anime).length > 0 ,[anime]);

  if(router.isFallback){
    return <p>loading...</p>
  }
  return (
    <Container>
      <div className='path'>
        <p><Link href={'/animes'}>Animes</Link> <AiOutlineRight size={14} color={colors.blue} /> {anime?.attributes?.canonicalTitle}</p>
      </div>
      <div>
        <div>
          <img src={anime?.attributes?.posterImage?.original} alt={anime?.attributes?.canonicalTitle} style={{ transform: '' }} />
          <div>
            <AiFillStar size={32} color={colors.yellow2} /> <p className='score'>{getScoreFormat(anime?.attributes?.averageRating)}</p>/10
            </div>
          <div>
            <b>Lançamento: </b><p>{getFormatDate(anime?.attributes?.startDate)}</p>
          </div>
          <div>
            <b>Finalizado em: </b><p>{anime?.attributes?.endDate ? getFormatDate(anime?.attributes?.endDate) : '?'}</p>
          </div>
          <div>
            <b>Status: </b><p>{anime?.attributes?.status ? anime?.attributes?.status : '?'}</p>
          </div>
          <div>
            <b>Categoria: </b><p>{anime?.attributes?.ageRatingGuide ? anime?.attributes?.ageRatingGuide : '?'}</p>
          </div>
          <div>
            <b>Classificação de idade: </b><p>{anime?.attributes?.ageRating ? anime?.attributes?.ageRating : '?'}</p>
          </div>
          <div>
            <b>Duração: </b><p>{anime?.attributes?.episodeLength ? anime?.attributes?.episodeLength : '?'} mim</p>
          </div>
          <div>
            <b>Tipo: </b><p>{anime?.attributes?.subtype ? anime?.attributes?.subtype : '?'}</p>
          </div>
        </div>
        <section>
          <div><h3>{anime?.attributes?.canonicalTitle}</h3></div>
          <div>
            <div>
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
          <div>
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
              <div className='video'>
                <iframe
                  ref={iframeRef}
                  onLoad={handleAppDimensions}
                  id='player'
                  src={`https://www.youtube.com/embed/${anime?.attributes?.youtubeVideoId}`}
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
  const responseEpisodesPromise  = getEpisodesFromApi(id as string, {});
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
    revalidate: 60 * 60 * 60 * 8
  }
}

export default Anime;
