import { useState } from "react";
import {useNavigate} from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    const data = { name, email, password };
    console.log(data);
    let result = await fetch('http://localhost:3002/register', {
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      },

    })
    result = await result.json();
    console.log(result);
    if(result)
    {
      navigate('/')

    }

    localStorage.setItem("user", JSON.stringify(result))
    

  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
