
import card1 from './../assets/card1.jpg'
import card2 from './../assets/card2.jpg'
import card3 from './../assets/card3.jpg'
import card4 from './../assets/card4.jpg'
import card5 from './../assets/card5.jpg'
import card6 from './../assets/card6.jpg'
import card7 from './../assets/card7.jpg'
import card8 from './../assets/card8.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Home = () =>{
    return(
        <>
        <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2 className='title-name'>Welcome to West Bengal</h2>
                </div>
                <Row>
                    <Col sm={3}>
                        <div className='holder'>
                            <Card style={{width: '18.4rem'}}>
                                <img src={card1} alt="Logo" />
                                <Card.Body>
                                    <Card.Title>Kalimpong</Card.Title>
                                    <Card.Text>Kalimpong became an important centre for trade with Tibet due to the closeness of the town to the Jelepla Pass which allowed access to Central Tibet</Card.Text>
                                    <Link to='/kalimpong' className='btn btn-primary'>Go Here</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card2} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Santiniketan</Card.Title>
                                        <Card.Text>Santiniketan, popularly known today as a university town, a hundred miles to the north of Kolkata, was originally an ashram built by Debendranath Tagore, where anyone</Card.Text>
                                        <Link to='/santiniketan' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card3} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Darjeeling</Card.Title>
                                        <Card.Text>Darjeeling is situated on a long, narrow mountain ridge of the Sikkim Himalayas that descends abruptly to the bed of the Great Rangit River. Welcome to Darjeeling.</Card.Text>
                                        <Link to='/darjeeling' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card4} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Cooch Behar</Card.Title>
                                        <Card.Text>Before 28th August 1949, Cooch Behar was a Princely State ruled by the king of Cooch Behar, who had been a feudatory ruler under British Government.</Card.Text>
                                        <Link to='/coochBehar' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card5} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Malda</Card.Title>
                                        <Card.Text>The Malda Museum has a great collection of the region's architectural and anthropological specimens. During the 18th century, Malda was the seat of prosperous cotton and silk industries.</Card.Text>
                                        <Link to='/malda' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card6} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Chandannagar</Card.Title>
                                        <Card.Text>Established as a French settlement in 1673, the town of Chandannagar is situated by the River Hooghly and has turned into a popular tourist attraction today. Welcome to Candannagar. </Card.Text>
                                        <Link to='/chandannagar' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card7} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Murshidabad</Card.Title>
                                        <Card.Text>Before the advent of British, the city of Murshidabad was the capital of Bengal. Before the advent of British, the city of Murshidabad was the capital of Bengal. Before the advent of British.</Card.Text>
                                        <Link to='/murshidabad' className='btn btn-primary'>Go Here</Link>

                                    </Card.Body>
                                </Card>
                            </div>
                    </Col>
                    <Col sm={3}>
                        <div className='holder'>
                                <Card style={{width: '18.4rem'}}>
                                    <img src={card8} alt="Logo" />
                                    <Card.Body>
                                        <Card.Title>Kolkata</Card.Title>
                                        <Card.Text>Kolkata was the capital of the British India until 1911, when the capital was relocated to Delhi. Kolkata grew rapidly in the 19th century to become the second most important city of the .</Card.Text>
                                        <Link to='/kolkata' className='btn btn-primary'>Go Here</Link>

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