import React from 'react';
import '../assets/styles/cadastro.css';
import cat from '../assets/images/cadastro.jpg';
import arrow from '../assets/images/arrow.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { cpfMask, tellMask } from './mask'
import InputMask from 'react-input-mask';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { documentId: '' }
    // this.handlechange = this.handlechange.bind(this)
  }

  // handlechange(e) {
  //   this.setState({ documentId: cpfMask(e.target.value) })
  // }

  render() {
    // const { documentId } = this.state
    return (
        <div className="background">
        <div className="container">


        <div className='wrap-header'>
      <div className="container">
        <button className="bt-back">
        <Link to="/"><img src={arrow} alt="" /></Link>
        </button>
        <h1>Cadastrar</h1>
      </div>
    </div>
        <form  className='login-form row'> 
        <img src={cat} alt="" className='img' />

      <div className="col-2 type">   
          <input type="radio" id="option" name="selector" value="usuario" defaultChecked/>
          <label for="option">Cadastrar Usuário</label>
      </div>
      <div className="col-2 type">   
          <input type="radio" id="option2" name="selector" value="ong" />
          <label for="option2">Cadastrar ONG</label>
      </div>

            <div className="col-4">        
                <input type="text" placeHolder='Nome' className='input' required />
            </div>

            <div className="col-4">          
            <InputMask mask="999.999.999-99" type="text" placeHolder='CPF' className='input' required/>
            </div>

            <div className="col-4">
                <input type="text" placeHolder='Email' className='input' required/>
            </div>

            <div className="col-4">        
            <InputMask mask="(99) 9999-9999"  type="text" placeHolder='Telefone' className='input' required/>
            </div>

            <div className="col-4">        
                <input type="text" placeHolder='Endereço' className='input'/>
            </div>

            <div className="col-4">       
                <input type="password" placeHolder='Senha' className='input' required/>    
            </div>

            <input type="submit" className="button" value="Cadastrar"  />
          </form>
          </div>
  
      </div>
    );
  }
}

export default Cadastro;

