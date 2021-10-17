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

const Profile = () => {
  let [currentLibrary, changeCurrentLibrary] = useState([]);

  let { libraryID } = useParams();

  let libraryData = useSelector((state) => state.libraryReducer.libraryData);

  useEffect(() => {
    let data = libraryData.find((item) => item.bookshelfId == libraryID);
    changeCurrentLibrary(data);
  }, []);

  return (
    <React.Fragment>
      <div className="page-content bg-white">
        <Container fluid>
          <Card className="w-100 pb-5">
            <CardHeader>
              <div className="page-title-box">
                <Row className="align-items-center">
                  <Col>
                    <h2 className="page-title text-center mt-1">
                      {currentLibrary.libraryName}
                    </h2>
                  </Col>
                </Row>
              </div>
            </CardHeader>
            <CardBody>
              <Row className="mt-5">
                <Col
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://memetemplatehouse.com/wp-content/uploads/2020/09/doge-making-face-meme-template.jpg"
                    sx={{ width: 150, height: 150 }}
                  />
                </Col>
                <Col md={8} className="mt-md-1 mt-5">
                  <Row>
                    <Col>
                      <Label
                        className="mb-3 text-muted"
                        htmlFor="formrow-InputState"
                      >
                        Library Name
                      </Label>
                      <TextField
                        fullWidth
                        id="formrow-InputState"
                        value={currentLibrary.libraryName}
                        disabled
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Label
                        className="mb-3 text-muted"
                        htmlFor="formrow-InputState"
                      >
                        Library ID
                      </Label>
                      <TextField
                        fullWidth
                        id="formrow-InputState"
                        value={currentLibrary.bookshelfId}
                        disabled
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Address
                  </Label>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    rows={4}
                    id="formrow-InputState"
                    value="sdgbksbgsdkgksdfkskhsiiy"
                    disabled
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md>
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Library Type
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  />
                </Col>
                <Col className="mt-md-0 mt-2">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Contact Number
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  ></TextField>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md>
                  <Label
                    className="mb-1 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Working Days
                  </Label>
                  <Stack
                    style={{
                      overflow: "hidden",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    direction="row"
                    spacing={1}
                  >
                    <Chip
                      className="mt-2"
                      avatar={<Avatar>M</Avatar>}
                      onClick={() => {}}
                      label="Monday"
                    />
                    <Chip
                      className="mt-2"
                      avatar={<Avatar>T</Avatar>}
                      onClick={() => {}}
                      label="Tuesday"
                    />
                    <Chip
                      className="mt-2"
                      avatar={<Avatar>W</Avatar>}
                      onClick={() => {}}
                      label="Wednesday"
                    />
                    <Chip
                      className="mt-2"
                      avatar={<Avatar>T</Avatar>}
                      onClick={() => {}}
                      label="Thursday"
                    />
                    <Chip
                      className="mt-2"
                      avatar={<Avatar>F</Avatar>}
                      onClick={() => {}}
                      label="Friday"
                    />
                  </Stack>
                </Col>
              </Row>
              <Row className="mt-3">
              <Col md>
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Opening Time
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  />
                </Col>
                <Col className="mt-md-0 mt-2">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Closing Time
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  ></TextField>
                </Col>
              </Row>
              <Row className="mt-3">
              <Col md>
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Fee Type
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  />
                </Col>
                <Col className="mt-md-0 mt-2">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Fee Amount
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value={currentLibrary.bookshelfId}
                    disabled
                  ></TextField>
                </Col>
              </Row>
              <Row className="mt-3">
              <Col md>
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Initial Deposit
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value="Yes"
                    disabled
                  />
                </Col>
                <Col className="mt-md-0 mt-2">
                  <Label
                    className="mb-3 text-muted"
                    htmlFor="formrow-InputState"
                  >
                    Deposit Amount
                  </Label>
                  <TextField
                    fullWidth
                    id="formrow-InputState"
                    value="$250"
                    disabled
                  ></TextField>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Profile;
