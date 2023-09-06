import React,{useState} from 'react'
import{Col,Row,Card} from "react-bootstrap"

export default function work() {
    const [List, setList] = useState([
        {
            image:"/chups.jpg",
            type:"Web",
            lang:"Next JS",
            title:"Chups",
            url:"https://chups.com/"
        },
        {
            image:"/ chupshop.jpg",
            type:"Web",
            lang:"Next js",
            title:"Chupshop",
            url:"https://admin.chups.com/"
        },
        {
            image:"/chups-app.webp",
            type:"App",
            lang:"React Native",
            title:"Chups",
            url:""
        },
        {
            image:"/kiosk-app.webp",
            type:"App",
            lang:"React Native",
            title:"Kiosk",
            url:""
        },
        {
            image:"/capton.jpg",
            type:"Web",
            lang:"React JS",
            title:"Capton",
            url:"https://capton.com/"
        },
        {
            image:"/lasles.jpg",
            type:"Web",
            lang:"Next JS",
            title:"Lasles-VPN",
            url:"https://dumbs-lasles-vpn.vercel.app/"
        },
        {
            image:"/leaflearn.jpg",
            type:"Web",
            lang:"Next JS",
            title:"Leaf-Learn",
            url:"https://leaflearning.vercel.app/"
        },
        {
            image:"/forms.jpg",
            type:"Web",
            lang:"React JS",
            title:"Multi-Form",
            url:"https://trueconnectdemo.vercel.app/"
        },
        {
            image:"/dummy.jpg",
            type:"Web",
            lang:"React JS",
            title:"Dot-pay",
            url:"https://dotpay.vercel.app/"
        },
        
    ]);
  return (
    <Card className="px-5 py-3 maincard dark-bg text-white">
          <h2 className='mb-4'>PORTFOLIO</h2>
        <Row>
                    {List?.map(item=>(
                        <Col md={6} className="mb-3">
                            <a href={item.url} target="_blank">
                      <Card className='withborder'>
                          <Card.Body>
                            <Row>
                                <Col md={4}>
                                     <Card.Img variant="top" src={item.image} height={100} style={{objectFit:"contain",width:"100%"}}/>
                                </Col>
                                <Col md={6}>
                                    <p className='mb-0'>{item.title}</p>
                                    <p>{item.type}</p>
                                    <p>{item.lang}</p>
                                </Col>
                            </Row>
                          </Card.Body>
                      </Card>
                      </a>
                      </Col>
                    ))}
                  </Row>
    </Card>
  )
}
