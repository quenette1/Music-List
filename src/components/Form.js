import { Button, Container, Row } from "react-bootstrap";

export default function Form(){
    //state

    //comportement
    const goHomeScreen = () =>{
            
    }
    //affichage
    return (
    <Container fluid>
        <Row>
            <Button onClick={goHomeScreen}>Go back</Button>
            <Button onClick={goHomeScreen}>Validate</Button>
            <Button>Cancel</Button>
        </Row>
        
    </Container>
    )
}