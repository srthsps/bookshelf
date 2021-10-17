import React from "react";
import { Container, Row, Col, Card, CardBody, Button, CardHeader } from "reactstrap";

import { useSelector } from "react-redux";

import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Profile = () => {

  let history = useHistory()

  let libraryData = useSelector((state) => state.libraryReducer.bookData);

  let tableData = {
    columns: [
      { label: "ID", field: "id" },
      { label: "Book Name", field: "bookName" },
      { label: "Category", field: "bookCategory" },
      { label: "Author", field: "bookAuthor" },
      { label: "Book ID", field: "bookshelfId" },
      { label: "Status", field: "bookStatus" },
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
      <Link to={`/books/${row.bookshelfId}/admin/`}>
        <Button color="secondary" outline>
          <i className="mdi mdi-eye pe-1" /> View
        </Button>
      </Link>
    );
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
                      Books
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
                              placeholder="Book ID"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Book Name"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <select className="form-control">
                              <option selected disabled>
                                Book Category
                              </option>
                              <option>Fantasy</option>
                              <option>Autobiography</option>
                            </select>
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <input
                              className="form-control"
                              placeholder="Author Name"
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
                                Status
                              </option>
                              <option>Available</option>
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

export default Profile;
