import SignInForm from "./SignInForm";

import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SignIn = () => {
  return (
    <main className="text-start p-5">
      <h2>Sign In</h2>
      <p className="">
        New user?{" "}
        <a href="/" className="">
          <span className="text-primary">Create an account</span>
        </a>
      </p>

      <SignInForm />

      {/* Divider */}
      <div className="d-flex align-items-center justify-content-center my-4">
        <hr className="flex-grow-1" />
        <span className="mx-3 fw-semibold text-muted">Or Sign In With</span>
        <hr className="flex-grow-1" />
      </div>

      {/* Social icons */}
      <div className="d-flex justify-content-center gap-3">
        <div
          className="border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          <FaGoogle size={18} />
        </div>

        <div
          className="border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          <FaFacebookF size={18} />
        </div>

        <div
          className="border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          <FaLinkedinIn size={18} />
        </div>

        <div
          className="border border-2 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          <FaTwitter size={18} />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
