import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';


export default class ByTitle extends React.Component {
	constructor(){
		super();
		this.state = {
			title: "Digite o título abaixo", 
			searchContent: "", 
			fixedUrl: "http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b",
			data: []
		};
		this.myitens = {};
	}


	searchByTitle(){
		const encodedValue = encodeURIComponent(this.state.searchContent);
		console.log('http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b&title=' + encodedValue);
		fetch('http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b&title=' + encodedValue)
			.then(res => res.json())
			.then(json => {
				this.setState({
					data: json
				})
				console.log(this.state.data[0]);
			});

	}

	


	changeSearchContent(searchContent){
		this.setState({searchContent});
	}

	render() {
	    return (
	    	<div>
	    		<div>
			      	<h1>Escolha o tipo de pesquisa</h1>
			      	<Link to="/by-title"> <button>Buscar por título</button> </Link>
			      	<Link to="/by-sku"> <button> Buscar por sku + retailer </button> </Link>
			      	
			     </div>
		      	<Header 
		      		changeSearchContent={this.changeSearchContent.bind(this)} 
		      		searchByTitle={this.searchByTitle.bind(this)} 
		      		title={this.state.title}/>
		      	<div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>
		    </div>
	    );
 	}
}