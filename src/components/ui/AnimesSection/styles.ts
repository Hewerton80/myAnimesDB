import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.section`

    width: 100%;
    padding: 8px 0;
    
    & > div {
        width: 100%;
        border: 1px solid ${colors.blue};
        border-radius: 10px;
        
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid ${colors.blue};
            background: ${colors.blue};
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            padding: 4px 8px;
            h5 {
                color: ${colors.primary};
                border-bottom: solid 0.5px ${colors.blue};
            }
            a {
                color: ${colors.primary};
                font-size: 0.75rem; //12px
                border-bottom: solid 0.5px ${colors.blue};
                &:hover{
                    border-color: ${colors.primary};
                }
            }
        }
        ul {
            padding: 8px;
            width: 100%;
            
            li {
                display: flex;
                & > p{
                    margin-right: 4px;
                    font-size: 1rem; //16px
                    font-weight: bold;                        
                } 
                img {
                    margin-right: 4px;
                    width: 50px;
                    height: 70.9px;
                }
                & > div {
                    display: flex;
                    flex-direction: column;
                    a {
                        font-size: 0.875rem; //14px
                        color: ${colors.blue};
                        font-weight: bold;
                        margin-bottom: 2px;
                        border-bottom: solid 0.5px ${colors.primary};
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1; /* number of lines to show */
                        -webkit-box-orient: vertical;
                        &:hover {
                            border-bottom-color: ${colors.blue};
                        }  
                    } 
                    & > div{
                        display: flex;
                        flex-wrap: wrap;
                        span{
                            display: flex;
                            align-items: center;
                            font-size: 0.75rem; //12px
                            color: ${colors.grey};
                            margin-right: 8px;
                        }
                    }
                }
            }
            hr {
                margin: 8px 0;
            }
        }
    }
        
`;
