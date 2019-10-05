import React from 'react'
import {ThemeContext} from './context_theme'

const MyContext = React.createContext({lang:'dark'});

class MainText extends React.Component {
    static lang = MyContext
    render() {
        return  ( 
        <p>valor: {this.context.lang}</p>
        )
    }
}

class MultiLangSite extends React.Component {
    state = {lang: 'es'}
    render(){
        return (
            <MyContext.Provider>
                <MainText />
            </MyContext.Provider>
        )
    }
}
export default MultiLangSite