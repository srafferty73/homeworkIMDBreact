import React, {Component, Fragment} from "react";

class ViewMore extends Component {

  // constructor(props) {
  //   this.viewMore = this.viewMore.bind(this);
  // }

  viewMore() {
    window.open("https://www.imdb.com/calendar/?region=gb", "_self");
  // window.location.replace = ("https://www.imdb.com/calendar/?region=gb");

  }

  render() {
    return (
      <Fragment>
        <button onClick={this.viewMore}>View more upcoming releases ...</button>
      </Fragment>
    )
  }
}

export default ViewMore;
