import React, { useEffect } from 'react';
import Link from 'next/link'
import { Container } from './styles';
import { AiFillStar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import useAnime, { EAnimesFileds, onlySomeAnimesFilds } from '../../../hooks/useAnime';
import colors from '../../../assets/colors';
import { getScoreFormat } from '../../../utils';

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
              <React.Fragment key={anime.id}>
                <li>
                  <p>{i + 1}</p>
                  <img draggable={false} src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                  <div title={anime.attributes.canonicalTitle}>
                    <Link href={`/animes/${anime.id}`}>{anime.attributes.canonicalTitle}</Link>
                    <div>
                      <span>{anime.attributes.subtype}, </span>
                      <span>#{anime.attributes.ratingRank}</span>
                      <span><AiFillStar size={16} color={colors.yellow2} /> {getScoreFormat(anime.attributes.averageRating)}, </span>
                      <span><FaUserAlt size={10} color={colors.yellow2} /> {anime.attributes.userCount}, </span>
                      {anime.attributes.episodeCount && <span>{anime.attributes.episodeCount} eps, </span>}
                    </div>
                  </div>
                </li>
                {
                  i < (animes.length - 1) && <hr />
                }
              </React.Fragment>
            ))
          }
        </ul>
      </div>
    </Container>
  );
};

export default AnimesSection;
