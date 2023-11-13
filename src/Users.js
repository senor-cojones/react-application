import React, { useState, useEffect } from "react";

const Users = ({ ...props }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setUsers(users));
    });

    return (
        <div className="preservica__container">
            <h2 className="preservica__title">Users</h2>
            <table className="preservica__table">
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>X</td>
                            <td>Y</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
