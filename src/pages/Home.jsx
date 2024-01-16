import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Loader from "../components/Loader"
import Island from "../models/island"
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPostion


    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
      screenPostion = [0, -6.5, -43.4]

    } else {
      screenScale = [1, 1, 1]
      screenPostion = [0, -6.5, -43.4]
    }
    return [screenScale, screenPostion,]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPostion = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPostion = [0, -4, -4]
    }
    return [screenScale, screenPostion]
  }
  const [islandScale, islandPosition] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()
  return (
    <section className={`w-full h-screen relative`}>
      {/* <div className=" absolute top-28 left-0 right-0 z-10 flex items-center justify-center"> */}
      {/*   POPUP */}
      {/* </div> */}
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000, }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Bird />
          <Sky />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
            planeScale={planeScale}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home