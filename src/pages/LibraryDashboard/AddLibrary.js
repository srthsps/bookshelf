import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  CardBody,
  CardHeader,
  Input,
  Label,
} from "reactstrap";

import { useHistory } from 'react-router-dom'

import Option from "../../components/MultiSelect";

import { default as ReactSelect } from "react-select";

const AddLibrary = () => {
  const [selected, setSelected] = useState({ optionSelected: null });

  const [depositNeeded, setDepositNeeded] = useState(false);

  const handleChange = (selected) => {
    setSelected({ optionSelected: selected });
  };

  const history = useHistory()

  const colourOptions = [
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
  ];

  const goBack = (e) =>{
    e.preventDefault();
    history.push('/libraries')
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{ background: "#F5F5F5" }}>
        <Container fluid className="mt-5">
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="bg-white">
                  <h4 className="card-title text-center ml-6 mt-4">
                    Add Library
                  </h4>
                </CardHeader>
                <CardBody>
                  <Form className="mt-5">
                    <Row>
                      <div className="mb-3">
                        <span
                          className="text-muted"
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          BASIC INFO
                        </span>
                      </div>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label
                            className="mb-2"
                            htmlFor="formrow-firstname-Input"
                          >
                            Library name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputState">
                            Library Type
                          </Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option defaultValue>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputCity">
                            Librarian Name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputCity">
                            Contact Number
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="formrow-InputCity"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="mb-3 mt-5">
                        <span
                          className="text-muted"
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          ADDRESS INFO
                        </span>
                      </div>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputState">
                            State
                          </Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option defaultValue>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputState">
                            District
                          </Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option defaultValue>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputCity">
                            City
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputCity"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputZip">
                            Zip
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputZip"
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <div className="mb-3 mt-5">
                        <span
                          className="text-muted"
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          OTHER INFO
                        </span>
                      </div>
                      <Col lg={6}>
                        <div className="mb-3 col-md-12">
                          <Label
                            className="mb-2"
                            htmlFor="formrow-password-Input"
                          >
                            Working Days
                          </Label>
                          <span
                            class="col-md-12"
                            data-toggle="popover"
                            data-trigger="focus"
                            data-content="Please selecet account(s)"
                          >
                            <ReactSelect
                              id="formrow-password-Input"
                              options={colourOptions}
                              isMulti
                              closeMenuOnSelect={false}
                              hideSelectedOptions={false}
                              components={{
                                Option,
                              }}
                              onChange={() => handleChange()}
                              allowSelectAll={true}
                              value={selected.optionSelected}
                            />
                          </span>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputZip">
                            Opening Time
                          </Label>
                          <Input
                            type="time"
                            className="form-control"
                            id="formrow-InputZip"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputZip">
                            Closing Time
                          </Label>
                          <Input
                            type="time"
                            className="form-control"
                            id="formrow-InputZip"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputState">
                            Fee Type
                          </Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option defaultValue>Choose...</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputZip">
                            Fee Amount
                          </Label>
                          <Input
                            type="time"
                            className="form-control"
                            id="formrow-InputZip"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="form-check mt-md-5 mt-3 d-flex justify-content-center pb-4">
                          <Input
                            type="checkbox"
                            className="form-check-Input px-2"
                            id="formrow-customCheck"
                            vale={depositNeeded}
                            onChange={() => setDepositNeeded(!depositNeeded)}
                          />
                          <Label
                            className="form-check-Label px-2"
                            htmlFor="formrow-customCheck"
                          >
                            Initial Deposit
                          </Label>
                        </div>
                      </Col>
                      {depositNeeded && (
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label className="mb-2" htmlFor="formrow-InputZip">
                              Deposit Amount
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              id="formrow-InputZip"
                            />
                          </div>
                        </Col>
                      )}

                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="mb-2" htmlFor="formrow-InputZip">
                            Upload Images
                          </Label>
                          <Input
                            type="file"
                            className="form-control"
                            id="formrow-InputZip"
                            multiple
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-5 d-flex justify-content-center">
                      <Row>
                        <Col>
                      <button onClick={(e)=>goBack(e)} className="btn btn-danger btn-lg" style={{width:"100px"}}>
                        Cancel
                      </button>
                        </Col>
                        <Col>
                      <button type="submit" className="btn btn-success btn-lg" style={{width:"100px"}}>
                        Save
                      </button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddLibrary;
