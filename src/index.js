import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DaySchedule from './components/DaySchedule'
import AddGroupForm from './components/AddGroupForm';
import WeekSchedule from './components/WeekSchedule';
import RemoveGroupForm from './components/RemoveGroupForm';
import Menu from './components/Menu';
import WeekGroupSchedule from './components/WeekGroupSchedule';
import EditWeekGroupSchedule from './components/EditWeekGroupSchedule';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <div className='text-center'>
        <Menu></Menu>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={WeekSchedule} />
                <Route exact path='/deletegroups' component={RemoveGroupForm} />
                <Route exact path='/addgroup' component={AddGroupForm} />
                <Route exact path='/group/:id' component={WeekGroupSchedule} />
                <Route exact path='/day/:id' component={DaySchedule} />
                <Route exact path='/edit/:id' component={EditWeekGroupSchedule} /> 
            </div>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
