import React from 'react';

const NavigationBar = () => {
    return (
        <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav
              className="
                navbar navbar-expand-lg
                blur
                border-radius-xl
                top-0
                z-index-fixed
                shadow
                position-absolute
                my-3
                py-2
                start-0
                end-0
                mx-4
              "
            >
              <div className="container-fluid px-0">
                <a
                  className="navbar-brand font-weight-bolder ms-sm-3"
                  href="../"
                  rel="tooltip"
                  title="Tobig's 1516"
                  data-placement="bottom"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tobig's Sound Conference
                </a>
                <ul className="navbar-nav navbar-nav-hover ms-auto">
                  <li className="nav-item ms-lg-auto">
                    <a
                      className="nav-link nav-link-icon me-2"
                      href="https://github.com/ToBigsSound-1516"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-github me-1"></i>
                      <p
                        className="d-inline text-sm z-index-1 font-weight-bold"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Star us on Github"
                      >
                        Github
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>  
    );
}

export default NavigationBar;