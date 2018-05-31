import React, { Component } from 'react';
import axios from 'axios';


class DayGroupSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            schedule: [],
            group: ''
        };
        this.getSchedule(props.day, props.group);
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

    render() {
        return (
            <div className='text-center container'>
                <h3>{this.state.day}</h3>
                <table className='table table-responsive table-striped table-condensed'>
                    <thead>
                        <tr className='yellow-tr'>
                            <td>Hours</td><td>Activity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.schedule.map((schedule, index) => <tr key={index}>
                            <td className='yellow-tr quarter-table'>{schedule.Hour}</td><td>{schedule.Activity}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DayGroupSchedule;