import React from "react";
import { connect } from "react-redux";
import { getUserInput } from "../../redux/actions";

const InputBox = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.userInput.value;
    input = input.toLowerCase();
    if (!input) {
      alert("must enter a value");
    } else {
      props.dispatch(getUserInput(input));
    }

    e.target.userInput.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" />
        <button>Search</button>
      </form>
    </div>
  );
};
export default connect()(InputBox);
