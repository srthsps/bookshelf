import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useFetch } from "../components/useFetch";

const Users = () => {
  const clicked = (res) => {
    res.preventDefault();

    const body = new FormData();

    body.append("to", "+918921980007");
    body.append("type", "template");
    body.append("params", "Raman");
    body.append("template_name", "british_council");
    body.append("channel", "whatsapp");
    body.append("from", "+918921980007");
    body.append("callback_url", "http://18.218.114.0/users");
    body.append("source", '"sandbox"');

  let headers = new Headers();

    headers.append('Authorization', 'Basic ' + btoa("Api-Key" + ":" + "A1266458d348d033afd43b41fe74374cf"));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    fetch("https://api.kaleyra.io/v1/HXIN1715928671IN/messages", {
      body,
      headers: headers,
      method: "POST",
    }).then(res=>{
      console.log(res)
    }).catch(e=>{
      console.log(e)
    })
    alert("Hello you");
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col>
                {/* {loading ? <h1 className="page-title mt-3">Loading...</h1> :  <h6 className="page-title mt-3">{data.message}</h6>} */}
                <button className="mt-5" onClick={(res) => clicked(res)}>
                  Click Me
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Users;
