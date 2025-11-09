import SignInForm from "./SignInForm";


import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SignIn = () => {
  return (
    <main className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-5 w-100 gap-2 gap-md-3">
      {/* Title */}
      <div className="d-flex flex-column gap-2 gap-md-3">
        <h2 className="form-title fw-bold">
          Sign In
        </h2>
        <p className="form-subtitle fw-bold">
          New user? 
          <a href="/" className="fw-semibold text-decoration-none ms-3">
            <span className="text-primary">Create an account</span>
          </a>
        </p>
      </div>

      {/* Form  */}
      <SignInForm />

      {/* Divider */}
      <div className="common-sign-width d-flex align-items-center justify-content-center my-4 ">
        <hr className="flex-grow-1" />
        <span className="mx-3 fw-bold text-muted">Or Sign In With</span>
        <hr className="flex-grow-1" />
      </div>

      {/* Social icons */}
      <div className="common-sign-width d-flex justify-content-center align-items-center gap-3 ">
        <div
          className="social-icons rounded-circle d-flex align-items-center justify-content-center"
        >
          <FaGoogle />
        </div>

        <div
          className="social-icons rounded-circle d-flex align-items-center justify-content-center"
        >
          <FaFacebookF />
        </div>

        <div
          className="social-icons rounded-circle d-flex align-items-center justify-content-center"
        >
          <FaLinkedinIn />
        </div>

        <div
          className="social-icons rounded-circle d-flex align-items-center justify-content-center"
        >
          <FaTwitter />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
