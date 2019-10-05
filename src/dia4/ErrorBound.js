import React from 'react'

class ErrorBound extends React.Component {
    state = {hasError:false}
    
    componentDidCatch(error,errorInfo){
        this.setState({hasError:true})
        console.log(error,errorInfo)
    }
    render() {
        if(this.state.hasError){
            return <p>Error producido</p>
        }
        return this.props.children
    }

}
export default ErrorBound