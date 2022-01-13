import React from 'react';
import { Range } from 'react-range';
import {Row, Col, Button, Form} from 'react-bootstrap';

import './MidiPlayer.css';

const Miditrack = ({trackIdx, trackArt, songIdx, songEnd, trackValue, setTrackValueFunc, songList, setIsInference, changeSong }) => {
    // 노래의 범위를 설정하는 함수 stateCallback 파라미터는 함수를 인자로 받아 어떤 스테이트를 변경할지 설정함
    var renderRange = () => {
        return(
            <Range
            step={1}
            min={0}
            max={songEnd}
    
            values={trackValue}
            onChange={(values) => setTrackValueFunc(values)}
            onFinalChange={() => setIsInference(false)}
            renderTrack={({ props, children }) => (
                <div
                {...props}
                style={{
                    ...props.style,
                    height: '6px',
                    width: '100%',
                    backgroundColor: '#858384'
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
                    backgroundColor: '#88305C',

                }}
                >
                </div>
            )}
            />
        )
        };   
        
    var timeMsg = () => {
        var sec = parseInt(songList[songIdx].duration/songList[songIdx].end * trackValue[0]);
        var padSec = (sec%60).toString().padStart(2, 0) 
        return (`${parseInt(sec/60)} : ${padSec}`);
    };

    return (
        <div className="container">
            <Row className="marginTop5 justify-content-center">
                <Row>
                    <Col className="justify-content-center">
                        <Form.Select value={songIdx} onChange={(e) => {changeSong(e.target.value, trackIdx)}}>
                        {songList.map((song, idx) => {
                            return <option key={idx} value={idx}>{song.name}</option>
                        })}
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="marginTop5">
                    <Col><div className={trackArt} id="Track1"></div></Col>
                </Row>

                <Row className="marginTop5">
                    <Col><p className='mashupTime'>{timeMsg()}</p></Col>
                </Row>

                <Row className="marginTop5" >
                    <Col md={2}></Col>
                    <Col md={8}>{renderRange(0,songEnd)}</Col>
                    <Col md={4}></Col>
                </Row>
                
                <Row className="marginTop5" >
                    <Col><midi-player sound-font="https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus" src={songList[songIdx].path}></midi-player></Col>
                </Row>

            </Row>
        </div>
    );
}

export default Miditrack;
