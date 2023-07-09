
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const Maps = () => {
    return (
        <>
        <section id='maps' className='block blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2 className='title-name'>Map View</h2>
                </div>
                <Row style={{marginTop: '-7em'}}>
                    <Col sm={12}>
                        <div className='holder'>
                            <ComposableMap>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo} />
                                    ))
                                    }
                                </Geographies>
                            </ComposableMap>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            
        </>
    )
}
