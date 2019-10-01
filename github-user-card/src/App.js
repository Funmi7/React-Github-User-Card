import React from 'react';
import './App.css';
import axios from 'axios'
import GithubCard from './components/GithubCard'
import GithubFollowers from './components/GithubFollowers';

const githubAPI = 'https://api.github.com/users/funmi7'
const githubFollowersAPI = 'https://api.github.com/users/tetondan/followers'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubData : {},
      githubFollowers : []
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

    axios.get(githubFollowersAPI)
    .then(response => {
      this.setState({githubFollowers: response.data})
      console.log(response.data)
    })
    .catch(error => {
      console.log('Error', error)
    })
  }

  render() {
   const{avatar_url, name, login, location, html_url, followers, following, bio} = this.state.githubData;
    return (
      <div className="App">
        <h2>Github Users</h2>
        <GithubCard
         avatar_url={avatar_url}
         login={login}
         html_url={html_url}
        />
        <GithubFollowers githubFollowers={this.state.githubFollowers}/>
      </div>
    );
  }

}

export default App;
