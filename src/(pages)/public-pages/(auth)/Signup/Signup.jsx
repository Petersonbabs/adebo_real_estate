import { useContext, useEffect, useState } from "react";
import { authContext, useAuthContext } from "../../../../contexts/AuthContext";
import "./Styles/signup.css";
import { Link } from "react-router-dom";
import CountriesCode from "../../../../data/countries.json";
import UsersRoles from "../../../../data/usersRoles.json";

const Signup = () => {
  const { signup, signingUp } = useContext(authContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "buyer",
    password: ""

  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("buyer");


  const handleShowPass = () => {
      setPasswordShown(prev => !prev)
  };

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
};
const changerole = (role)=>{
    setSelectedRole(role)
    setFormData(prev=>({...prev, role:role.toLowerCase()}))
}

const handleSubmit = (e)=>{
      e.preventDefault();
      signup(formData)
  }
  

  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="small-max signup-wrapper">
        <h2>Register on PropertyPro Nigeria for Exclusive Benefits</h2>

        <p>
          No account? <Link to="/signin">Sign in</Link>{" "}
        </p>

        <div className="socialbtn">
          <button className="btn-outline btn-full">
            <i class="fa-brands fa-google"></i>
            <span>Google</span>
          </button>
          <button className="btn-outline btn-full">
            <i class="fa-brands fa-facebook"></i>
            <span>Facebook</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="names">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </div>
          <div className="phone-section">
            <div>
              <label htmlFor="countryCode">Country Code</label>
              <select name="countryCode" id="countryCode">
                {CountriesCode.map((country) => (
                  <option value={country.phone_code} key={country.phone_code}>
                    {country.name}({country.phone_code})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="phone">Format(digits only)</label>
              <input type="number" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleInput} />
            </div>
          </div>
          <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            margin: "1rem 0"
          }}>
            {UsersRoles.map((role) => (
              <div onClick={()=>{changerole(role)}} style={{
                border: `1px solid purple`,
                padding: ".5rem",
                borderRadius: "5px",
                cursor: "pointer",
                background: `${role.toLowerCase() == selectedRole.toLowerCase() ? "#330066" : "transparent"}`,
                color: `${role.toLowerCase() == selectedRole.toLowerCase() ? "#fff" : "initial"}`,
                transition: "all ease 150ms"
              }}>{role}</div>
            ))}
          </div>
          <div>
            <label htmlFor="password">Create password</label>
            <div className="pass-input">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleInput}
                value={formData.password}
              />
              <span onClick={handleShowPass}>
                {passwordShown ? (
                  <i class="fa-solid fa-eye-slash"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
                )}
              </span>
            </div>
          </div>
          <button type="submit" className="btn " disabled={signingUp}>
            {
                signingUp ?
                <span>authenticating..</span> :
                <span>Register</span>
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
