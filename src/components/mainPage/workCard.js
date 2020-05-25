import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Image from '../image'
import Fade from 'react-reveal/Fade';

class WorkCard extends Component {


  render() {


    return (
      <div id='work-card-container'>
          {JSONData.MyWorkContent.map((data, index) => {
      return (
          <span class='work-card-place-holder'></span>
      )})}

      </div>
    )
  }
};

export default WorkCard
