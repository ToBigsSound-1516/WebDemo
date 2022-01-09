import React from 'react'
// import Background from 'https://user-images.githubusercontent.com/63901494/148684236-70f492a8-505e-4c36-a256-44662f96bc82.png';
// import '../../public/assets/js/core/popper.min.js'
// import '../../public/assets/js/core/bootstrap.min.js'
// import '../../public/assets/js/plugins/perfect-scrollbar.min.js'
// import '../../public/assets/js/plugins/perfect-scrollbar.min.js'

class Header extends React.Component {
  render() {
    return (
      <header className="header-2">
        <div
          className="page-header min-vh-75 relative"
          style={{backgroundImage : "url(https://user-images.githubusercontent.com/63901494/148684236-70f492a8-505e-4c36-a256-44662f96bc82.png)"}}
        //   style="background-image: url('../public/assets/img/bg2.jpg')"
        >
          <span className="mask bg-gradient-primary opacity-4"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mx-auto">
                <h1 className="text-white pt-3 mt-n5">음악을 환승하다,</h1>
                <h3 >
                  Infinite AI Music Streaming
                </h3>
              </div>
            </div>
          </div>
        </div>
    </header>
    )
  };
}

export default Header;