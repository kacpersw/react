import React, { Component } from 'react';
import DaySchedule from './DaySchedule';

class WeekSchedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='text-center'>
                <DaySchedule day="Monday"></DaySchedule><br/>
                <DaySchedule day="Tuesday"></DaySchedule><br/>
                <DaySchedule day="Wednesday"></DaySchedule><br/>
                <DaySchedule day="Thursday"></DaySchedule><br/>
                <DaySchedule day="Friday"></DaySchedule><br/>
            </div>
        );
    }
}

export default WeekSchedule