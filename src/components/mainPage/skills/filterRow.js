import React, { Component } from 'react'


export default class FilterRow extends Component {

  render() {
    
    return (
        <>
          <ul className='skill-filter'>
            <ul className='skill-filter-item-active'>Front End</ul>
            <ul className='skill-filter-item'>Back End</ul>
            <ul className='skill-filter-item'>Dev Ops</ul>
            <ul className='skill-filter-item'>Design</ul>
            <ul className='skill-filter-item'>Soft Skills</ul>
            <ul className='skill-filter-item'>Still Installing</ul>
          </ul>
        </>
    )
  }
};

