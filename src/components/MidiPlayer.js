import React,{ useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { Range } from 'react-range';
import 'html-midi-player';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';

const Midiplayer = () => {
    // state 설정
    const [aValues, setAValues] = useState([50]); // 왼쪽 곡 마디 틱 (Range에서 사용)
    const [bValues, setBValues] = useState([30]); // 오른쪽 곡 마디 틱 (Range에서 사용)

    const [aSong, setASong] = useState("Album1"); // 왼쪽 곡 종류 (Select에서 사용)
    const [bSong, setBSong] = useState("Album2"); // 오른쪽 곡 종류 (Select에서 사용)
    const [mixSong, setMixSong] = useState("Combination 1"); // 조합 곡 종류 (Select에서 사용)
    const [aArt, setAArt] = useState("Track Album1"); // 왼쪽 곡에 적용될 앨범아트
    const [bArt, setBArt] = useState("Track Album2"); // 왼쪽 곡에 적용될 앨범아트
    const [midFile, setMidFile] = useState("http://101.101.217.27:1516/dj");

    // 노래의 범위를 설정하는 함수 stateCallback 파라미터는 함수를 인자로 받아 어떤 스테이트를 변경할지 설정함
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
    };    

    var handleSubmit = () => {
      axios.get('http://101.101.217.27:1516/dj').then((Response)=>{
          console.log(Response.data);
      }).catch((Error)=>{
          console.log(Error);
      })
    };

    var handleChangeSong = (value, trackNumber) => { // 트랙의 번호를 입력받아서 해당 트랙의 앨범과 폼 표시 내용까지 모두 바꿉니다.
      if (trackNumber == 1) {
        console.log(value);
        setASong(value);
        setAArt(`Track ${value}`);
      }
      else{
        setBSong(value);
        setBArt(`Track ${value}`);
      }
      

    };

    return (
        <div className="background" >
            <Container>
                <Row className="marginTop3 justify-content-center">
                  <Col md={6}>
                    <Form.Select size="lg" onChange={(e) => {setMixSong(e.target.value)}}>
                      <option value={"Combination 1"}>Don't Look Back In Anger + Isn't She Lovely</option>
                      <option value={"Combination 2"}>샘플 곡 조합2</option>
                      <option value={"Combination 3"}>샘플 곡 조합3</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="marginTop3 justify-content-center">
                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={aSong} onChange={(e) => {handleChangeSong(e.target.value, 1)}}>
                      <option value={"Album1"}>Isn't She Lovely</option>
                      <option value={"Album2"}>Don't Look Back In Anger</option>
                    </Form.Select>
                  </Col>

                  <Col md={3}></Col>

                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={bSong} onChange={(e) => {handleChangeSong(e.target.value, 2)}}>
                      <option value={"Album1"}>Isn't She Lovely</option>
                      <option value={"Album2"}>Don't Look Back In Anger</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="marginTop5 justify-content-center">
                    <Col md={6} ><div className={aArt} id="Track1"></div></Col>
                    <Col md={6} ><div className={bArt} id="Track2"></div></Col>
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
