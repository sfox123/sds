import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";

import tube from "@/public/lottie/tube_2.json";
import ScrollLottie from "@/components/ScrollLottie";

const page = () => {
  return (
    <MoorkLayout>
      {/* banner */}
      <PageBanner
        pageName="Services"
        pageTitle="Services"
        pageUrl="services"
        bgImg="/img/services/1.png"
      />

      {/* banner end */}
      {/* services */}
      <div className="mil-p-200-100 services-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <h3 className="mil-mb-30 mil-up">
                Fire Protection and Detection systems
              </h3>
              <ul className="mil-mb-30 mil-up">
                <li>Fire Hydrant/Hose Reel Systems</li>
                <li>Fire Sprinkler Systems</li>
                <li>FM 200/C02/Inert Gas Total Flooding Systems</li>
                <li>Water Mist Suppression System</li>
                <li>Kitchen Hood Suppression Systems</li>
                <li>
                  Addressable and Conventional Fire Detection and Alarm Systems
                </li>
                <li>
                  Heat Detection and Early Warning (VESDA) Fire Detection
                  Systems.
                </li>
              </ul>
              <h3 className="mil-mb-30 mil-up">
                Electrical Power, MV, LV &amp; ELV Systems
              </h3>
              <ul className="mil-mb-30 mil-up">
                <li>Power Supply &amp; Lighting Systems</li>
                <li>Lightning Protection &amp; Energy Management Solutions</li>
                <li>Emergency Power &amp; UPS System</li>
                <li>Building Management System</li>
                <li>
                  CCTV, IPTV, PA, PABX, Data &amp; Structured Cabling Solutions.
                </li>
              </ul>
              <h3 className="mil-mb-30 mil-up">
                Plumbing &amp; Sanitary engineering
              </h3>
              <ul className="mil-mb-30 mil-up">
                <li>Hot and cold Water Supply Systems</li>
                <li>Soil, Waste and storm Water Drainage Systems</li>
                <li>Rain water Harvesting Systems</li>
                <li>Waste Water, Sewerage and Effluent Treatment Plants</li>
              </ul>
              <h3 className="mil-mb-30 mil-up">Preventive Maintenance work</h3>
              <p className="mil-mb-30 mil-up">
                We do all kind of preventive maintenance works for Cooperate
                Companies, Factories, Apartments, Hotels, Hospitals and
                stadiums.
              </p>
              <h3 className="mil-mb-30 mil-up">
                Centralized and Balcony Gas Distribution Systems
              </h3>
              <h3 className="mil-mb-30 mil-up">
                MEP Services &amp; Civil works to suit your needs.
              </h3>
              <p className="mil-mb-30 mil-up">
                We specialize in providing end to end mechanical, electrical and
                plumbing services for your building project no matter what
                scale. Our Civil department engage in supporting our clients to
                build cost effective building including concrete and steel
                structures.
              </p>
              <p className="mil-mb-30 mil-up">
                Through our innovative processes, you can enjoy the perks of a
                seamless transition from drawing– board to implementation and
                beyond, all handled by the experts at SDS with guarantee that
                your building project meets international MEP and Civil
                standards.
              </p>
              <p className="mil-mb-30 mil-up">
                We incorporate our process to your project’s development cycle,
                working closely with all stakeholders to ensure proper
                integration of electrical, mechanical and plumbing systems in
                your building projects considering the progress of the Civil
                works.
              </p>
              <p className="mil-mb-30 mil-up">
                We provide comprehensive MEP services including designing,
                engineering, material procurement, installation, testing,
                commissioning, and handing over, facility management,
                maintenance and staff training. Our Civil division takes
                responsibilities to meet the entire function of the CIVIL
                project cycle considering the customer needs and satisfaction.
              </p>
              <ul className="mil-service-list">
                <li className="mil-up" data-count="1">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Fire Systems</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="2">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Centralized Gas Systems</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="3">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Balcony Gas Systems</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="4">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Electrical Systems</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="5">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Plumbing Systems</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="6">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Road Construction</h4>
                  </div>
                </li>
                <li className="mil-up" data-count="7">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">
                      Steel Structure Building Construction
                    </h4>
                  </div>
                </li>
                <li className="mil-up" data-count="8">
                  <div className="mil-service-item">
                    <h4 className="mil-mb-15">Painting and Maintenance Work</h4>
                  </div>
                </li>
              </ul>
            </div>
            <div
              style={{ alignSelf: "flex-start" }}
              className="col-lg-6 order-lg-2 order-1 mb-60 mb-lg-0"
            >
              <ScrollLottie
                animationData={tube}
                width={920}
                height={3024}
                className="scroll-lottie"
              />
            </div>
          </div>
        </div>
      </div>
      {/* faq */}
      <div className="mil-bg-dark mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                ANSWERS TO YOUR QUERIES
              </div>
              <h2 className="mil-light mil-up">Clarifying Common Inquiries</h2>
            </div>
            <div className="col-xl-6 mil-mb-100">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}
      {/* reviews */}
      <div className="mil-p-200-170">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-review-card">
                <p className="mil-text-22 mil-dark mil-mb-50">
                  The Møork team transformed our retail space in a unique way.
                  Now, we attract more customers than ever
                </p>
                <div className="mil-card-info">
                  <div className="mil-review-author">
                    <img loading="lazy" src="img/users/1.png" alt="user" />
                    <div className="mil-user-name">
                      <h6 className="mil-mb-10">Miriane Doyle</h6>
                      <p className="mil-text-16">Store Owner in Marseille</p>
                    </div>
                  </div>
                  <svg
                    width={54}
                    height={36}
                    viewBox="0 0 54 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54 24.0277V0H29.9723V24.0277H42.0311V36L54 24.0277ZM11.972 36L24.0277 24.0277V0H0V24.0277H11.972V36Z"
                      fill="#D94625"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-review-card">
                <p className="mil-text-22 mil-dark mil-mb-50">
                  Møork's ability to combine design and functionality is
                  amazing. Living in our new space is a daily pleasure.
                </p>
                <div className="mil-card-info">
                  <div className="mil-review-author">
                    <img loading="lazy" src="img/users/2.png" alt="user" />
                    <div className="mil-user-name">
                      <h6 className="mil-mb-10">Jovanović Doyle</h6>
                      <p className="mil-text-16">Andersson Family</p>
                    </div>
                  </div>
                  <svg
                    width={54}
                    height={36}
                    viewBox="0 0 54 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54 24.0277V0H29.9723V24.0277H42.0311V36L54 24.0277ZM11.972 36L24.0277 24.0277V0H0V24.0277H11.972V36Z"
                      fill="#D94625"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reviews end */}
      {/* call to action */}
      <CallToAction />
      {/* call to action end */}
    </MoorkLayout>
  );
};
export default page;
