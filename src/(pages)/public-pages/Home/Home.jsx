import Hero from "./components/Hero.jsx"
import SearchForm from "./components/SearchForm.jsx"
import "./style/home.css"

const Home = () => {
        
  return (
    <div style={{
    paddingTop: "4rem"}}>
      <Hero />
      <SearchForm />
    </div>
  )
}

export default Home