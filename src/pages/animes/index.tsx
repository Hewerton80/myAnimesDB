import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import GlobalContainer from '../../components/tanpletes/GlobalContainer';
import AnimeCard from '../../components/ui/AnimeCard';
import { Pagination } from '../../components/ui/Pagination';
import useAnime, { EAnimesFields, IQueryParamsAnime, onlySomeAnimesFields } from '../../hooks/useAnime';
import { Container } from './styles';

function Animes() {

  const router = useRouter();

  const { animes, animesCount, isLoadingAnimes, getAnimes } = useAnime();

  const [pageLimit, setPageLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<IQueryParamsAnime>({
    'sort': EAnimesFields.Slug
  });

  const handleGetAnimes = (numPage = null, query = null) => {
    // console.log('query: ', query)
    numPage = numPage ? numPage : page;
    query = query ? query : filters;
    // console.log('page: ', numPage)
    // console.log('offset: ', numPage)
    getAnimes({
      ...query,
      'fields[anime]': onlySomeAnimesFields,
      'page[limit]': pageLimit,
      'page[offset]': pageLimit * (numPage - 1)
    });
  };

  const handleChange = (event, page) => {
    console.log('handleChange: ', page);
    setPage(page);
    handleGetAnimes(page, null);
  };

  useEffect(() => {
    console.log('router:', router);
    const query = Object.keys(router.query).length > 0 ?
      router.query :
      {
        'sort': EAnimesFields.Slug
      }

    setFilters(query);
    handleGetAnimes(null, query);
  }, [router]);

  return (
    <Container>
      <div>
        <h3>Animes</h3>
      </div>
      <div>
        {isLoadingAnimes ?
          Array.from(Array(20).keys()).map((_, i) => (
            <AnimeCard
              key={i}
              isLoagin={true}
            />
          ))
          :
          animes.map(anime => (
            <AnimeCard
              key={anime.id}
              anime={anime}
            />
          ))
        }
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
  );
};

export default Animes;
