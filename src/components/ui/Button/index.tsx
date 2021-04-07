import styled from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';
import colors from '../../../assets/colors';
import { lighten } from 'polished';
 const Button = styled(ButtonMaterial).attrs(()=>({
    size: "small"
 }))`
    &.MuiButton-root {
        background: ${lighten(.3 ,colors.blue)};
        &:hover {
            background: ${lighten(.5 ,colors.blue)};
            border-color: ${lighten(.5 ,colors.blue)};
            box-shadow: none,
        }
        &:active {
            box-shadow: 'none';
            background: ${lighten(.3 ,colors.blue)};
            border-color: ${lighten(.3 ,colors.blue)};
        }
    }
    & span.MuiButton-label {
        color: ${colors.primary};
    }
`;

export default Button;
