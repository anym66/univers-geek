import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Pannel extends Component {

    constructor(props){
        super(props)
        this.state = {
            pannelItems : this.props.pannelItems,
            quantity : [],
            sommePrice: [],
            totalPrice : 0
        }
    }
    componentDidMount() {
        console.log(this.props.pannelItems)
    }

    render() {
        return (
            <div  className = "contP">
                <h1>Votre pannier : {this.props.pannelItems.length} items</h1>
                <div>
                    {
                        this.props.pannelItems.map((item, index) => {
                            return<div key = {index} className = "contPannel">
                                <div className ="divImagePannel" >
                                    <img src = {item.photo} className = "imagePannel" />
                                </div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <h2>{item.uPrice} FCFA</h2>
                                    {
                                        /*<input type = "number" value={this.state.quantity[index]} onChange = {(e)=>{
                                        let temp = this.state.quantity
                                        let tempPrice = this.state.sommePrice
                                        temp[index] = e.target.value
                                        tempPrice[index] = temp[index] * item.uPrice

                                        this.setState({quantity : temp, sommePrice : tempPrice})
                                        this.state.sommePrice.map((prix) =>{
                                            this.setState({ totalPrice : parseInt(this.state.sommePrice) + parseInt(prix)})
                                        })
                                        
                                        console.log(this.state.quantity)
                                    }} min = "1" max = "5" />

                                        */
                                    }
                                    <button className = "deleteItem" onClick = {
                                        () =>{
                                            const action = { type: "RemoveInPannel", value:item };
                                            this.props.dispatch(action);
                                            //console.log(this.props.pannelItems, this.state.item)
                                        }
                                    }>
                                    <img src = "/images/corbeil.jpeg" width="30px" height="30px"/>
                                    </button>
                                </div>
                                
                            </div>
                        })
                    }
                </div>
                {/* {<input type = "number" disabled value = {this.state.totalPrice}/>} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pannelItems:state.pannelItems
    };
  };
  export default connect(mapStateToProps)(Pannel)
//export default Pannel
