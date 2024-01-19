// import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Item ({id, title, cover}){
    return(
        // <Link to={`/accomodation/${id}`}>
          <CardWrapper>
            <CardImage   src={cover} alt={title}/>
            <CardLabel>{title}</CardLabel>
          </CardWrapper>
        // {/* </Link> */}
    )
}


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
const CardImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: white;
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`


