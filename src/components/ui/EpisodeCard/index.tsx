
import Link from 'next/link';
import { IEpisode } from '../../../models/episode';
import { Container } from './styles';


interface EpisodeCardProps {
  episode: IEpisode;
}
function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Container
      title={episode?.attributes?.canonicalTitle}
    >
      <div>
        <div>
          <p>Ep. {episode.attributes.number}</p>
          <p>{episode?.attributes?.length} min</p>
        </div>
        <Link href={'#'}>
          <img 
            draggable={false} 
            src={episode?.attributes?.thumbnail?.original} 
            alt={episode?.attributes?.canonicalTitle} 
            onError={e => {console.log('erro ao ler imagem: ', e )}}
          />
        </Link>
      </div>
      <p>{episode?.attributes?.canonicalTitle}</p>
      {/* <div className='episode-footer'>
        <span>{episode?.attributes?.length} min</span>
      </div> */}
    </Container>
  );
};

export default EpisodeCard;
