import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="lagin-signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="lagin-signup-login-text">
          Already have an account? <span>Login</span>
        </p>
        <div className="lagin-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
