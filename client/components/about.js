import ReactDOM from 'react-dom'
import React, {Suspense, useEffect, useRef, useMemo} from 'react'
import {Canvas, Dom, useLoader, useFrame} from 'react-three-fiber'
import {TextureLoader, LinearFilter} from 'three'
import lerp from 'lerp'
// import {Text, MultilineText} from './assets/Text'
// import Diamonds from "./diamonds/Diamonds"
// import Plane from './assets/Plane'
import {Block, useBlock} from './blocks'
import state from './storie'
import {HTML} from 'drei'
// import "./styles.css"

function About() {
  return (
    <>
      <Canvas
        concurrent
        pixelRatio={1}
        orthographic
        camera={{zoom: state.zoom, position: [0, 0, 500]}}
      />
    </>
  )
}

export default About
