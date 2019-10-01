import React from 'react';
import styled from 'styled-components';


const CardStyled = styled.div`
    background-color: black;
    margin: 0 auto;
    display: flex;
    width: 700px;
    margin-bottom: 30px;
    align-items: center;
    .img-div {
        width: 40%;
        height: 70%;
        margin-top: 20px;
        margin-bottom: 20px;
        img {
            max-width: 80%;
            max-height: 80%;
            border-radius: 20px;
        }
    }

    h3, p {
        margin-left: 30px;
        color: white;
        text-align: left;
    }

    p {
        
        a {
            color: white;
        }
    }  
    `

export default class GithubCard extends React.Component {
    render () {
        const {avatar_url, name, login, location, html_url, followers, following, bio} = this.props;
        return (
            <CardStyled>
                <div className='img-div'>
                <img src={avatar_url}/>
                </div>
                <div className='text-div'>
                <h3>{login}</h3>
                <p>Profile: <a href={html_url}>{html_url}</a></p>
                </div>
            </CardStyled>
        )
    }
}