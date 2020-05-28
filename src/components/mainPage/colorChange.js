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
    this.toggleMode = this.toggleMode.bind(this)
  }


  toggleMode(id) {
    
  }

    handleClick(color) {
      this.setState(prevState => ({
        lightMode: !prevState.lightMode,
      }));

      document.body.className = color
    }



    renderColors = () => {
      const classes = ['body-white', 'body-blue', 'body-black', 'body-red', 'body-turqoise', 'body-pink', 'body-green']
      const circles = []

      for (let i = 0; i < classes.length; i++) {
        circles.push(<span className={'color-circle ' + classes[i]} id={classes[i]} onClick={() => this.changeColor(classes[i]) + this.toggleClass(classes[i])}></span>)
      }

      return circles
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

