/* eslint-disable react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,max-len,jsx-a11y/anchor-is-valid */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="question">
        <UserHeaderContainer />
        <HomeNotification />
        <div className="main">
          <div className="container" style={styles.container}>
            <div className="grid">
              <div className="col-4" style={styles.grid1}>
                <RLink to="/lista-quiz">
                  <div className="centered">
                    <img src={iconGrid1} alt="" />
                    <h1>QUIZZ</h1>
                    <p>
                        Aprenda sobre
                      <br />
                        Consumo Responsável
                    </p>
                  </div>
                </RLink>
              </div>
              <div className="col-4" style={styles.grid2}>
                <RLink to="/premios">
                  <div className="centered">
                    <img src={iconGrid2} alt="" />
                    <h1>PRÊMIOS</h1>
                    <p>
                        Acumule pontos para <br />
                        subir no ranking
                    </p>
                  </div>
                </RLink>
              </div>
              <div className="col-4" style={styles.grid4}>
                <RLink to="/buzzfeed/listar">
                  <div className="centered">
                    <img src={iconGrid3} alt="" />
                    <h1>TESTES</h1>
                    <p>
                        Descubra curiosidades <br />
                        sobre você
                    </p>
                  </div>
                </RLink>
              </div>
              <div className="col-4" style={styles.grid3}>
                <RLink to="/missoes">
                  <div className="centered">
                    <img src={iconGrid6} alt="" />
                    <h1>
                    MISSÕES
                    </h1>
                    <p>
                        Experimente ser um embaixador<br />
                        do Consumo Responsável
                    </p>
                  </div>
                </RLink>
              </div>
            </div>
          </div>
        </div>

        <MenuBarContainer page="home" />
      </div>
    );
  }
}

export default Home;
