import React, { useEffect } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import useAnime, { EAnimesFields, onlySomeAnimesFields } from '../../../hooks/useAnime';
import AnimesList from '../AnimesList';

interface AnimesSectionProps {
  title: string
  animesFields: EAnimesFields.AverageRating | EAnimesFields.FavoritesCount | EAnimesFields.FavoritesCount | EAnimesFields.PopularityRank | EAnimesFields.RatingRank;
}

function AnimesSection({ title, animesFields }: AnimesSectionProps) {
  const { animes, getAnimes } = useAnime();

  useEffect(() => {
    getAnimes({
      "sort": animesFields,
      "page[limit]": 5,
      "fields[anime]": onlySomeAnimesFields
    });
  }, []);

  return (
    <Container>
      <div>
        <header><h5>{title}</h5><Link href={`/animes?sort=${animesFields}`}>Ver todos</Link></header>
        <ul>
          {
            animes.map((anime, i) => (
              <AnimesList
                anime={anime}
                key={anime.id}
                i={i + 1}
                animesLength={animes.length}
              />
            ))
          }
        </ul>
      </div>
    </Container>
  );
};

export default AnimesSection;
