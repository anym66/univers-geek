import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebaseConfig'

export class Produit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct : []
        }
    }

    componentDidMount() {
        const listTemp = firebase.database().ref('databasegeek')
        listTemp.on('value', (snapshoot) =>{
            //console.log(snapshoot.val())
            this.setState({listProduct : snapshoot.val()})
        })
    }
    

    render() {
        return (
            <div role="main">

            <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Produits</h1>
                <p class="lead text-muted">Acheter des petits gadgets derivés de vos meilleurs mangas et series</p>

            </div>
            </section>
  
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        {
                            this.state.listProduct.map((item, index) =>{
                                if(item.category === "produit"){
                                    return(
                                    <div className="col-md-4">
                                        <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={item.photo} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h1 className="card-text">{item.name}</h1>
                                            <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <Link to = {`/itemdetail/${item.id}`}>
                                                    <button type="button" className="btn btn-secondary">Voir Plus</button>
                                                </Link>
                                            </div>
                                        </div>
                                        </div>
                    </div>
                </div>
                        
                )
                    }
                })
            }
            </div>
            </div>
      </div>
    </div>
        )
    }
}

export default Produit
