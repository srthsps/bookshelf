import React, { useState } from "react"

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  ButtonGroup,
} from "reactstrap"
import { Link } from "react-router-dom"



const Dashboard = props => {
  const rangeValues = ["Day", "Week", "Month"];
  const [activeRange, setActiveRange] = useState(0);

  const headerCardData = [
    { title: 'Fiction',  change: 12, value: '1645', link: '#' },
    { title: 'Politics',  change: -28, value: '52234', link: '#' },
    { title: 'Science',  change: 0, value: '12000', link: '#' },
    { title: 'History', change: 84, value: '72242', link: '#' },
  ];

  const transactionData = [
    { id: 223, book: 'Randamoozham',  date: '15/01/2018', name: "Sooraj",  },
    { id: 224, book: 'Harry Potter',  date: '12/01/2018', name: "Luffy",  },
    { id: 213, book: 'Kite Runner',  date: '11/01/2018', name: "Gon Freecs",  },
    { id: 323, book: 'A Song of Ice and Fire',  date: '12/12/2017', name: "Joseph", },
    { id: 623, book: 'Berserk',  date: '12/12/2017', name: "Kiran", },
  ];

  const activityData = [
    { id: 203, date: 'Jan 22', content: 'Luffy Joined' },
    { id: 204, date: 'Jan 20', content: 'Kiran Rented Kite Runner' },
    { id: 205, date: 'Jan 18', content: 'Joseph Returned Blade Runner' },
    { id: 206, date: 'Jan 15', content: 'Arun Deactivated Account' },
    { id: 207, date: 'Jan 11', content: 'Adith Joined' },
  ];

  return (
    <React.Fragment>
      <div className="page-content" style={{background:"#F5F5F5"}}>
        

        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col className="py-3">
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Bookshelf</li>
                </ol>
              </Col>

              <Col>
                <div className="float-end">
                  <ButtonGroup>
                    {rangeValues.map((item, index) =>
                      <Button style={{color:"white", background:"teal"}} key={index} onClick={() => setActiveRange(index)}
                        active={index === activeRange}>
                        {item}
                      </Button>)}
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            {headerCardData.map((headerCard, index) =>
              <Col xl={3} md={6} key={index}>
                <Card className="mini-stat text-white mb-3" style={{background:"teal"}}>
                  <CardBody>
                    <div className="mb-4">
                      <div className="float-start mini-stat-img me-4">
                        {/* <img src={headerCard.icon}  /> */}
                      </div>
                      <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                        {headerCard.title}
                      </h5>
                      <h4 className="fw-medium font-size-24">
                        {headerCard.value}
                        <i className={`mdi ms-2
                          ${headerCard.change >= 0 ? 'mdi-arrow-up text-success' : 'mdi-arrow-down text-danger'}`}></i>
                      </h4>
                      {/* <div className={`mini-stat-label ${headerCard.change >= 0 ? 'bg-success' : 'bg-danger'}`}>
                        <p className="mb-0">
                          {`${headerCard.change >= 0 ? '+' : ''}${headerCard.change}%`}
                        </p>
                      </div> */}
                    </div>
                    <div className="pt-2">
                      <div className="float-end">
                        <Link to={headerCard.link} className="text-white-50">
                          <i className="mdi mdi-arrow-right h5"></i>
                        </Link>
                      </div>
                      <p className="text-white-50 mb-0 mt-1">Since Last {rangeValues[activeRange]}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>

          <Row className="mt-5">
            <Col xl={8}>
              <Card className="shadow-sm" style={{border:"none"}}>
                <CardBody>
                  <h4 className="card-title mb-4">Recent Rentals</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Book</th>
                          <th scope="col">Date</th>
                          <th scope="col">Name</th>
                          {/* <th scope="col">Status</th> */}
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactionData.map((item) =>
                          <tr key={item.id}>
                            <th scope="row">#{item.id}</th>
                            <td>
                              <div>
                                {item.book}
                              </div>
                            </td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>
                              <div>
                                <Link to="/transactions" className="btn btn-sm" style={{background:"teal", color:"white"}}>
                                  View
                                </Link>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4} className="mt-md-0 mt-3">
              <Card className="shadow-sm" style={{border:"none"}}>
                <CardBody>
                  <h4 className="card-title mb-4">Activity</h4>
                  <ul className="activity-feed">
                    {activityData.map((item) =>
                      <li className="feed-item" key={item.id}>
                        <div className="feed-item-list p-3">
                          
                          <span className="activity-text pl-3">{item.content}</span>
                          -
                          <span className="date">{item.date}</span>

                        </div>
                      </li>
                    )}
                  </ul>
                  <div className="text-center">
                    <Link to="#" className="btn" style={{background:'teal',color:'white'}}>
                      Load More
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

export default Dashboard
