import ImagesData from "../../../../data/Images"

const Hero = () => {
  return (
    <div className="hero">
      <img src={ImagesData.HeroImage} alt="Hero image" />
    </div>
  )
}

export default Hero