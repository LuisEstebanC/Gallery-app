import React from "react";

const Footer = () => {
  return (
    <div className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Gallery app</h5>
            <p>This proyects was made with some tools as unsplash API.</p>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            {/* <h5 class="text-uppercase">Some Tools</h5>
            <ul class="list-unstyled">
              <li>
                <a className="navbar-brand" href="https://unsplash.com/join">
                  unsplash
                </a>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://www.simicart.com/manifest-generator.html/"
                >
                  simicart
                </a>
              </li>
            </ul> */}
          </div>

          <div className="col-md-3 mb-md-0 mb-3"></div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        Luis Capellan - &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
