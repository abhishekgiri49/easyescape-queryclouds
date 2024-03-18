import React, { useState, useEffect } from "react";

const SpecialRequest = ({ onChange }) => {
  const [specialRequest, setSpecialRequest] = useState("");

  useEffect(() => {
    try {
      onChange({ specialRequest: specialRequest });
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [specialRequest]);

  const handleChange = (e) => {
    setSpecialRequest(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-header flex-column align-items-start">
        <h5 className="card-title">Special Request</h5>
        <p className="card-text text-muted mt-25">
          Enter any special request you might have
        </p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="mb-2">
              <textarea
                id="special-request"
                className="form-control"
                name="specialRequest"
                value={specialRequest}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialRequest;
