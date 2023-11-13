import React, { useState, useEffect } from "react";

const Users = ({ ...props }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setUsers(users))
            .catch(() => { fetch("users.json")
                .then((response) => response.json())
                .then((users) => setUsers(users))
        });
    });

    const handleDetailsClick = e => {
        e.preventDefault();

        console.log("Details button clicked");
    }

    const handleDeleteClick = id => {
        // const updatedUsers = [...users];
        // const index = users.findIndex((user) => user.id === id);

        // updatedUsers.splice(index, 1);
        // setUsers(updatedUsers);

        // return;
    }

    return (
        <div className="preservica__container">
            <h2 className="preservica__title">Users</h2>
            <table className="preservica__table">
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <input
                                    className="preservica__button preservica__button--details"
                                    onClick={handleDetailsClick}
                                    type="button"
                                    value="Details"
                                />
                            </td>
                            <td>
                                <input
                                    className="preservica__button preservica__button--delete"
                                    onClick={handleDeleteClick(user.id)}
                                    type="button"
                                    value="Delete"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
