import React from 'react'
import './Button.css'
/* eslint-disable */


class Button extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { changeSlide = () => { }, icon } = this.props
        return <button className='btn' onClick={changeSlide}>
            <i className={icon}></i>
        </button>
    }
}

export default Button