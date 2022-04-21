import styled from "styled-components";

export const SelectorDiv = styled.div`
    z-index: 4;
    display: flex;
    padding: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 98vw;

    div {
        margin: 12px;
    }

    select {
        background-color: #1B2025;
        color: #FFD42F;
        border: 2px solid #FFD42F;
        outline: none;
        border-radius: 6px;
        padding: 4px;

        &:hover, &:active {
            background-color: #ffd52f;
            color: #1B2025;
        }
    }

    label {
        font-size: 0.8em;
        opacity: 0.8;
        padding: 6px;
    }

    input {
        padding: 4px;
        background-color: #1B2025;
        color: #FFD42F;
        border-radius: 5px;
        border: 2px solid #FFD42F;
        outline: none;

        &:hover, &:active {
            background-color: #ffd52f;
            color: #1B2025;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #ffd52f71;
        }
        ::-moz-placeholder { /* Firefox 19+ */
        color: #ffd52f71;
        }
        :-ms-input-placeholder { /* IE 10+ */
        color: #ffd52f71;
        }
        :-moz-placeholder { /* Firefox 18- */
        color: #ffd52f71;
        }
    }

    button {
        cursor: pointer;
        padding: 4px 12px;
        border-radius: 5px;
        border: 3px solid #ffd52f;
        background-color: #FFD42F;
        font-size: 0.6em;

        &:hover, &:active {
            background-color: #1B2025;
            color: #ffd52f;
        }

    }
`