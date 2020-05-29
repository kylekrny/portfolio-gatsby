import React, { Component } from 'react'


export default class ColorChange extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      showButton: true,
      lightMode : true,
    };
    this.handleClick = this.handleClick.bind(this);
  }



    handleClick(color) {
      this.setState(prevState => ({
        lightMode: !prevState.lightMode,
      }));

      document.body.className = color
    }



  render() {


    
      const darkMode = (
        <button className='color-button' onClick={() => this.handleClick('body-white')}>Dark Mode</button>
      )
    

    const lightMode = (
        <button className='color-button' onClick={() => this.handleClick('body-black')}>Light Mode</button>
      )
    
    

    return (

    <div className='color-switch-container'>
      {this.state.lightMode ? lightMode : darkMode}
    </div>

    )
  }
};

