import React, { Component } from "react";

class GetStartedPage extends Component {
  componentDidMount() {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem("user");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (userData) {
      console.log("User ID:", userData.id);
      console.log("User Name:", userData.name);
      console.log("User Email:", userData.email);
    } else {
      console.log("User data not found.");
    }
  }

  render() {
    return (
      <div>
        {/* Your "Get Started" page content */}
      </div>
    );
  }
}

export default GetStartedPage;
