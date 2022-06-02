const FullName = (props) => {
  return (
    <div>
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>{props.job}</div>
    </div>
  );
};

export default FullName;
