import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,  } from '@react-three/fiber'
import { Html, useGLTF, Plane, Text, MeshWobbleMaterial, MeshPortalMaterial, CameraControls, Billboard, OrbitControls, Stars, Float, Text3D} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Scene() {
  const [placement, setPlacement] = useState(0)
  const [chess, setChess] = useState(false)
  const [golf, setGolf] = useState(false)
  const [art, setArt] = useState(false)
  const [books, setBooks] = useState(false)
  const [rs, setRs] = useState(false)
  const [com, setCom] = useState(false)


  function Room() {
    const gltf = useLoader(GLTFLoader, 'Room.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      console.log("clicked Room")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function RoomUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Room />
        </mesh>
      </group>
    );
  }
  
  function Easel() {
    const gltf = useLoader(GLTFLoader, 'Easel.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setArt(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function EaselUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Easel />
        </mesh>
      </group>
    );
  }

  function Con() {
    const gltf = useLoader(GLTFLoader, 'ConCom.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      window.open("./main.html")
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function ConUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Con />
        <mesh position={[0.4, placement + 2, -2.5]} >
            <Text fontSize={.3}>
                  *Contact*
            </Text>
        </mesh>
        </mesh>
      </group>
    );
  }

  function Books() {
    const gltf = useLoader(GLTFLoader, 'Books.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setBooks(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function BooksUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Books />
        </mesh>
      </group>
    );
  }

  function Golf() {
    const gltf = useLoader(GLTFLoader, 'Golf.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setGolf(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function GolfUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Golf />
        </mesh>
      </group>
    );
  }


  function Chess() {
    const gltf = useLoader(GLTFLoader, 'Chess.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      console.log("chess")
      setChess(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function ChessUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Chess />
        </mesh>
      </group>
    );
  }
  function Rs() {
    const gltf = useLoader(GLTFLoader, 'RsCom.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setRs(true)
      setPlacement(5)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function RsUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Rs />
        </mesh>
      </group>
    );
  }
  function ChessText() {
    const handleClick = () => {
      console.log("chess")
      setChess(false)
      setPlacement(0)
    };
    if (chess)
    return (
  <Suspense>
    <Billboard>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>I love chess because every</Text>
        <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>match tells its own unique story. </Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>The process of learning/improving </Text>
        <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>is so very fun to me! Similarly to </Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>coding, there is always more to be learned</Text>
        <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>about chess.</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }

  function GolfText() {
    const handleClick = () => {
      console.log("chess")
      setGolf(false)
      setPlacement(0)
    };
    if (golf)
    return (
  <Suspense>
    <Billboard>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>Golf has become an excellent</Text>
        <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>way to spend quality time with </Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>my brother and Dad. Before</Text>
        <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>I played this sport I had assumed it would </Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>be easy "just hit the ball with the </Text>
        <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>stick!" Boy was I wrong haha.</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }

  function ArtText() {
    const handleClick = () => {
      console.log("chess")
      setArt(false)
      setPlacement(0)
    };
    if (art)
    return (
  <Suspense>
    <Billboard>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>I love to make, view, and study</Text>
        <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>art. The main medium I use is</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>Acrylics. My favorite artist</Text>
        <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>(besides my partner ;p) is </Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>Van Gogh, theres something about </Text>
        <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>his style that I just love!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }

  function BooksText() {
    const handleClick = () => {
      console.log("chess")
      setBooks(false)
      setPlacement(0)
    };
    if (books)
    return (
  <Suspense>
    <Billboard>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>"The more that you read, the more </Text>
        <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>things you will know. The more</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>that you learn, the more places</Text>
        <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>you'll go." - Dr. Seuss </Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>I don't have a favorite genre,</Text>
        <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>I love all books!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }
  function RsText() {
    const handleClick = () => {
      console.log("chess")
      setRs(false)
      setPlacement(0)
    };
    if (rs)
    return (
  <Suspense>
    <Billboard>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.2}>I've played video games since</Text>
        <Text color={"#ffff00"} position={[0, .7, 0]} fontSize={.2}>I was a little boy. The landing</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.2}>page that you got here through</Text>
        <Text color={"#ffff00"} position={[0, .1, 0]} fontSize={.2}>is a reference to one of my</Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.2}>all time favorites! Old School</Text>
        <Text color={"#ffff00"} position={[0, -.5, 0]} fontSize={.2}>RuneScape, wonderful nostalgia!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.15}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }
    return (
      <Canvas shadows style={{ background: "linear-gradient(70deg, #940B92, #864AF9, #0F0F0F)", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} camera={{ position: [1.2, 1.4, 1.4] }}>
        <Suspense>
        <directionalLight />
        <ambientLight intensity={1.0}/>
        <Float>
        <RoomUse />
        <ChessUse />
        <EaselUse />
        <RsUse />
        <ConUse />
        <BooksUse />
        <GolfUse />
        <ChessText />
        <GolfText />
        <ArtText />
        <BooksText />
        <RsText />
        </Float>
        <OrbitControls maxDistance={5} minDistance={.6} enablePan={false} maxAzimuthAngle={1.7} minAzimuthAngle={-.3} maxPolarAngle={2} enableDamping enableRotate enableZoom/>
        <Stars />
        </Suspense>
      </Canvas>
  )
}
