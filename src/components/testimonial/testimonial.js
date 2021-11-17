import React from "react";
import testimonialImg from "../../assets/img/testimonial.png";

const testimonial = () => {
  return (
    <testimonial>
      <div className="testimonial-container">
        <div className="testimonial-top">
          <h2>Few smiles and comment</h2>
          <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
        </div>

        <div className="testimonial-content">
          <div className="content-img">
            <img src={testimonialImg} alt="Testimonial" />
          </div>

          <div className="content-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="28"
              viewBox="0 0 50 28"
              fill="none"
            >
              <path
                d="M11.0729 0.416748H25.6562L15.2778 27.673H0.694443L11.0729 0.416748Z"
                fill="#AFD4E2"
              />
              <path
                d="M35.3785 0.416748H49.9618L39.5833 27.673H25L35.3785 0.416748Z"
                fill="#AFD4E2"
              />
            </svg>

            <h2>Dream house isn’t dream anymore</h2>
            <p>
              Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
              pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.
            </p>
            <h3>Brooklyn Simmons</h3>
            <p className="artist">Artist</p>
          </div>
        </div>
      </div>
    </testimonial>
  );
};

export default testimonial;
