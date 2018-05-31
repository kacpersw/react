import React, { Component } from 'react';
import axios from 'axios';

class AddGroupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            filled: false,
            groups: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.getGroups();
    }

    checkFilled = (value) => {
        if (value != "" && !isNaN(value)) {
            for (var i = 0; i < this.state.groups.length; i++) {
                if (this.state.groups[i] == value)
                    return false;
            }
            return true;
        }
        return false;
    }

    onSubmit = (event) => {
        if (!this.checkFilled(this.state.name))
            return;
        event.preventDefault();
        axios.post('https://angularjschedule.azurewebsites.net/api/groups/add', {
            Name: this.state.name
        })
            .then((response) => {
                window.location.reload();
            })
            .then((response) => {
                console.log(response);
            })
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

    onChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
            filled: this.checkFilled(value)
        })
    }

    render() {
        return (
            <div className='text-center container'><br />
                <h3>Add new group</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Name</label> <br />
                    <input type="text" name="name" text="name" onChange={this.onChange} /><br /><br />
                    {this.state.filled ? <input className='btn btn-warning' type="submit" value="Add group" /> : ""}
                </form>
                <br /><br />
                <table className='table table-responsive table-striped table-condensed'>
                    <thead>
                        <tr className='yellow-tr'>
                            <td>Group</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.groups.map((group, index) => <tr key={index}>
                            <td className='half-table'>{group}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AddGroupForm;