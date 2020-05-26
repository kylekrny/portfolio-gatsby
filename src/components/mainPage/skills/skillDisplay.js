import React, { Component } from 'react'
import JSONData from '../../../data/content.json'

export default class SkillDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeOption: JSONData.Skills[0].Type
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(activeOption) {
    this.setState({ activeOption });
  }

  renderSkills(data) {

  }

  handleFilter(option) {
    switch (option) {
        case 'Front End':
          return
        case 'Back End':
          return 
        case 'Dev Ops':
          return
        case 'Soft Skills':
          return
        case 'Still Installing':
          return
    }
  }




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
