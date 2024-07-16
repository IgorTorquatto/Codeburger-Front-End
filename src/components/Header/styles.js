import styled from "styled-components"

export const Container = styled.div`
    height: 72px;
    background-color: #ffffff;
    box-shadow: 2px 3px 5px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    .line{
        height: 40px;
        border-right:0.5px solid #bababa;
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${ props => props.isActive ? '#9758a6' : '#555555'};
    font-size: 1.2em;
    line-height: 19px;
    font-weight: bold;
`
export const ContainerUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
   
    p{
        font-weight: 300;
        font-size: 1.1em;
        line-height: 16px;
        color: #555555;
    }
    .exit{
        font-size: 1.1em;
        color: #9758a6;
    }
`