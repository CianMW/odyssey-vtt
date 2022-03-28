import React, { Component } from 'react'
 
import StarfieldAnimation from "react-starfield-animation"
 
class StarryBackground extends Component {
  render () {
    return (
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh'
        }}
      />
    )
  }
}

export default StarryBackground