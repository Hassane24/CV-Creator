import "../../styles/form-styles/GeneralInfo.css";

const GeneralInfo = (props) => {
  return (
    <div className="general-info">
      <h2>General Info</h2>
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
      <div>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="number"
          id="phone-number"
          value={props.number}
          onChange={props.numberChange}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={props.description}
          onChange={props.descriptionChange}
        ></textarea>
      </div>
    </div>
  );
};

export default GeneralInfo;
