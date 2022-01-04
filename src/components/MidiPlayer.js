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

    const songList = [
      // 임시 노래 리스트. API 형식으로 변경 예정
      {
        'file': "IJustWanttoSayILoveYou.mid",
        'name': "I Just Want to Say I Love You",
        'end': 1965
      },
      {
        'file': "IsntSheLovely.mid",
        'name': "Isn't She Lovely",
        'end': 733
      },
      {
        'file': "DontLookBackinAnger.mid",
        'name': "Don't Look Back in Anger",
        'end': 1556
      },
      {
        'file': "BilleJeans.mid",
        'name': "Bille Jeans",
        'end': 2256
      },
      {
        'file': "ThinkOutLoud.mid",
        'name': "Think Out Loud",
        'end': 1445
      },
      {
        'file': "IBelieveICanFly.mid",
        'name': "I Believe I Can Fly",
        'end': 1280
      },
      {
        'name': "Jazz01.mid",
        'file': "Jazz01.mid",
        'end': 1405
      },
    ]
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
      var data = {
        "midi1": aSong,
        "midi2": bSong,
        "start1": aValues,
        "start2": bValues
      }
      
      console.log("Call handleSubmit");

      axios.post('http://101.101.217.27:1516/dj', data).then((Response)=>{
          console.log(Response.data);
      }).catch((Error)=>{;
          console.log(Error);
      })
    };

    var handleChangeSong = (value, trackNumber) => { // 트랙의 번호를 입력받아서 해당 트랙의 앨범과 폼 표시 내용까지 모두 바꿉니다.
      if (trackNumber == 1) {
        setASong(value);
        setAArt(`Track ${value}`);
      }
      else{
        setBSong(value);
        setBArt(`Track ${value}`);
      }
      
      handleSubmit();
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
                      {songList.map((song) => {
                        return <option value={song.file}>{song.name}</option>
                      })}
                    </Form.Select>
                  </Col>

                  <Col md={3}></Col>

                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={bSong} onChange={(e) => {handleChangeSong(e.target.value, 2)}}>
                      {songList.map((song) => {
                          return <option value={song.file}>{song.name}</option>
                      })}
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
