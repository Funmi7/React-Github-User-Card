import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard';

const githubFollowersAPI = 'https://api.github.com/users/tetondan/followers'

export default class GithubFollowers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubFollowers : []
        }
    }

    componentDidMount() {
        axios.get(githubFollowersAPI)
        .then(response => {
          this.setState({githubFollowers: response.data})
          console.log(response.data)
        })
        .catch(error => {
          console.log('Error', error)
        })
      }

      render () {
          return (
              this.state.githubFollowers.map(follower => {
                  return (
                      <GithubCard
                        avatar_url={follower.avatar_url}
                        name={follower.name}
                        login={follower.login}
                        location={follower.location}
                        html_url={follower.html_url}
                        followers={follower.followers}
                        following={follower.following}
                        bio={follower.bio}
                    />
                  )
              })
          )
      }
}