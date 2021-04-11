import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import GlobalContainer from '../../components/tanpletes/GlobalContainer';
import AnimeCard from '../../components/ui/AnimeCard';
import { Pagination } from '../../components/ui/Pagination';
import useAnime, { EAnimesFileds, IQueryParamsAnime, onlySomeAnimesFilds } from '../../hooks/useAnime';
import { Container } from './styles';

function Animes() {

  const router = useRouter();

  const { animes, animesCount, isLoadingAnimes, getAnimes } = useAnime();

  const [pageLimit, setPageLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<IQueryParamsAnime>(
    Object.keys(router.query).length > 0 ?
      router.query :
      {
        'sort': EAnimesFileds.Slug
      }
  );

  useEffect(() => {
    console.log(router.query);
    getAnimes({
      ...filters,
      'fields[anime]': onlySomeAnimesFilds,
      'page[limit]': pageLimit,
      'page[offset]': pageLimit * (page - 1)
    });
  }, []);


  const handleGetAnimes = useCallback((numPage) => {
    getAnimes({
      ...filters,
      'fields[anime]': onlySomeAnimesFilds,
      'page[limit]': pageLimit,
      'page[offset]': pageLimit * (numPage - 1)
    });
  }, [page, pageLimit, filters]);

  const handleChange = useCallback((event, page) => {
    console.log('handleChange: ', page);
    setPage(page);
    handleGetAnimes(page);
  }, [handleGetAnimes]);

  return (
    <GlobalContainer>
      <Container>
        <div>
          <h3>Animes</h3>
        </div>
        <div>
          {animes.map(anime => (
            <AnimeCard
              key={anime.id}
              anime={anime}
            />
          ))}
        </div>
        <div>
          <Pagination
            count={Math.floor(animesCount / pageLimit)}
            page={page}
            onChange={handleChange}
            disabled={isLoadingAnimes}
            color="primary"
            size="large"
          />
        </div>

      </Container>
    </GlobalContainer>
  );
};

export default Animes;
