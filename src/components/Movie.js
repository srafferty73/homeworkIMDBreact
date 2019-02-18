import React, {Component, Fragment} from "react";


class Movie extends Component {

  render() {
    return (
      <Fragment>
        <h4><a href={this.props.url}>{this.props.name}</a></h4>
      </Fragment>
    )
  }
}

export default Movie;
