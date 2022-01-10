import React from 'react'

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer pt-5 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <p className="text-dark my-4 text-sm font-weight-normal">
                        All rights reserved. Copyright ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        Tobig's 1516 Sound Conference <br />
                        <a href="http://www.datamarket.kr/xe/" 
                            >Tobig's DataMarket</a
                        >.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
  };
}

export default Footer;