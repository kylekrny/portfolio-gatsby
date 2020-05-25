import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Image from '../image'
import Fade from 'react-reveal/Fade';

export default class WorkCard extends Component {




  render() {

    workInfo = (
      <>
      </>
    )


    return (
      <div className='work-card-container'>
          {JSONData.MyWorkContent.map((data, index) => {
      return (
        <div className="work-card">
          <Image filename={data.Image.Filename}/>
        </div>
      )})}

      </div>
    )
  }
};


