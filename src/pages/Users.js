import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useFetch } from '../components/useFetch'

const Users = () => {


 const { data,loading } =  useFetch('http://3.19.60.253:8888/api/v1/home')
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col>
              {loading ? <h1 className="page-title mt-3">Loading...</h1> :  <h6 className="page-title mt-3">{data.message}</h6>}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Users;
