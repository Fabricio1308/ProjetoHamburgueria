import './BurguerLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBurguerDark from '../components/Button-burguer-dark'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function BurguerLogin(){
    return(
    <>
   <div class="page-align-center">
    <div className='container-burguer-login'>
    <div className='align-h1'>   
    <h1>Login</h1>
    </div>
    <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingInputCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Senha</label>
      </Form.Floating>
      <div className='align-btn'>
      <ButtonBurguerDark/>
      </div>
    </div>
    </div>
    </>
    )
} export default BurguerLogin