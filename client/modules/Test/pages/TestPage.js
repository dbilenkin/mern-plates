import React, { Component } from 'react';
import States from '../svg/states.svg.react';

// Import Style
import styles from './TestPage.css';
import StatePath from '../components/StatePath';
import stateData from '../data/stateData.json';

class Test extends Component {
  constructor(props) {
    super(props);
    console.log(stateData);
    const selected = { selected: false };
    Object.keys(stateData).forEach(key => {
      stateData[key].selected = false;
      stateData[key].id = key;
    });
    this.state = {
      states: Object.values(stateData)
    };
    console.log(this.state.states);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    console.log("handleClick state: " + JSON.stringify(this.state.states));
    let states = [...this.state.states];
    states = states.map(state => {
      if (state.id === value.target.id) {
        state.selected = !state.selected;
      }
      return state;
    })
    
    this.setState({
      states: states});
  }

  render() {

    return (
      <div className={styles['states-container']}>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <svg xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape" xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlnsSvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="us-map" preserveAspectRatio="xMinYMin meet" sodipodiDocname="Republican_Party_presidential_primaries_results,_2016.svg" inkscapeVersion="0.91 r13725" x="0px" y="0px" width="959px" height="593px" viewBox="174 100 959 593" enableBackground="new 174 100 959 593" xmlSpace="preserve">
          <sodipodiNamedview bordercolor="#666666" objecttolerance="10" pagecolor="#ffffff" borderopacity="1" gridtolerance="10" guidetolerance="10" inkscapeCx="509.19152" inkscapeCy="282.2353" inkscapeZoom="1.2137643" showgrid="false" id="namedview71" inkscapeCurrent-layer="g5" inkscapeWindow-maximized="1" inkscapeWindow-y="-8" inkscapeWindow-x="-8" inkscapePageopacity="0" inkscapeWindow-height="1017" inkscapeWindow-width="1920" inkscapePageshadow="2">
          </sodipodiNamedview >
          <g id="g5">
          
          <path id="HI" data-info="<div>State: Hawaii</div><div>Capital: Honolulu</div>" fill="#D3D3D3" d="M407.1,619.3l1.9-3.6l2.3-0.3l0.3,0.8l-2.1,3.1H407.1z M417.3,615.6l6.1,2.6l2.1-0.3l1.6-3.9   l-0.6-3.4l-4.2-0.5l-4,1.8L417.3,615.6z M448,625.6l3.7,5.5l2.4-0.3l1.1-0.5l1.5,1.3l3.7-0.2l1-1.5l-2.9-1.8l-1.9-3.7l-2.1-3.6   l-5.8,2.9L448,625.6z M468.2,634.5l1.3-1.9l4.7,1l0.6-0.5l6.1,0.6l-0.3,1.3l-2.6,1.5l-4.4-0.3L468.2,634.5z M473.5,639.7l1.9,3.9   l3.1-1.1l0.3-1.6l-1.6-2.1l-3.7-0.3V639.7z M480.5,638.5l2.3-2.9l4.7,2.4l4.4,1.1l4.4,2.7v1.9l-3.6,1.8l-4.8,1l-2.4-1.5   L480.5,638.5z M497.1,654.1l1.6-1.3l3.4,1.6l7.6,3.6l3.4,2.1l1.6,2.4l1.9,4.4l4,2.6l-0.3,1.3l-3.9,3.2l-4.2,1.5l-1.5-0.6l-3.1,1.8   l-2.4,3.2l-2.3,2.9l-1.8-0.2l-3.6-2.6l-0.3-4.5l0.6-2.4l-1.6-5.7l-2.1-1.8l-0.2-2.6l2.3-1l2.1-3.1l0.5-1l-1.6-1.8L497.1,654.1z"/>
            { Object.values(this.state.states).map( stateData => 
            <StatePath 
            id={stateData.id} 
            handleClick={this.handleClick} 
            data={stateData.data} 
            selected={stateData.selected} 
            d={stateData.d} />) }
            <g id="DC">
              <path id="path58" fill="#D3D3D3" d="M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z" />
              <circle id="circle60" data-info="<div>Washington DC</div>" fill="#D3D3D3" stroke="#FFFFFF" strokeWidth="1.5" cx="975.3" cy="351.8" r="5" />
            </g>
          </g>
        </svg >
      </div >
    );

  }
  
};

export default Test;