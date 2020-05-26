import React, { Component } from 'react'
import FilterRow from './skills/filterRow'


export default class Skills extends Component {

  render() {
    
    return (
      <div id="skills">
        <h5 className='title-large skills-title'>Skills</h5>
        <h5 className='title-small skills-title'>To pay the bills</h5>
        <div className="skill-filter-container">
          <FilterRow/>
        </div>
      </div>
    )
  }
};


