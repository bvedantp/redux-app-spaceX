import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 12px;
    justify-content: center;
    background-color: #1B2025;
    top: 0;

    img {
        width: 200px;
        height: 50px;
    }
`

export const Hero = styled.main`
    padding: 12px;
    margin: 30vh 5vw 6px 5vw;
    border: 2px solid #FFD42F;
    border-radius: 8px;

    table {
        width: 85vw;
        text-align: center;
        border-spacing: 0;

        thead {
            color: #FFD42F;
            vertical-align: middle;

            th {
                padding: 10px;
                border-bottom: 3px solid #FFD42F;
            }
        }

        tbody {
            letter-spacing: 0.8px;

            td {
                padding: 0.5rem;
            }
        }
    }
`