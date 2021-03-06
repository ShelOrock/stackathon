import React from 'react';
import { ReactReduxContext } from 'react-redux'
import { Canvas } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';

import Sky from './Sky';
import OrbitControls from './OrbitControls'
import Lights from './Lights';
import GroundPlane from './GroundPlane';
import Composition from './Composition/Composition';

export default () => {

  const ContextBridge = useContextBridge(ReactReduxContext);

  return (
    <Canvas
      shadows
      camera={{ position: [80, 50, 90] }
    }
    >
      <ContextBridge>
        <Sky />
        <OrbitControls />
        <Lights />
        <GroundPlane />
        <Composition />
      </ContextBridge>
    </Canvas>
  )
}

// export default () => {

//   const dispatch = useDispatch();
//   const ref = useRef<HTMLDivElement>();

//   const { rooms, doors, windows } = useTypedSelector(state => state);

//   useEffect(() => {
//     const mount = ref.current;
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
//     camera. = 1500;
//     camera.position.y = 600;
//     camera.position.z = 1300;
//     camera.lookAt(scene.position);

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const controls = new OrbitControls(camera, renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const spotLight = new THREE.DirectionalLight(0xffffff, 0.8);
// scene.add(spotLight);
//     spotLight.castShadow = true;

//     const spotLightHelper  = new THREE.SpotLightHelper(spotLight);
//     scene.add(spotLightHelper);
//     const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
//     scene.add(cameraHelper)

//     scene.add(spotLight);

//     const groundPlane = new THREE.Mesh(
//       new THREE.PlaneBufferGeometry(2000, 2000),
//       new THREE.MeshBasicMaterial({ color: 0xfdffe1 })
//     );
    
//     scene.add(groundPlane);
//     groundPlane.rotationX = -Math.PI / 2;
//     groundPlane.receiveShadow = true;

//     rooms.forEach(room => {
//       let mesh = new THREE.Mesh(
//         new THREE.BoxGeometry(
//           room.width,
//           room.zAxis * 100,
//           room.height
//         ),
//         new THREE.MeshBasicMaterial({ color: 0xf7d6d6 })
//       );

//       scene.add(mesh);
//       mesh.position.set(
//         room.xPos - (1000 - room.width / 2),
//         4,
//         room.yPos - (1000 - room.height / 2)
//       );

//       mesh.castShadow = true;
//       mesh.receiveShadow = true;
//     });

//     doors.forEach(door => {
//       let mesh = new THREE.Mesh(
//         new THREE.PlaneBufferGeometry(door.width, 50),
//         new THREE.MeshBasicMaterial({ color: 0xfdffe1, side: THREE.DoubleSide })
//       );

//       scene.add(mesh);
//       mesh.position.set(
//         door.xPos,
//         4,
//         door.yPos
//       );
//     });

//     windows.forEach(window => {
//       let mesh = new THREE.Mesh(
//         new THREE.PlaneBufferGeometry(25, 25),
//         new THREE.MeshBasicMaterial({ color: 0x000000 }),
//       );
  
//       scene.add(mesh);
//       mesh.position.set(
//         window.xPos,
//         20,
//         window.yPos,
//       );
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     mount.appendChild(renderer.domElement);
//     animate();

//     return () => {}
//   }, [])

//   return <div className='sceneBackground' ref={ ref } />
// };

// class Environment extends Component {
//   componentDidMount() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       40,
//       window.innerWidth / window.innerHeight,
//       1,
//       10000,
//     );

//     camera.position.x = 1500;
//     camera.position.y = 600;
//     camera.position.z = 1300;
//     camera.lookAt(scene.position);

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMapEnabled = true;

//     const controls = new OrbitControls(camera, renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0x090909);
//     scene.add(ambientLight);

//     const spotLight = new THREE.SpotLight();
//     spotLight.position.set(100, 8, 300);
//     spotLight.castShadow = true;
//     scene.add(spotLight);

//     this.mount.appendChild(renderer.domElement);

//     const plane = new THREE.Mesh(
//       new THREE.PlaneBufferGeometry(2000, 2000, 10, 10),
//       new THREE.MeshBasicMaterial({ color: 0xfdffe1, side: THREE.DoubleSide }),
//     );

//     scene.add(plane);
//     plane.rotateX(-Math.PI / 2);
//     plane.receiveShadow = true;

//     this.props.elements.forEach(element => {
//       let mesh = new THREE.Mesh(
//         new THREE.BoxGeometry(
//           element.width,
//           element.zAxis * 100,
//           element.height,
//         ),
//         new THREE.MeshBasicMaterial({ color: 0xe1c699 }),
//       );

//       scene.add(mesh);
//       mesh.position.set(
//         element.xPos - element.width / 2 - 300,
//         2,
//         element.yPos - element.height / 2 - 300,
//       );
//       mesh.castShadow = true;
//       mesh.receiveShadow = true;
//     });

//     this.props.doors.forEach(door => {
//       let mesh = new THREE.Mesh(
//         new THREE.PlaneBufferGeometry(door.width, 50),
//         new THREE.MeshBasicMaterial({ color: 0x000000 }),
//       );

//       scene.add(mesh);
//       mesh.position.set(
//         door.xPos - door.width / 2 - 300,
//         2,
//         door.yPos - door.height / 2 - 300,
//       );
//     });

//     this.props.windows.forEach(window => {
//       let mesh = new THREE.Mesh(
//         new THREE.PlaneBufferGeometry(25, 25),
//         new THREE.MeshBasicMaterial({ color: 0x000000 }),
//       )

//       scene.add(mesh);
//       mesh.position.set(
//         window.xPos - window.width / 2 - 300,
//         20,
//         window.yPos - window.height / 2 - 300,
//       )
//     })

//     new Array(100).fill('').forEach(item => {
//       let cone = new THREE.Mesh(
//         new THREE.ConeGeometry(40, 100, 32),
//         new THREE.MeshBasicMaterial({ color: 0x90ee90 }),
//       );
//       scene.add(cone);
//       cone.castShadow = true;
//       let randomize = Math.ceil(Math.random() * 4)
//       if(randomize === 4) {
//       cone.position.set(Math.random() * 1000, 2, Math.random() * 1000);
//       } else if(randomize === 3) {
//         cone.position.set(Math.random() * -1000, 2, Math.random() * 1000)
//       } else if(randomize === 2) {
//         cone.position.set(Math.random() * 1000, 2, Math.random() * -1000)
//       } else {
//         cone.position.set(Math.random() * -1000, 2, Math.random() * -1000)

//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();
//   }

//   render() {
//     return <div className='sceneBackground' ref={mount => (mount = mount)} />;
//   }
// }

// const mapState = ({ elements, doors, windows }) => ({
//   elements,
//   doors,
//   windows,
// });

// export default connect(mapState)(Environment);
