import React, { Component } from 'react';
import DayGroupSchedule from './DayGroupSchedule';

class WeekGroupSchedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='text-center'>
            <h2>Group {this.props.match.params.id}</h2>
                <DayGroupSchedule day="Monday" group={this.props.match.params.id}></DayGroupSchedule><br/>
                <DayGroupSchedule day="Tuesday" group={this.props.match.params.id}></DayGroupSchedule><br/>
                <DayGroupSchedule day="Wednesday" group={this.props.match.params.id}></DayGroupSchedule><br/>
                <DayGroupSchedule day="Thursday" group={this.props.match.params.id}></DayGroupSchedule><br/>
                <DayGroupSchedule day="Friday" group={this.props.match.params.id}></DayGroupSchedule><br/>
            </div>
        );
    }
}

export default WeekGroupSchedule