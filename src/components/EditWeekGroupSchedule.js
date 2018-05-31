import React, { Component } from 'react';
import EditDayGroupSchedule from './EditDayGroupSchedule';
import axios from 'axios';


class EditWeekGroupSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: ''
        }
    }

    render() {
        return (
            <div>
                <EditDayGroupSchedule day="Monday" group={this.props.match.params.id}></EditDayGroupSchedule><br />
                <EditDayGroupSchedule day="Tuesday" group={this.props.match.params.id}></EditDayGroupSchedule><br />
                <EditDayGroupSchedule day="Wednesday" group={this.props.match.params.id}></EditDayGroupSchedule><br />
                <EditDayGroupSchedule day="Thursday" group={this.props.match.params.id}></EditDayGroupSchedule><br />
                <EditDayGroupSchedule day="Friday" group={this.props.match.params.id}></EditDayGroupSchedule><br />
            </div>
        );
    }
}

export default EditWeekGroupSchedule;