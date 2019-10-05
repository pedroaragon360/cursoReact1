import React from 'react'

const Cargando = () => 
    <p>CARGANDO</p>

const APIContainer = (Component, url) => {
    return class extends React.Component {
      state = {
        data: null
      }
  
      async componentDidMount() {
        let response = await fetch(url)
        let data = await response.json()
        this.setState({ data: data.results })
      }
  
      render() {
        if(this.state.data === null)
            return <Cargando />

        return(
          <Component data={this.state.data} />
        )
      }
  
    }
}
  
  const RedditPosts = props =>
    <ul>
      {props.data.map((el, key) => (
        <li key={key}>{el.name}</li>
      ))}
    </ul>
  
  const RedditPostsDiv = props =>
      <div>
        {props.data.map((el, key) => (
          <div key={key}>{el.name}</div>
        ))}
      </div>
  
  const Reddit = APIContainer(RedditPosts, 'http://www.mocky.io/v2/5d965a7233000003cd2f9091')
  const RedditDiv = APIContainer(RedditPostsDiv, 'http://www.mocky.io/v2/5d965aa833000077962f9093')
  
  function App() {
    return (
      <>
        <Reddit />
        <RedditDiv />
      </>
    );
  }
  
  export default App;