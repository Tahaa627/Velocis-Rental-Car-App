import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

import {
  validateEmail,
  validatePassword,
} from "../../../services/validation";

const Login = () => {
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);

  // Error State
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Inputs
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    // Show Errors
    setErrors({
      email: emailError,
      password: passwordError,
    });

    // Stop if validation fails
    if (emailError || passwordError) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    try {
      setLoading(true);

      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Login Successful!");

      console.log({
        email,
        password,
      });

      // Later:
      // navigate("/dashboard");

    } catch (error) {
      toast.error("Login Failed.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <h1>Velocis</h1>

        <h2>Welcome Back</h2>

        <p>Sign in to continue your journey.</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            error={errors.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            error={errors.password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <div className="login-btn-wrapper">
            <Button disabled={loading}>
              {loading ? "Logging In..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;