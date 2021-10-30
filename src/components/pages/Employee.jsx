import React from 'react';

const Employee = ({ employee }) => {
    return (
        <div>
            <div className="ui segment">
                {employee ?
                    employee.data.map(employee => {
                        return (<div className="ui segment" key={employee.id}>
                            <div className="ui unstackable items">
                                <div className="item">
                                    <div className="image">
                                        <img alt={employee.name} src={employee.avatar} />
                                    </div>
                                    <div className="content">
                                        <h4 className="header">{employee.name}</h4>
                                        <div className="meta">
                                            <span>Description</span>
                                        </div>
                                        <div className="description">
                                            <p>Active: {employee.isActive ? 'Yes' : 'No'}</p>
                                            <p>Senior: {employee.isSenior ? 'Yes' : 'No'}</p>
                                            <p>Salary: {employee.salary}</p>
                                            <p>Department: {employee.Department}</p>
                                            <p>Car: {employee.hasCar ? 'Yes' : 'No'}</p>
                                        </div>
                                        <div className="extra">
                                            <p>Employee ID: {employee.id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                    : "loading employees"}
            </div>
        </div>
    )
};

export default Employee;