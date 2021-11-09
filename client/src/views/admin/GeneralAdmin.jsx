import React from "react";
import APIHandler from "./../../api/handler";

export default class GeneralAdmin extends React.Component {
  state = {
    data: [],
  };

  fetchData = async () => {
    APIHandler.get("/api/" + this.props.match.params.type)
      .then(({ data }) => {
        this.setState({
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.type !== prevProps.match.params.type) {
       this.fetchData();
    }
  }

  render() {
    console.log(this.props.match.params.type);
    console.log(this.state.data);
    console.log(this.props.match.params.type);
    return (
      <div>
        {this.state.data.map((d, i) => {
          <h1 key={i}>{d.title}</h1>;
        })}
      </div>
    );
  }
}
