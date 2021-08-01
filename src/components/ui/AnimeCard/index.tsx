import { Container, widthImage, heightImage } from './styles';
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { getScoreFormat } from '../../../utils';
import colors from '../../../assets/colors';
import { IAnime } from '../../../models/anime';
import Shimmer from '../Shimmer';
import Image from 'next/image';
interface AnimeCardProps {
  anime?: IAnime;
  isLoagin?: boolean;
}

function AnimeCard({ anime, isLoagin }: AnimeCardProps) {
  return (
    <Container>
      <div>
        {
          isLoagin ?
            <Shimmer />
            :
            <Link href={`/animes/${anime.id}`}>
              <a>
                <Image width={widthImage} height={heightImage} draggable={false} src={anime?.attributes?.posterImage?.small} alt={anime.attributes.canonicalTitle} />
              </a>
            </Link>
        }
      </div>
      {
        isLoagin ?
        <>
        <p>&nbsp;</p>
        <div className='anime-footer'>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
        </>
        :
          <>
            <p>{anime.attributes.canonicalTitle}</p>
            <div className='anime-footer'>
              <span>#{anime.attributes.ratingRank || '?'}</span>
              <span><AiFillStar size={16} color={colors.yellow2} /> {getScoreFormat(anime.attributes.averageRating) || '?'}</span>
              <span><FaUserAlt size={10} color={colors.yellow2} /> {anime.attributes.userCount}</span>
            </div>
          </>
      }
    </Container>
  );
};

export default AnimeCard;
