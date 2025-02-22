import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top{
    display: grid;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax-price delivery-tax ' ;
    grid-gap: 10px 50px;

      h2{
        text-align: center;
      }

      .title{
        grid-area: title;
        margin-bottom: 20px;
      }

      .items{
        grid-area: items;
      }

      .items-price{
        grid-area: items-price;
      }

      .delivery-tax{
        grid-area: delivery-tax;
      }

      .delivery-tax{
        grid-area: delivery-tax-price;
      }
  }

  .container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
    font-size: 1.4em;

    p:nth-child(2){
      color: #9758A6;
    }
  }

`