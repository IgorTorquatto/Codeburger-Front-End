import styled from "styled-components"

export const Container = styled.div``

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