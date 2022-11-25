import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z=1
mesh.position.x = 0.7
mesh.position.y = -0.2
// all at once mesh.position.set(0.7, -0.2, 1)

// scale
mesh.scale.set(1, 1, 1)

// rotation 
mesh.rotation.y = 3.14159

scene.add(mesh)
console.log(mesh.position.length())

/**
 * Sizes
 */
const sizes = {
    width: 300,
    height: 150
}

// AXES HELPER
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(new THREE.Vector3(1, 0, 0))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)