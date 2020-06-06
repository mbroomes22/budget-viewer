import React, {Component, useState, useRef} from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {Canvas, extend, useThree, useFrame} from 'react-three-fiber'
import {useSpring, a} from 'react-spring/three'

extend({OrbitControls})

const Controls = () => {
  const {camera, gl} = useThree()
  const orbitRef = useRef()

  useFrame(() => {
    orbitRef.current.update()
  })

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}

const Box = () => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? '#ffaac3' : '#b063c5'
  })

  return (
    <a.mesh
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
        <Controls />
        <Box />
      </Canvas>
    )
  }
}
