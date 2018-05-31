import React, { Component } from 'react';
import axios from 'axios';


class EditDayGroupSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            schedule: [],
            group: '',
            filled: false
        };
        this.getSchedule(props.day, props.group);
        this.onTodoChange = this.onTodoChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    getSchedule = (d, g) => {
        axios.get('https://angularjschedule.azurewebsites.net/api/get/groups?groupName=' + g + '&dayName=' + d)
            .then((response) => {
                this.setState({
                    schedule: response.data.Schedule,
                    group: response.data.Group,
                    day: d
                })
            })
            .then((response) => {
                console.log(response);
            })
    }

    checkFilled = (value) => {
        if (value != "" && isNaN(value)) 
            return true;
        
        return false;
    }

    onTodoChange(event) {
        this.state.filled = this.checkFilled(event.target.value);
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.state.schedule[event.target.name[event.target.name.length - 1]].Activity = fieldValue;
        this.setState({
            [fieldName]: fieldValue
        });
    }

    submit() {
        axios.put('https://angularjschedule.azurewebsites.net/api/put/schedule', {
            Day: this.state.day,
            Group: this.state.group,
            Schedule: this.state.schedule
        })
            .then((response) => {
                window.location.reload();
            })
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className='text-center container'>
                <h3>Edit {this.state.day} in group {this.state.group}</h3>
                <table className='table table-responsive table-striped table-condensed'>
                    <thead>
                        <tr className='yellow-tr'>
                            <td>Hours</td><td>Activity</td><td>Edit activity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.schedule.map((schedule, index) => <tr key={index}>
                            <td className='yellow-tr quarter-table'>{schedule.Hour}</td><td>{schedule.Activity}</td><td className='quarter-table'><input type='text' name={'activity' + index} value={schedule.Activity} onChange={this.onTodoChange} /></td>
                        </tr>)}
                        <tr >
                            <td colSpan={3}>
                            {this.state.filled ? <button className='btn btn-warning full-width border-null' onClick={this.submit}>ACCEPT</button> : ""}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EditDayGroupSchedule;