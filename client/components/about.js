import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {VRButton} from 'three/examples/jsm/webxr/VRButton'

export default class About extends Component {
  componentDidMount() {
    let scene, camera, renderer
    function init() {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
      )
      camera.position.set(-900, -200, -900)

      renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      let controls = new THREE.OrbitControls(camera)
      controls.addEventListener('change', renderer)

      let materialArray = []
      let texture_ft = new THREE.TextureLoader().load('arid2_ft.jpg')
      let texture_bk = new THREE.TextureLoader().load('arid2_bk.jpg')
      let texture_up = new THREE.TextureLoader().load('arid2_up.jpg')
      let texture_dn = new THREE.TextureLoader().load('arid2_dn.jpg')
      let texture_rt = new THREE.TextureLoader().load('arid2_rt.jpg')
      let texture_lt = new THREE.TextureLoader().load('arid2_lt.jpg')

      materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_lt}))
    }

    // var scene = new THREE.Scene()
    // var camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100)
    // var renderer = new THREE.WebGLRenderer()
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // document.body.appendChild(renderer.domElement)

    // {
    //   const color = 0xffffff
    //   const intensity = 1
    //   const light = new THREE.DirectionalLight(color, intensity)
    //   light.position.set(-1, 2, 4)
    //   scene.add(light)
    // }

    // const geometry = new THREE.BoxGeometry(1, 1, 1)

    // let material = new THREE.MeshPhongMaterial({color: 0xcf9e0c})

    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)
    // camera.position.z = 3
    // const animate = function() {
    //   requestAnimationFrame(animate)
    //   cube.rotation.x += 0.01
    //   cube.rotation.y += 0.01
    //   renderer.render(scene, camera)
    // }
    // animate()

    //REMAIN commented out vvv
    // const bgScene = new THREE.Scene()
    // let bgMesh
    // {
    //   const loader = new THREE.TextureLoader()
    //   const texture = loader.load(
    //     'https://threejsfundamentals.org/threejs/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg'
    //   )
    //   texture.magFilter = THREE.LinearFilter
    //   texture.minFilter = THREE.LinearFilter

    //   const shader = THREE.ShaderLib.equirect
    //   material = new THREE.ShaderMaterial({
    //     fragmentShader: shader.fragmentShader,
    //     vertexShader: shader.vertexShader,
    //     uniforms: shader.uniforms,
    //     depthWrite: false,
    //     side: THREE.BackSide
    //   })
    //   material.uniforms.tEquirect.value = texture
    //   const plane = new THREE.BoxBufferGeometry(2, 2, 2)
    //   bgMesh = new THREE.Mesh(plane, material)
    //   bgScene.add(bgMesh)
    // }
  }

  render() {
    console.log('THREE=>', THREE)
    console.log('ORBIT CONTROLS=>', OrbitControls)
    console.log('VRButton=>', VRButton)
    return (
      <div>
        <h1>About Three Budget Viewer</h1>
      </div>
    )
  }
}
