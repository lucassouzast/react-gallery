import styled from "styled-components";

export const PhotoSection = styled.div`
    display: flex;
    flex-direction: column;
    p{
        ::first-letter{
            text-transform: uppercase;
        }
    }

    img{
        margin: 0 auto;
        width: 600px;
        height: 600px;
    }
`
export const ButtonPag = styled.button`
    cursor: pointer;
    margin: 30px auto;
    border: 2px solid orange;
`

export const Container = styled.div`
    p {
        text-align: center;
        font-size: 1.2em;
        line-height: 1.1;
    }
    overflow-x:hidden;
`
export const Section = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 5px;

`
export const AlbumSection = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 100px;
    border: 3px solid orange;
    margin: 10px 30px 20px;
    padding: 15px;
    
    :hover{
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        transition: box-shadow 0.3s ease-in-out;
    }
    p{
        ::first-letter{
            text-transform: uppercase;
        }
    }

`