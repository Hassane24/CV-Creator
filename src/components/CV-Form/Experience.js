import "../../styles/form-styles/Experience.css";
const Experience = (props) => {
  return (
    <div className="exp">
      <h2>Experience</h2>
      <div>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={props.position}
          onChange={props.positionChange}
        ></input>
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={props.company}
          onChange={props.companyChange}
        ></input>
      </div>
      <div>
        <label htmlFor="from-ex">From</label>
        <input
          type="text"
          id="from-ex"
          value={props.from}
          onChange={props.fromChange}
        ></input>
      </div>
      <div>
        <label htmlFor="to-ex">To</label>
        <input
          type="text"
          id="to-ex"
          value={props.to}
          onChange={props.toChange}
        ></input>
      </div>
    </div>
  );
};

export default Experience;
