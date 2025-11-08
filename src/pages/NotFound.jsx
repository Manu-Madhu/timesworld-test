import { Button } from "react-bootstrap";


const NotFound = () => {
  return (
    <div className="container">
      <h2>Page Not Found</h2>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </div>
  );
};

export default NotFound;
