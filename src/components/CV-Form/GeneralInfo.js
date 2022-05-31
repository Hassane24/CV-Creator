import React from "react";

const GeneralInfo = (props) => {
  return (
    <div>
      <h2>General Info</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={props.name}
            onChange={props.nameChange}
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
