import { useState } from "react";
import { Button } from "react-bootstrap";

const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="text-start w-100 mt-2">
      {/* Inputs */}
      <div className="d-flex flex-column align-items-start gap-2 gap-md-3">
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
          <label
            className="custom-checkbox fw-semibold"
          >
            <input type="checkbox" id="keepSignedIn" />
            <span className="checkmark"></span>
            Keep me signed in
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="custom-button-style border-0 text-white fw-semibold rounded-0 fs-5"
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
