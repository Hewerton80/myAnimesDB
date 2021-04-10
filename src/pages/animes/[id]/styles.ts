import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.div`
    overflow-x: hidden;
    /* width: 1024px; */
    max-width: 100%;
    & > div{
        display: flex;
        & > div{
            display: flex;
            flex-direction: column;
            margin-right: 16px;
            img {
                max-width: 225px;
                max-height: 315.5px;
            }
            & > div{
                display: flex;
                align-items: center;
                margin-top: 8px;
                b, p {
                    color: ${colors.black};
                    font-size: 13px;
                }
                b{
                    margin-right: 2px;
                }
                .score{
                    font-size: 24px;
                    font-weight: bold;
                    color: ${colors.blue};
                }
            }

        }

        section {
            display: flex;
            flex-direction: column;
            width: 100%;
            & > div:nth-child(1) {
                display: flex;
                margin-bottom: 16px;
                border-bottom: 1px solid ${colors.blue};
                h3 {
                    color: ${colors.blue};
                }
            } 
            & > div:nth-child(2) {
                display: flex;
                width: 100%;
                /* & > div:nth-child(1){
                    margin-right: 20px;
                } */
                & > div:nth-child(1){
                    display: flex;
                    flex-wrap: wrap;
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 84px;
                        height: 54px;
                        background: ${colors.antiquewhite};
                        margin-right: 10px;
                        padding: 8px 8px 3px 8px;
                        margin-bottom: 16px;
                        span {
                            color: ${colors.black};
                            font-size: 12px;
                            margin-bottom: 4px;
                            font-weight: bold;
                        }
                        b {
                            color: ${colors.blue};
                            font-size: 16px;
                        }
                    }
                }
            }
            & > div:nth-child(3) {
                display: flex;
                flex-direction: column;
                background: ${colors.antiquewhite};
                padding: 16px;
                margin-bottom: 16px;
                & > div:first-child {
                    border-bottom: 1px solid ${colors.black};
                    margin-bottom: 16px;
                    padding-bottom: 8px;
                }
                p {
                    font-size: 14px;
                    text-justify: distribute;
                    text-align: justify;
                }
            }
            & .video{
                width: 100%;
                position: relative;
                margin-bottom: 16px;
                & iframe {
                    width: 100%;
                    border: none;
                }
            }

            & .episodes {
                & > div:nth-child(1) {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 16px;
                    border-bottom: 1px solid ${colors.blue};
                    padding-bottom: 2px;
                    h4 {
                        color: ${colors.blue};
                    }
                    a {
                        color: ${colors.blue};
                        font-size: 12px;
                        font-weight: bold;
                        border-bottom: solid 0.5px ${colors.primary};
                        &:hover{
                            border-color: ${colors.blue};
                        }
                    }
                }
                & > div:nth-child(2) {
                    display: flex;
                    flex-wrap: wrap;
                }
            }
        }
    }
`;
