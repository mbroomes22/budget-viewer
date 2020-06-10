import React, {Component, useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Canvas, extend, useThree, useFrame} from 'react-three-fiber'
import {useSpring, a} from 'react-spring/three'

extend({OrbitControls})

// const AirCraft = () => {
//   const [model, setModel] = useState()
//   useEffect(() => {
//     new GLTFLoader().load('../../public/3d_files/airplane/scene.gltf', setModel)
//   })

//   return model ? <primitive object={model.scene} /> : null
// }

const Controls = () => {
  const {camera, gl} = useThree()
  const orbitRef = useRef()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    {/* <planeBufferGeometry attach="geometry" args={[100, 100]} /> */}
    <meshPhysicalMaterial attach="material" color="rgb(57, 15, 181)" />
  </mesh>
)

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
      castShadow
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <sphereBufferGeometry attach="geometry" args={[0.75, 32, 32]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default class Spending extends Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
    this.counter = this.counter.bind(this)
  }

  counter() {
    let countDownDate = new Date('June 31, 2020 15:30:00').getTime()

    const countdownfunction = setInterval(() => {
      let rightNow = new Date().getTime()
      let difference = countDownDate - rightNow
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      if (difference < 0) {
        clearInterval(countdownfunction)
        this.setState({display: 'EXPIRED'})
      }

      this.setState({
        display: `${days}d ${hours}h ${minutes}m ${seconds}s`
      })
    }, 1000)
  }

  render() {
    this.counter()
    return (
      <>
        <Canvas
          camera={{position: [0, 0, 5]}}
          onCreated={({gl}) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
          className="spending-canvas"
        >
          <fog attach="fog" args={['rgb(57, 15, 181)', 5, 15]} />
          <Controls />
          <Box />
          <Plane />
          {/* <AirCraft /> */}
        </Canvas>
        <div className="three-d-soon spending">
          <h2>Spending</h2>
          <h3>
            Enter a new dimension to visualize your spending and see <br />where
            your money's really going
          </h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="middle">
            <h1>COMING SOON</h1>
            <hr />
            <p id="countdown">{this.state.display}</p>
            <p>
              Return to{' '}
              <Link to="/account" className="link">
                Account Details
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
}
