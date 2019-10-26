import React, {useRef,useState} from 'react'
import * as userActions from './login.actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapDispatchProps = (dispatch) => {
    return {
        saveUserInfo: user => dispatch(userActions.setUser(user))
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.Login.user
    }
}

const Login = (props) => {
    const [logueado,setLogueado] = useState(false)
    const ref_usuario = useRef();
    const ref_pass = useRef();
    function login_verf(){
        const user = ref_usuario.current.value
        const pass = ref_pass.current.value
        if(user === 'pedro' && pass === 'pedro'){
            setLogueado(true)
            const userOb =  {user:user,password:pass}
            props.saveUserInfo(userOb)
            props.history.push('/posts')
        } else{
        }
    }
    return (<form onSubmit={(event) => event.preventDefault()}>
        <h1>Login</h1>
        <div>{props.user.user}</div>
        <div>Estado: {(logueado ? 'Logueado' : 'Invitado')}</div>
        <input ref={ref_usuario} type="text" placeholder="usuario" />
        <input ref={ref_pass} type="password" placeholder="clave" />
        <button onClick={login_verf}>Go!</button>
    </form>)

}

export default connect(mapStateToProps, mapDispatchProps)(withRouter(Login))