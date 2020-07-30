import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/Cadastro/Video/index';
import CadastroCategoria from './pages/Cadastro/Categoria/index';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categorias" component={CadastroCategoria} />
        <Route component={() => { return ( <div>Error 404</div> )}} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
