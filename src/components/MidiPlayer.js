import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { Range } from 'react-range';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';

const Midiplayer = () => {
    var state = { values: [50] };

    var renderTrack = () => {
        <div
          style={{
            height: '6px',
            width: '100%',
            backgroundColor: '#ccc'
          }}
        >
        </div>
    };

    var renderThumb= () => {
        <div
          style={{
            height: '42px',
            width: '42px',
            backgroundColor: '#999'
          }}
        />
    };

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
                    {/* <Col md={1}><Form.Control type="number" placeholder="Enter email" /></Col>
                    <Col md={5}><Range step={0.1} min={0} max={100} /></Col>
                    <Col md={1}><Form.Control type="number" placeholder="Enter email" /></Col>
                    <Col md={5}><Range step={0.1} min={0} max={100} /></Col> */}
                </Row>

                <Row>
                    <Button as={Col} variant="primary">Button #1</Button>
                </Row>
                
                <Range values={state.values} renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999'
            }}
          />
        )} />
            </Container>
        </div>
    );
}

export default Midiplayer;
