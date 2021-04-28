import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebaseConfig'
import 'antd/dist/antd.css'
import {Pagination} from 'antd'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class Accueil extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listItems : [],
            searchItem : "",
            currentPage : 1,
            number : 8
        }
    }

    selectHandleChange = value => {
        this.setState({
          currentPage: value
        });
      };

    componentDidMount() {
        const listTemp = firebase.database().ref('databasegeek')
        listTemp.on('value', (snapshoot) =>{
            console.log(snapshoot.val())
            this.setState({listItems : snapshoot.val()})
        })

        console.log(this.state.listItems)
    }

    handleSearch = (e) =>{
        this.setState({searchItem : e.target.value})
    }
    

    render() {
        const indexOfLastLog = this.state.currentPage * this.state.number;
        const indexOfFirstLog = indexOfLastLog - this.state.number

        return (
            <div>
                
                   <div class="album py-5 bg-light">
                   
                        <div class="container">
                          
                        <form class="d-flex">
                            <input className="form-control me-2 mt-3 mb-5" type="text" placeholder="Search" aria-label="Search" 
                                value = {this.state.searchItem} onChange = {this.handleSearch}/>
                        </form>
                            <div class="row">
                            {
                                this.state.listItems.filter((val)=>{
                                    return val.name.toLowerCase().includes(this.state.searchItem)})
                                .slice(indexOfFirstLog, indexOfLastLog)
                                .map((val) =>{
                                        return(
                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" src={val.photo} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h1 className="card-text">{val.name}</h1>
                                                <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <Link to = {`/itemdetail/${val.id}`}>
                                                        <button type="button" className="btn btn-secondary">Voir Plus</button>
                                                    </Link>
                                                    <button class="btn btn-danger">{val.category}</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        ) })}
                        </div>
                    </div>
                </div>
                <div className="pagination_div">
                <Pagination
                    defaultCurrent={this.state.currentPage}
                    defaultPageSize={this.state.number} 
                    pageSize={this.state.number}
                    onChange={this.selectHandleChange}
                    total={this.state.listItems.length > 0 && this.state.listItems.length}
                />
                </div>
            </div>

        )
    }
}

export default Accueil
