import CallToAction from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";

const page = () => {
  return (
    <MoorkLayout>
      <PageBanner
        pageName="Clients"
        pageTitle="Clients"
        pageUrl="clients"
        bgImg="/img/blog/0.png"
      />
      <div className="mil-p-200-100">
        <div className="container">
          <h2 className="mil-mb-50 mil-up">Our customer Network includes</h2>
          <div className="row">
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Hotels</h3>
              <ul className="mil-mb-30 mil-up">
                <li>ITC Colombo 1, Sterling Wilson</li>
                <li>Damro Marino mall, D R Hotels Pvt Ltd</li>
                <li>The Labour Department of SriLanka</li>
                <li>The Address - Colombo 3 – Sterling Wilson</li>
                <li>Rivera Resort - Batticaloa</li>
                <li>Nilaveli beach Resort - Tricomalee</li>
                <li>The Lady Hill - Galle</li>
                <li>Taj Samudra – Colombo</li>
              </ul>
            </div>
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Hospitals</h3>
              <ul className="mil-mb-30 mil-up">
                <li>Asiri Hospitals – Colombo</li>
                <li>National Hospital – Colombo</li>
                <li>Durdens Hospital – Colombo</li>
              </ul>
            </div>
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Banking, Finance and Commercial Complexes</h3>
              <ul className="mil-mb-30 mil-up">
                <li>National Development bank – Colombo 06</li>
                <li>Ceylinco Insurance Life Centre , Colombo 01</li>
                <li>Dutch Lanka Engineering (Pvt) Ltd</li>
                <li>Hatton National Bank –Colombo 06</li>
              </ul>
            </div>
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Residential Apartment Complexes</h3>
              <ul className="mil-mb-30 mil-up">
                <li>Sky Line Housing (Pvt) Ltd</li>
                <li>JKPL Construction (Pvt) Ltd</li>
                <li>Nexus Housing (Pvt) Ltd</li>
                <li>Agni towers</li>
                <li>Hestia Engineering (Pvt) Ltd</li>
                <li>Saraj property Developers (Pvt) Ltd</li>
                <li>Royal Property Holdings (Pvt) Ltd</li>
              </ul>
            </div>
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Administrative Buildings &amp; Sports Clubs</h3>
              <ul className="mil-mb-30 mil-up">
                <li>Indian High Commission</li>
                <li>Sinhalese Sports Club - Colombo</li>
              </ul>
            </div>
            <div className="col-md-6 mil-mb-50">
              <h3 className="mil-mb-20 mil-up">Construction Companies</h3>
              <ul className="mil-mb-30 mil-up">
                <li>Fentons Limited</li>
                <li>Star Construction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </MoorkLayout>
  );
};
export default page;
