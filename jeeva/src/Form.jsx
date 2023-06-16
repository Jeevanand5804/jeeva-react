import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");

  const [person, setPerson] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson(
      (prevPerson) => ({
        ...prevPerson,
        [name]: value,
      })
    )
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number || !address) {
      alert("Please fill in all details");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container  justify-content-center">
      <div className="card p-4 mt-2 col-lg-6 offset-lg-3 border-primary bg-light text-dark">
        <div className="text-center mb-3 text-primary">
          <h1>Form</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              aria-describedby="emailHelp"
              value={person.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              value={person.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              name="number"
              aria-describedby="emailHelp"
              value={person.number}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Adderss
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="address"
              value={person.address}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary mt-3 mb-1"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {submitted && (
        <div className="bg-success text-white p-2 mt-1 col-lg-6 offset-lg-3 ">
          <h2>Form Details:</h2>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.number}</p>
          <pre>Address: {person.address}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
