import React from "react";

// import Lottie from "react-lottie";

import logo from "../../assets/claim_it/logo.svg";

// import loader from "../../assets/claim_it/anims/loader.json";

export default function OnBoardingComponent() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: loader,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div className="main">
      <div className="triangle" />
      <div className="container-xl">
        <div className="row">
          <div className="col-12 items_aligned">
            <img
              style={{ height: "40px", width: "40px" }}
              src={logo}
              alt="logo"
            />
            <h1 className="title">
              ClaimIT
              <br />
              <span className="subtitle">Digital disabled parking permit</span>
            </h1>
          </div>
          <div className="col-xl-6 offset-xl-3 col-12 mt-50">
            <div className="card_main">
              <div className="card_1">
                <h1 className="cardTitle">Easy, reliabe</h1>
                <h1 className="cardSubTitle">Here's how to check it</h1>
                <ol className="list_1">
                  <li>
                    <span className="list_span">
                      Scan QR code present on the vehicule
                    </span>
                  </li>
                  <li>
                    <span className="list_span">
                      Scan license plate of vehicule
                    </span>
                  </li>
                  <li>
                    <span className="list_span">Get parking permit status</span>
                  </li>
                </ol>
              </div>
              <div className="card_2">
                <h1 className="cardTitle_2">Benefits</h1>
                <ul className="list_2">
                  <li>
                    <span className="list_span">
                      Reduction of the administrative burden for the disabled
                      persons
                    </span>
                  </li>
                  <li>
                    <span className="list_span">
                      Reduction of the administrative workload for the
                      administration
                    </span>
                  </li>
                  <li>
                    <span className="list_span">
                      Police force can verify the authenticity of the claim
                    </span>
                  </li>
                </ul>
              </div>
              <hr class="solid" />
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <button className="scan_button">Scan QR code </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div> */}
    </div>
  );
}
