import React from "react";
import Title from "./Title";

export default class Header extends React.Component {

	handleChange(e){
		const searchContent = e.target.value;
		this.props.changeSearchContent(searchContent);
	}

	buttonOnClick(e){
		this.props.searchByTitle();
	}

  render() {
    return (
      <div>
      	<Title />
      	<input onChange={this.handleChange.bind(this)} placeholder="título do produto"/>
      	<button	onClick={this.buttonOnClick.bind(this)}> Buscar</button>
      </div>
    );
  }
}