import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Label } from "reactstrap";
import { TextField, Avatar } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";

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
          <Card className="w-100 ">
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
                <Col md={4} className="d-flex justify-content-center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://memetemplatehouse.com/wp-content/uploads/2020/09/doge-making-face-meme-template.jpg"
                    sx={{ width: 150, height: 150 }}
                  />
                </Col>
                <Col md={8} className="mt-md-3 mt-5">
                  <Row>
                    <Col>
                      <Label className="mb-3 text-muted" htmlFor="formrow-InputState">
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
