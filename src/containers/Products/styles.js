import styled from "styled-components"

export const Container = styled.div`
    min-height: calc(100vh -72px);
    background: #e5e5e5;
`

export const ProductsImg = styled.img`
    width:100%;
`
export const CategoriesMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    //border by default is name but if isActive Category is true it will apply border-bottom
    border-bottom:  ${props => props.isActiveCategory && '2px solid #9758a6' };
    color: ${props => props.isActiveCategory ? '#9758a6' : '#9a9a9d'};
    font-size: 1.25em;
    line-height: 20px;
    padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    padding: 40px;
    justify-items: center;
    margin-top: 20px;
`