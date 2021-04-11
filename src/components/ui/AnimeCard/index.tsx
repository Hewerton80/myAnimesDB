import { Container } from './styles';
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { getScoreFormat } from '../../../utils';
import colors from '../../../assets/colors';
import { IAnime } from '../../../models/anime';
interface AnimeCardProps {
  anime: IAnime;
}

function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Container
      title={anime.attributes.canonicalTitle}
    >
      <div>
        <Link href={`/animes/${anime.id}`}>
          <img draggable={false} src={anime?.attributes?.posterImage?.small} alt={anime.attributes.canonicalTitle} />
        </Link>
      </div>
      <p>{anime.attributes.canonicalTitle}</p>
      <div className='anime-footer'>
        <span>#{anime.attributes.ratingRank || '?'}</span>
        <span><AiFillStar size={16} color={colors.yellow2} /> {getScoreFormat(anime.attributes.averageRating) || '?'}</span>
        <span><FaUserAlt size={10} color={colors.yellow2} /> {anime.attributes.userCount}</span>
      </div>
    </Container>
  );
};

export default AnimeCard;
