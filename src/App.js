import React from 'react';
import './App.css';

import Button from './component/buttons/Button'
import Picture from './component/Picture/Picture'

/* eslint-disable */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 1
    }
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      imgIndex: prevState.imgIndex + 1
    }))
  }

  prevSlide = () => {
    if (this.state.imgIndex > 1) {
      this.setState((prevState) => ({
        imgIndex: prevState.imgIndex - 1
      }))
    }
  }



  render() {
    return (
      <div className='App'>
        <Picture index={this.state.imgIndex} />
        <Button changeSlide={this.nextSlide} icon='fa-solid fa-chevron-right' />
        <Button changeSlide={this.prevSlide} icon='fa-solid fa-chevron-left' />
      </div>
    );
  }
}

export default App;
