import CallToAction from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
const page = () => {
  return (
    <MoorkLayout>
      <PageBanner
        pageName="Contact"
        pageTitle="Contact us"
        pageUrl="contact"
        bgImg="/img/contact/1.png"
      />
      {/* contact info */}
      <div className="mil-p-200-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-50">
              <h5 className="mil-mb-20">
                SDS CIVIL &amp; FIRE SECURITY ENGINEERING (PVT) LTD
              </h5>
              <p className="mil-mb-10">
                Address:{" "}
                <span className="mil-dark">
                  No 27, 4D, De Alwis Place , Dehiwala, Sri Lanka.
                </span>
              </p>
            </div>
            <div className="col-xl-4 mil-mb-50">
              <h5 className="mil-mb-20">Contact Numbers</h5>
              <p className="mil-mb-10">
                Tel: <span className="mil-dark">0112730548</span>
              </p>
              <p className="mil-mb-20">
                Mobile / WhatsApp:{" "}
                <span className="mil-dark">077-6692306, 076-7262011</span>
              </p>
            </div>
            <div className="col-xl-4 mil-mb-50">
              <h5 className="mil-mb-20">Email Us</h5>
              <p className="mil-mb-20">
                <a
                  href="mailto:sdsconstruction77@gmail.com"
                  className="mil-dark"
                >
                  sdsconstruction77@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* contact info end */}
      {/* contact */}
      <div className="mil-p-0-100">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-center">
            <div className="col-lg-8 mil-text-center mil-mb-100">
              <div className="mil-suptitle mil-sm mil-accent mil-mb-30 mil-up">
                CONTACT FORM
              </div>
              <h2 className="mil-up">
                Do you have a project you want to discuss?
              </h2>
            </div>
            <div className="col-lg-8 mil-mb-100">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="mil-input mil-mb-30 mil-up"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    type="number"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="mil-input mil-mb-30 mil-up"
                    placeholder="Subject"
                  />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    className="mil-mb-30 mil-up"
                    defaultValue={""}
                  />
                  <div className="mil-checkbox-frame mil-mb-30 mil-up">
                    <div className="mil-checkbox">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox" />
                    </div>
                    <p className="mil-text-14 mil-soft">
                      By clicking “Submit” you Accept the{" "}
                      <a href="#." className="mil-text-link">
                        processing of personal data
                      </a>
                    </p>
                  </div>
                  <div className="mil-up">
                    <button type="submit" className="mil-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
      <CallToAction />
    </MoorkLayout>
  );
};
export default page;
