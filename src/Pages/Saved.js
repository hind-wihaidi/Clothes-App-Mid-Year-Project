import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Saved({ saved }) {
  return (
    <Container>
      <h1>Saved</h1>
      <div className="clothes">
        {saved.map((item) => (
          <div className="clothesCard">
            <Link to={`/clothes/${item.id}`} state={item}>
              <img width="200" height="200" src={item.image} />
              <h2 className="home__text">{item.title}</h2>
              <h5 className="home__text">{item.category}</h5>
              <h5 className="home__text">
                {item.description.substr(0, 120)}...
              </h5>
              <h5 className="home__text">{item.id}</h5>
              <h5 className="home__text">{item.price}</h5>
              <h5 className="home__text">{item.rating.rate}</h5>
              <h5 className="home__text">{item.rating.count}</h5>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Saved;
