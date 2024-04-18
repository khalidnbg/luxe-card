import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
        textAlign: "center",
      }}>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our Store</h1>
          <p>
            Discover the latest trends in fashion, electronics, home goods, and
            more.
          </p>
          <Link to="/store" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
