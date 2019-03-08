import React, {Component} from 'react'

export default class Test extends Component {
    handleChange(e) {
        {[e.target.name] = e.target.value}
    }
    render () {
        console.log(this.props);
        const test = this.props.test
        return (
            <div>
                <input type="text" value=""
            />
            </div>
        )
    }
}