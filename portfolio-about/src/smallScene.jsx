import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader,  } from '@react-three/fiber'
import { Html, useProgress, useGLTF, Plane, Text, MeshWobbleMaterial, MeshPortalMaterial, CameraControls, Billboard, OrbitControls, Stars, Float, Text3D} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Scene() {
  const [placement, setPlacement] = useState(0)
  const [chess, setChess] = useState(false)
  const [golf, setGolf] = useState(false)
  const [art, setArt] = useState(false)
  const [books, setBooks] = useState(false)
  const [rs, setRs] = useState(false)
  const [start, setStart] = useState(true)
  const [skel, setSkel] = useState(10)



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

  function Skel() {
    const gltf = useLoader(GLTFLoader, 'skel.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      console.log("clicked Room")
      setPlacement(0)
      setSkel(10)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function SkelUse(props) {
    return (
      <group>
        <mesh rotation={[0, 1, 0]} position={[0, skel, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Skel />
          <Text color={"red"} rotation={[0,-.54,0]} position={[-.5, 1, 0.1]} fontSize={.2}>I warned you! click skeleton to return...</Text>

        </mesh>
      </group>
    );
  }
  
  function Door() {
    const gltf = useLoader(GLTFLoader, 'door.glb');
    const group = useRef();
  
    // Handle click event
    const handleClick = () => {
      setPlacement(5)
      setSkel(0)
    };
  
    return (
      <group ref={group} onClick={handleClick}>
        {gltf.scene && <primitive object={gltf.scene} />}
      </group>
    );
  }
  
  function DoorUse(props) {
    return (
      <group>
        <mesh position={[0, placement, 0]} castShadow receiveShadow scale={[.2,.2,.2]}>
          <Door />
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
      window.open("https://oia20.github.io/simpleContact/", "_Blank")
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
        <Text color={"#ffff00"} position={[0, 1.2, 0]} fontSize={.15}>I love chess because</Text>
        <Text color={"#ffff00"} position={[0, 1.0, 0]} fontSize={.15}>every match tells its</Text>
        <Text color={"#ffff00"} position={[0, .8, 0]} fontSize={.15}>own unique story.</Text>
        <Text color={"#ffff00"} position={[0, .6, 0]} fontSize={.15}>The process of  </Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.15}>learning/improving is</Text>
        <Text color={"#ffff00"} position={[0, .2, 0]} fontSize={.15}>is so very fun to me! </Text>

        <Text color={"#ffff00"} position={[0, 0, 0]} fontSize={.15}> Similarly to coding,</Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.15}>there is always more</Text>
        <Text color={"#ffff00"} position={[0, -.4, 0]} fontSize={.15}>to be learned</Text>
        <Text color={"#ffff00"} position={[0, -.6, 0]} fontSize={.15}>about chess.</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.1}>*Click any text to return to my room*</Text>
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
        <Text color={"#ffff00"} position={[0, 1.2, 0]} fontSize={.15}>Golf has become an</Text>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.15}>excellent way to spend</Text>
        <Text color={"#ffff00"} position={[0, .8, 0]} fontSize={.15}>quality time with</Text>
        <Text color={"#ffff00"} position={[0, .6, 0]} fontSize={.15}>my brother and Dad.</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.15}>Before I played this</Text>
        <Text color={"#ffff00"} position={[0, .2, 0]} fontSize={.15}>sport I had assumed</Text>
        <Text color={"#ffff00"} position={[0, 0, 0]} fontSize={.15}>it would be easy</Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.15}>"just hit the ball </Text>
        <Text color={"#ffff00"} position={[0, -.4, 0]} fontSize={.15}>with the stick!" Boy</Text>
        <Text color={"#ffff00"} position={[0, -.6, 0]} fontSize={.15}>was I wrong haha.</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.1}>*Click any text to return to my room*</Text>
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
      <Text color={"#ffff00"} position={[0, 1.2, 0]} fontSize={.15}>I love to make, view,</Text>
      <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.15}>and study art.</Text>
      <Text color={"#ffff00"} position={[0, .8, 0]} fontSize={.15}>The main medium I</Text>
      <Text color={"#ffff00"} position={[0, .6, 0]} fontSize={.15}>use is Acrylics.</Text>
      <Text color={"#ffff00"} position={[0,.4, 0]} fontSize={.15}>My favorite artist</Text>
      <Text color={"#ffff00"} position={[0, .2, 0]} fontSize={.15}>(besides my partner ;p)</Text>
      <Text color={"#ffff00"} position={[0, 0, 0]} fontSize={.15}>is Van Gogh, theres</Text>
      <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.15}>something about his</Text>
      <Text color={"#ffff00"} position={[0, -.4, 0]} fontSize={.15}>style that I</Text>
      <Text color={"#ffff00"} position={[0, -.6, 0]} fontSize={.15}>just love!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.1}>*Click any text to return to my room*</Text>
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
        <Text color={"#ffff00"} position={[0, 1.2, 0]} fontSize={.15}>"The more that you</Text>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.15}>read, the more</Text>
        <Text color={"#ffff00"} position={[0, .8, 0]} fontSize={.15}>things you will know. </Text>
        <Text color={"#ffff00"} position={[0, .6, 0]} fontSize={.15}>The more that you</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.15}>learn, the more places</Text>
        <Text color={"#ffff00"} position={[0, .2, 0]} fontSize={.15}>you'll go."</Text>
        <Text color={"#ffff00"} position={[0, 0, 0]} fontSize={.15}>- Dr. Seuss</Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.15}>I don't have a</Text>
        <Text color={"#ffff00"} position={[0, -.4, 0]} fontSize={.15}>favorite genre, I</Text>
        <Text color={"#ffff00"} position={[0, -.6, 0]} fontSize={.15}>love all books!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.1}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>{Math.ceil(progress)} % loaded</h1>
      </Html>
    );
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
        <Text color={"#ffff00"} position={[0, 1.2, 0]} fontSize={.15}>I've played video</Text>
        <Text color={"#ffff00"} position={[0, 1, 0]} fontSize={.15}>games since I was</Text>
        <Text color={"#ffff00"} position={[0, .8, 0]} fontSize={.15}>a little boy.</Text>
        <Text color={"#ffff00"} position={[0, .6, 0]} fontSize={.15}>The landing page that</Text>
        <Text color={"#ffff00"} position={[0, .4, 0]} fontSize={.15}>you got here</Text>
        <Text color={"#ffff00"} position={[0, .2, 0]} fontSize={.15}>through is a reference</Text>
        <Text color={"#ffff00"} position={[0, 0, 0]} fontSize={.15}>to one of my all</Text>
        <Text color={"#ffff00"} position={[0, -.2, 0]} fontSize={.15}>time favorites!</Text>
        <Text color={"#ffff00"} position={[0, -.4, 0]} fontSize={.15}>Old School RuneScape,</Text>
        <Text color={"#ffff00"} position={[0, -.6, 0]} fontSize={.15}>wonderful nostalgia!</Text>
        <Text color={"#ffff00"} position={[0, -.8, 0]} fontSize={.1}>*Click any text to return to my room*</Text>
    </mesh>
    </Billboard>

    </Suspense>
    ) 
  }
  const canvasClick = () => {
    console.log("chess")
    setStart(false)
  };
  function StartText() {
    const handleClick = () => {
      console.log("chess")
    };
    if (start)
    return (
  <Suspense>
      <mesh onClick={handleClick}>
        <Text color={"#ffff00"} rotation={[0,1.5,0]} position={[-.5, 1, 0.1]} fontSize={.1}>Welcome to my room!</Text>
        <Text color={"#ffff00"} position={[.25, 1, -.5]} fontSize={.1}>You can interect with objects</Text>
        <Text color={"#ffff00"} rotation={[0,.6,0]} position={[.2, .5, .2]} fontSize={.1}>and zoom/pan around!</Text>
        <Text color={"red"} position={[.9, .45, -.5]} fontSize={.05}>*Don't open closet!*</Text>
    </mesh>

    </Suspense>
    ) 
  }
    return (
      <Canvas onClick={canvasClick} shadows style={{ background: "linear-gradient(70deg, #940B92, #864AF9, #0F0F0F)", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} camera={{ fov: 100, zoom: 1, position: [1.2, 1.4, 1.4] }}>
        <Suspense fallback={<Loader />}>
        <directionalLight />
        <ambientLight intensity={1.0}/>
        <Float floatIntensity={1} floatingRange={1.5}>
        <RoomUse />
        <ChessUse />
        <EaselUse />
        <RsUse />
        <SkelUse />
        <ConUse />
        <DoorUse />
        <BooksUse />
        <GolfUse />
        <ChessText />
        <GolfText />
        <ArtText />
        <BooksText />
        <RsText />
        <StartText />
        </Float>
        <OrbitControls maxDistance={5} minDistance={.6} enablePan={false} maxAzimuthAngle={1.7} minAzimuthAngle={-.3} maxPolarAngle={2} enableDamping enableRotate enableZoom/>
        <Stars />
        </Suspense>
      </Canvas>
  )
}
