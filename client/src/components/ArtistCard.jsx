import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArtistCard extends Component {
  render() {
    return (
      <div className="artist card">
        <Link to={"/artists/" + this.props.data._id}>
          <h1>{this.props.data.name}</h1>
        </Link>
      </div>
    );
  }
}
