const Footer = () => {
  return (
    <footer>
      <div className="container mil-p-200-100">
        <div className="row">
          <div className="col-xl-3 mil-mb-100">
            <div className="mil-footer-logo mil-up">
              <img loading="lazy" src="img/logo-3.png" alt="SDS" />
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Main Office</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">
              Address: No 27, 4D, De Alwis Place,
              <br /> Dehiwala,
              <br /> Sri Lanka
            </p>
            <div className="mil-up">
              <a href="tel:0112730548" className="mil-light">
                Tel: 0112730548
              </a>
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Email</h6>
            <p className="mil-soft-2 mil-mb-20 mil-up">We are here to help.</p>
            <div className="mil-up">
              <a
                href="mailto:sdsconstruction77@gmail.com"
                className="mil-light"
              >
                sdsconstruction77@gmail.com
              </a>
            </div>
          </div>
          <div className="col-xl-3 mil-mb-100">
            <h6 className="mil-soft mil-mb-30 mil-up">Stay Connected</h6>
            <ul className="mil-footer-list">
              <li className="mil-up">
                <a
                  target="blank"
                  href="https://facebook.com/"
                  className="mil-light"
                >
                  Facebook
                </a>
              </li>
              <li className="mil-up">
                <a
                  target="blank"
                  href="https://twitter.com/"
                  className="mil-light"
                >
                  X.com
                </a>
              </li>
              <li className="mil-up">
                <a
                  target="blank"
                  href="https://linkedin.com/"
                  className="mil-light"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mil-p-0-200">
        <div className="mil-footer-bottom mil-up">
          <p className="mil-text-14 mil-up">
            © 2024 SDS Civil &amp; Fire Security Engineering (PVT) LTD
          </p>
          <p className="mil-text-14 mil-up">Developed by bslthemes</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
