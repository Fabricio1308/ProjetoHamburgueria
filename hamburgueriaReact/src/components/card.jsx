import './card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardEcomerce(){
    return(
        <>
        <div className='align-card'>
        <Card style={{ width: '18rem',   }} className='card-style'>
      <Card.Img variant="top" src="./hamburguer-duplo.svg" width={180} height={180} />
      <Card.Body>
        <Card.Title>Hamburguer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}export default CardEcomerce