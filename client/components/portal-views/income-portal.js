import React, {useRef} from 'react'
import {Canvas, extend, useThree, useFrame} from 'react-three-fiber'
import {CubeTextureLoader, cubeCamera} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

extend({OrbitControls})

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {camera, gl: {domElement}} = useThree()

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef()
  useFrame(() => controls.current.update())
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={false}
    />
  )
}

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const {scene} = useThree()
  const loader = new CubeTextureLoader()
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    '/beach_night/negx.jpg',
    '/beach_night/posx.jpg',
    '/beach_night/posy.jpg',
    '/beach_night/negy.jpg',
    '/beach_night/negz.jpg',
    '/beach_night/posz.jpg' //16, 17, 33, 39
  ])
  // Set the scene background property to the resulting texture.
  scene.background = texture
  return null
}

// A simple sphere in the center of the scene that will reflect the surroundings.
function Sphere() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[0.75, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        // envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  )
}

// Lights
function Income() {
  return (
    <Canvas className="canvas">
      <CameraControls />
      <Sphere />
      <SkyBox />
    </Canvas>
  )
}

export default Income
