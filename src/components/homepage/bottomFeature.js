import React from 'react'
import DisplayProduct from './displayProduct';

const BottomFeature = React.createClass({
  render(){
    let itemDisplay = [];
    for (let i = this.props.bottomI; i < this.props.bottomI + 4; i++){
      let item = this.props.data.tech[i]
        itemDisplay.push(<DisplayProduct itemName={item.name} src={item.image[0]} key={i}/>)
    }
    return(
      <div className="bottomFeatureCont">
      <div className="shape"></div>
      <div className="container-fluid bottomFeature">
        <button className="col-xs-1 scrollButtons" onClick={this.props.scrollLeft}>
          <i className="fa fa-chevron-left" aria-hidden="true" ></i>
        </button>
        <div className="itemDirection col-xs-10">
          {itemDisplay}
        </div>
        <button className="col-xs-1 scrollButtons" onClick={this.props.scrollRight}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    )
  }
})

export default BottomFeature