import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

import { TextField } from "@mui/material";

import { useSelector } from "react-redux";

import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Libraries = () => {
  let history = useHistory();

  let libraryData = useSelector((state) => state.libraryReducer.libraryData);

  let tableData = {
    columns: [
      { label: "ID", field: "id" },
      { label: "Library Name", field: "libraryName" },
      { label: "Location", field: "libraryLocation" },
      { label: "Librarian Name", field: "librarianName" },
      { label: "Bookshelf ID", field: "bookshelfId" },
      { label: "Contact Number", field: "contactNumber" },
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
      <Row className="d-inline-flex">
        <Col lg>
          <Link to={`libraries/${row.bookshelfId}/admin`}>
            <Button color="primary" outline>
              <i className="mdi mdi-eye pe-1" />
            </Button>
          </Link>
        </Col>
        <Col lg>
          <Link to={`/libraries/${row.bookshelfId}/edit`}>
            <Button color="secondary" outline>
              <i className="mdi mdi-pen pe-1" />
            </Button>
          </Link>
        </Col>
        <Col lg>
          <Button color="danger" outline>
            <i className="mdi mdi-delete pe-1" />
          </Button>
        </Col>
      </Row>
    );
  });

  const addLibrary = () => {
    history.push("/libraries/add-library");
  };

  return (
    <React.Fragment>
      <div className="page-content" style={{ background: "#F5F5F5" }}>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center mr-3">
              <Col>
                <h4 className="card-title ml-6 mt-4">Libraries</h4>
              </Col>
              <Col className="mr-6 mt-2">
                <Button
                  style={{ background: "teal" }}
                  onClick={() => addLibrary()}
                  className="mdi mdi-pen pr-3 float-end"
                >
                  Add Library
                </Button>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card className="shadow-sm" style={{ border: "none" }}>
                  <CardBody>
                    <Container className="mt-2 px-3" fluid>
                      <Row>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <TextField
                            fullWidth
                              id="standard-basic"
                              placeholder="Bookshelf ID"
                              label="Bookshelf ID"
                              variant="standard"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <TextField
                            fullWidth
                              id="standard-basic"
                              placeholder="Library Name"
                              label="Library Name"
                              variant="standard"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                            <TextField
                            fullWidth
                              id="standard-select-currency"
                              select
                              label="Select state"
                              variant="standard"
                            >
                              <option>Kerala</option>
                              <option>Tamil Nadu</option>
                            </TextField>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mb-4 mt-4">
                        <Col className="col-md-3 col-12 mb-md-0 mb-3">
                          <div className="col-md">
                          <TextField
                            fullWidth
                              id="standard-select-currency"
                              select
                              label="Select district"
                              variant="standard"
                            >
                              <option>Ernakulam</option>
                              <option>Kottayam</option>
                            </TextField>
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                          <TextField
                            fullWidth
                              id="standard-basic"
                              placeholder="Librarian"
                              label="Librarian"
                              variant="standard"
                            />
                          </div>
                        </Col>
                        <Col className="col-md col-12 mb-md-0 mb-3">
                          <div className="col-md">
                          <TextField
                            fullWidth
                              id="standard-basic"
                              placeholder="Contact Number"
                              label="Contact Number"
                              variant="standard"
                            />
                          </div>
                        </Col>
                        <Col className="col-md-3 col-12">
                          <Button
                            className="col-12"
                            style={{ background: "teal" }}
                          >
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Libraries;
