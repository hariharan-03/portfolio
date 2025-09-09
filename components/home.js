import React from 'react'
import{Col,Row,Card} from "react-bootstrap"
export default function home() {
  return (
          <Card className="px-5 py-3 maincard dark-bg text-white">
          <h2 className='mb-4'>ABOUT ME</h2>
          <p className='ms-3 mb-3'>A passionate web developer with 4+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within eCommerce technologies. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
          <h4>Web stack</h4>
          <Row className='mb-3'>
            <Col className='mb-3 ms-2'>
            <img src="react-2.svg" height={70} alt="React JS"/>
            </Col>
            <Col className='mb-3'>
            <img src="next-js.svg" height={70} style={{backgroundColor:"white",borderRadius:"50%"}} title="Next JS"/>
            </Col>
            <Col className='mb-3'>
            <img src="javascript-1.svg" height={70}/>
            </Col>
            <Col className='mb-3'>
            <img src="html-1.svg" height={70}/>
            </Col>
            <Col className='mb-3'>
            <img src="css-3.svg" height={70}/>
            </Col>
            <Col className='mb-3'>
            <img src="sass-1.svg" height={70}/>
            </Col>
            <Col className='mb-3'>
            <img src="bootstrap-5-1.svg" height={70}/>
            </Col>
          </Row>
          <h4>App stack</h4>
          <Row>
            <Col>
            <img src="react-native-1.svg" height={70}/>
            </Col>
          </Row>
          </Card>
  )
}
