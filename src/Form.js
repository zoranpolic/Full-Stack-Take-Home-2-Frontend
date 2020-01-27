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
        let res = await axios.post('http://192.168.86.33:3000/api/employees', body, {crossDomain: true});
     }

    submitHandler = (event) => {
        event.preventDefault();
        // alert("firstName: " + this.state.firstName + " lastName: " + this.state.lastName + "\n" +
        //     " hireDate: " + this.state.hireDate + " role: " + this.state.value);
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
                <p>Type new values above to change default values for FIRST NAME: 'John', LAST NAME: 'Doe',
                    and HIRE DATE: '2020-01-01'.</p>
                <p>Select new value below to change default value for ROLE: 'CEO'.</p>
                <p>Then click POST button to create a new employee using the POST API.</p>

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

export default Form //exporting a component make it reusable and this is the beauty of react