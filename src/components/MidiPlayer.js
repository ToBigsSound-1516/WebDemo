import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';

const Midiplayer = () => {
    return (
        <div className="background" >
            <Container fluid>
                <Row>
                    <Col>
                        <h1>
                            투빅스 턴테이블
                        </h1>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} ><div className="Track" id="Track1"></div></Col>
                    <Col md={6} ><div className="Track" id="Track2"></div></Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={1}><Form.Control type="number" placeholder="Enter email" /></Col>
                    <Col md={5}><Form.Label>Range1</Form.Label><Form.Range value={30} /></Col>
                    <Col md={1}><Form.Control type="number" placeholder="Enter email" /></Col>
                    <Col md={5}><Form.Label>Range2</Form.Label><Form.Range value={100} /></Col>
                </Row>

                <Row>
                    <Button as={Col} variant="primary">Button #1</Button>
                </Row>


            </Container>
        </div>
    );
}

export default Midiplayer;
