import CallToAction from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout>
      {" "}
      {/* banner */}
      <PageBanner />
      {/* banner end */}
      {/* about */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-xl-6 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ABOUT US
              </div>
              <h2 className="mil-mb-30 mil-up">Who We Are</h2>
              <p className="mil-text-22 mil-mb-30 mil-up">
                SDS CIVIL &amp; FIRE SECURITY ENGINEERING (PVT) LTD provides
                complete fire protection and building service solutions across
                Sri Lanka. Drawing on extensive industry experience, we deliver
                reliable systems that safeguard lives and property.
              </p>
              <p className="mil-up">
                Our expertise covers fire detection and suppression, electrical
                power and ELV systems, plumbing and sanitary engineering, and
                preventive maintenance for commercial and residential clients.
              </p>
            </div>
            <div className="col-xl-5 mil-mb-100">
              <div className="mil-image-simple mil-land-plus mil-up mil-mb-30">
                <img
                  loading="lazy"
                  src="img/about/2.png"
                  alt="img"
                  data-value-1={1}
                  data-value-2="1.1"
                  className="mil-scale-img"
                />
              </div>
              <div className="mil-image-simple mil-land-short mil-up">
                <img
                  loading="lazy"
                  src="img/about/3.png"
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
      {/* about end */}
      {/* video */}
      <div className="mil-p-0-200">
        <div className="container">
          <div className="mil-video-frame mil-up">
            <img
              loading="lazy"
              src="img/home-2/8.png"
              alt="video cover"
              data-value-1={1}
              data-value-2="1.1"
              className="mil-scale-img"
            />
            <div className="mil-play">
              <div>
                <a
                  href="https://vimeo.com/25428289"
                  className="mil-play-icon has-popup-video"
                >
                  <svg
                    width={35}
                    height={40}
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.6667 20L0 40L1.74975e-06 0L34.6667 20Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p className="mil-text-14 mil-light">PLAY VIDEO 3:45 MIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video end */}
      {/* services */}
      <div className="mil-bg-dark mil-p-200-150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-soft mil-mb-30 mil-up">
                SERVICES
              </div>
              <h2 className="mil-mb-30 mil-light mil-up">
                Comprehensive Fire &amp; Building Services
              </h2>
              <p className="mil-up">
                We deliver end‑to‑end solutions from initial design to
                ongoing maintenance, ensuring your facilities remain safe and
                operational.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="mil-service-list">
                <li className="mil-mb-50 mil-up" data-count={1}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">
                      Fire Protection &amp; Detection Systems
                    </h4>
                    <p>
                      Hydrant and hose reel networks, sprinklers and advanced
                      suppression solutions.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={2}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">
                      Electrical Power, MV, LV &amp; ELV Systems
                    </h4>
                    <p>
                      From power supply and lighting to building management and
                      security integrations.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={3}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Plumbing &amp; Sanitary</h4>
                    <p>
                      Hot and cold water, drainage solutions and wastewater
                      treatment facilities.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={4}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Preventive Maintenance</h4>
                    <p>
                      Comprehensive upkeep programs for commercial and
                      industrial sites.
                    </p>
                  </div>
                </li>
                <li className="mil-mb-50 mil-up" data-count={5}>
                  <div className="mil-service-item">
                    <h4 className="mil-light mil-mb-15">Gas Distribution</h4>
                    <p>Centralized and balcony gas supply systems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* services end */}
      {/* team */}
      <div className="mil-p-200-170 mil-bg-soft">
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
                  <h6 className="mil-mb-10">Eddy Smith</h6>
                  <p>Creative Director</p>
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
                  <h6 className="mil-mb-10">Maria Rodriguez</h6>
                  <p>Principal Architect</p>
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
                  <h6 className="mil-mb-10">David Chen</h6>
                  <p>Urban Design Specialist</p>
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
                  <h6 className="mil-mb-10">Lisa Walker</h6>
                  <p>Interior Architect</p>
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
      <CallToAction />
    </MoorkLayout>
  );
};
export default page;
