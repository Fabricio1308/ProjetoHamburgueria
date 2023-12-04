import './EcomerceTenis.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardEcomerce from '../components/card';






function EcomerceTenis(){
    return(
        <>
         <Container>
      
      <Row>
        <Col><CardEcomerce/></Col>
        <Col> <CardEcomerce/> </Col>
        <Col><CardEcomerce/></Col>
      </Row>
      <Row>
        <Col><CardEcomerce/></Col>
        <Col> <CardEcomerce/> </Col>
        <Col><CardEcomerce/></Col>
      </Row>
    </Container>
  

      </>
    )
} export default EcomerceTenis