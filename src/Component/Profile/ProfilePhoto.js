import React, { Component } from 'react';
import   photo  from '../../photo.jpg';
export default class ProfilePhoto extends Component {
    render() {
        return (
            <div>
                <img src={photo}  style={{width: 300, height: 300,border: '3px solid gray',marginTop:'2%'}}/>
            </div>
        )
    }
}

