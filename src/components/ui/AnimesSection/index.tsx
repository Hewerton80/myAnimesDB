import React, { useEffect } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import useAnime, { EAnimesFileds, onlySomeAnimesFilds } from '../../../hooks/useAnime';
import AnimesList from '../AnimesList';

interface AnimesSectionProps {
  title: string
  animesFileds: EAnimesFileds.AverageRating | EAnimesFileds.FavoritesCount | EAnimesFileds.FavoritesCount | EAnimesFileds.PopularityRank | EAnimesFileds.RatingRank;
}

function AnimesSection({ title, animesFileds }: AnimesSectionProps) {
  const { animes, getAnimes } = useAnime();

  useEffect(() => {
    getAnimes({
      "sort": animesFileds,
      "page[limit]": 5,
      "fields[anime]": onlySomeAnimesFilds
    });
  }, []);

  return (
    <Container>
      <div>
        <header><h5>{title}</h5><Link href={`/animes?sort=${animesFileds}`}>Ver todos</Link></header>
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
