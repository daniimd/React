import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './Index';
import { AnimatedSwitch } from 'react-router-transition';
import Cadastro from '../components/Cadastro';
import Login from '../components/Login';
import Adocao from '../components/Adocao';


const Roots = () => (
<Router basename="React">
<AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
    <Route exact path="/" component={Index} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/login" component={Login} />
    <Route path="/adocao" component={Adocao} />
    </AnimatedSwitch>
</Router>

)

export default Roots;