import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const name = "Bharath";
    return (
      <>
        <h1>Hey {name} welcome to header</h1>
      </>
    );
  }
}
