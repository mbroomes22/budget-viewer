import React, {Component, useState} from 'react'
import {Canvas} from 'react-three-fiber'

const Box = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'lightblue'}
      />
    </mesh>
  )
}

export default class About extends Component {
  render() {
    return (
      <Canvas>
        <Box />
      </Canvas>
    )
  }
}
