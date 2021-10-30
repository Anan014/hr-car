import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Employee from './pages/Employee';
import Match from './pages/Match';
import Header from './Header';
import axios from 'axios';

const App = () => {

    const [car, setCar] = useState(null);
    const [employee, setEmployee] = useState(null);
    console.log(employee);
    useEffect(() => {
        fetchEmployeeData();
        fetchCarData();
    }, []);

    const fetchEmployeeData = async () => {
        const employeeData = await axios.get('https://617bca6bd842cf001711c0b5.mockapi.io/Employee');
        setEmployee(employeeData.data);
    }

    const fetchCarData = async () => {
        const carData = await axios.get('https://617bca6bd842cf001711c0b5.mockapi.io/Car');
        setCar(carData.data);
    }

    const prophandler = async(e) => {
        console.log('-', e.data);
        setEmployee(employee.map(emp=>{return emp.id===e.data.id?e.data:emp}))
        

    }
    const prophandler2 = async(e) => {
        console.log('-', e.data);
        setCar(car.map(car=>{return car.id===e.data.id?e.data:car}))
        

    }

    return (
        <div className="ui container">

            {car ? '' : 'loading car'}
            {employee ? '' : 'loading employee'}
            <div className="ui segment">
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact component={Home} />

                        <Route path="/cars" exact component={Cars} >
                            <Cars car={car} /></Route>

                        <Route path="/employee" exact component={Employee} >
                            <Employee employee={employee} /></Route>

                        <Route path="/match" exact component={Match} >
                            <Match employee={employee} car={car} prophandler={(e) => {prophandler(e)}} prophandler2={(e) => {prophandler2(e)}}/>
                        </Route>
                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
};
export default App;