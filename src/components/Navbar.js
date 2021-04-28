import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <div className = "cont">
            <div className="navbar navbar-expand-md navbar-dark bg-danger">
                        <div className="container-fluid">
                            <label className="navbar-brand">GeekZone</label>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/mangas">Mangas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products" tabindex="-1" aria-disabled="true">Produits</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/filmserie" tabindex="-1" aria-disabled="true">Films&Series</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/pannel" tabindex="-1" aria-disabled="true">pannier</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/passcommande" tabindex="-1" aria-disabled="true">Commande Personnalisée</Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar

