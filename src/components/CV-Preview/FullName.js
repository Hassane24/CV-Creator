const FullName = (props) => {
  return (
    <div className="general">
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>Phone Number: {props.number}</div>
      <div>Email: {props.email}</div>
      <div>{props.job}</div>
    </div>
  );
};

export default FullName;
