import React from "react";

const Progress = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-4 text-center">
              <h1 className="fw-bold">Selling Progress</h1>
            </div>

            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "65%" }}>
                Pakistan : 65%
              </div>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-warning text-light "
                style={{ width: "50%" }}
              >
                India : 50%
              </div>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-primary text-light"
                style={{ width: "75%" }}
              >
                Australia : 75%
              </div>
            </div>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-danger" style={{ width: "100%" }}>
                USA : 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
