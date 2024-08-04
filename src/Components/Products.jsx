import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import lipstick from "../images/lipsttick.jpg";
import foundation from "../images/facebowder.jpg";
import eyeshadowPalette from "../images/facebowder.jpg";
import mascara from "../images/mascara.jpg";
import blush from "../images/sponge.jpg";
import concealer from "../images/conceler.jpg";
import highlighter from "../images/highliter.jpg";
import eyeliner from "../images/eyeliner.jpg";

export default function Products() {
  return (
    <div className="products">
      <section className="pt-5" id="exercise">
        <h2 className="pb-4 text-center">Discover Our Makeup Collection</h2>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={lipstick}
                      className="card-img-top"
                      alt="Lipstick"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Lipstick</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$25.00</span> $20.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={foundation}
                      className="card-img-top"
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Foundation</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$30.00</span> $25.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={eyeshadowPalette}
                      className="card-img-top"
                      alt="Eyeshadow Palette"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Eyeshadow Palette</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$40.00</span> $35.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={mascara}
                      className="card-img-top"
                      alt="Mascara"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mascara</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$20.00</span> $15.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item mb-4">
              <div className="row">
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={blush}
                      className="card-img-top"
                      alt="Blush"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Blush</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$18.00</span> $15.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={concealer}
                      className="card-img-top"
                      alt="Concealer"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Concealer</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$22.00</span> $18.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={highlighter}
                      className="card-img-top"
                      alt="Highlighter"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Highlighter</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$25.00</span> $20.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={eyeliner}
                      className="card-img-top"
                      alt="Eyeliner"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Eyeliner</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$15.00</span> $10.00
                      </p>
                      <button type="button" className="btn btn-primary w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon scroller" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon scroller" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
