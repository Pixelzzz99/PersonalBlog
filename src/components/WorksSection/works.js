import { Row, Col, Card, Container } from "react-bootstrap";
import "./works.css";

const Works = () => {
  return (
    <section className="works">
      <Container>
        <Row>
          <Col md={8}>
              <Card style={{ height: "200px" }}>
              <Card.Body>
                <Card.Title>Work 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ height: "200px" }}>
              <Card.Body>
                <Card.Title>Work 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          <div className="vertical-line-small"></div>
        <Row>
          <Col md={4}>
            <Card style={{ height: "150px" }}>
              <Card.Body>
                <Card.Title>Work 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ height: "150px" }}>
              <Card.Body>
                <Card.Title>Work 4</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ height: "150px" }}>
              <Card.Body>
                <Card.Title>Work 5</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          <div className="vertical-line"></div>
      </Container>
    </section>
  );
};

export default Works;
