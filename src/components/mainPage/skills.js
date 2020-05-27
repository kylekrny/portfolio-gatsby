import React, { Component } from 'react'
import SkillDisplay from './skills/skillDisplay'


export default class Skills extends Component {

  render() {
    
    return (
      <div id="skills">
        <h5 className='title-large skills-title'>Skills</h5>
        <h5 className='skills-title-small'>To pay the bills</h5>
    
          <SkillDisplay/>

      </div>
    )
  }
};


