import React, { useState } from "react";
import { addDoc, collection, getFirestore } from '@firebase/firestore';


const AddPosting = () => {
  
  const [form,setForm] = useState({
    company: "",
    jobTitle: "",
    description:
      "",
    type: "",
    isClosed: false,
    location: {
      city: "",
      country: "",
    },
    salary: "",
    date: {
      post: new Date().toISOString(),
      ppt: new Date().toISOString(),
      test: new Date().toISOString(),
      interview: new Date().toISOString(),
    },
    unit: "",
    poster: "",
    eligibility: {
      branches: [],
      graduationYear: [],
      cgpa: "",
    },
  });


  // FUNCTIONS
  const handleSubmit = ()=>{
    console.log('Submitiing data');
    // TODO: Get form data here
    console.log(form);
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    
    let branches = new Array();
    for(let checkbox of checkboxes){
      // console.log(checkbox.value, " = ", checkbox.checked);
      if(checkbox.checked) {
        branches.push(checkbox.value);
      }
    }
    // console.log(branches);
    // TODO: structute data in object 
    const post = {
      company: form.company,
      jobTitle: form.jobTitle,
      description: "",
      type: form.type,
      isClosed: form.isClosed,
      location: {
        city: form['location.city'],
        country: form['location.country'],
      },
      salary: form.salary,
      unit: form.compType,
      date: {
        post: form.date.ppt,
        ppt: form.date.ppt,
        test: form.date.test,
        interview: form.date.interview,
      },
      poster: form.poster,
      eligibility: {
        branches: branches,
        graduationYear: form['eligibility.graduationYear'],
        cgpa: form['eligibility.cgpa'],
      },
    }; // temp
    console.log(post);

    // return;
    const firestore = getFirestore();
    addDoc(collection(firestore,'posts'),post)
  }

  const handleChange = (e)=>{
    setForm(form=>{
      const _form = {...form};
      _form[e.target.name] = e.target.value;
      return _form; 
    })
  }

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
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3 my-4">
                <label className="input-group-text" htmlFor="checktype">
                  Type
                </label>
                <select className="form-select" 
                  id="checktype" 
                  name="type"
                  value={form.type}
                  onChange={handleChange}>
                  <option>Select</option>
                  <option value="Internship + Full Time">Internship + Full Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
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
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
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
                  name="salary"
                value={form.salary}
                onChange={handleChange}
                />
                <select className="form-select" id="checktype"
                name="compType"
                value={form.compType}
                onChange={handleChange}>
                  <option value="per hour">per hour</option>
                  <option value="per month">per month</option>
                  <option selected value="per year">per year</option>
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
                  name="location.city"
                value={form['location.city']}
                onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  name="location.country"
                value={form['location.country']}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="input-group mb-3">
                <span className="input-group-text">Duration</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Months"
                  name="duration"
                value={form.duration}
                onChange={handleChange}
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
                    name="eligibility.cgpa"
                value={form['eligibility.cgpa']}
                onChange={handleChange}
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
                    name="eligibility.graduationYear"
                value={form['eligibility.graduationYear']}
                onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col mb-3">
                <div
                  className="input-group justify-content-center"
                  id="branches">
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
                  name="talkLink"
                value={form.talkLink}
                onChange={handleChange}
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
                  name="testLink"
                value={form.testLink}
                onChange={handleChange}
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
          <button type="button" onClick={handleSubmit} className="btn btn-primary mt-4">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPosting;
