import styled from "styled-components";


export const AlbumPage = styled.div`

    display: flex;
    flex-direction: column;

    h1{
        ::first-letter{
            text-transform: uppercase;
        }
    }

    button{
        cursor: pointer;
        margin: 30px auto;
        border: 2px solid orange;

        :hover{
            box-shadow: rgba(255, 255, 255, 0.35) 0px 0px 15px;
            transition: box-shadow 0.3s ease-in-out;
        }
    }

    div{
        display: flex;
        flex-wrap:wrap ;
        justify-content: center;

    }

    a{
        margin: 15px;
        border: 2px solid orange;
        display: inline-block;
        padding: 10px;

        :hover{
            background-color: #eee;
            box-shadow: rgba(255, 255, 255, 0.35) 0px 0px 15px;
            transition: box-shadow 0.3s ease-in-out;
        }
    }


`

export const ButtonPag = styled.button`

`