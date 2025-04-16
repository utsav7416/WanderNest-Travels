import "../styles/Slide.scss";

const Slide = () => {
  return (
    <div className="carousel">
      <div
        className="slide"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/slide.jpg')",
        }}
      >
        <h1>
          Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
          memories.
        </h1>
      </div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.istockphoto.com/id/1484276204/photo/couple-watching-sunset-in-infinity-pool-on-a-luxury-vacation-in-thailand.jpg?s=1024x1024&w=is&k=20&c=r7hpaNH9qMXxaBdQhM8b_7aMATKpsTnzD9Yyihnln4w=')",
        }}
      >
        <h1>
          Dive into Vibrant Journeys <br /> Explore breathtaking natural vistas.
        </h1>
      </div>

      <div
        className="slide"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h1>
          Experience Luxe Escapes <br /> Indulge in style and comfort.
        </h1>
      </div>
    </div>
  );
};

export default Slide;
