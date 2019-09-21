import React from 'react';


class Welcome extends React.Component {
    state = {count:1,name:"Pedro"}
    increment(){
        if(this.state.count < 10){
            this.setState(state =>({
                count: state.count + 1
            }))
        }
    }
    decrease(){
        if(this.state.count >0){
            this.setState(state =>({
                count: state.count - 1
            }))
        }
    }
    render(){
        return (
        <>
        <h1>Hello, this {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrease()}>Decrease</button>
        </>
        )
    }
}

export default Welcome;