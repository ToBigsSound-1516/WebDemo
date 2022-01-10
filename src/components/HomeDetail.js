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
                            card-rotate
                            card-background
                            card-background-mask-primary
                            shadow-primary
                            mt-md-0 mt-5
                        "
                        >
                        <div
                            className="front front-background"
                            style={{
                                backgroundImage : "url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
                                backgroundSize : 'cover'
                            }}

                        >
                            <div className="card-body py-7 text-center">
                            <i className="material-icons text-white text-4xl my-3"
                                >touch_app</i
                            >
                            <h3 className="text-white">
                                연속적으로 이어지는 음악 <br />
                            </h3>
                            </div>
                        </div>
                        <div
                            className="back back-background"
                            style={{
                                backgroundImage : "url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)",
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
                            <p className="pe-5">음악 2개 이어준다 어저구저쩌구</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">데이터셋</h5>
                            <p className="pe-3">
                            MIDI 형식으로 되어 있는 POP 음악 파일들을 사용하여 학습 및
                            인퍼런스를 진행하였습니다.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-5">
                        <div className="col-md-6 mt-3">
                        <h5 className="font-weight-bolder mt-3">환승구간 탐색</h5>
                        <p className="pe-5">
                            유사도 기반으로 두 음악 트랙들이 자연스럽게 이어질 수 있는
                            구간을 선정하였습니다.
                        </p>
                        </div>
                        <div className="col-md-6 mt-3">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">연결고리 생성</h5>
                            <p className="pe-3">
                            GAN을 이용하여 두 음악 트랙이 자연스럽게 이어질 수 있도록
                            연결지점의 음악을 생성하였습니다.
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">도라에몽</p>
                                                    <p>(15기 안민준)<br></br>각자 한 마디 소감 블라블라</p>
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">무민</p>
                                                    <p>(15기 황보진경)<br></br>각자 한 마디 소감 블라블라</p>
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">밥</p>
                                                    <p>(16기 김윤혜)<br></br>각자 한 마디 소감 블라블라</p>
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">시골소녀</p>
                                                    <p>(14기 장예은)<br></br>각자 한 마디 소감 블라블라</p>
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">판다</p>
                                                    <p>(15기 김태희)<br></br>각자 한 마디 소감 블라블라</p>
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
                                                    <img src= "https://user-images.githubusercontent.com/63901494/129619988-1a959834-313c-443c-84c2-4fc2db8ef8f6.jpg" width="200" height="200" alt="profile" />
                                                    <p></p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lead text-dark pt-1 mb-0">푸</p>
                                                    <p>(15기 권오현)<br></br>각자 한 마디 소감 블라블라</p>
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