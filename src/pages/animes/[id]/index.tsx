import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Container } from './styles';
import { AiFillStar } from 'react-icons/ai';
import useAnime, { IAnime } from '../../../hooks/useAnime';
import GlobalContainer from '../../../components/tanpletes/GlobalContainer';
import colors from '../../../assets/colors';
// import moment from 'moment';
import { getFormatDate, getScoreFormat } from '../../../utils';

function Anime() {
  const router = useRouter();
  const { animes, getAnimes } = useAnime();
  useEffect(() => {
    console.log(router);
    const id = router.query.id;
    getAnimes({
      "filter[id]": id as string
    })
  }, [router]);

  const anime = useMemo(() => animes.length ? animes[0] : {} as IAnime, [animes]);
  // const wasAnimeLoaded = useMemo(()=> Object.keys(anime).length > 0 ,[anime]);
  return (
    <GlobalContainer>
      <Container>
        <div>
          <div>
            <img src={anime?.attributes?.posterImage?.original} alt={anime?.attributes?.canonicalTitle} />
            <div>
              <AiFillStar size={32} color={colors.yellow2} /> <p className='score'>{getScoreFormat(anime?.attributes?.averageRating)}</p>/10
            </div>
            <div>
              <b>Exibição: </b><p>{getFormatDate(anime?.attributes?.startDate)} á {anime?.attributes?.endDate ? getFormatDate(anime?.attributes?.endDate) : '?'}</p>
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
              <p> {anime?.attributes?.synopsis}</p>
            </div>
          </section>
        </div>
      </Container>
    </GlobalContainer>
  );
};

export default Anime;
