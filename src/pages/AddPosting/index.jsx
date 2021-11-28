import React from "react";

const AddPosting = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <label htmlFor="inputEmail4">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Company name"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3 my-4">
                <label className="input-group-text" htmlFor="checktype">
                  Type
                </label>
                <select className="form-select" id="checktype">
                  <option selected>Full Time</option>
                  <option>Internship</option>
                  <option>Internship + Full Time</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <label htmlFor="inputEmail4">Job Title</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Job title"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <label htmlFor="inputAddress">Compensation</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="in INR"
                />
                <select className="form-select" id="checktype">
                  <option>per hour</option>
                  <option>per month</option>
                  <option selected>per year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <span className="input-group-text">Location</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <span className="input-group-text">Duration</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">Eligibility</div>
            <div className="row my-3 justify-content-center">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="input-group">
                  <span className="input-group-text">CGPA</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=">="
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-10 col-10">
                <div className="input-group">
                  <span className="input-group-text">Graduation Years</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="20XX, 20XY"
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col mb-3">
                <div
                  className="input-group justify-content-center"
                  id="branches"
                >
                  <div className="input-group-prepend">
                    <strong className="m-2">Branches</strong>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">CSE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="CSE"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">ECE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="ECE"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">EE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="EE"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">ME</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="ME"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">CE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="CE"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">CHE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="CHE"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">MSE</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="MSE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <span className="input-group-text">Placement Talk Link</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Put the link here"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <span className="input-group-text">Test Link</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Put the link here"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Attach Files"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPosting;
