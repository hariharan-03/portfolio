"use client"
import { Button, Card, Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import Home from "../../components/home";
import Resume from "../../components/resume"
import Work from "../../components/work"
import Contact from "../../components/contact"
export default function Index() {
  return (
    <>
   <Container className="py-5">
      <Row>
        <Col md={4} className="my-auto mt-5 pt-5">
          <Card className="dark-bg text-white withborder">
            <Card.Body className="position-relative">
            <img src="/profile1.jpg" className="position-absolute top-0 start-50 translate-middle withborder profimg" style={{height:"208px",width:"208px",borderRadius:"20%"}}/>
          <h3 className="pt-5 mt-5 text-center">HARIHARAN</h3>
          <p className="text-center">Software Engineer</p>
        <div className="p-4 personaldetails">
          <Row className="border-bottom py-2">
            <Col md={1}><img src="/phone.png" height={30}/></Col>
            <Col className="ms-2">
            <p className="m-0">Phone</p>
            <span>9865007511</span>
            </Col>
          </Row>
          <Row className="border-bottom py-2">
            <Col md={1}><img src="/email.png" height={30}/></Col>
            <Col className="ms-2">
            <p className="m-0">Email</p>
            <span>rhariharan461@gmail.com</span>
            </Col>
          </Row>
          <Row className="border-bottom py-2 mb-2">
            <Col md={1}><img src="/location.png" height={30}/></Col>
            <Col className="ms-2">
            <p className="m-0">Location</p>
            <span>Namakkal, Tamilnadu</span>
            </Col>
          </Row>
          <div className="text-center me-2">
          <a href="https://drive.google.com/file/d/1XRPE-DwRFnRPQ-yKUKKBShi6pQvaIPWB/view?usp=sharing" target="_blank"><Button className="cta">Download Resume</Button></a>
          </div>
        </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="sidecol mt-4 mt-md-0">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="justify-content-center justify-content-md-end me-0 me-md-3"
            >
              <Tab eventKey="home" title="Home">
              <Home/>
              </Tab>
              <Tab eventKey="resume" title="Resume">
              <Resume/>
              </Tab>
              <Tab eventKey="work" title="Work">
              <Work/>
              </Tab>
              <Tab eventKey="contact" title="Contact">
              <Contact/>
              </Tab>
            </Tabs>
        </Col>
      </Row>
   </Container>
    </>
  )
}
