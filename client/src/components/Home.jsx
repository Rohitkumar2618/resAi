// src/components/Home.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add your home page content here */}
    </div>
  );
}

export default Home;
