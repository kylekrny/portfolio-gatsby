import React, { Component } from 'react'


export default class ColorChange extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      showButton: true,
      colorActive : false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleClass = this.toggleClass.bind(this)
  }


  toggleClass() {
    const currentState = this.state.colorActive
    this.setState({colorActive: !currentState})
  }

    handleClick() {
      this.setState(prevState => ({
        showColors: !prevState.showColors,
        showButton: !prevState.showButton,
      }));
    }

    changeColor = (key) => {
      document.body.className = key
    }

    // changeColor = (color, color2) => {
    //   document.body.style.backgroundColor = color
    //   document.body.style.color = color2

    // }

    renderColors = () => {
      const classes = ['body-white', 'body-blue', 'body-black', 'body-red', 'body-turqoise', 'body-pink', 'body-green']
      const circles = []

      for (let i = 0; i < classes.length; i++) {
        circles.push(<span className={'color-circle ' + classes[i] } onClick={() => this.changeColor(classes[i])}></span>)
      }

      return circles
    }

    // renderCircles = () => {
    //   const colors = ['rgb(239, 233, 244)', 'rgb(165, 195, 247)', 'rgb(36, 35, 37)', '#D2302C', '#358597', '#F4B5B7', '#132A13']
    //   const altColors = ['#000000', '#05265E', '#ffffff', '#FFFFFF', '#F4A896', '#2F004F', '#E5BE9E']
    //   const circles = []
    //   const activeColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color')
    
    //   for (let i = 0; i < colors.length; i++) {
    //         if (colors[i] === activeColor ) {
    //           circles.push(<span className='color-circle color-circle-active' key={colors[i]} onClick={() => changeColor(colors[i], altColors[i])} style={{backgroundColor: colors[i]}}></span>)
    //         } else (
    //           circles.push(<span className='color-circle' key={colors[i]} onClick={() => changeColor(colors[i], altColors[i] )} style={{backgroundColor: colors[i]}}></span>)
    //         )
    //     }
    //   }


  render() {


    
        const circles = (
          <div className='color-row'>
          {this.renderColors()}
          <button onClick={this.handleClick}> &larr;</button>
          </div>
        )
    

    const renderButton = (
        <button className='color-button' onClick={this.handleClick}>Color ></button>
      )
    
    

    return (

    <div className='color-switch-container-closed'>
      {this.state.showButton ? renderButton : ''}
      {this.state.showColors ? circles : ''}
    </div>

    )
  }
};

