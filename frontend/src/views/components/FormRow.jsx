import { Link } from "react-router-dom";

const FormRow = ({
  type,
  name,
  labeltext,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <label className="form-label" htmlFor={name}>
          {labeltext || name}
        </label>
      </div>

      <input
        type={type || "text"}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {error && (
        <span className="alert alert-danger" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
export default FormRow;
