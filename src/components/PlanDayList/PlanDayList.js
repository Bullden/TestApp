import React,{Component} from 'react'
import './PlanDayList.css'

class PlanDayList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: false,
        }
    }
    render() {
        return(
            <div className='eventList'>
                <div className='inputWrap'>
                    <form name='form'><textarea form='form' rows='1'/></form>

                </div>
            </div>
        )
    }
}

export default PlanDayList