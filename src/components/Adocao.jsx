import React from 'react';
import teste from '../assets/images/gato.jpg';
import { Link } from "react-router-dom";
import arrow from '../assets/images/arrow.png';
import paw from '../assets/images/paw.png';
import sexo from '../assets/images/sexo.png';
import age from '../assets/images/age.png';
import '../assets/styles/adocao.css';
import axios from 'axios'


class Adocao extends React.Component {

    constructor(props) {
      super(props)
      this.state = { 
        api: []
      }
    }
  
    componentDidMount() {
      axios.get(' http://localhost:3300/wscontatos')
        .then(res => {
          const api = res.data;
          this.setState({ api });
        })
    }

    render(){
    return(
        <div className="background">
          <div className="container">
            <div className='wrap-header'>
              <div className="container">
                <button className="bt-back">
                  <Link to="/"><img src={arrow} alt="" /></Link>
                </button>
                <h1>Adotar</h1>
              </div>
            </div>

            <div className="question">
              <div className="main">
                <div className='main-container'>
                  <ul>   
                  {this.state.api.map(animal =>            
                    <li key={animal.id}>
                      <img src={teste} className="photo"alt=""/>
                      <footer>
                        <strong>Leona</strong>
                        <div className='dados'>
                          <p><img src={paw} alt="" /> Gato</p>
                          <p><img src={age} alt="" /> 5 anos</p>
                          <p><img src={sexo} alt="" /> Feminino</p>
                        </div>
                        <h2>Escreva uma breve descrição do seu animalzinho neste campo de teste aaaaaaaaaaa testando!!!!</h2>
                        <button type="button" className="button">
                        <h1>Adotar</h1>
                      </button>
                      </footer>
                      
                    <div>
  
                    </div>
                   </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Adocao;
   
 

    