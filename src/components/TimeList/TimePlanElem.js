import React,{Component} from 'react'
import PlanDayList from "../PlanDayList/PlanDayList";
import './TimeList.css'

class TimePlanElem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    toggleTextArea = () => {
        const { isOpen } = this.state
        console.log(isOpen)
        this.setState({ isOpen: true})
    }
    render() {
        const {isOpen} = this.state
        const { time } = this.props
        return (
            <div  className='div' onClick={this.toggleTextArea}>
                <p>{time}</p>
                {isOpen &&(
                    <div className='planDay'>
                        <PlanDayList/>
                    </div>
                )}
            </div>
        )
    }
}
export default TimePlanElem