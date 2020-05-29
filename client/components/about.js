import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import {OrbitControls} from 'three-orbitcontrols-ts'

export default class About extends Component {
  componentDidMount() {
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100)
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    // var geometry = new THREE.BoxGeometry(1, 1, 1, 1)
    //var material = new THREE.MeshBasicMaterial({color: 0x34abeb})

    {
      const color = 0xffffff
      const intensity = 1
      const light = new THREE.DirectionalLight(color, intensity)
      light.position.set(-1, 2, 4)
      scene.add(light)
    }

    //   const boxWidth = 1;
    // const boxHeight = 1;
    // const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    let material = new THREE.MeshPhongMaterial({color: 0xcf9e0c})

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 3
    const animate = function() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
    const bgScene = new THREE.Scene()
    let bgMesh
    {
      const loader = new THREE.TextureLoader()
      const texture = loader.load(
        'https://threejsfundamentals.org/threejs/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg'
      )
      texture.magFilter = THREE.LinearFilter
      texture.minFilter = THREE.LinearFilter

      const shader = THREE.ShaderLib.equirect
      material = new THREE.ShaderMaterial({
        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
      })
      material.uniforms.tEquirect.value = texture
      const plane = new THREE.BoxBufferGeometry(2, 2, 2)
      bgMesh = new THREE.Mesh(plane, material)
      bgScene.add(bgMesh)
    }
  }

  render() {
    return (
      <div>
        <h1>About Three Budget Viewer</h1>
      </div>
    )
  }
}
