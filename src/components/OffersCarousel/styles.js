import styled from "styled-components"

export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
  }
    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const Title = styled.img`
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;

    p {
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 120%;
    color: #424242;
    align-self: center;
  }
`

export const Button = styled.button`
    margin-top: 16px;
    background: #9758a6;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(151,88,166,0,22);
    height: 50px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Image_Carousel = styled.img`
    width: 283.4px;
    height: 283px;
    border-radius: 10px;
    margin-bottom: 16px;
`