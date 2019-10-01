import React from 'react';
import './App.css';
import axios from 'axios'
import GithubCard from './components/GithubCard'

const githubAPI = 'https://api.github.com/users/funmi7'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubData : {}
    }
  }

  componentDidMount() {
    axios.get(githubAPI)
    .then(response => {
      this.setState({githubData: response.data})
      console.log(response.data)
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }

  render() {
   const{avatar_url, name, login, location, html_url, followers, following, bio} = this.state.githubData;
    return (
      <div className="App">
        <GithubCard 
        avatar_url={avatar_url}
        name={name}
        login={login}
        location={location}
        html_url={html_url}
        followers={followers}
        following={following}
        bio={bio}
        />
      </div>
    );
  }

}

export default App;
