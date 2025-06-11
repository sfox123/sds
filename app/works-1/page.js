import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
const page = () => {
  return (
    <MoorkLayout>
      {/* banner */}
      <PageBanner
        pageName="Projects"
        pageTitle="Projects"
        pageUrl="works-1"
        bgImg="/img/projects/0.png"
      />

      {/* works */}
      <div className="mil-p-200-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5">
              <Link href="work" className="mil-project-card mil-mb-50">
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
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Robston Tower: A Modern Commercial Icon
                  </h4>
                  <p>Modern building design</p>
                </div>
              </Link>
              <Link
                href="work"
                className="mil-project-card mil-long-m mil-mb-50"
              >
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
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Straworld Successful Collaboration Over Time
                  </h4>
                  <p>Sustainable &amp; Innovative Design</p>
                </div>
              </Link>
              <Link href="work" className="mil-project-card mil-mb-50">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/projects/3.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Straworld Successful Collaboration Over Time
                  </h4>
                  <p>Sustainable &amp; Innovative Design</p>
                </div>
              </Link>
            </div>
            <div className="col-xl-5">
              <Link
                href="work"
                className="mil-project-card mil-long-m mil-mb-50"
              >
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/projects/4.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Straworld Successful Collaboration Over Time
                  </h4>
                  <p>Sustainable &amp; Innovative Design</p>
                </div>
              </Link>
              <Link href="work" className="mil-project-card mil-mb-50">
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/projects/5.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Robston Tower: A Modern Commercial Icon
                  </h4>
                  <p>Modern building design</p>
                </div>
              </Link>
              <Link
                href="work"
                className="mil-project-card mil-long-m mil-mb-50"
              >
                <div className="mil-cover-frame mil-up">
                  <div className="mil-hover-frame">
                    <img
                      loading="lazy"
                      src="img/projects/6.png"
                      alt="project"
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
                <div className="mil-descr mil-pad-0 mil-up">
                  <h4 className="mil-mb-10">
                    Robston Tower: A Modern Commercial Icon
                  </h4>
                  <p>Modern building design</p>
                </div>
              </Link>
            </div>
            <div className="col-12 mil-mb-100">
              <div className="mil-store-loader mil-up">
                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mil-loader"
                >
                  <path
                    d="M20.7812 3.28125C20.7812 5.12695 19.2773 6.5625 17.5 6.5625C15.6543 6.5625 14.2188 5.12695 14.2188 3.28125C14.2188 1.50391 15.6543 0 17.5 0C19.2773 0 20.7812 1.50391 20.7812 3.28125ZM17.5 28.4375C19.2773 28.4375 20.7812 29.9414 20.7812 31.7188C20.7812 33.5645 19.2773 35 17.5 35C15.6543 35 14.2188 33.5645 14.2188 31.7188C14.2188 29.9414 15.6543 28.4375 17.5 28.4375ZM31.7188 14.2188C33.4961 14.2188 35 15.7227 35 17.5C35 19.3457 33.4961 20.7812 31.7188 20.7812C29.873 20.7812 28.4375 19.3457 28.4375 17.5C28.4375 15.7227 29.873 14.2188 31.7188 14.2188ZM6.5625 17.5C6.5625 19.3457 5.05859 20.7812 3.28125 20.7812C1.43555 20.7812 0 19.3457 0 17.5C0 15.7227 1.43555 14.2188 3.28125 14.2188C5.05859 14.2188 6.5625 15.7227 6.5625 17.5ZM7.38281 24.3359C9.22852 24.3359 10.6641 25.7715 10.6641 27.6172C10.6641 29.3945 9.22852 30.8984 7.38281 30.8984C5.60547 30.8984 4.10156 29.3945 4.10156 27.6172C4.10156 25.7715 5.60547 24.3359 7.38281 24.3359ZM27.5488 24.3359C29.3262 24.3359 30.8301 25.7715 30.8301 27.6172C30.8301 29.3945 29.3262 30.8984 27.5488 30.8984C25.7031 30.8984 24.2676 29.3945 24.2676 27.6172C24.2676 25.7715 25.7031 24.3359 27.5488 24.3359ZM7.38281 4.16992C9.22852 4.16992 10.6641 5.67383 10.6641 7.45117C10.6641 9.29688 9.22852 10.7324 7.38281 10.7324C5.60547 10.7324 4.10156 9.29688 4.10156 7.45117C4.10156 5.67383 5.60547 4.16992 7.38281 4.16992Z"
                    fill="#D94625"
                  />
                </svg>
                <p className="mil-text-16">Loading more ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* works end */}
    </MoorkLayout>
  );
};
export default page;
