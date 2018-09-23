import React from "react";
import Header from "./Header";
import axios from 'axios';
import Title from './Header/Title';


export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			title: "Welcome", 
			searchContent: "", 
			fixedUrl: "http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b",
			data: []
		};
		this.myitens = {};
	}


	searchByTitle(){
		const axios = require('axios');

		console.log(this.state.searchContent);
		axios.get("http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b", {
			params: {
				title: this.state.searchContent
			}
		})
		.then(function (response){
			console.log(response.data);
			const data = response.data;
        this.setState({ data });
		})
		.catch(function (error){
			console.log(error);
		})
		.then(function(){

		});
		console.log(this.state.fixedUrl);
		console.log(this.myitens);
	}

	


	changeSearchContent(searchContent){
		this.setState({searchContent});
	}

	render() {
	    return (
	      <div>
	      	<Header 
	      		changeSearchContent={this.changeSearchContent.bind(this)} 
	      		searchByTitle={this.searchByTitle.bind(this)} 
	      		title={this.state.title}/>
	      	<Title title={this.state.itens}/>
	      </div>
	    );
 	}
}