import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Title from "./Title";

export default class BySku extends React.Component {
	
	constructor(){
		super();
		this.state = {
			title: "Digite o título abaixo", 
			searchContentSku: "", 
			searchContentRetailer: "", 
			fixedUrl: "http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b",
			data: []
		};
		this.myitens = {};
	}


	searchBySku(){
		const encodedValueSKU = encodeURIComponent(this.state.searchBySku);
		const encodedValueRetailer = encodeURIComponent(this.state.searchByRetailer);
		fetch('http://35.199.65.245/getproduct/?token=88c4f286bfa68445eb170e6d159b35f74e98847b&source=retailers&retailer='
		 + encodedValueRetailer + "&sku=" + encodedValueSKU)
			.then(res => res.json())
			.then(json => {
				this.setState({
					data: json
				})
				console.log(json);
			});

	}


	handleChangeSku(e){
		const searchContent = e.target.value;
		this.setState({searchBySku: searchContent});
	}

	handleChangeRetailer(e){
		const searchContent = e.target.value;
		this.setState({searchByRetailer: searchContent});
	}

	buttonOnClick(e){
		this.searchBySku();
		console.log(this.state.searchBySku);
		console.log(this.state.searchByRetailer);
	}

  render() {
    return (
      <div>
      	<div>
			<h1>Escolha o tipo de pesquisa</h1>
			<Link to="/by-title"> <button>Buscar por título</button> </Link>
			<Link to="/by-sku"> <button> Buscar por sku + retailer </button> </Link> 	
		</div>
      	<Title title={this.props.title}/>
      	<input onChange={this.handleChangeSku.bind(this)} placeholder="sku"/>
      	<input onChange={this.handleChangeRetailer.bind(this)} placeholder="retailer"/>
      	<button	onClick={this.buttonOnClick.bind(this)}> Buscar</button>
      	<div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>
      </div>
    );
  }
}