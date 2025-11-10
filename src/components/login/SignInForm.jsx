import { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";

const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Password validation
  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasUppercase = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      minLength.test(password) &&
      hasUppercase.test(password) &&
      hasNumber.test(password) &&
      hasSymbol.test(password)
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(""); 

    const { email, password } = form;

    // Validation
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include 1 uppercase letter, 1 number, and 1 special symbol."
      );
      return;
    }

    if (!keepSignedIn) {
      setError("Please check 'Keep me signed in' before submitting.");
      return;
    }

    dispatch(setUser({ email }));

    setShowSuccess(true);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <form onSubmit={submitHandler} className="text-start w-100 mt-2">
      <div className="d-flex flex-column align-items-start gap-2 ">
        {/* Alert */}
        {error && (
          <Alert
            variant="danger"
            className="custom-alert text-center fw-semibold"
            onClose={() => setError("")}
            dismissible
          >
            {error}
          </Alert>
        )}

        {showSuccess && (
          <Alert
            variant="success"
            className="custom-alert text-center fw-semibold"
            onClose={() => setShowSuccess(false)}
            dismissible
          >
            Login successful! Redirecting to home...
          </Alert>
        )}

        {/* Inputs */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={inputHandleChange}
          required
          placeholder="Username or email"
          className="custom-input mb-2"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={inputHandleChange}
          required
          placeholder="Password"
          className="custom-input"
        />

        {/* Checkbox */}
        <div className="my-3">
          <label className="custom-checkbox fw-semibold d-flex align-items-center gap-3">
            <input
              type="checkbox"
              id="keepSignedIn"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn(!keepSignedIn)}
            />
            <span className="checkmark"></span>
            Keep me signed in
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="custom-button-style border-0 text-white fw-semibold rounded-0"
          style={{
            backgroundColor: "#3C3C3C",
          }}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
