import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
function Card({ setSaved, saved }) {
  const location = useLocation();
  const { title, image, category, description, id, price } = location.state;
  const { rate, count } = location.state.rating;
  function save() {
    setSaved([...saved, location.state]);
    alert("Successfully saved :)");
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className="data__col">
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h3>{description}</h3>
            <h3>{id}</h3>
            <h3>{price}</h3>
            <h3>{rate}</h3>
            <h3>{count}</h3>
            <button className='button' onClick={save}>Save</button>
          </Col>
          <Col>
            <img src={image} width="200" height="200" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
