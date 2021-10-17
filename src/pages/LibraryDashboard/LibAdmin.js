import React, { useEffect } from "react";
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
  /* {props.match.params.tenantID} */

  const tabs = [
    { title: "Profile", route: "profile", content: <Profile /> },
    { title: "Books", route: "books", content: <Books /> },
    { title: "Employees", route: "employees", content: <Employees /> },
    { title: "Members", route: "members", content: <Members /> },
  ];

  let { active_tab } = useParams();

  const history = useHistory();

  useEffect(() => {
    const defaultTab = tabs[0].route;
    if (!active_tab || !tabs.find((tab) => tab.route === active_tab)) {
      history.replace(`./${defaultTab}`);
    }
  }, []);

  const toggle = (tabRoute) => {
    if (active_tab !== tabRoute) {
      history.push(`./${tabRoute}`);
    }
  };

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
                {tabs.map((tab) => (
                  <NavItem key={tab.title}>
                    <NavLink
                      style={active_tab !== tab.route ? {color:"teal"} : { }}
                      className={active_tab === tab.route ? "active" : ""}
                      onClick={() => {
                        toggle(tab.route);
                      }}
                      role="button"
                    >
                      {tab.title}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <TabContent activeTab={active_tab}>
                {tabs.map((tab) => (
                  <TabPane key={tab.title} tabId={tab.route}>
                    {tab.content}
                  </TabPane>
                ))}
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TenantDashboard;
