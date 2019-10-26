import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import configureStore from './dia6/configStore'

import Login from './dia6/Login/Login'
import Posts from './dia6/Posts/Posts'
import Account from './dia6/Account/Account'

import './dia6/Styles.css'

import styled, {css} from 'styled-components'
import Estilos from './dia5/styled'

import Reducers from './dia6/reducers'

function ReduxApp() {

    return (
        <Provider store={configureStore()}>
            <Router>
                <div>
                    <nav>
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/posts">Posts</Link></span>
                            <span><Link to="/account">Mi perfil</Link></span>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/posts">
                            <Posts />
                        </Route>
                        <Route path="/account">
                            <Account />
                        </Route>
                    </Switch>

                </div>
            </Router>
        </Provider>
    )
}

export default ReduxApp