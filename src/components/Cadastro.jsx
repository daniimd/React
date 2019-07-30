import React from 'react';
import '../assets/styles/cadastro.css';
import cat from '../assets/images/cadastro.jpg';
import arrow from '../assets/images/arrow.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { cpfMask, tellMask, isValidCPF } from './mask'
import InputMask from 'react-input-mask';
import { ContatosService } from '../services/contatosService';
import { ValidatorForm } from 'react-form-validator-core';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'usuario',
      nome: '',
      cpf: '',
      senha: '',
    }

    this.incluir = this.incluir.bind(this);
    this.alterarDados = this.alterarDados.bind(this);
    this.setType = this.setType.bind(this)
    this.alerta = this.alerta.bind(this)

    this.setState({
      type: "usuario"
     })

  }


incluir() {
    const contatos = this.state;

    if (this.state.nome == '' || this.state.cpf == '' || this.state.email =='' || this.state.senha == '' ){
      this.alerta();
    }
    else if (!isValidCPF(this.state.cpf)) {
      this.alertaCPF();

    } else {
      ContatosService.adicionar(contatos);
      window.location.reload();
    }
}

alterarDados(event) {
  const { target } = event, { name, value } = target;
  this.setState({
      [name]: value
  });
}

setType(e) {
  this.setState({
   type: e.target.value
  })
}

  alerta(){
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alertaCPF").style.visibility = "hidden";

  }
  alertaCPF(){
    document.getElementById("alertaCPF").style.visibility = "visible";
    document.getElementById("alerta").style.visibility = "hidden";
  }
  // okAlerta(){
  //   document.getElementById("alerta").style.visibility = "hidden";
  // }
  // okCPF(){
  //   document.getElementById("alertaCPF").style.visibility = "hidden";
  // }


  render() {
    const {type} = this.state
    const { state } = this;

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
        <img src= {cat} alt="" className='img' />

      <div className="col-2 type">   
          <input type="radio" id="option" checked={type == "usuario"}  onClick={this.setType} value="usuario" />
          <label for="option">Cadastrar Usuário</label>
      </div>
      <div className="col-2 type">   
          <input type="radio" id="option2" checked={type == "ong"}  onClick={this.setType} value="ong"  />
          <label for="option2">Cadastrar ONG</label>
      </div>
              

            <div className="col-4">        
                <input type="text"  name='nome' value={state.nome} onChange={this.alterarDados} placeholder='Nome' className='input'/>
            </div>

            <div className="col-4">          
              <InputMask mask="999.999.999-99" onChange={this.alterarDados} name='cpf' type="text"  value={state.cpf}  placeholder='CPF' className='input'/>
               <p id='alertaCPF'>CPF inválido!</p>        
            </div>

            <div className="col-4">
                <input type="text"  value={state.email} name='email' onChange={this.alterarDados} placeholder='Email' className='input'/>
            </div>

            <div className="col-4">       
                <input type="password"  value={state.senha}  name='senha' onChange={this.alterarDados} placeholder='Senha' className='input' /> 
            </div>
              <br/> 
              <p id='alerta'>Preencha todos os campos!</p>  
            <button type='button'  className="button" onClick={this.incluir}>Cadastrar</button>
          </form>
          </div>
  
      </div>
    );
  }
}

export default Cadastro;

