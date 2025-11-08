import LoginBanner from "../components/login/LoginBanner.jsx";
import SignIn from "../components/login/SignIn.jsx";

const LoginPage = () => {
  return (
    <main className="container overflow-hidden ">
      <section className="d-flex flex-col flex-lg-row align-items-center justify-content-between w-100 vh-100">
        <SignIn />
        <LoginBanner />
      </section>
    </main>
  );
};

export default LoginPage;
