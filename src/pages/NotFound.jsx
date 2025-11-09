import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const router = useNavigate();
  return (
    <main className="common-container d-flex flex-column align-items-center justify-content-center h-100 w-100">
      <h2>Page Not Found</h2>
      <Button
        className="custom-button px-5 border-0 text-white fw-semibold rounded-0 fs-5 mt-3"
        style={{
          backgroundColor: "#3C3C3C",
        }}
        onClick={() => router("/")}
      >
        Home
      </Button>
    </main>
  );
};

export default NotFound;
