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
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>
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
