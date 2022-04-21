import styled from "styled-components";

export const LaunchLine = styled.tr`
        transition: all 200ms ease-in ;

        &:hover {
            cursor: pointer;
            background-color: #FFD42F;

            em {
                    border: 2px solid #1B2025;
                }

                b {
                    border: 2px solid #1B2025;
                }
        }
/* 
        &:hover {
                cursor: pointer;
                background-color: #FFD42F;
                color: #1B2025;
                transform: scale(1.04);
                font-weight: 700;

                em {
                    border: 2px solid #1B2025;
                }

                b {
                    border: 2px solid #1B2025;
                }
        } */

        b {
            font-weight: 100;
            font-size: 0.6em;
            padding: 2px 16px;
            border: 2px solid #FFD42F;
            color: #FFD42F;
            border-radius: 5px;
            background-color: #1B2025;
        }

        em {
            font-style: normal;
            font-weight: 100;
            font-size: 0.6em;
            padding: 2px 16px;
            border: 2px solid #FFD42F;
            color: #1B2025;
            border-radius: 5px;
            background-color: #FFD42F;
        }
`