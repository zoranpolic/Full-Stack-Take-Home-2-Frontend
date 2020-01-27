import React, {Component} from 'react'
import './Table.css';
import axios from 'axios';

class Table extends Component {
    employees;

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            employees: [
                {
                    _id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    hireDate: '2020-01-01',
                    role: 'lackey',
                    quote1: 'Funny joke 1',
                    quote2: 'Funny joke 2'
                },
                {
                    _id: 2,
                    firstName: 'Steve',
                    lastName: 'Martin',
                    hireDate: '2019-12-15',
                    role: 'lackey',
                    quote1: 'Funny joke 3',
                    quote2: 'Funny joke 4'
                },
                {
                    _id: 3,
                    firstName: 'Bruce',
                    lastName: 'Springsteen',
                    hireDate: '2018-11-10',
                    role: 'manager',
                    quote1: 'Funny joke 5',
                    quote2: 'Funny joke 6'
                },
                {
                    _id: 4,
                    firstName: 'Olivia',
                    lastName: 'Newton-John',
                    hireDate: '2017-10-05',
                    role: 'vp',
                    quote1: 'Funny joke 7',
                    quote2: 'Funny joke 8'
                }
            ]
        }
    }

    async componentDidMount() {
        // Load async data.
        try {
            let response = await axios.get('http://localhost:3000/api/employees');
            console.log('👉 Returned data:', response);
            this.setState({employees: response.data});
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    renderTableData() {
        return this.state.employees.map((employee, index) => {
            const {_id, firstName, lastName, hireDate, role, quote1, quote2} = employee //destructuring
            return (
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{hireDate}</td>
                    <td>{role}</td>
                    <td>{quote1}</td>
                    <td>{quote2}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        if(this.state.employees[0]) {
            let header = Object.keys(this.state.employees[0]);
            return header.map((key, index) => {
                return <th key={index}>{key}</th>
            })
        }
    }

    render() {
        return (
            <div>
                <table id='employees'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table //exporting a component make it reusable and this is the beauty of react