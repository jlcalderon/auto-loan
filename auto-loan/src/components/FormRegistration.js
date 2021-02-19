import React, { useEffect, useState } from "react";
import "./FormRegistration.css";

const FormRegistration = () => {
  //State level constants to verify password requirements, this would be toggle at onChange of password input
  const [hasLenght, setHasLenght] = useState(false); //default to false
  const [hasNumbers, setHasNumbers] = useState(false); //default to false
  const [hasCapitalLetters, setHasCapitalLetters] = useState(false); //default to false
  const [hasSpcialChars, setHasSpecialChars] = useState(false); //default to false
  //State of the input fields
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setMatchPasswordField] = useState("");
  //State constants of the UI feedback
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [confirmFeedback, setConfirmFeedback] = useState("");

  useEffect(() => {
    setPasswordFeedback(
      "Password must be at least 8 characters long, include 1 number at the end, 1 special character (!,@,#,$,%,&,*) and 1 capital letter"
    ); //Set password UI feedback when component did mount occurs
  }, []);

  useEffect(() => {
    //1 Verify lenght is more than 8 characters
    if (passwordField.length > 8) {
      setHasLenght(true);
    } else {
      setHasLenght(false);
    }

    //convert the current string of passwordField to an array for later logic
    let valueToArray = passwordField.split("");

    //1 Veryfy numbers
    for (let x = 0; x <= valueToArray.length - 1; x++) {
      if (!isNaN(valueToArray[x])) {
        setHasNumbers(true);
      } else {
        setHasNumbers(false);
      }
    }
    //2 Veryfy special chars
    let specialChars = (element) =>
      element === "#" ||
      element === "@" ||
      element === "!" ||
      element === "$" ||
      element === "%" ||
      element === "&" ||
      element === "*";

    if (valueToArray.some(specialChars)) {
      setHasSpecialChars(true);
    } else {
      setHasSpecialChars(false);
    }

    //3 Verify Capital letters (optional addition to the logic)
    let capitalLetters = (element) => element === element.toUpperCase();
    if (valueToArray.some(capitalLetters)) {
      setHasCapitalLetters(true);
    } else {
      setHasCapitalLetters(false);
    }

    console.log(`hasLengt = ${hasLenght}`);
    console.log(`hasNumbers = ${hasNumbers}`);
    console.log(`hasSpecialChars = ${hasSpcialChars}`);
    console.log(`hasCapitalLetters = ${hasCapitalLetters}`);

    //Validate if password typed fill the requirements
    if (
      hasLenght === true &&
      hasNumbers === true &&
      hasSpcialChars === true &&
      hasCapitalLetters === true
    ) {
      setPasswordFeedback("Your password is secure, proceed to confirm.");
    } else {
      setPasswordFeedback(
        "Make sure you have 1 number at the end, 1 special character (!,@,#,$,%,&,*), 1 capital letter, and your password is 8 characters long"
      );
    }
  }, [passwordField]); //watches for changes in the state constant of passwordField

  return (
    <form>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="User email address"
          value={emailField}
          onChange={(event) => {
            setEmailField(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Type your password"
          value={passwordField}
          onChange={(event) => {
            //Update state constant
            setPasswordField(event.target.value);
          }}
        />
        <small>{passwordFeedback}</small>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your password"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-success"
          style={{
            backgroundColor: "#28833e",
            color: "#ffffff",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default FormRegistration;
