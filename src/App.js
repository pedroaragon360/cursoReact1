import React from 'react';
import logo from './logo.svg';
import Title from './dia1/Title.js';
import Text from './dia1/Text'
import List from './dia1/List'
import ListItem from './dia1/ListItem'
import Link from './dia1/Link'
import Loading from './dia1/Loading'
import Parent from './dia1/Parent'
import NewComp from './dia1/NewComp'
import PlayLetters from './dia1/PlayLetters'
import Usuarios from './dia2/Usuarios2'
import ItemsFetch from './dia2/ItemsFetch'
import BotonFetch from './dia2/BotonFetch'
import EventoCambio from './dia2/EventoCambio'
import UserPanel from './dia2/UserPanel'
import ListContainer from './dia2/ListContainer_refactor'
import SelectItems from './dia3/SelectItems'
import Form from './dia3/Form'
import LevantarEstado from './dia3/LevantarEstado'
import Tienda from './dia3/Tienda/Tienda'



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} width="200"/>
      {/* 

      DIA 1

      <Loading show>
          <Title>Necesito partir en componentes todo esto</Title>
          <Text>Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:</Text>
          <List> 
            <ListItem>Observar el HTML</ListItem>
            <ListItem>Observar el HTML</ListItem>
          </List>
          <Link url="https://reactjs.org/" newTab={false}>React Docs</Link>
          <Parent />
          <NewComp />
          <PlayLetters />
      </Loading> */}
      {/* <Usuarios></Usuarios>
      <ItemsFetch /> */}
      {/* <BotonFetch />
      <EventoCambio />
      <UserPanel />
      <ListContainer /> */}
      {/* <SelectItems /> */}
{/* 
      <Form />

      <LevantarEstado /> */}
      <Tienda />

      </header>
    </div>
  );
}

export default App;
