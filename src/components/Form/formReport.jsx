import React, { useEffect, useState } from "react";
import "./formReport.css";

import ReportMap from "../Map/Map";

const jsonData = {
  mobility_mode: ["Train", "Tram", "Metro"],
  problemTypes: ["Infrastructure", "Service", "Security"],
  details: [
    "Escalator",
    "Elevator",
    "Platform",
    "Stairs",
    "Ticket",
    "Machine",
    "Doors",
    "Bench",
    "Others",
  ],
};

export default function Report() {
  const [formData, setFormData] = useState({
    mobility_mode: "",
    problemType: "",
    details: "",
    description: "",
    email: "",
    lat: null,
    lng: null,
  });

  const [send, setSend] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(
    () => setFormData({ ...formData, lat: location.lat, lng: location.lng }),
    [location]
  );

  useEffect(() => {
    const checkIfFormIsValid = () => {
      const { mobility_mode, problemType, details, description } = formData;
      if (mobility_mode && problemType && details && description) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    checkIfFormIsValid();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const allSelects = Array.prototype.slice.call(
      document.getElementsByTagName("select")
    );
    allSelects.forEach((el) => {
      if (el.value === "") {
        document.getElementById(el.id).classList.add("emptySelect");
      }
    });
    setSend(true);
    console.log(allSelects);
  };

  return (
    <div>
      {send ? (
        <div className="report-send">
          <h1>Thanks for the report!</h1>
          <h2>Our team will solve it as soon as possible</h2>
          <div className="success-animation">
            <div className="circle-check"></div>
          </div>
        </div>
      ) : (
        <form onSubmit={submitForm} className="formReport">
          <h1>What do you want to report?</h1>
          <div className="formGrid">
            <div className="textColum">
              <label htmlFor="mobility_mode" className="required-field">
                Choose the mobility mode:
              </label>
              <select
                name="mobility_mode"
                id="mobility_mode"
                value={formData.mobility_mode}
                onChange={handleChange}
                errorMessage="This input is required"
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                {jsonData.mobility_mode.map((mobility_mode, index) => (
                  <option key={index} value={mobility_mode.toLowerCase()}>
                    {mobility_mode}
                  </option>
                ))}
              </select>

              <label htmlFor="problemType" className="required-field">
                Choose the type of problem:
              </label>
              <select
                name="problemType"
                id="problemType"
                value={formData.problemType}
                onChange={handleChange}
                errorMessage="This input is required"
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                {jsonData.problemTypes.map((problemType, index) => (
                  <option key={index} value={problemType.toLowerCase()}>
                    {problemType}
                  </option>
                ))}
              </select>

              <label htmlFor="details" className="required-field">
                Specify the problem:
              </label>
              <select
                name="details"
                id="details"
                value={formData.details}
                onChange={handleChange}
                errorMessage="This input is required"
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                {jsonData.details.map((details, index) => (
                  <option key={index} value={details.toLowerCase()}>
                    {details}
                  </option>
                ))}
              </select>

              <label htmlFor="description" className="required-field">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description || ""}
                onChange={handleChange}
                errorMessage="This input is required"
                required
              ></textarea>
              <label htmlFor="email">Email:</label>
              <input type="email" errorMessage="Enter a valid email" />

              <span>
                If you give us your email address we can inform you of the
                resolution of your report.{" "}
              </span>
            </div>
            <div className="mapColum">
              <label className="required-field">Select a location:</label>
              <ReportMap setLocationForm={setLocation}></ReportMap>
            </div>
          </div>

          <div className="buttonBox">
            <button disabled={isDisabled}>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
