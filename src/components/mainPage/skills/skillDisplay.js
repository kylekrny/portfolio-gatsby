import React, { Component } from 'react'
import JSONData from '../../../data/content.json'

export default class SkillDisplay extends Component {

  render() {
    
    return (
      <div id="skill-display-container">
        {JSONData.Skills[0].Children.map((data, index) => {
          return (
          <p>{data.Title}</p>
          )
        })}
        
      </div>
    )
  }
};
