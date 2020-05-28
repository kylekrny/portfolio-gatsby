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
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter = () => {
    this.setState( ({
      showInfo: true,
    }));
  }

  handleExit = () => {
    this.setState( ({
      showInfo: false,
    }));
  }


  renderWorkInfo = (data) => {
      const liveButton = <a className='work-card-link' href={data.URL} rel="noopener noreferrer" target='_blank'>View Project</a>
      const noLiveButton = <a className='work-card-link-inactive' href="#">Coming Soon</a>

    return (
      <div className='work-card-info-container' key={data.Title}>
        <h3 className='work-card-subtitle'>{data.Subtitle}</h3>
        <h3 className='work-card-date'>{data.Completion}</h3>
        {data.Live ? liveButton : noLiveButton}
      </div>
    )
  }

  renderLogo = (data) => {
    return (
      <div className="logo-container">
        {data.Title2 ? <h1 className='work-card-logo'>{data.Title}<span className={data.Class2}>{data.Title2}</span></h1> :  <h1 className='work-card-logo'>{data.Title}</h1>}
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
        <div className={`${data.Class} work-card`} key={index} onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit}>
            {this.state.showInfo ? this.renderWorkInfo(data) : this.renderLogo(data)}

        </div>
      )})}

      </div>
    )
  }
};


