import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Image from '../image'
import Fade from 'react-reveal/Fade';

class WorkCard extends Component {


  render() {

    const sideRender = (index, type) => {
      const indexNum = parseInt((index + 1) % 2)
      switch(type) {
        case 'image':
          switch (indexNum) {
            case 0:
              return 'even work-image-side'
            default:
              return 'odd work-image-side'
          }
        case 'text':
          switch (indexNum) {
            case 0:
              return 'even work-text-side' 
            default:
              return 'odd work-text-side'
          } 
        case 'animate':
          switch (indexNum) {
            case 0:
              return 'left' 
            default:
              return 'right'
          } 
      }
    }


    return (
      <div id='work-card-container'>
          {JSONData.MyWorkContent.map((data, index) => {
      return (
       <div className="work-card">
          <div index={index} className={sideRender(index, 'image')}>
            <Fade delay={200}>
              <div className="image-container1">
                <Image filename={data.Images.Filename1}/>
              </div>
              <div className="image-container2">
                <Image filename={data.Images.Filename2}/>
              </div>
            </Fade>
          </div>
          <Fade delay={200}>
            <div className={sideRender(index, 'text')}>
                  <p className='work-card-title'><a href={data.URL}>{data.Title}</a></p>
                  <p className= 'work-card-subtitle'>{data.SubTitle}</p>
                  <p className='work-card-description'>{data.Description}</p>
            </div>
          </Fade>
        </div>

      )})}

      </div>
    )
  }
};

export default WorkCard
