import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from "./Pages/Cadastro/Video/index"
import CadastroCategoria from "./Pages/Cadastro/Categoria"

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={() => (<div>Página 404</div>)} />
      </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

