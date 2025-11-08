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
    <form onSubmit={submitHandler} className="text-center">
      {/* Inputs */}
      <div className="d-flex flex-column align-items-center gap-3">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={inputHandleChange}
          required
          placeholder="Username or email"
          className="form-control border border-2 rounded-0"
          style={{
            width: "280px",
            height: "48px",
            borderColor: "#3E3E3E",
            color: "#3E3E3E",
          }}
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={inputHandleChange}
          required
          placeholder="Password"
          className="form-control border border-2 rounded-0"
          style={{ width: "280px", height: "48px" }}
        />

        {/* Checkbox */}
        <div  className="d-flex align-items-center gap-2 mt-1"
          style={{ width: "280px" }}
        >
          <input
            type="checkbox"
            id="keepSignedIn"
            className="-input border border-2"
            style={{ width: "20px", height: "20px" }}
          />
          <label
            htmlFor="keepSignedIn"
            className="form-check-label fw-semibold"
          >
            Keep me signed in
          </label>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="border-0 text-white fw-semibold rounded-0"
          style={{ width: "280px", height: "48px", backgroundColor:'#3C3C3C' }}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
