import React from "react";

const User = ({
  name,
  username,
  id,
  address,
  email,
  phonenumber,
  website,
  company,
}) => {
  return (
    <div className="user">
      <h1>Name : {name}</h1>
      <h3>UserName : {username}</h3>
      <p>Id : {id}</p>
      <p>Address : {address}</p>
      <p>Email : {email}</p>
      <p>Phone Number :{phonenumber}</p>
      <p>
        Website : <a href={website}>{website}</a>
      </p>
      <p>Works at :{company}</p>
    </div>
  );
};
export default User;
