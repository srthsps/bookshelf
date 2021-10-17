import React from "react";
import { Container, Row, Col, Card, CardBody, Button, CardHeader } from "reactstrap";

import { useSelector } from "react-redux";

import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Members = () => {

  let history = useHistory()

  let libraryData = useSelector((state) => state.libraryReducer.membersData);

  let tableData = {
    columns: [
      { label: "ID", field: "id" },
      { label: "Name", field: "name" },
      { label: "Member ID", field: "userID" },
      { label: "Joined Date", field: "joinedDate" },
      { label: "Currently Rented", field: "activeRentalname" },
      { label: "Rented Date", field: "activeRentaldate" },
      { label: "Actions", field: "view" },
    ],
    rows: [],
  };

  const makeTableData = () => {
    libraryData.forEach((item) => {
      tableData.rows.push(item);
    });
  };

  makeTableData();

  tableData.rows.forEach((row) => {
    row.view = (
      <Link to={`members/${row.userID}/admin`}>
        <Button color="secondary" outline>
          <i className="mdi mdi-eye pe-1" /> View
        </Button>
      </Link>
    );
    row.activeRentalname = row.activeRental.name
    row.activeRentaldate = row.activeRental.date
  });




  return (
    <React.Fragment>
      <div className="page-content bg-white">
        <Container fluid>
          <Card className="pb-5">
          <div className="page-title-box">
          <CardHeader>
              <div className="page-title-box">
                <Row className="align-items-center">
                  <Col>
                    <h2 className="page-title text-center mt-1">
                      Members
                    </h2>
                  </Col>
                </Row>
              </div>
            </CardHeader>
            <Row className="mt-4">
              <Col>
                <Card className="shadow-sm" style={{ border: "none" }}>
                  <CardBody>
                    <Container className="mt-2 px-3" fluid>
                      <Row>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Member ID"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Member Name"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Contact Number"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row className="mb-4 mt-4">
                      
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <select className="form-control">
                              <option selected disabled>
                                State
                              </option>
                              <option>Kerala</option>
                              <option>Tamil Nadu</option>
                            </select>
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <select className="form-control">
                              <option selected disabled>
                                District
                              </option>
                              <option>Kerala</option>
                              <option>Tamil Nadu</option>
                            </select>
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <select className="form-control">
                              <option selected disabled>
                                Rental Status
                              </option>
                              <option>Not Rented</option>
                              <option>Currently Rented</option>
                            </select>
                          </div>
                        </Col>
                        <Col className="col-md-3 col-12">
                          <Button className="col-12" style={{background:'teal'}}>
                            Search
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                    <MDBDataTable
                      striped
                      hover
                      responsive
                      data={tableData}
                      barReverse
                      noBottomColumns
                      tbodyColor="align-middle"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Members;
