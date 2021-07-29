
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import ButtonGroup  from 'react-bootstrap/ButtonGroup';


export const StyledMovieCard = styled(Card)`
    h5 {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const MovieImage = styled(Image)`
    height: 100%;
    width: 100%;
`;
  
export const StyledButtonContainer =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: enter;

    .btn {
        margin: 0 5px;
    }
    `;

    export default styled;