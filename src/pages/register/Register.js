import { useNavigate } from 'react-router-dom';

import './Register.css';

export default function Login() {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault()

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    if (password.value === confirmation.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);

      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  }

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <form className="register" onSubmit={e => registerHandler(e)}>
      <h5>CREATE AN ACCOUNT</h5>
      <input id="username" required type="text" placeholder="Username" />
      <input id="username" required type="text" placeholder="Email or Phone" />
      <input id="password" required type="password" placeholder="Password" />
      <input id="confirmation" required type="password" placeholder="Confirm Password" />
      <input type="submit" value="REGISTER NOW!" />
      <div className="links">
       <h6>Already have an account?</h6> <a onClick={loginHandler}>Login</a>
      </div>
    </form>
  );
}