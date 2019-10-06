import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard';


export default class GithubFollowers extends React.Component {

      render () {
          const {githubFollowers} = this.props;
          return (
              githubFollowers.map(follower => {
                  return (
                      <GithubCard key={follower.id}
                        avatar_url={follower.avatar_url}
                        login={follower.login}
                        location={follower.location}
                        html_url={follower.html_url}
                    />
                  )
              })
          )
      }
}