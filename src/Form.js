import React, {Component} from 'react'
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Doe',
            hireDate: '2020-01-01',
            value: 'CEO'
        };
    }

    async postAsync() {
        let body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            hireDate: this.state.hireDate,
            role: this.state.value
        }
        let res = await axios.post('http://localhost:3000/api/employees', body, {crossDomain: true});
     }

    submitHandler = (event) => {
        event.preventDefault();
        this.postAsync();
    }


    changeHandler = (event) => {
        event.preventDefault();
        if(event.target.name) {
            this.setState({
                [event.target.name]: event.target.value
            });
        } else {
            this.setState({value: event.target.value});
        }
    }

    renderForm1() {
        return (
            <table id='input'>
                <tbody>
                <tr>
                    <th key='firstName'>FIRST NAME</th>
                    <th key='lastName'>LAST NAME</th>
                    <th key='hireDate'>HIRE DATE</th>
                </tr>
                <tr>
                    <td><input type="text" name='firstName' onChange={this.changeHandler}/></td>
                    <td><input type="text" name='lastName' onChange={this.changeHandler}/></td>
                    <td><input type="text" name='hireDate' onChange={this.changeHandler}/></td>
                </tr>
                </tbody>
            </table>
        )
    }

    renderForm2() {
        return (
            <form onSubmit={this.submitHandler}>
                <p>First change default values: FIRST NAME: 'John', LAST NAME: 'Doe',
                    HIRE DATE: '2020-01-01', and ROLE: 'CEO'.</p>
                <p>Then click POST button to create a new employee using the POST API.</p>
                <p>And finally refresh the page in the browser to see the new row in the table below.</p>

                <label>
                    <select value={this.state.value} onChange={this.changeHandler}>
                        <option value="CEO">CEO</option>
                        <option value="VP">VP</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="LACKEY">LACKEY</option>
                    </select>
                    <span> </span>
                    <input type="submit" value="POST"/>
                </label>
            </form>
        )
    }

    render() {
        return (
            <div>
                {this.renderForm1()}
                {this.renderForm2()}
            </div>
        );
    }
}

export default Form