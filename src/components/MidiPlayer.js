import React,{ useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { Range } from 'react-range';
import 'html-midi-player';


import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';

const Midiplayer = () => {
    // state 설정
    const [aValues, setAValues] = useState([50]); // 왼쪽 곡 마디 틱
    const [bValues, setBValues] = useState([30]); // 오른쪽 곡 마디 틱
    const [midFile, setMidFile] = useState("https://magenta.github.io/magenta-js/music/demos/melody.mid");

    var renderRange = (start, end, initValue, stateCallback) => {
      return(
        <Range
          step={1}
          min={start}
          max={end}

          values={initValue}
          onChange={(values) => stateCallback(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                backgroundColor: '#D1F2EB'
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
                backgroundColor: '#1C2833',
                border: '3px solid',
                borderColor: '#D1F2EB'
              }}
            />
          )}
        />
      )
    }
    return (
        <div className="background" >
            <Container>
                <Row className="marginTop3 justify-content-center">
                  <Col md={6}>
                    <Form.Select size="lg">
                      <option value={"Combination 1"}>Don't Look Back In Anger + Isn't She Lovely</option>
                      <option value={"Combination 2"}>샘플 곡 조합2</option>
                      <option value={"Combination 3"}>샘플 곡 조합3</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="marginTop3 justify-content-center">
                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={"Song2"}>
                      <option value={"Song1"}>Isn't She Lovely</option>
                      <option value={"Song2"}>Don't Look Back In Anger</option>
                    </Form.Select>
                  </Col>

                  <Col md={3}></Col>

                  <Col className="justify-content-center" md={3}>
                    <Form.Select>
                      <option value={"Song1"}>Isn't She Lovely</option>
                      <option value={"Song2"}>Don't Look Back In Anger</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="marginTop5 justify-content-center">
                    <Col md={6} ><div className="Track Album1" id="Track1"></div></Col>
                    <Col md={6} ><div className="Track Album2" id="Track2"></div></Col>
                </Row>


                <Row className="marginTop5">
                  <Col md={1}></Col>
                  <Col md={4}>{renderRange(0,100, aValues, setAValues)}</Col>
                  <Col md={2}></Col>
                  <Col md={4}>{renderRange(0,100, bValues, setBValues)}</Col>
                  <Col md={1}></Col>
                </Row>

                <Row className="marginTop5 justify-content-center">
                    <Col md={4}><midi-player src={midFile}></midi-player></Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Midiplayer;
