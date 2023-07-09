
import Card from 'react-bootstrap/Card';
import Rupam from './../assets/rupam.jpg'
import Tiasha from './../assets/tiasha.jpg'
import Prity from './../assets/prity.jpg'
import Dev from './../assets/dev.jpg'
import { CDBIcon, CDBContainer } from 'cdbreact';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const About = () => {
    return (
        <>
        <section id='team' className='block blog-block'>
        <Container fluid>
        <div className='title-holder'>
            <h4 className='title-name'>Team Members</h4>
        </div>
        <Row>
          <Col sm={3}>
            <div className='holder'>
                <Card style={{width: '18.4rem'}}>
                <img src={Rupam} alt="Logo" />
                <Card.Body>
                    <Card.Title>Rupam Dey</Card.Title>
                    <Card.Text>Contributed as "Coder"</Card.Text>
                    <CDBContainer>
                        <CDBIcon fab spin icon="stack-overflow" />
                        <CDBIcon fab spin icon="facebook" />
                        <CDBIcon fab spin icon="reddit" />
                        <CDBIcon fab spin icon="twitter" />
                        <CDBIcon fab spin icon="instagram" />
                        <CDBIcon fab spin icon="google" />
                    </CDBContainer>
                   </Card.Body>
                </Card>
            </div>
        </Col>
        <Col sm={3}>
            <div className='holder'>
                <Card style={{width: '18.4rem'}}>
                <img src={Tiasha} alt="Logo" />
                <Card.Body>
                    <Card.Title>Tiasha Hait</Card.Title>
                    <Card.Text>Contributed as "Coder"</Card.Text>
                    <CDBContainer>
                        <CDBIcon fab spin icon="stack-overflow" />
                        <CDBIcon fab spin icon="facebook" />
                        <CDBIcon fab spin icon="reddit" />
                        <CDBIcon fab spin icon="twitter" />
                        <CDBIcon fab spin icon="instagram" />
                        <CDBIcon fab spin icon="google" />
                    </CDBContainer>
                   </Card.Body>
                </Card>
            </div>
        </Col>
        <Col sm={3}>
            <div className='holder'>
                <Card style={{width: '18.4rem'}}>
                <img src={Prity} alt="Logo" />
                <Card.Body>
                    <Card.Title>Prity Bugchi</Card.Title>
                    <Card.Text>Contributed as "Coder"</Card.Text>
                    <CDBContainer>
                        <CDBIcon fab spin icon="stack-overflow" />
                        <CDBIcon fab spin icon="facebook" />
                        <CDBIcon fab spin icon="reddit" />
                        <CDBIcon fab spin icon="twitter" />
                        <CDBIcon fab spin icon="instagram" />
                        <CDBIcon fab spin icon="google" />
                    </CDBContainer>
                   </Card.Body>
                </Card>
            </div>
        </Col>
        <Col sm={3}>
            <div className='holder'>
                <Card style={{width: '18.4rem'}}>
                <img src={Dev} alt="Logo" />
                <Card.Body>
                    <Card.Title>Debkumar Biswas</Card.Title>
                    <Card.Text>Contributed as "Coder"</Card.Text>
                    <CDBContainer>
                        <CDBIcon fab spin icon="stack-overflow" />
                        <CDBIcon fab spin icon="facebook" />
                        <CDBIcon fab spin icon="reddit" />
                        <CDBIcon fab spin icon="twitter" />
                        <CDBIcon fab spin icon="instagram" />
                        <CDBIcon fab spin icon="google" />
                    </CDBContainer>
                   </Card.Body>
                </Card>
            </div>
        </Col>
       </Row>
        </Container>
        </section>
        </>
        
    )
}