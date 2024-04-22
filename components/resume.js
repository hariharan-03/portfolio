import React from 'react'
import{Col,Row,Card} from "react-bootstrap"
export default function resume() {
  return (
          <Card className="px-5 py-3 maincard dark-bg text-white">
          <h2 className='mb-4'>RESUME</h2>
          <Row>
            <Col>
                <h3>Experience</h3>
                <Card className='p-3 mb-3 withborder'>
                    <p>2021-present</p>
                    <h5>Software Engineer</h5>
                    <p className='m-0'>Skoruz technologies</p>
                </Card>
                <Card className='p-3 withborder'>
                    <p>2019-2020</p>
                    <h5>Web Developer</h5>
                    <p className='m-0'>Freelance</p>
                </Card>
                <Card className='p-3 withborder'>
                    <p>2019-2020</p>
                    <h5>Software Engineer</h5>
                    <p className='m-0'>Skoruz technologies</p>
                </Card>
            </Col>
            <Col>
                <h3>Education</h3>
                <Card className='p-3 withborder'>
                    <p>2015-2018</p>
                    <h5>Bachelor of science</h5>
                    <p className='m-0'>Sengunthar arts and science</p>
                </Card>
            </Col>
          </Row>
          </Card>
  )
}
