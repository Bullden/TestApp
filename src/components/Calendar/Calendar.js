import React,{Component} from 'react'
import './Calendar.css'
import TimeList from '../TimeList/TimeList.js'

class Calendar extends Component {
    render() {
        return(
            <div className='calendarWrap'>
                <TimeList/>
            </div>
        )
    }
}
export default Calendar