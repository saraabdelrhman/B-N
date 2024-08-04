import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import img from "../images/BN-LS.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import lipstick from "../images/lipsttick.jpg";
import foundation from "../images/founda.jpg";
import eyeshadowPalette from "../images/facebowder.jpg";
import mascara from "../images/mascara.jpg";
import blush from "../images/sponge.jpg";
import concealer from "../images/conceler.jpg";
import highlighter from "../images/highliter.jpg";
import eyeliner from "../images/eyeliner.jpg";

import cover from "../images/3d-realistic-red-lipstick-cream-bottle-and-pencil-on-black-silk-design-template-of-fashion-cosmetics-product-for-ads-flyer-banner-or-magazine-background-iillustration-free-vector.jpg";

export default function ProductPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "01 Jan 2023",
      comment:
        "This lipstick is amazing! The color is vibrant and it lasts all day. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "15 Feb 2023",
      comment:
        "Good product but a bit pricey. The shade I bought is perfect for daily use.",
    },
    {
      id: 3,
      name: "Sara Abdelrhman",
      rating: 2,
      date: "8 August 2024",
      comment: "Good product.i like it",
    },
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [filterOption, setFilterOption] = useState("all");

  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: nextSectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newId = reviews.length + 1;
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const updatedReviews = [
      ...reviews,
      {
        id: newId,
        name: "Anonymous",
        rating: newReview.rating,
        date: currentDate,
        comment: newReview.comment,
      },
    ];
    setReviews(updatedReviews);
    setNewReview({ rating: 5, comment: "" });
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const getFilteredSortedReviews = () => {
    let filteredReviews = [...reviews];

    if (filterOption !== "all") {
      filteredReviews = filteredReviews.filter(
        (review) => review.rating === parseInt(filterOption)
      );
    }

    filteredReviews.sort((a, b) => b.rating - a.rating);

    return filteredReviews;
  };

  const displayedReviews = getFilteredSortedReviews();

  return (
    <div>
      <div className="position-relative">
        <img
          src={cover}
          alt="Cover"
          className=""
          style={{ width: "100%", height: "80vh" }}
        />
        <div className="cover-text-left position-absolute text-white text-center">
          <h1 className="display-4">Welcome to BN Beauty</h1>
          <p className="lead">
            Discover the finest in beauty and skincare. Unleash your inner glow
            with our premium products.
          </p>
          <button
            id="nextSectionBtn"
            className="btn btn-danger mt-3 ps-4 pe-4"
            onClick={scrollToNextSection}
          >
            Shop Now
          </button>
        </div>
      </div>
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
                      className="card-img-top w-75 ps-3"
                      alt="Lipstick"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Lipstick</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$25.00</span> $20.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={foundation}
                      className="card-img-top w-75 ps-3"
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Foundation</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$30.00</span> $25.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={eyeshadowPalette}
                      className="card-img-top w-75 ps-3"
                      alt="Eyeshadow Palette"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Eyeshadow Palette</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$40.00</span> $35.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={mascara}
                      className="card-img-top w-75 ps-3"
                      alt="Mascara"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mascara</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$20.00</span> $15.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
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
                      className="card-img-top w-75 ps-3"
                      alt="Blush"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Blush</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$18.00</span> $15.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={concealer}
                      className="card-img-top w-75 ps-3"
                      alt="Concealer"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Concealer</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$22.00</span> $18.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={highlighter}
                      className="card-img-top w-75 ps-3"
                      alt="Highlighter"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Highlighter</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$25.00</span> $20.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 mb-4">
                  <div className="card">
                    <img
                      src={eyeliner}
                      className="card-img-top w-75 ps-3"
                      alt="Eyeliner"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Eyeliner</h5>
                      <p className="card-text">
                        <span className="text-muted text-decoration-line-through">$15.00</span> $10.00
                      </p>
                      <button type="button" className="btn btn-danger w-100">Buy Now</button>
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
      <div ref={nextSectionRef} className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <img src={img} alt="Product" className="w-70 pt-0"></img>
            <h2>Detailed Product Information</h2>
            <p>
              Introducing the BN Beauty Lipstick, a luxurious and long-lasting
              lipstick that provides intense color and hydration. Perfect for
              any occasion, this lipstick is designed to make your lips look
              stunning and feel soft all day long.
            </p>
            <ul>
              <li>Rich, vibrant color that lasts all day</li>
              <li>Moisturizing formula that keeps lips hydrated</li>
              <li>Available in a variety of shades to suit all skin tones</li>
              <li>Cruelty-free and vegan</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Long-lasting:</strong> Stays on for hours without
                needing reapplication
              </li>
              <li>
                <strong>Hydrating:</strong> Infused with moisturizing
                ingredients
              </li>
              <li>
                <strong>Variety:</strong> Multiple shades available
              </li>
              <li>
                <strong>Cruelty-free:</strong> No animal testing
              </li>
              <p>
              <span className="text-danger fw-bold">-29%</span>  EGP157.00 List Price: EGP 220.00List Price: EGP220.00 All
                prices include VAT. Prime Savings Save <span className="text-danger fw-bold">5%</span> on 5 item(s) Shop
                items Sign in to redeem. 15% discount on selected Visa debit
                cards. Enter code VISA150 at checkout.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5 reviews">
        <h2>User Reviews</h2>
        <div className="reviews-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <label htmlFor="filterReviews" className="me-2">
                Filter by rating:
              </label>
              <select
                id="filterReviews"
                className="form-select d-inline-block w-auto"
                value={filterOption}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>
          </div>
          {displayedReviews.map((review) => (
            <div key={review.id} className="review">
              <div className="review-header d-flex justify-content-between">
                <div>
                  <strong>{review.name}</strong>
                  <span className="ms-2">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </div>
                <div>{review.date}</div>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2>Submit Your Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-3">
              <label htmlFor="reviewRating" className="form-label">
                Rating
              </label>
              <select
                className="form-select"
                id="reviewRating"
                name="rating"
                value={newReview.rating}
                onChange={handleReviewChange}
                required
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="reviewComments" className="form-label">
                Comments
              </label>
              <textarea
                className="form-control"
                id="reviewComments"
                name="comment"
                value={newReview.comment}
                onChange={handleReviewChange}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger mb-5">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
