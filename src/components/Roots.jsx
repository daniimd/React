import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Index';
import { AnimatedSwitch } from 'react-router-transition';

import Cadastro from '../components/Cadastro';
import Login from '../components/Login';


const Roots = () => (
<Router>
<AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
    <Route exact path="/" component={Index} />
    <Route path="/cadastro" component={Cadastro} />
    <Route path="/login" component={Login} />
    </AnimatedSwitch>
</Router>

)

export default Roots;