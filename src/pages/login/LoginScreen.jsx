import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppStateContext } from "../../state/AppProvider";
import "./LoginScreen.css";
import logo from "../../assets/logo.svg";
import { Eye20Filled, EyeOff20Filled } from "@fluentui/react-icons";

const LoginScreen = () => {
  // HOOKS
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const appStateContext = useContext(AppStateContext);

  // FUNCTIONS
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: emailInput,
      password: passwordInput,
    };
    if (
      data.email === "jrfln4@yahoo.es" &&
      data.password === "6Z*m5gEI8xW68A2r"
    ) {
      localStorage.setItem("email", JSON.stringify("jrfln4@yahoo.es"));
      appStateContext?.dispatch({ type: "LOGIN" });
      navigate("/");
    } else if (
      emailInput.trim().length === 0 ||
      passwordInput.trim().length === 0
    ) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div className={`bg-login`}>
      <div className={`container`}>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className={`card p-5 card-margin bg-card`}>
              <img
                src={logo}
                alt="JR Pics Logo"
                className={`logo`}
              />
              <h3 className="text-center mt-2 text-custom-light">Welcome to JR Pics</h3>
              <hr />
              <form onSubmit={handleLogin}>
                <div className="mt-3">
                  <label className="fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    maxLength={40}
                  />
                </div>
                <div className="mt-3">
                  <label className="fw-bold">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      maxLength={40}
                    />
                    <button
                      type="button"
                      className={`btn btn-show-password`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff20Filled />
                      ) : (
                        <Eye20Filled />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mt-3 d-grid text-white">
                  <button
                    className={`btn custom-btn`}
                    disabled={loading}
                  >
                    Log in
                  </button>
                </div>
                {error && <p className="text-danger">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
