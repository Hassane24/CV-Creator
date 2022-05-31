import React from "react";

const GeneralInfo = (props) => {
  return (
    <div>
      <h2>General Info</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={props.name}
          onChange={props.nameChange}
        ></input>
      </form>
    </div>
  );
};

export default GeneralInfo;
