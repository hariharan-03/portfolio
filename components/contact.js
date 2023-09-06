
import{Col,Row,Card, Container, Form, Button} from "react-bootstrap"

export default function contact() {
  return (
      <Card className="px-5 py-3 maincard dark-bg text-white">
          <h2 className='mb-4'>CONTACT</h2>
          <Row className='mb-4'>
              <Col>
              <a href='tel:+91 9865007511'>
              <Card className='withborder p-3'>
                  <h6>Phone</h6>
                  <p>9865007511</p>
                  </Card>
                  </a>
              </Col>
              <Col>
              <a href="mailto:rhariharan461@gmail.com">
              <Card className='withborder p-3'>
                  <h6>Email</h6>
                  <p>rhariharan461@gmail.com</p>
                  </Card>
                  </a>
              </Col>
          </Row>
          <Container>
              <p>I am always open to discussing new projects, opportunities in tech world,
                  partnerships and more so mentorship. </p>
              <Form.Control type="text" placeholder='Name:' size="lg"/>
              <Form.Control type="text" placeholder='Email:' size="lg"/>
              <Form.Control type="text" placeholder='Message:' className='mb-2' size="lg"/>
              <Button className='cta'>Submit</Button>
          </Container>
      </Card>
  )
}
