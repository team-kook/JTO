/*
    Header.js
    - top header of main page
    - including logo, buttons, options, etc
*/

import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

/*
    Header Component
    - returns a menu bar
*/
export default class Header extends Component {
    _logout(){
        localStorage.setItem("auth", null);
    }

    render(){
        return (
            <Menu inverted borderless fixed="top" size="massive">
                <Menu.Item>
                    <Icon name="chart pie" /> JTO
                </Menu.Item>

                <Menu.Item>
                    {this.props.user ? <p>{"Hi, " + this.props.user.profile.name}</p> : "Loggin First"}
                </Menu.Item>

                {this.props.user ? 
                <Menu.Item onClick={this._logout} href="/">
                    Logout
                </Menu.Item>
                : null
                }

                <Menu.Item position="right" name='developers' href="https://github.com/escape-github">
                    Developers
                </Menu.Item>
            </Menu>
        )
    }
}