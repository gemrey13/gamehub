import { useNavigate } from 'react-router-dom';

import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === registeredUsername && password.value === registeredPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert('Username or Password is Incorrect');
    }
  }

  const registerHandler = () => {
    navigate("/register")
  };

  return (
    <form className="login" onSubmit={e => loginHandler(e)}>
      <h5>CUSTOMER LOGIN</h5>
      <input id="username" required type="text" placeholder="Username or Email" />
      <input id="password" required type="password" placeholder="Password" />
      <input type="submit" value="LOG IN" />
      <div className="links">
        <h6>Not a Member?</h6><a onClick={registerHandler}>Register Here</a>
      </div>
    </form>
  );
}