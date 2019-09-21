import React from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  function GuestGreeting(props) {
    return (
        <>
    <h1>Please sign up.</h1>
    <button onClick={props.login}> Login</button>

    </>
    )
  }

class UserPanel extends React.Component {

    state = {logued:false}

    login = () => {
        this.setState({logued:true})
    }

    render (){
        return (
            <>
            {this.state.logued ? <UserGreeting /> : <GuestGreeting login={this.login} />}
            </>
        )
    }


}

export default UserPanel