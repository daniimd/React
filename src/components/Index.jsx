
import React from 'react';
import Slider from 'react-slick';
import icon1 from '../assets/images/slide-1.jpg';
import icon2 from '../assets/images/slide-2.jpg';
import '../assets/styles/index.css';
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Login = (props) => {

  return (
      <div className="background">
        <div className="wrap-slider">
          <Slider {...settings}>
            <div className='slider' >
              <div className="content-slider">
                <img src={icon1} alt="" />
              </div>
            </div>
            <div>
              <div className="content-slider">
                <img src={icon2} alt="" />
              </div>
            </div>
          
          </Slider>
          <div className="wrap-content-slider">
            <div className="logo">
              <p>Adotar é saber<br/>
              deixar alguém te amar</p>
            </div>
            <div className="wrap-buttons-login">
              <Link to="/login">Entrar</Link>
              <Link to="/cadastro">Cadastrar</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
