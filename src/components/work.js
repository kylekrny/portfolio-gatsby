import React, { Component } from 'react'
import WorkCard from './workCard'


class Work extends Component {


  render() {
    return (
      <div id='work'>
        <h5 className='title-small work-title'>My</h5>
        <h5 className='title-large work-title'>Work</h5>
        <WorkCard/>
      </div>
    )
  }
};

export default Work
