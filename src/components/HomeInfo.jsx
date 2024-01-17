import { Link } from "react-router-dom"
import { arrow } from "../assets/icons"

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 ">
        Hi, I'm
        <span className="font-semibold mx-2 text-white"> Juan</span>
        👋🏻
        <br />
        A Sofware Engineer from colombia 🇨🇴
      </h1>
    )

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          self taugh learning frontend <br /> with frameworks like React, Next, astro tailwind
        </p>
        <Link to='/about' className="neo-brutalism-white neo-btn">
          learn more
          <img src={arrow} alt='arrow' className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="">
          Always eager of learning something new each day. <br /> what I've made?
        </p>
        <Link to='/projects' className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Looking for a dev? <br /> I'm ready for working in getting yours projects done
        </p>
        <Link to="/contact" className="neo-brutalism-white neo-btn" >
          Contact me
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }
}

export default HomeInfo
