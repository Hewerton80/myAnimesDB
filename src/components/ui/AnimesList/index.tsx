import { IAnime } from '../../../models/anime';
import Link from 'next/link';
import colors from '../../../assets/colors';
import { AiFillStar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { getScoreFormat } from '../../../utils';
import { Li, widthImageAnimeList, heightImageAnimeList } from './styles';
import Image from 'next/image';

interface AnimesListProps {
  anime: IAnime;
  animesLength?: number;
  i?: number;
}

function AnimesList({ anime, i, animesLength }: AnimesListProps) {
  return (
    <>
    <Li>
      {i !== undefined && <p>{i}</p>}
      <figure>
        <Image width={widthImageAnimeList} height={heightImageAnimeList} draggable={false} src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
      </figure>
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
    </Li>
    {
      animesLength && (i < animesLength ) && <hr style={{margin: '8px 0'}} />
    }
    </>
  );
};

export default AnimesList;
