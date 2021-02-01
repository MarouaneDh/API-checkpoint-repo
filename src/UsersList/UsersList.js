import React, { useEffect, useState } from "react";
import User from "../User/User";
import axios from "axios";
import "./UsersList.css";

function UsersList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="AppList">
      <h2>All Users</h2>
      <div className="users">
        {users.map((user) => (
          <User
            key={user.id}
            className="user"
            name={user.name}
            id={user.id}
            email={user.email}
            address={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            username={user.username}
            phonenumber={user.phonenumber}
            website={user.website}
            company={`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export default UsersList;
