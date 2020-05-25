import React, { Component } from 'react'
import JSONData from '../../data/content.json'
import Image from '../image'
import Fade from 'react-reveal/Fade';

export default class WorkCard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,

    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = () => {
    this.setState(prevState => ({
      showInfo: !prevState.showInfo,
    }));
  }


  renderWorkInfo = (data) => {
      const liveButton = <a className='work-card-link' href={data.URL} rel="noopener noreferrer" target='_blank'>View Project</a>
      const noLiveButton = <a className='work-card-link-inactive' href="#" onclick="return false;">Coming Soon</a>

    return (
      <div className='work-card-info-container'>
        <h1 className='work-card-title'>{data.Title}</h1>
        <h3 className='work-card-subtitle'>{data.Subtitle}</h3>
        <h3 className='work-card-date'>{data.Completion}</h3>
        <p className='work-card-description'>{data.Description}</p>
        {data.Live ? liveButton : noLiveButton}
      </div>
    )
  }

  renderImage = (data) => {
    return(
      <Image filename={data.Image.Filename}/>
    )
  }


  render() {




    return (
      <div className='work-card-container'>
          {JSONData.MyWorkContent.map((data, index) => {
      return (
        <div className="work-card" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={{backgroundImage: 'url(./../../images/work-01.png)'}}>
         
        </div>
      )})}

      </div>
    )
  }
};


