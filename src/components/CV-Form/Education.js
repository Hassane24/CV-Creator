function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      <div>
        <label htmlFor="university">University Name</label>
        <input
          type="text"
          id="university"
          value={props.uni}
          onChange={props.uniChange}
        ></input>
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          value={props.degree}
          onChange={props.degreeChange}
        ></input>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={props.subject}
          onChange={props.subjectChange}
        ></input>
      </div>
      <div>
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          value={props.from}
          onChange={props.fromChange}
        ></input>
      </div>
      <div>
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          value={props.to}
          onChange={props.toChange}
        ></input>
      </div>
    </div>
  );
}

export default Education;
