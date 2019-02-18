import React, {Component, Fragment} from "react";
import MovieList from "../components/MovieList.js";
import ViewMore from "../components/ViewMore.js";

class UpcomingBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }

  render() {
    return (

      <Fragment>
        <h1>Upcoming Film Releases for UK</h1>
        <hr/>
        <h2>Movie List</h2>
        <ul>
          <li><MovieList data={this.state.data} /></li>
        </ul>
        <hr/>
        <ViewMore />
      </Fragment>
    )
  }
}

export default UpcomingBox;
