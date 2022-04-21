import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.486);
`

export const ActualDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 60vh;
    background-color: #1B2025;
    border: 3px solid #FFD42F;
    padding: 50px 20px;
    border-radius: 9px;
`

export const TopPart = styled.div`
    display: flex;
    gap: 12px;

    img {
        width: 150px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 8px;

        p {
            margin: 8px;
            font-size: 0.7em;
        }

        h5 {
            border: 2px solid #FFD42F;
            color: #FFD42F;
            padding: 2px 16px;
            vertical-align: middle;
            text-align: center;
            font-size: 0.6em;
            border-radius: 9px;
        }

        i {
            color: #FFD42F;
            font-style: normal;
        }
    }
`

export const MidPart = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 2em;
    text-decoration: none;
    margin-top: 2rem;
    
    a {
        color: #FFD42F;
        opacity: 0.7;
        transition: opacity 300ms ease-in;

        &:hover {
            opacity: 1;
            filter: drop-shadow(0 0 6px #FFD42F);
        }
    }
`

export const AddDetails = styled.p`
    color: #1B2025;
    background-color: #FFD42F;
    align-self: center;
    margin-top: 1.5rem;
    padding: 3px 12px;
    font-size: 0.8em;
    border: 3px solid #FFD42F;
    border-radius: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;

    b {
        font-size: 0.7em;
    }
`