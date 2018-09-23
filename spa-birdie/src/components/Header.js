import React from "react";
import Title from "./Header/Title";

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
      	<Title title={this.props.title}/>
      	<input onChange={this.handleChange.bind(this)}/>
      	<button	onClick={this.buttonOnClick.bind(this)}> Buscar por título</button>
      </div>
    );
  }
}