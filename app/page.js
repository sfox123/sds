"use client";
import MoorkLayout from "@/layout/MoorkLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import LottieComponent from "@/components/Lottie";
import About from "../public/lottie/about.json";
import { useTheme } from "@/components/ThemeContext";

const page = () => {
  const { theme } = useTheme();
  const headingBg =
    theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)";
  return (
    <MoorkLayout header={1}>
      {/* banner */}
      <div className="mil-banner mil-banner-1 mil-bg-soft">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-banner-text-frame">
                <div className="mil-banner-text">
                  <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                    FIRE &amp; CIVIL ENGINEERING
                  </div>
                  <h1
                    style={{ backgroundColor: headingBg }}
                    className="mil-display-2 mil-mb-60"
                  >
                    Protecting lives through engineered safety
                  </h1>
                  <Link href="works-1" className="mil-btn mil-btn-border">
                    Explore projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-banner-image-frame">
                <img loading="lazy" src="img/home-1/1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about */}
      <div className="mil-p-100-50 about-section">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100 about-text">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                About us
              </div>
              <h2 className="mil-mb-30 mil-up">About Us</h2>
              <p className="mil-mb-50 mil-up">
                SDS offers end‑to‑end fire protection and engineering services.
                Our experienced team designs, installs and maintains systems
                that keep facilities safe and compliant.
              </p>
              <div className="mil-up">
                <Link href="about" className="mil-btn mil-btn-sm">
                  Know us more
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-lottie">
                <LottieComponent source={About} width={600} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* projects */}
      <div className="mil-bg-soft mil-p-200-200">
        <div className="container mil-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR MOST RECENT PROJECTS
              </div>
              <h2 className="mil-mb-30 mil-up">Explore Our Projects</h2>
              <p className="mil-mb-100 mil-up">
                From striking skyscrapers to captivating interior spaces, each
                project reflects our dedication to innovation and creativity.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <Swiper
                {...sliderProps.milProjects1}
                className="swiper-container mil-projects-1"
              >
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/4.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">
                        Inspiring Offices in New York
                      </h4>
                      <p className="mil-mb-20">Business Inspiration</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/5.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">
                        Eco-district ZAC Victor Hugo, Bagneux
                      </h4>
                      <p className="mil-mb-20">Urban Planning</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/6.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/1.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-parallax-scale="0.15"
                >
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/projects/2.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div
                      className="mil-descr mil-p-0"
                      data-swiper-parallax={-100}
                      data-swiper-parallax-opacity={0}
                    >
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p className="mil-mb-20">Iconic skyscrapers</p>
                      <span className="mil-btn mil-btn-sm">View Project</span>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="mil-slider-nav mil-position-1 mil-up">
            <div className="mil-nav-btn mil-prev mil-prev-1">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="mil-nav-btn mil-next mil-next-1">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      {/* projects end */}
      {/* counters */}
      <div className="mil-bg-soft mil-p-0-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +{" "}
                <span className="mil-counter" data-number={10}>
                  10
                </span>
              </h3>
              <p className="mil-dark mil-mb-15">Years of Excellence</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                <span className="mil-counter" data-number={10}>
                  99
                </span>{" "}
                %
              </h3>
              <p className="mil-dark mil-mb-15">Gender equality rate</p>
              <p>
                Emphasizes our commitment to a diverse and inclusive work
                environment.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-50">
              <h3 className="mil-accent mil-mb-10">
                +
                <span className="mil-counter" data-number={10}>
                  60
                </span>{" "}
                Pro
              </h3>
              <p className="mil-dark mil-mb-15">Team Diversity</p>
              <p>
                More than a decade shaping the architectural future since our
                creation in 2010.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* counters end */}
      {/* projects */}
      {/* <div className="mil-p-200-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                INNOVATION AND INSPIRATION
              </div>
              <h2 className="mil-mb-30 mil-up">
                Exploring Architectural Marvels
              </h2>
              <p className="mil-mb-100 mil-up">
                Explore our recent installations and engineering solutions,
                demonstrating our commitment to safety and reliability.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Swiper
                {...sliderProps.milProjects2}
                className="swiper-container mil-projects-2"
              >
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/7.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">
                        Inspiring Offices in New York
                      </h4>
                      <p>Business Inspiration</p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/8.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">
                        Eco-district ZAC Victor Hugo, Bagneux
                      </h4>
                      <p>Urban Planning</p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-1/9.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p>Iconic skyscrapers</p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-6/2.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p>Iconic skyscrapers</p>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link href="work" className="mil-project-card mil-land">
                    <div className="mil-cover-frame mil-up">
                      <div className="mil-hover-frame">
                        <img
                          loading="lazy"
                          src="img/home-6/3.png"
                          alt="project"
                          data-value-1={1}
                          data-value-2="1.1"
                          className="mil-scale-img"
                        />
                      </div>
                    </div>
                    <div className="mil-descr mil-with-bg mil-inner mil-hover">
                      <h4 className="mil-mb-10">Luminar Tower</h4>
                      <p>Iconic skyscrapers</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
      {/* projects end */}
      {/* team */}
      <div className="mil-p-100-170 mil-bg-soft">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 mil-text-center">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                OUR PROJECTS
              </div>
              <h2 className="mil-mb-30 mil-up">Innovation in Action</h2>
              <p className="mil-mb-100 mil-up">
                Our passion for architecture and urban design is reflected in
                the projects we have carried out over the years.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/1.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Electrical Work</h6>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/2.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Sprinkler Pump</h6>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/3.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">
                    Fire Sprinkler and Plumbing lines
                  </h6>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-3 mil-mb-30">
              <Link href="about" className="mil-team-card mil-long">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/about/team-1/4.png"
                      alt="Team member"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-up">
                  <h6 className="mil-mb-10">Sprinkler Distribution Lines</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* team end */}
      {/* brands */}
      <div className="mil-bg-soft mil-p-0-170">
        <div className="container">
          <p className="mil-mb-100 mil-dark mil-up">
            Building Futures Together with Our Esteemed Partners
          </p>
          <div className="row">
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/1.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/2.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/3.svg" alt="brand" />
              </div>
            </div>
            <div className="col-6 col-xl-3 mil-mb-30">
              <div className="mil-brand-frame mil-up">
                <img loading="lazy" src="img/brands/4.svg" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brands end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                WORD FROM CEO
              </div>
              <h2 className="mil-mb-30 mil-up">
                Expertise backed by experience
              </h2>
              <p className="mil-mb-50 mil-up">
                SDS Civil & Fire Security Engineering (Pvt) Ltd was founded in
                2014 and incorporated as a limited liability company in February
                2020 by a team of seasoned engineering professionals. Guided by
                the vision and leadership of Director/CEO Mr. R. Shakthitharan,
                the company has built a strong reputation for delivering
                comprehensive engineering solutions, with a particular focus on
                <b style={{ fontWeight: "bold" }}>
                  {" "}
                  fire detection and protection systems.
                </b>
                <br />
                We specialize in the design, engineering, and installation of
                mechanical, electrical, and plumbing (MEP) systems, with an
                emphasis on mechanical fire safety systems for commercial,
                industrial, and residential developments. Our services include
                the construction, renovation, and maintenance of fire hydrants,
                fire suppression systems, and other critical fire protection
                infrastructure tailored to meet regulatory standards and
                client-specific needs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "yellow",
                    color: "black",
                  }}
                >
                  SDS has successfully completed numerous fire safety and MEP
                  projects in Colombo and across Sri Lanka.
                </span>{" "}
                <br />
                Our portfolio includes work for both public and private sector
                institutions, providing expert solutions in plumbing and
                sanitary systems, electrical installations, fire protection
                engineering, and civil construction.
                <br />
                At SDS, ensuring life safety and fire risk mitigation is at the
                core of everything we do.
              </p>
            </div>
            <div className="col-lg-6 mil-mb-100">
              <div className="mil-illustration-5">
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/10.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-image-position mil-up">
                  <div className="mil-image-frame">
                    <img
                      loading="lazy"
                      src="img/home-1/11.png"
                      alt="img"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* call to action */}
      <div className="mil-p-200-200 mil-bg-accent">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="mil-suptitle mil-sm mil-light mil-mb-30 mil-up">
                TAKE A LOOK AT
              </div>
              <h2 className="mil-h1 mil-light mil-mb-30 mil-up">
                Сontact us to discuss the details
              </h2>
              <p className="mil-light mil-mb-50 mil-up">
                Talk to our experts today about safeguarding your premises with
                reliable fire and building services.
              </p>
              <div className="mil-up">
                <Link
                  href="contact"
                  className="mil-btn mil-btn-border mil-light"
                >
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
