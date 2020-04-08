import React, { Component } from 'react'
import JSONData from '../../data/content.json'


class Experience extends Component {


  render() {
    const card = (
      <div className='exp-card-container'>
      {JSONData.Content.map((data) => {
        return (
          <div className="exp-card">
              <h4 className='exp-card-time'>{data.Time}</h4>
              <h6 className='exp-card-company'>{data.Head}</h6>
              <p className='exp-card-description'>{data.Description}</p>
          </div>
        )
      })}
      </div>
    );

    return (
      <div id='experience'>
        <div id="experience-head">
          <div>
          <h5 id='exp-title-small'>Professional</h5>
          </div>
          <div>
          <h5 id='exp-title-large'>Synopsis</h5>
          </div>
        </div>
          {card}
      <div className="button-container">
        <button id='resume-button'>Resume / CV</button>
      </div>
      </div>
    )
  }
};

export default Experience
