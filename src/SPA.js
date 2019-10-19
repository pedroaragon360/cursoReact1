import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'
import UseApiCall from './dia5/useApiCall'

import styled, {css} from 'styled-components'
import Estilos from './dia5/styled'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button2 from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    textSize: '12pt'
  },
  botonEspaciado: {
      margin: '10px'
  }

}));



function About() {
    let {id} = useParams()
    let datos = UseApiCall('https://jsonplaceholder.typicode.com/todos')

    if(typeof id !== "undefined"){
        datos = datos.filter((val, id2) => {if(id2 == id) return val})     
    }
    const classes = useStyles();
    
    return (
        <ul>
            {
                datos.map((val,key) => 
                <div key={key} >
                        <Estilos success={datos.length>1}>
                            <Link style={{color: 'inherit',textDecoration: 'none'}} to={"about/" + key}>
                                {val.title}
                            </Link>
                        </Estilos>
                        <Estilos info>Fallo</Estilos>
                        {datos.length === 1 && <Link to="/about">Volver</Link>}
                     
                </div>
                )
            }
        </ul>
    )
}

function SPA() {

    return (
        <Router>
            <div>
              <AppBar position="static">
                <nav>
                        <span><Link to="/">Home</Link></span>
                        <span><Link to="/about">About</Link></span>
                </nav>
                </AppBar>
                <Switch>
                    <Route exact path="/">
                        <div>Hello world</div>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/about/:id">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default SPA