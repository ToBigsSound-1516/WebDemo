import React from 'react';

class HomeDetail extends React.Component{
    render() {
        return(
            <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
                <section className="my-5 py-5">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
                    <div className="rotating-card-container">
                        <div
                        className="
                            card
                            card-background
                            card-background-mask-primary
                            shadow-primary
                            mt-md-0 mt-5
                        "
                        >
                        <div
                            className="front back-background"
                            style={{
                                backgroundImage : "url(https://user-images.githubusercontent.com/63901494/149368701-5510cb78-6d74-4876-accb-a2311e5cc3f2.png)",
                                backgroundSize : 'cover'
                            }}

                        >
                            <div className="card-body py-7 text-center">
                            <i className="material-icons text-white text-4xl my-3"
                                >touch_app</i
                            >
                            <h3 className="text-white">
                                Tobig Tonix<br />
                            </h3>
                            </div>
                        </div>
                        <div
                            className="back back-background"
                            style={{
                                backgroundImage : "url(https://user-images.githubusercontent.com/63901494/148684236-70f492a8-505e-4c36-a256-44662f96bc82.png)",
                                backgroundSize : 'cover'
                            }}

                        >
                            <div className="card-body pt-7 text-center">
                            <h3 className="text-white">
                                Mashup <br />
                                결과 시현하기
                            </h3>
                            <a
                                href="../project"
                                target="_blank"
                                className="btn btn-white btn-sm w-50 mx-auto mt-3"
                                >🎶🎶</a
                            >
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 ms-auto">
                    <div className="row justify-content-start">
                        <div className="col-md-6">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">프로젝트 목적</h5>
                            <p className="pe-5">진정한 무한 재생 플레이리스트를 만들자! 곡들이 끊김없이 넘어가는 Gapless playback을 목표로 하며, 앞-뒤로 오는 2개의 음악을 자연스럽게 이어주는 연결마디들을 생성합니다.</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">데이터셋</h5>
                            <p className="pe-3">
                            MIDI 형식으로 되어 있는 음악 파일들을 사용하였습니다. 
                            Pop 음악들로 이루어진 Million Song Dataset에 기반한 Lakh Pianoroll Dataset들을 활용하였으며, 5개의 트랙을 기준으로 학습하였습니다. 
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-5">
                        <div className="col-md-6 mt-3">
                        <h5 className="font-weight-bolder mt-3">환승구간 탐색</h5>
                        <p className="pe-5">
                            Mashup Point 탐색 방법으로 DTW와 유사도를 활용하였습니다. 
                            전통적인 DTW 방식으로 최소경로를, 음악의 마디 별 분포의 유사도를 계산하여 두 음악 트랙이 자연스럽게 이어질 수 있는
                            구간을 선정하였습니다.
                        </p>
                        </div>
                        <div className="col-md-6 mt-3">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">연결고리 생성</h5>
                            <p className="pe-3">
                            MuseGAN의 convolution구조를 차용 및 U-Net 구조를 사용하여 두 음악간의 연결고리를 생성하였습니다. 기존의 음악에서 가운데 부분을 마스킹 후 이를 예측하는 방식으로 학습하였습니다. 
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </section>

                <section className="my-5 py-5">
                <div className="container mt-sm-5 mt-3">
                    <div className="row">
                        <div className="col-lg-3">
                            <div
                                className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
                                style={{
                                    top : "100px"
                                }}
                                // style="top: 100px"
                            >
                                <h3>Members</h3>
                                <h6 className="text-secondary font-weight-normal pe-3">
                                Members of the Tobig's Sound Conference Team :)
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div
                                        className="
                                        position-relative
                                        border-radius-xl
                                        overflow-hidden
                                        shadow-lg
                                        mb-7
                                        "
                                    >
                                        <div className="container border-bottom">
                                            <div className="row justify-space-between py-2">
                                                <div className="col-lg-3">
                                                    <p></p>
                                                    <img src= "https://user-images.githubusercontent.com/63901494/149170222-1697abb8-3a84-4545-934c-11070bbf0662.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">도라에몽</p>
                                                    <p>(15기 안민준)<br></br>"음악과 함께 투빅스를 졸업해서 너무 행복합니다.. 엉엉"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div
                                        className="
                                        position-relative
                                        border-radius-xl
                                        overflow-hidden
                                        shadow-lg
                                        mb-7
                                        "
                                    >
                                        <div className="container border-bottom">
                                            <div className="row justify-space-between py-2">
                                                <div className="col-lg-3">
                                                    <p></p>
                                                    <img src= "https://user-images.githubusercontent.com/63901494/149170304-8fa1c15d-0192-4235-9b9b-645232995858.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">무민</p>
                                                    <p>(15기 황보진경)<br></br>"스무스~"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div
                                        className="
                                        position-relative
                                        border-radius-xl
                                        overflow-hidden
                                        shadow-lg
                                        mb-7
                                        "
                                    >
                                        <div className="container border-bottom">
                                            <div className="row justify-space-between py-2">
                                                <div className="col-lg-3">
                                                    <p></p>
                                                    <img src= "https://user-images.githubusercontent.com/63901494/149170139-ab8b1874-5beb-401c-9fc9-b9747261851f.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">밥</p>
                                                    <p>(16기 김윤혜)<br></br>"음~ 악!"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div
                                        className="
                                        position-relative
                                        border-radius-xl
                                        overflow-hidden
                                        shadow-lg
                                        mb-7
                                        "
                                    >
                                        <div className="container border-bottom">
                                            <div className="row justify-space-between py-2">
                                                <div className="col-lg-3">
                                                    <p></p>
                                                    <img src= "https://user-images.githubusercontent.com/63901494/149170047-04af8468-1dde-4bb8-8079-508cd1d7eae2.png" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">판다</p>
                                                    <p>(15기 김태희)<br></br>"악기 연주를 넘어 컴퓨터로 음악 생성하기🎵"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div
                                        className="
                                        position-relative
                                        border-radius-xl
                                        overflow-hidden
                                        shadow-lg
                                        mb-7
                                        "
                                    >
                                        <div className="container border-bottom">
                                            <div className="row justify-space-between py-2">
                                                <div className="col-lg-3">
                                                    <p></p>
                                                    <img src= "https://user-images.githubusercontent.com/63901494/149357764-277ed309-6ae1-4447-8272-9f09fce5122c.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">푸</p>
                                                    <p>(15기 권오현)<br></br>"음악만이 나라에서 허락하는 유일한 마약.."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    };
}

export default HomeDetail