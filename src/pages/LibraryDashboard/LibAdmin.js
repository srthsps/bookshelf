import React, { useState, useEffect } from "react";
import classnames from "classnames"
import {
  Container,
  Row,
  Col,
  TabPane,
  Nav,
  NavLink,
  NavItem,
  TabContent,
} from "reactstrap";

import { useParams, useHistory } from "react-router-dom";

import Profile from "./Profile";
import Books from "./Books";
import Employees from "./Employees";
import Members from "./Members";

const TenantDashboard = (props) => {

  let [activeTab, setActiveTab] = useState(0)

  console.log(activeTab);

  let toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const tabs = ["Profile", "Books", "Librarian", "Members"];

  return (
    <>
      <div className="page-content" style={{ background: "#F5F5F5" }}>
        <Container fluid className="mt-5">
          <Col>
              {/* <h4 className="card-title ml-6 mb-4 mt-4">Library Dashboard</h4> */}
            </Col>
          <Row>
            
            <Col>
              <Nav tabs>
              {tabs.map((tab, index) =>
                <NavItem key={index}>
                  <NavLink
                  style={activeTab !== index ? {color:"teal",cursor:"pointer"} : {}}
                    className={classnames({
                      active: activeTab === index,
                    })}
                    onClick={() => toggle(index)}
                  >
                    {tab}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
              <TabContent activeTab={activeTab} className="bg-white text-muted">
              <TabPane tabId={0}>
                <Profile />
              </TabPane>
              <TabPane tabId={1}>
                <Books />
              </TabPane>
              <TabPane tabId={2}>
                <Employees />
              </TabPane>
              <TabPane tabId={3}>
                <Members />
              </TabPane>
            </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TenantDashboard;
