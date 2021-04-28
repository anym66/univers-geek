import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebaseConfig'

export class FilmSerie extends Component {

    constructor(props){
        super(props)
        this.state = {
            listSerieFilm : []
        }
    }

    componentDidMount() {
        const listTemp = firebase.database().ref('databasegeek')
        listTemp.on('value', (snapshoot) =>{
            console.log(snapshoot.val())
            this.setState({listSerieFilm : snapshoot.val()})
        })

        console.log(this.state.listSerieFilm)
    }

    render() {
        return (
            <div role="main">

            <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Films et series SF</h1>
                <p class="lead text-muted">Decouvrez Des films et series qui vous transporteront vers d'autres univers. Acheter les à petit prix </p>
               
            </div>
            </section>
  
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        {
                            this.state.listSerieFilm.map((item, index) =>{
                                if(item.category === "filmSerie"){
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

export default FilmSerie
