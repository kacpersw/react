import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
        this.getGroups();
    }

    getGroups = () => {
        axios.get('https://angularjschedule.azurewebsites.net/api/get/groups')
            .then((response) => {
                this.setState({
                    groups: response.data
                })
            })
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className='text-center container'>
                <Navbar className='text-center'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Main schedule</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavDropdown title="Group week schedule" id="basic-nav-dropdown">
                        {this.state.groups.map((group, index) => <MenuItem key={index} href={'/group/'+group}>Group {group}</MenuItem>)}
                        </NavDropdown>

                        <NavDropdown title="Day schedule" id="basic-nav-dropdown">
                            <MenuItem href='/day/Monday'>Monday</MenuItem>
                            <MenuItem href='/day/Tuesday'>Tuesday</MenuItem>
                            <MenuItem href='/day/Wednesday'>Wednesday</MenuItem>
                            <MenuItem href='/day/Thursday'>Thursday</MenuItem>
                            <MenuItem href='/day/Friday'>Friday</MenuItem>
                        </NavDropdown>

                        <NavDropdown title="Edit schedule" id="basic-nav-dropdown">
                        {this.state.groups.map((group, index) => <MenuItem key={index} href={'/edit/'+group}>Group {group}</MenuItem>)}
                        </NavDropdown>

                        <NavItem href="/addgroup">Add group</NavItem>
                        <NavItem href="/deletegroups">Delete group</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Menu;