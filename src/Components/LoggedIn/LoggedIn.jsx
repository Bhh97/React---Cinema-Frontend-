import React from "react";
import "./LoggedIn.css";
import Card from "../Card/Card";

class LoggedIn extends React.Component {
  render() {
    const { setIsLoggedIn } = this.props;

    return (
      <>
        <Card>
          <h1 className="subtitle">You are now logged in!</h1>
          <button className="back_button" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </Card>
      </>
    );
  }
}

export default LoggedIn;

