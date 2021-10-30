import React from 'react';

const Cars = ({ car }) => {
    return (
        <div>
            <div className="ui segment">
                {car ?
                    car.data.map(car => {
                        return (<div className="ui segment" key={car.id}>

                            <div className="ui unstackable items">
                                <div className="item">
                                    <div className="image">
                                        <img alt={car.carDetails} src={`https://source.unsplash.com/150x150/?${car.carDetails.replace(/\s+/g, '-').toLowerCase()}`} />
                                    </div>
                                    <div className="content">
                                        <h4 className="header">{car.carDetails}</h4>
                                        <div className="meta">
                                            <span>Description</span>
                                        </div>
                                        <div className="description">
                                            <p>Pay from salary: {car.isGold ? 'Yes' : 'No'}</p>
                                            <p>Available: {car.isAvailable ? 'Yes' : 'No'}</p>
                                            <p>For Seniors: {car.isSenior ? 'Yes' : 'No'}</p>
                                            <p>Rental Payment: {car.rentalPayment}</p>
                                        </div>
                                        <div className="extra">
                                            <p>Car ID: {car.id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                    : "loading cars"}
            </div>
        </div>
    )
};

export default Cars;