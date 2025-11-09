import LoginBanner from "../components/login/LoginBanner.jsx";
import LoginForm from "../components/login/SignIn.jsx";

const LoginPage = () => {
  return (
    <main className="common-container overflow-hidden">
      <section className="d-flex flex-col flex-lg-row align-items-center justify-content-center w-100 vh-100">
        {/* Login section */}
        <LoginForm />

        {/* Login banner section */}
        <LoginBanner />
      </section>
    </main>
  );
};

export default LoginPage;
