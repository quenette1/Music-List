import { Card } from "react-bootstrap";

export default function Music({ music }) {
    //state (données)
  
    //comportements
  
    //affichage
  
    return (
        <Card>
            <Card.Img src={music.imageURL}/>
            <Card.Body>
                <Card.Title>{music.musicName}</Card.Title>
                <Card.Subtitle>{music.author}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
  }
  