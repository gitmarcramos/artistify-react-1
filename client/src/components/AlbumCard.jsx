import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AlbumCard extends Component {
  render() {
    return (
      <div className="album card">
        <Link to={"/albums/" + this.props.data._id}>
          <h1>{this.props.data.title}</h1>
          <img src={this.props.data.cover} alt="" />
        </Link>
      </div>
    );
  }
}
