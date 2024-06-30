import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const LeftContainer = styled.div`
    width: 60%;
    overflow-y: hidden;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }

`

export const LoginImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const RightContainer = styled.div`
    width: 40%;
    box-sizing: border-box;
    background-color: #373737;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: #ffffff;
        font-size: 2.5em;
        margin-bottom: 40px;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        
        h1{
            margin: 20px 0px 20px 0px;
            font-size: 2em;
        }

        form{
            width: 80%;
            align-items:center;
        }
    }

`

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        width: 80%;
    }

`

export const InputLabel = styled.p`
    color: #ffffff;
    font-size: 1.05em;
    margin-bottom: 5px; 

    @media (max-width: 768px) {
        font-size: 1em;
    }

`
 

export const Input = styled.input`
    width: 100%;
    height: 39px;
    border-radius: 10px;
    outline: none;
    border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    padding: 15px;

`

export const Error = styled.p`
    color: #CC1717;
    font-size: 1.1em;
    margin-top: 2px;
`
    
export const Button = styled.button`
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1em;
    background-color: #9758A6;
    width: 30%;
    height: 39px;
    border-radius: 15px;
    margin: 5px 0px 20px 0px;
    align-self: center;

    &:hover{
        cursor: pointer;
        opacity: 0.9;
    }

`

export const LeftFooter = styled.p`
    color: #ffffff;
    margin-bottom: 60px;

    a{
        color: rgba(2, 117, 216, 100);
        text-decoration: none;
    }
    a:hover{
        color: rgba(2, 117, 216, 0.8);
        cursor: pointer;
    }

    @media (max-width: 768px) {
       
    }

`