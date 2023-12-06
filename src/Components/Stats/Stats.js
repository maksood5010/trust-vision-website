import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function Stats() {

    return (
        <section className="bg-white">
            <Container>
                <div className="heading-layout2">
                    <h3 className="heading__title mb-30">Touching Lives Across the World<br />Our Healthcare Presence in Region</h3>
                </div>

                <p className="heading__desc font-weight-bold color-secondary mb-60">
                    Discover our Statistics Footprint Across the World, Bringing Accessible and Premium Healthcare Services Closer
                    to You.
                </p>

                <Row>
                    <Col lg={4}>
                        <div className="card shadow-sm animate animate-card border-box" >
                            <div style={{ padding: '10px' }}>
                                <h4>
                                    290000<br />
                                    <small>Patients</small>
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card shadow-sm animate animate-card border-box" >
                            <div style={{ padding: '10px' }}>
                                <h4>
                                    138<br />
                                    <small>Doctors</small>
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card shadow-sm animate animate-card border-box" >
                            <div style={{ padding: '10px' }}>
                                <h4>
                                    43<br />
                                    <small>Clinics</small>
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row >
                <Col lg={4}></Col>
                    <Col lg={4}>
                    <div className="card shadow-sm animate animate-card border-box" >
                        <div style={{ padding: '10px' }}>
                            <h4>
                                5<br />
                                <small>Countries</small>
                            </h4>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>

            </Container>
        </section>
    )

}
export default Stats;