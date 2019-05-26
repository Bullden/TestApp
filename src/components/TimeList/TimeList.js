import React,{Component} from 'react'
import './TimeList.css'
import TimePlanElem from './TimePlanElem'
import PlanDayList from '../PlanDayList/PlanDayList.js'

const TIME_LIST = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00']
class TimeList extends Component{
    render() {
        return(
            <div className='time'>
                <div className='timeSet'>
                    {TIME_LIST.map((item, idx) =>
                        <TimePlanElem time={item} key={idx}/>
                    )}
                </div>

            </div>
        )
    }
}
export default TimeList