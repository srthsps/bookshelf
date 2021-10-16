import React from "react";
import { Container, Row, Col } from "reactstrap";

const B = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-white">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col>
                <h6 className="page-title mt-3">B</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default B;
