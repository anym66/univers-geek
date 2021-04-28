import React, { Component } from 'react'
import firebase from '../firebaseConfig'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { BsFillArchiveFill } from "react-icons/bs"
export class ItemDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            item : {},
        }
    }

    componentDidMount() {
        const dataId = parseInt(this.props.match.params.idItem)-1
        console.log(dataId)
        const listTemp = firebase.database().ref('databasegeek')
        listTemp.on('value', (snapshoot) =>{
        //console.log(snapshoot.val()[dataId])
            this.setState({item : snapshoot.val()[dataId]})
        })

        console.log("mon tab", this.props.pannelItems)
    }
    
    handleAddPannel = () =>{
        const action = { type: "addInPannel", value:this.state.item };
        this.props.dispatch(action);
        console.log(this.props.pannelItems, this.state.item)
      
    }

    render() {
        return (
            <div className = "contCont">
                <div className = "contItem">
                    <div>
                        <img src = {this.state.item.photo}/>
                    </div>
                    <div className="itemText">
                        <h1> {this.state.item.name} </h1>
                        <h5>Description : </h5><h5 className="detail">{this.state.item.description}</h5><br/>
                        <h5>Date de sortie : </h5><h5 className = "detail"> {this.state.item.dateOf}</h5>
                        <h2 className="price"> {this.state.item.uPrice} FCFA</h2><br/>
                    </div>
                </div>
                <div>
                    <button className="btn btn-danger btn-lg" onClick = {this.handleAddPannel}>
                    Ajouter au panier 
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        pannelItems:state.pannelItems
    };
  };
  export default connect(mapStateToProps)(ItemDetail)


//export default ItemDetail
