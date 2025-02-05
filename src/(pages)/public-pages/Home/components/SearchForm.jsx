import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const handleInput = (e)=>{
    const {value} = e.target
    setSearchQuery(value)
  }



  const handleSearch = (e)=>{
    e.preventDefault()
    navigate(`/properties?search=${searchQuery}`)
  }

  return (
    <section className="search-form">
      <h1>Find your Next Home</h1>
      <div className="search">
        <div className="top">
          <span className="active">Buy</span>
          <span>Rent</span>
          <span>Shortlet</span>
          <span>Land</span>
        </div>
        <hr />
        <form action="" onSubmit={handleSearch}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            name="search"
            id="searh"
            placeholder="Search sale"
            onChange={handleInput}
          />
          <button className="btn">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
