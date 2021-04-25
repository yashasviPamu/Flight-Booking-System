import { useState } from "react";
import { withRouter } from "react-router-dom";

const SubmitForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("5");
  const [gender, setGender] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = {firstName, lastName, age, gender} 
    props.setPassengers([...props.passengers,userObj])
    props.setAddingPassenger(false)
  };
  return (
    <div className="w-100">
      <form className="text-primary" onSubmit={handleSubmit}>
        <div className="card flight-table mt-3 p-3" style={{color:"white"}}>
        <div className="text-center">
        <div className="row mb-2">
          <div className="col-sm-6">
            <div>First Name</div>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>

          <div className="col-sm-6">
            <div> Last name</div>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-sm-6">
            <div>Age</div>
            <input
              type="number"
              min={5}
              max={100}
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
          </div>

          <div className="col-sm-6">
            <div>Gender</div>
            <label>
              {" "}
              Male:
              <input
                type="radio"
                name="gender"
                value="male"
                className="ml-1 mr-2"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
                required
              />
            </label>
            <label>
              {" "}
              Female:
              <input
                type="radio"
                name="gender"
                value="female"
                className="ml-1"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
                required
              />
            </label>
          </div>
        </div>
        </div>
        <div className="mx-auto">
          <button className="btn btn-primary" type="submit">Save</button>
        </div>
        </div>
        
      </form>
      <div className="text-center mt-2">
      <button className="btn btn-danger" onClick={() => props.setAddingPassenger(false)}>cancel</button>
      </div>
    </div>
  );
};

export default withRouter(SubmitForm);
