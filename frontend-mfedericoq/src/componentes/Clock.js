import { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };      
    }

    tick() {
        this.setState( { date: new Date() } );
    }

    componentDidMount () {
        this.timerOne = setInterval ( () => this.tick() ,1000)
    }

    render() {
        return(
            <>
            <span id="clockstyle">
                <b> { this.state.date.toLocaleTimeString() } </b>
            </span>
            </>
        )
    }
}