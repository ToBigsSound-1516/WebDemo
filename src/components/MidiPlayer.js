import React,{ useState, useEffect } from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import 'html-midi-player';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './MidiPlayer.css';
import Miditrack from './MidiTrack';

const Midiplayer = () => {
    // cors 회피
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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

    // 초기에 로드될 때 믹싱 파일을 불러오고 세팅합니다.
    var handleSubmit = () => {
      console.log("Call handleSubmit");
      setMidFile(`https://smootify.o-r.kr:1516/dj?midi1=${songList[aSong].file}&midi2=${songList[bSong].file}&start1=${aValues[0]}&start2=${bValues[0]}&username=abc`);
    };

    var handleChangeSong = (value, trackNumber) => { // 트랙의 번호를 입력받아서 해당 트랙의 앨범과 폼 표시 내용까지 모두 바꿉니다.
      // 변화된 노래끼리의 최적 매시업 포인트 불러오기
      var data = {
        midi1: songList[aSong].file,
        midi2: songList[bSong].file,
        mode: 'distribution',
        n_rank: 1,
      };

      axios.post("https://smootify.o-r.kr:1516/mashup", data).then((response)=>{
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

    // 초기 렌더링 시 값 설정
    useEffect(() => {
      setSongAEnd(songList[1].end);
      setSongBEnd(songList[0].end);
      setAValues([500]);
      setBValues([200]);
      setMidFile("/dj");
      setIsInference(false);
    }, []);

    return (
        <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
            <div className="container">
            <div className="section text-center">
                <Row className="marginTop3 justify-content-center">
                  <Col md={6}>
                    <Form.Select size="lg" value={mixSong} onChange={(e) => {setMixSong(e.target.value)}}>
                      <option value={"Combination 1"}>Don't Look Back In Anger + Isn't She Lovely</option>
                      <option value={"Combination 2"}>샘플 곡 조합2</option>
                      <option value={"Combination 3"}>샘플 곡 조합3</option>
                    </Form.Select>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}><Miditrack trackIdx={1} songList={songList} trackArt={aArt} songIdx={aSong} songEnd={songAEnd} trackValue={aValues} setTrackValueFunc={setAValues} setIsInference={setIsInference} changeSong={handleChangeSong} ></Miditrack></Col>
                  <Col md={6}><Miditrack trackIdx={2} songList={songList} trackArt={bArt} songIdx={bSong} songEnd={songBEnd} trackValue={bValues} setTrackValueFunc={setBValues} setIsInference={setIsInference} changeSong={handleChangeSong}></Miditrack></Col>
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
