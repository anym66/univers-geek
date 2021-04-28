import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Accueil from './Accueil'
import Produit from './Produit'
import Mangas from './Mangas'
import FilmSerie from './FilmSerie'
import NavBar from './Navbar'
import ItemDetail from './ItemDetail'
import PassCommande from './PassCommande'
import Pannel from './Pannel'

function Main() {
    return (
        <div>
            <div>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route exact path = "/" component = {Accueil}/>
                        <Route path = "/mangas" component = {Mangas}/>
                        <Route path = "/products" component = {Produit}/>
                        <Route path = "/filmserie" component = {FilmSerie}/>
                        <Route path = "/itemdetail/:idItem" component = {ItemDetail}/>
                        <Route path = "/passcommande" component = {PassCommande}/>
                        <Route path = "/pannel" component = {Pannel}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Main