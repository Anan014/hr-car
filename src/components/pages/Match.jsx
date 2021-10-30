import React from 'react';

const Match = ({ employee, car }) => {
    return (
        <div>

            <div className="ui segment">

                <div style={{ display: 'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <div className="ui right icon labeled input" style={{margin: "5px 0"}}>
                        <div class="ui label">Employee ID</div>
                        <input type="text" placeholder="Enter" style={{width: "100px"}}/>
                        <i className="id card icon"></i>
                    </div>

                    <div className="ui right icon labeled input" style={{margin: "5px 0"}}>
                        <div class="ui label">Car ID</div>
                        <input type="text" placeholder="Enter" style={{width: "138px"}}/>
                        <i className="car icon"></i>
                    </div>
                </div>

                <div style={{ display: 'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                <button class="ui button" style={{width: "203px"}}>Give a car</button>
                </div>


            </div>

            <div className="ui segment">
                <h3>Employess without cars</h3>
                <div className="ui three column grid">
                    {employee ? employee.data.filter(active => {
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
                    {car ? car.data.filter(vailable => {
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