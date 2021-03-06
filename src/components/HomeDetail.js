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
                                ?????? ????????????
                            </h3>
                            <a
                                href="../project"
                                target="_blank"
                                className="btn btn-white btn-sm w-50 mx-auto mt-3"
                                >????????</a
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
                            <h5 className="font-weight-bolder mt-3">???????????? ??????</h5>
                            <p className="pe-5">????????? ?????? ?????? ????????????????????? ?????????! ???????????? ???????????? Gapless playback??? ?????????, ???-??? ????????? ??????????????? ???????????? ?????????????????? ???????????????.</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">????????????</h5>
                            <p className="pe-3">
                            MIDI ???????????? ?????? ?????? ?????? ???????????? ?????????????????????. 
                            Pop ???????????? ???????????? Million Song Dataset??? ????????? Lakh Pianoroll Dataset?????? ?????????????????????.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-5">
                        <div className="col-md-6 mt-3">
                        <h5 className="font-weight-bolder mt-3">???????????? ??????</h5>
                        <p className="pe-5">
                            ???????????? DTW ???????????? ???????????????, ????????? ?????? ??? ????????? ???????????? ???????????? ??? ?????? ????????? ??????????????? ????????? ??? ??????
                            Mashup Point??? ?????????????????????.
                        </p>
                        </div>
                        <div className="col-md-6 mt-3">
                        <div className="info">
                            <h5 className="font-weight-bolder mt-3">???????????? ??????</h5>
                            <p className="pe-3">
                            MuseGAN??? convolution????????? ?????? ??? U-Net ????????? ???????????? ??? ???????????? ??????????????? ?????????????????????. ????????? ???????????? ????????? ????????? ????????? ??? ?????? ???????????? ???????????? ?????????????????????. 
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
                                                    <p className="lead text-dark pt-1 mb-0">????????????</p>
                                                    <p>(15??? ?????????)<br></br>"????????? ?????? ???????????? ???????????? ?????? ???????????????.. ??????"</p>
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
                                                    <p className="lead text-dark pt-1 mb-0">??????</p>
                                                    <p>(15??? ????????????)<br></br>"?????????~"</p>
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
                                                    <p className="lead text-dark pt-1 mb-0">???</p>
                                                    <p>(16??? ?????????)<br></br>"???~ ???!"</p>
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
                                                    <p className="lead text-dark pt-1 mb-0">??????</p>
                                                    <p>(15??? ?????????)<br></br>"?????? ????????? ?????? ???????????? ?????? ????????????????"</p>
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
                                                    <p className="lead text-dark pt-1 mb-0">???</p>
                                                    <p>(15??? ?????????)<br></br>"???????????? ???????????? ???????????? ????????? ??????.."</p>
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