import './BurguerCadastro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBurguerDark from '../components/Button-burguer-dark'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function BurguerCadastro(){
    return(
    <>
   <div class="page-align-center">
    <div className='container-burguer-cadastro'>
    <h1>Cadastro</h1>
    <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Nome</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        required />
        <label htmlFor="floatingInputCustom">CPF</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingInputCustom"
          type="password"
          placeholder="Password"
       required />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating>
      
      <div className='align-btn'>
      <ButtonBurguerDark/>
      </div>
    </div>
    </div>
    </>
    )
} export default BurguerCadastro