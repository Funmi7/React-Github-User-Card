import React from 'react';

export default class GithubCard extends React.Component {
    render () {
        const {avatar_url, name, login, location, html_url, followers, following, bio} = this.props;
        return (
            <div>
                <img src={avatar_url}/>
                <p>{name}</p>
                <p>{login}</p>
                <p>{location}</p>
                <p>{html_url}</p>
                <p>{followers}</p>
                <p>{following}</p>
                <p>{bio}</p>
            </div>
        )
    }
}