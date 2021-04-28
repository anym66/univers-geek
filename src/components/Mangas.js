import React, { Component } from 'react'
import firebase from '../firebaseConfig'


import { Link } from 'react-router-dom'

export class Mangas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listMangas : [],
            listMangasDef : []
        }
    }

    componentDidMount() {
        const listTemp = firebase.database().ref('databasegeek')
        listTemp.on('value', (snapshoot) =>{
            //console.log(snapshoot.val())
            this.setState({listMangas : snapshoot.val()})
        })
    }

    render() {

        return (
            <div role="main">

                <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">Mangas</h1>
                    <p class="lead text-muted">Decouvrez les dessins animés japonais les plus funs du moment. Acheter les à petit prix </p>
                </div>
                </section>
      
                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row">
                            {
                                this.state.listMangas.map((item, index) =>{
                                    if(item.category === "manga"){
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

export default Mangas
