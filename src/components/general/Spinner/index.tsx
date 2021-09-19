import * as Styled from './styles';
import { ImSpinner2 } from 'react-icons/im';
import colors from '../../../assets/colors';

interface SpinnerProps {
  size?: number;
  color?: string;
}

function Spinner({ size, color }: SpinnerProps) {
  return (
    <Styled.Container
      data-testid="spinner"
      className='spinner'
    >
      <ImSpinner2
        size={size || 24}
        color={color || colors.blue}
      />
    </Styled.Container>
  );
}

export default Spinner;
