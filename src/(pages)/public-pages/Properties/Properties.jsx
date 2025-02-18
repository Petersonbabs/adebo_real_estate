import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import "./styles/PropertyStyle.css";
import ResultData from "../../../data/result.json";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const [searchWord, setSearchWord] = useState(searchTerm | "");
  const navigation = useNavigate();
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl);
  useEffect(() => {
    // if(searchTerm){
    searchProperties();
    // }
  }, [searchTerm]);

  const handleSearchInput = (e) => {
    const { name, value } = e.target;
    setSearchWord(value);
  };

  const changeSearch = (e) => {
    e.preventDefault();
    navigation(`/properties?search=${searchWord}`);
  };

  const filterProperties = () => {};

  const searchProperties = async (e) => {
    setSearching(true);
    try {
      const response = await fetch(
        `${baseUrl}/property/search?search=${searchWord}`
      );
      const result = await response.json();
      console.log(result);
      setSearchResults(result.results);
      // api/v1/properties?search=${searchTerm}
    } catch (error) {
    } finally {
      setSearching(false);
    }
  };

  return (
    <div
      style={{
        paddingTop: "4rem",
      }}
    >
      {/* SEARCH SECTION */}
      <section className="filter-header">
        {/* purpose */}
        <select name="" id="" onSelect={filterProperties}>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
          <option value="shortlet">Shortlet</option>
        </select>

        {/* search */}
        <form onSubmit={changeSearch}>
          <input
            type="search"
            placeholder="Type something..."
            onChange={handleSearchInput}
          />
        </form>

        {/* type */}
        <div>
          <select name="type">
            <option value="shop">Shop</option>
            <option value="office">Office</option>
            <option value="flat">Flat</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* min price */}
        <div>
          <select name="minPrice">
            <option value="">Min price</option>
            <option value="50000">50,000</option>
            <option value="100000">100,000</option>
            <option value="200000">200,000</option>
            <option value="300000">300,000</option>
            <option value="400000">400,000</option>
            <option value="500000">500,000</option>
            <option value="1000000">1,000,000</option>
            <option value="2000000">2,000,000</option>
            <option value="3000000">3,000,000</option>
            <option value="4000000">4,000,000</option>
            <option value="5000000">5,000,000</option>
            <option value="6000000">6,000,000</option>
            <option value="7000000">7,000,000</option>
            <option value="8000000">8,000,000</option>
            <option value="9000000">9,000,000</option>
            <option value="10000000">10,000,000</option>
          </select>
        </div>

        {/* max price */}
        <div>
          <select name="macPrice">
            <option value="">Max price</option>
            <option value="500000">500,000</option>
            <option value="1000000">1,000,000</option>
            <option value="2000000">2,000,000</option>
            <option value="3000000">3,000,000</option>
            <option value="4000000">4,000,000</option>
            <option value="5000000">5,000,000</option>
            <option value="6000000">6,000,000</option>
            <option value="7000000">7,000,000</option>
            <option value="8000000">8,000,000</option>
            <option value="9000000">9,000,000</option>
            <option value="10000000">10,000,000</option>
          </select>
        </div>

        {/* location */}
        <div>
          <select name="location">
            <option value="ibadan">Ibadan</option>
            <option value="lagos">lagos</option>
            <option value="ogun">ogun</option>
            <option value="banana">banana</option>
            <option value="estate">estate</option>
            <option value="island">island</option>
            <option value="osun">osun</option>
            <option value="port harcourt">port harcourt</option>
          </select>
        </div>
      </section>

      <h1>Result for {searchTerm}</h1>

      <section>
        {!searching ? (
          <>
            {searchResults.length > 0 ? (
              <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr", maxWidth: "1140px", margin: "auto", gap: "1rem"}}>
                {searchResults?.map((property) => (
                  <div key={property._id}>
                    <div style={{
                      borderRadius: "5px",
                      
                    }}>
                      <img
                        src={
                          "https://images.propertypro.ng/large/3-bedroom-apartment-uRCgVuKuIW0rJZZXSxLu.jpeg"
                        }
                        alt=""
                        style={{width: "100%", height: "200px", objectFit: "cover"}}
                      />
                    </div>
                    <div className="details">
                      <h2>{property.title}</h2>
                      <span>{property.location}</span>
                      <span>₦{property.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No results!</div>
            )}
          </>
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};

export default Properties;
