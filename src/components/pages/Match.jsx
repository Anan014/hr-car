import axios from 'axios';
import React, { useState } from 'react';

const Match = ({ employee, car ,prophandler,prophandler2}) => {
    const [carMatch, setCarMatch] = useState(null);
    const [employeeMatch, setEmployeeMatch] = useState(null);
    const [hasCar, setHasCar] = useState(false);
    const [emptyPage, setEmptyPage] = useState(false);

    const matchCar = async () => {
        const emplyeeCheck = employee.find(empli => {
            return empli.id === employeeMatch;
        });
        if (!emplyeeCheck.hasCar && emplyeeCheck.isActive) {
           const matchCar=await axios.put('https://617bca6bd842cf001711c0b5.mockapi.io/Car/'+carMatch,{isAvailable: false,})
            const matchEmployee = await axios.put(`https://617bca6bd842cf001711c0b5.mockapi.io/Employee/${employeeMatch}`, { hasCar: true });
            setHasCar(true);
            setEmptyPage(true);
            prophandler(matchEmployee);
            prophandler2(matchCar);

        } else {
            setHasCar(false);
            setEmptyPage(true);
        }

        console.log(emplyeeCheck);
    }

    return (
        <div>

            <div className="ui segment">

                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div className="ui right icon labeled input" style={{ margin: "5px 0" }}>
                        <div className="ui label">Employee ID</div>
                        <input
                            type="number"
                            placeholder="Enter"
                            style={{ width: "100px" }}
                            onChange={(e) => setEmployeeMatch(e.target.value)}
                        />
                        <i className="id card icon"></i>
                    </div>

                    <div className="ui right icon labeled input" style={{ margin: "5px 0" }}>
                        <div className="ui label">Car ID</div>
                        <input
                            type="number"
                            placeholder="Enter"
                            style={{ width: "138px" }}
                            onChange={(e) => setCarMatch(e.target.value)}
                        />
                        <i className="car icon"></i>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <button
                        className="ui button"
                        style={{ width: "203px" }}
                        onClick={() => matchCar()}
                    >
                        Give a car
                    </button>
                </div>

                <div>
                    <p>{emptyPage ? (hasCar ? 'Congrats on the new car' : 'Already has a car') : ("- - -")}</p>
                </div>

            </div>

            <div className="ui segment">
                <h3>Employess without cars</h3>
                <div className="ui three column grid">
                    {employee ? employee.filter(active => {
                        return (!active.hasCar && active.isActive) //check if employee have a car and is active worker
                    }).map(employ => {
                        return (
                            <div key={employ.id} className="column">
                                <div className="ui fluid card">
                                    <div className="image">
                                        <img alt={employ.name} src={employ.avatar} />
                                    </div>
                                    <div className="content">
                                        <p>{employ.name}</p>
                                    </div>
                                    <div className="extra">
                                        <p>Employee ID: {employ.id}</p>
                                        <p>Senior: {employ.isSenior ? 'Yes' : 'No'}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                        : 'loading employees'}
                </div>
            </div>

            <div className="ui segment">
                <h3>Cars available</h3>
                <div className="ui three column grid">
                    {car ? car.filter(vailable => {
                        return vailable.isAvailable //check if the car is available
                    }).map(car => {
                        return (
                            <div key={car.id} className="column">
                                <div className="ui fluid card">
                                    <div className="image">
                                        <img alt={car.carDetails} src={`https://source.unsplash.com/150x150/?${car.carDetails.replace(/\s+/g, '-').toLowerCase()}`} />
                                    </div>
                                    <div className="content">
                                        <p>{car.carDetails}</p>
                                    </div>
                                    <div className="extra">
                                        <p>Gold members: {car.isGold ? 'Yes' : 'No'}</p>
                                        <p>Senior car: {car.isSenior ? 'Yes' : 'No'}</p>
                                        <p>Rental Cost: {car.rentalPayment}$</p>
                                        <p>Car ID: {car.id}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                        : 'loading cars'}
                </div>
            </div>

        </div>
    )
};

export default Match;