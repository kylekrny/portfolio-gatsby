import React, { Component } from 'react'
import JSONData from '../data/content.json'
import Image from './image'

class WorkCard extends Component {



  render() {
    const data = JSONdata.MyworkContent


    const sideRender = (index, type) => {
      const indexNum = parseInt(index)
      switch(type) {
        case 'image':
          switch (indexNum) {
            case 0,2,4,6,8,10:
              return 'even work-image-side'
            case 1,3,5,7,9,11:
              return 'odd work-image-side' 
          }
        case 'text':
          switch (indexNum) {
            case 0,2,4,6,8,10:
              return 'even work-text-side'
            case 1,3,5,7,9,11:
              return 'odd work-text-side'
          } 
      }
    }
 

  
  
    return (
      <div id='work-card-container'>
          {JSONData.MyWorkContent.map((data, index) => {
      return (
       <div className="work-card">
          <div className={sideRender(index, 'image')}>
              
          </div>
          <div className={sideRender(index, 'text')}>

          </div>

        </div>

      )})}

      </div>
    )
  }
};

export default WorkCard
