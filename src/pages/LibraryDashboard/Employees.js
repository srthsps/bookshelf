import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
} from "reactstrap";
import { TextField, Avatar } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Employees = () => {
  let [librarian, setLibrarian] = useState([]);

  let { libraryID } = useParams();

  let employeeData = useSelector((state) => state.libraryReducer.employeeData);

  useEffect(() => {
    let data = employeeData.find((item) => item.libraryID == libraryID);
    setLibrarian(data);
  }, []);

  console.log(librarian);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Card className="shadow">
            <Row className="p-1">
              <Col className="d-flex align-items-center px-5">
                <h3>{librarian.employeeName}</h3>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="px-5 py-2 align-items-center"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://memetemplatehouse.com/wp-content/uploads/2020/09/doge-making-face-meme-template.jpg"
                  sx={{ width: 90, height: 90 }}
                />
              </Col>
            </Row>
          </Card>
          <Card className="shadow mt-4 pb-4">
            <CardHeader>
              <h6 className="text-muted text-center">Basic Information</h6>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="mt-3">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Name
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={librarian.employeeName}
                    disabled
                  />
                </Col>
                <Col md={6} className="mt-md-3 mt-3">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Employee ID
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={librarian.employeeID}
                    disabled
                  />
                </Col>
                <Col md={6} className="mt-md-3 mt-3">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Email
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={librarian.email}
                    disabled
                  />
                </Col>
                <Col md={6} className="mt-md-3 mt-3">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Contact
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={librarian.contactNumber}
                    disabled
                  />
                </Col>
                <Col md={6} className="mt-md-3 mt-3">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Joined Date
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={librarian.joinedDate}
                    disabled
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Employees;
