import React, { Component, useState } from 'react'
import firebase from '../firebaseConfig'

function PassCommande() {

    const [name, setName] = useState('')
    const [commandeItem, setCommandeItem] = useState('')
    const [quantity, setQuantity] = useState(1)
    
     const createCommande=() =>{
        const commandeDB = firebase.database().ref("commandeDB")

        const commande = {
            name,
            commandeItem,
            quantity
        }
    commandeDB.push(commande)
    alert('Votre commande a été bien enregistré')

        
    setCommandeItem('')
    setQuantity(1)
    setName('')
        
    }
        return (
            <div className="container">
                <div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">votre nom</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" 
                            placeholder="votre nom"
                            name = "name" onChange = {(e) =>setName(e.target.value)} value={name}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">le produit à commander</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" 
                            placeholder="votre nom"
                            name = "itemName" onChange = {(e) => setCommandeItem(e.target.value)} value={commandeItem}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">la quantié</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" 
                            placeholder="votre nom"
                            name = "quantityItem" onChange = {(e) => setQuantity(e.target.value)} value = {quantity}
                            />
                        </div>
                        <button className="btn btn-danger" type = "submit" onClick = {createCommande}>Valider</button>
                        
                </div>
                
            </div>
        )
    }

export default PassCommande
