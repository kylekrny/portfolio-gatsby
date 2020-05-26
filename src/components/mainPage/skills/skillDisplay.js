import React, { Component } from 'react'
import JSONData from '../../../data/content.json'

export default class SkillDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeOption: JSONData.Skills[0]
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(activeOption) {
    this.setState({ activeOption });
  }

  // renderSkills(data) {
  //   data.Children.map((data,index) => {
  //     <h6 class='skill-display-item'>{data.Title}</h6>
      
  //   })
  // }

  handleFilter(option) {
    switch (option) {
        case 'Front End':
          return
        case 'Back End':
          return 
        case 'Dev Ops':
          return
        case 'Design':
          return
        case 'Soft Skills':
          return
        case 'Still Installing':
          return
    }
  }

  renderFilters(data, activeOption) {
    return(
      <>
        <ul className='skill-filter'>
          {data.map(data => {
            return (
            <li key={data.Type}><button className={`${activeOption.Type === data.Type? "skill-active" : ""} skill-filter-item`} onClick={() => this.handleFilterClick(data)}>{data.Type}</button></li>
            )
          })}
        </ul>
      </>
    )
  }


  render() {
    const { activeOption } = this.state;
    const data = JSONData.Skills
    
    
    return (
      <>
        {this.renderFilters(data, activeOption)}
      <div id="skill-display-container">
 
        
      </div>
      </>
    
    )
}};
