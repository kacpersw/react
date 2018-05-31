import React, { Component } from 'react';
import axios from 'axios';

class RemoveGroupForm extends Component {
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

    deleteGroup = (name) => {
        axios.delete('https://angularjschedule.azurewebsites.net/api/delete/group/' + name)
            .then((response) => {
                this.getGroups();
            })
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className='text-center container'>
            <h3>Remove groups</h3>
                <table className='table table-responsive table-striped table-condensed'>
                    <thead>
                        <tr>
                            <td>Group</td><td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.groups.map((group, index) => <tr key={index}>
                            <td className='half-table'>{group}</td><td><button className='btn btn-warning btn-remove' onClick={(e) => this.deleteGroup(group)}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RemoveGroupForm;