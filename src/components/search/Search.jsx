import "./Search.css";
import React from "react";

export class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'Potter',
      type: 'all',
    };
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.doRequest(this.state.query,this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.doRequest(this.state.query, this.state.type);
      }
    );
  };

  render() {
    const { query,type} = this.state;
    return (
      <div>
        <div className="search">
          <input
            className="form"
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
            placeholder="Example: Potter"
            onKeyDown={this.handleKey}
          />
          <button
            className="button"
            onClick={() => this.props.doRequest(query,type)}
          >
            Search
          </button>
        </div>
        <div className="wrapper">
          <input
            type="radio"
            name="type"
            id="option-1"
            onChange={this.handleFilter}
            data-type="all"
            checked={this.state.type === "all"}
          />
          <label htmlFor="option-1" className="option">
            <span>All</span>
          </label>

          <input
            type="radio"
            name="type"
            id="option-2"
            onChange={this.handleFilter}
            data-type="movie"
            checked={this.state.type === "movie"}
          />
          <label htmlFor="option-2" className="option">
            <span>Films</span>
          </label>

          <input
            type="radio"
            name="type"
            id="option-3"
            onChange={this.handleFilter}
            checked={this.state.type === "series"}
            data-type="series"
          />
          <label htmlFor="option-3" className="option">
            <span>Serials</span>
          </label>
        </div>
      </div>
    );
  }
}
