import React from "react";
import { Container, Row, Col } from "reactstrap";

const Books = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col>
                <h6 className="page-title mt-3">Bookss</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Books;
