// scene
const scene  = new THREE.Scene()

// red cube
const goemetry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(goemetry, material)
scene.add(mesh)

const sizes = {
    width:400,
    height:200
}

// Camera(fov,aspectratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = -1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)