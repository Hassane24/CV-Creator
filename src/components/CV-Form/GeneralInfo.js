import React from "react";

const GeneralInfo = (props) => {
  return (
    <div>
      <h2>General Info</h2>
      <form>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={props.firstName}
            onChange={props.firstNameChange}
          ></input>
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={props.lastName}
            onChange={props.lastNameChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={props.email}
            onChange={props.emailChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
