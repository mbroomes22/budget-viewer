import React, {Component, useState, useRef} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import {useSpring, a} from 'react-spring/three'

const Box = () => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? '#ffaac3' : '#b063c5'
  })
  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
  })

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color={props.color} />
    </a.mesh>
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
