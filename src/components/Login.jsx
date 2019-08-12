import React from 'react';
import '../assets/styles/cadastro.css';
import dog from '../assets/images/dog.jpg';
import arrow from '../assets/images/arrow.png';
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="background">
        <div className="container">


        <div className='wrap-header'>
      <div className="container">
        <button className="bt-back">
        <Link to="/"><img src={arrow} alt="" /></Link>
        </button>
        <h1>Entrar</h1>
      </div>
    </div>
        <form  className='login-form row'> 
        <img src={dog} alt="" className='img' />

      <div className="col-2 type">   
          <input type="radio" id="option" name="selector" value="usuario" defaultChecked/>
          <label for="option">Usuário</label>
      </div>
      <div className="col-2 type">   
          <input type="radio" id="option2" name="selector" value="ong" />
          <label for="option2">ONG</label>
      </div>

            <div className="col-4">        
                <input type="text" placeHolder='Email' className='input'/>
            </div>

            <div className="col-4">          
              <InputMask mask="999.999.999-99" type="text" placeHolder='CPF' className='input'/>
            </div>

            <div className="col-4">       
                <input type="password" placeHolder='Senha' className='input'/>    
            </div>

            <input type="submit" className="button" value="Entrar"  />
          </form>
          </div>
  
      </div>
    );
  }
}

export default Login;

