import React, {Component} from 'react'
import {Canvas} from 'react-three-fiber'

export default class About extends Component {
  render() {
    return (
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" arcs={[1, 1, 1]} />
        </mesh>
      </Canvas>
    )
  }
}
