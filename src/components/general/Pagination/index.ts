import styled from 'styled-components';
import PaginationUI from '@material-ui/lab/Pagination';
import colors from '../../../assets/colors';

export const Pagination = styled(PaginationUI)`
    .MuiPaginationItem-textPrimary.Mui-selected{
        background: ${colors.blue};
    }
    button:focus{
        outline: none;
    }
    ul.MuiPagination-ul{
        justify-content: center;
    }
`