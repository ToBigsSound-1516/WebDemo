import React,{ useState, useEffect } from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import { Range } from 'react-range';
import 'html-midi-player';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';

const Midiplayer = () => {
    // state 설정
    const [aValues, setAValues] = useState([50]); // 왼쪽 곡 마디 틱 (Range에서 사용)
    const [bValues, setBValues] = useState([50]); // 오른쪽 곡 마디 틱 (Range에서 사용)

    const [aSong, setASong] = useState(1); // 왼쪽 곡 종류 (Select에서 사용)
    const [bSong, setBSong] = useState(0); // 오른쪽 곡 종류 (Select에서 사용)
    const [mixSong, setMixSong] = useState("Combination 1"); // 조합 곡 종류 (Select에서 사용)
    const [aArt, setAArt] = useState("Track Album1"); // 왼쪽 곡에 적용될 앨범아트
    const [bArt, setBArt] = useState("Track Album0"); // 왼쪽 곡에 적용될 앨범아트
    const [midFile, setMidFile] = useState("");

    const [songAEnd, setSongAEnd] = useState(100);
    const [songBEnd, setSongBEnd] = useState(100);

    const [isInference, setIsInference] = useState(false); // 사용자가 inference 버튼을 눌렀는지 파악하기 위한 변수
    const [songList, setSongList] = useState([
      // 임시 노래 리스트. API 형식으로 변경 예정
      {
        'id': 0,
        'file': "IJustWanttoSayILoveYou.mid",
        'path': "midiFiles/IJustWanttoSayILoveYou.mid",
        'name': "I Just Want to Say I Love You",
        'end': 1965
      },
      {
        'id': 1,
        'file': "IsntSheLovely.mid",
        'path': "midiFiles/IsntSheLovely.mid",
        'name': "Isn't She Lovely",
        'end': 733
      },
      {
        'id': 2,
        'file': "DontLookBackinAnger.mid",
        'path': "midiFiles/DontLookBackinAnger.mid",
        'name': "Don't Look Back in Anger",
        'end': 1556
      },
      {
        'id': 3,
        'file': "BilleJeans.mid",
        'path': "midiFiles/BilleJeans.mid",
        'name': "Bille Jeans",
        'end': 2256
      },
      {
        'id': 4,
        'file': "ThinkOutLoud.mid",
        'path': "midiFiles/ThinkOutLoud.mid",
        'name': "Think Out Loud",
        'end': 1445
      },
      {
        'id': 5,
        'file': "IBelieveICanFly.mid",
        'path': "midiFiles/IBelieveICanFly.mid",
        'name': "I Believe I Can Fly",
        'end': 1280
      },
      {
        'id': 6,
        'name': "nobody knows you when youre down and out",
        'path': "midiFiles/Jazz01.mid",
        'file': "Jazz01.mid",
        'end': 1405
      },
    ]);
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
            >
               <div
                style={{
                  position: 'absolute',
                  top: '-35px',
                  color: '#fff',
                  fontWeight: 'bold', 
                  fontSize: '14px',
                  fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                  padding: '7px 4px 4px 4px',
                  borderRadius: '4px',
                  backgroundColor: '#548BF4'
                }}
              >
                {initValue[0].toFixed(1)}
              </div>
            </div>
          )}
        />
      )
    };    

    // 초기에 로드될 때 믹싱 파일을 불러오고 세팅합니다.
    var handleSubmit = () => {
      console.log("Call handleSubmit");
      setMidFile(`/dj?midi1=${songList[aSong].file}&midi2=${songList[bSong].file}&start1=${aValues[0]}&start2=${bValues[0]}&username=abc`);
    };

    var handleChangeSong = (value, trackNumber) => { // 트랙의 번호를 입력받아서 해당 트랙의 앨범과 폼 표시 내용까지 모두 바꿉니다.
      // 변화된 노래끼리의 최적 매시업 포인트 불러오기
      var data = {
        midi1: songList[aSong].file,
        midi2: songList[bSong].file,
        mode: 'distribution',
        n_rank: 1,
      };

      axios.post("/dj", data).then((response)=>{
        console.log("mashup point request success");
        console.log(response.data[0]);
        setAValues([response.data[0].start1]);
        setBValues([response.data[0].start2]);
      })
      .catch((error) => {
        console.log("Error on getting mashup point!")
        console.log(error);
      })
      setIsInference(false); // 인퍼런스 모드를 다시 수동으로 

      // 해당 트랙의 앨범 아트 및 목록, 레인지 끝지점 변경
      if (trackNumber === 1) {
        setASong(songList[value].id);
        setAArt(`Track Album${value}`);
        setSongAEnd(songList[value].end);
      }
      else{
        setBSong(songList[value].id);
        setBArt(`Track Album${value}`);
        setSongBEnd(songList[value].end);
      };

    };

    // 사용자가 inference 요청을 보냈는지 확인하고 설정합니다.
    var handleInference = () => {
      // axios 요청 후 미디 플레이어로 변경
      handleSubmit();
      setIsInference(true); // JSX 버튼을 비활성화

    };

    // mixSong 변경시 호출
    // var handleChangeMixsong = (value) => {
    //   if(mixSong === "Combination 1"){

    //   }
    //   else {

    //   }
    // }

    // 초기 렌더링 시 값 설정
    useEffect(() => {
      setSongAEnd(songList[1].end);
      setSongBEnd(songList[0].end);
      setAValues([500]);
      setBValues([200]);
      setMidFile("http://101.101.217.27:1516/dj");
      setIsInference(false);
    }, []);

    return (
        <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
            <div class="container">
            <div class="section text-center">
                <Row className="marginTop3 justify-content-center">
                  <Col md={6}>
                    <Form.Select size="lg" value={mixSong} onChange={(e) => {setMixSong(e.target.value)}}>
                      <option value={"Combination 1"}>Don't Look Back In Anger + Isn't She Lovely</option>
                      <option value={"Combination 2"}>샘플 곡 조합2</option>
                      <option value={"Combination 3"}>샘플 곡 조합3</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="marginTop3 justify-content-center">
                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={aSong} onChange={(e) => {handleChangeSong(e.target.value, 1)}}>
                      {songList.map((song, idx) => {
                        return <option key={idx} value={idx}>{song.name}</option>
                      })}
                    </Form.Select>
                  </Col>

                  <Col md={3}></Col>

                  <Col className="justify-content-center" md={3}>
                    <Form.Select value={bSong} onChange={(e) => {handleChangeSong(e.target.value, 2)}}>
                      {songList.map((song, idx) => {
                          return <option key={idx} value={idx}>{song.name}</option>
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
                  <Col md={4}>{renderRange(0,songAEnd, aValues, setAValues)}</Col>
                  <Col md={2}></Col>
                  <Col md={4}>{renderRange(0,songBEnd, bValues, setBValues)}</Col>
                  <Col md={1}></Col>
                </Row>
                
                <Row className="marginTop5 justify-content-center">
                    <Col md={6}><midi-player sound-font="https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus" currentTime={aValues[0]} src={songList[aSong].path}></midi-player></Col>
                    <Col md={6}><midi-player sound-font="https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus" currentTime={bValues[0]} src={songList[bSong].path}></midi-player></Col>
                </Row>

                <Row className="marginTop5 justify-content-center">
                    {isInference ? <Col md={4}><midi-player sound-font="https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus" src={midFile}></midi-player></Col> : <Col md={2}><Button variant="outline-secondary" onClick={handleInference}>연결하기</Button></Col>}
                </Row>

            </div>
            </div>
        </div>
    );
}

export default Midiplayer;
