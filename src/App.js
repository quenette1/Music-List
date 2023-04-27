import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Music from "./components/Music";
import { Container, ListGroup, Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function App() {
  //state (etats, données)
  const [musicList, setMusicList] = useState([
    {
      id: 1,
      musicName: "Dear God",
      author: "Lawless",
      videoURL:
        "https://www.youtube.com/watch?v=9AkA5jUDE8k&ab_channel=Lawless-Topic",
      imageURL:
        "https://i.scdn.co/image/ab67616d0000b2736da77a41b3829146dca6da7e"
    },  
    {
      id: 2,
      musicName: "My Brother",
      author: "Vincent Moretto",
      videoURL:
        "https://www.youtube.com/watch?v=lBdnti4_UUg&ab_channel=UnseenPhantom%5BFunnyEdits%26More%21%5D",
      imageURL:
        "https://i.ytimg.com/vi/lBdnti4_UUg/maxresdefault.jpg"
    }
  ]);

  //comportements (fonction)
  

  //affichage (render)
  return (
    <Container fluid>
      <h1>Music List</h1>
      <Container fluid="md">
        <ListGroup horizontal className="borderless">
          {musicList.map((music) => (
            <ListGroup.Item xs={6}>  
              <Music music={music} />
            </ListGroup.Item>
          ))}
        </ListGroup>  
        <Button>Ajouter une musique</Button>
      </Container>
    </Container>
  );
}