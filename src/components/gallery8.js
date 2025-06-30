import React from 'react'

import PropTypes from 'prop-types'

import './gallery8.css'

const Gallery8 = (props) => {
  return (
    <div
      className={`gallery8-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery8-max-width thq-section-max-width">
        <div className="gallery8-section-title"></div>
        <div className="gallery8-container">
          <div className="gallery8-content">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="true"
              className="gallery8-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide1 swiper-slide"
                >
                  <img
                    alt="Image 1"
                    src="/flamingo-tissue-1-1140x380-1600w.jpg"
                    className="gallery8-image1 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide2 swiper-slide"
                >
                  <img
                    alt="Image 2"
                    src="/flamingo-tissue-2-1140x380-600h.jpg"
                    className="gallery8-image2 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide3 swiper-slide"
                >
                  <img
                    alt={props.image3Alt}
                    src="/flamingo-tissue-4-1140x380-600h.jpg"
                    className="gallery8-image3 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide4 swiper-slide"
                >
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="gallery8-image4"
                  />
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="gallery8-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="gallery8-slider-button-next swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery8-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery8.defaultProps = {
  imageSrc1: '/flamingo-tissue-5-1140x380-600h.jpg',
  imageAlt1: 'image',
  image3Alt: 'Image 3',
  rootClassName: '',
}

Gallery8.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  image3Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Gallery8
