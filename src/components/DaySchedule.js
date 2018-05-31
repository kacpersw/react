import React, { Component } from 'react';
import axios from 'axios';

class DaySchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            schedule: [],
            groups: []
        };

        if (props.day)
            this.getSchedule(props.day);
        else
            this.getSchedule(this.props.match.params.id);

        this.getGroups();
    }

    getSchedule = (day) => {
        axios.get('https://angularjschedule.azurewebsites.net/api/get/schedule/' + day)
            .then((response) => {
                this.setState({
                    day: response.data.Day,
                    schedule: response.data.Schedule
                })
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

    render() {
        return (
            <div className='text-center container'>
                <h3>{this.state.day}</h3>
                <div className='table-bordered'>
                    <table className='table table-responsive table-striped table-condensed'>
                        <thead>
                            <tr className='yellow-tr'>
                                <td>HOURS</td>{this.state.groups.map((group, index) => <td key={index}>{group}</td>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.schedule.map((schedule, index) => <tr key={index}>
                                <td className='yellow-tr'>{schedule.Hour}</td>{schedule.Activities.map((hour, i) => <td key={i}> {hour}</td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DaySchedule;