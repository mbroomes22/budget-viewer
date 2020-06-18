import React, {createContext, useRef, useContext, createRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import lerp from 'lerp'
// import state from "./store"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: [
    '/photo-1548191265-cc70d3d45ba1.jpeg',
    '/photo-1519608487953-e999c86e7455.jpeg',
    '/photo-1533577116850-9cc66cad8a9b.jpeg'
  ],
  top: createRef()
}

const offsetContext = createContext(0)

function Block({children, offset, factor, ...props}) {
  const {offset: parentOffset, sectionHeight} = useBlock()
  const ref = useRef()
  offset = offset !== undefined ? offset : parentOffset
  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.top.current
    ref.current.position.y = lerp(curY, curTop / state.zoom * factor, 0.1)
  })
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

function useBlock() {
  const {sections, pages, zoom} = state
  const {size, viewport} = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = 1200
  const viewportHeight = 2000
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = window.screen.availWidth < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  const offsetFactor = (offset + 1.0) / sections
  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
    offsetFactor
  }
}

export {Block, useBlock}
