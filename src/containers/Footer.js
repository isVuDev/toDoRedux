import React,{Component} from 'react';
import { connect } from 'react-redux';
import { calculateCompleted, calculateRead, calculateTotal } from '../actions/action';

const mapDispatchToProps = (dispatch) => ({
    onCalculate: () => dispatch(calculateTotal()) && dispatch(calculateCompleted()) && dispatch(calculateRead()),
});

const mapStateToProps = (state) => {
    return {
        total : state.total_todo,
        completed : state.completed_todo,
        read : state.read_todo,
    }
}



class Total extends Component {

    componentDidMount() {
        this.timerID = setInterval(
            this.props.onCalculate, 1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    render () {
        return (
            <div className="total-div">
                <div>{this.props.total}</div>
                <div>{this.props.completed}</div>
                <div>{this.props.read}</div>
                <div className="clock-div">
                    <Clock/>
                </div>
                
            </div>

        )
    }

}


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    refreshCurrentTime() {
        let now = new Date();
        this.setState({
            currentTime: now.toString()
        });
    }
    render() {
        return(
            <div>
                <div>{this.state.date.toLocaleString()}</div>
            </div>
        );
    }
}


const Footer = connect(mapStateToProps,mapDispatchToProps)(Total)
export default Footer;