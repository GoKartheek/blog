import React from 'react';
import './style.css';

class GreetingCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            salary: 100
        }
        console.log('Inside constructor: ',this)
        this.incrementSalary = this.incrementSalary.bind(this);
    }

    incrementSalary() {
        console.log('Inside Increment: ',this)
        this.setState({
            salary: this.state.salary + 100,
        })
    }

    render() {
        
        return(
            <React.Fragment>
                <div>Salary is <span>{this.state.salary}</span></div>
                <button className="add" onClick={this.incrementSalary}>Add</button>
            </React.Fragment>
        );
    }

}

export default GreetingCard;
