import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="App">
        <nav className="navbar">
            <div className="navbar-inline-block">
              <div className="navbar-inline-block-div">Upcoming
                <img src="https://img.pngio.com/red-dot-dot-dots-icon-with-png-and-vector-format-for-free-red-dot-png-512_512.png"
                      alt="Live"height="15px" width="15px"></img>
              </div>
              <div>Live Consultation</div>
            </div>
            <div>Buys Plans</div>
            <div>View Plans</div>
            <div className="btn-login">Log In</div>
        </nav>
        <div className="text">Concept Videos</div>
        <div className="navigation-btn">
          <button 
            onClick={() => this.nextProperty()} 
            disabled={property.index === data.properties.length-1}
          ><img height="50px" width="50px"
          src="data:image/png;base64,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" alt="next"/></button>
          <button 
            onClick={() => this.prevProperty()} 
            disabled={property.index === 0}
          ><img height="50px" width="50px"
          src="data:image/jpeg;base64,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"
          alt="prev" /></button>
        </div>
        <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;