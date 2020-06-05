import React from "react"
import Title from "../Title"
import testimonials from "../../constants/testimonials"
import logo from "../../images/nat-8.jpg"
import logoo from "../../images/nat-9.jpg"
import video from "../../images/video.mp4"
import videoo from "../../images/video.webm"

const FeaturedTours = () => {
  return (
    <>
      <Title title="We make kids genuinely happy" />
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            <source src={videoo} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        {testimonials.map((item, index) => {
          return (
            <div className="row" key={index + 1}>
              <div className="story" key={index + 2}>
                <figure className="story__shape">
                  <img
                    src={!index ? logo : logoo}
                    alt={`testimonial ${index + 1}`}
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    {item.name}
                  </figcaption>
                </figure>
                <div className="story__text" key={index + 3}>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default FeaturedTours
