import MoorkLayout from "@/layout/MoorkLayout";
import { sanityClient, urlFor } from "../../../lib/plugins/sanity.client";
import Link from "next/link";

const ProjectPage = async ({ params }) => {
  const { id } = params;
  const projects = await sanityClient.fetch(`*[_id == $id]`, { id });
  const project = projects[0];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <MoorkLayout>
      {/* banner */}
      <div className="mil-banner-space" />
      {/* banner end */}
      {/* project head */}
      <div className="mil-p-200-0">
        <div className="container">
          <ul className="mil-breadcrumbs mil-dark mil-mb-30 mil-up">
            <li>
              <Link href="/home-5">Home</Link>
            </li>
            <li>
              <Link href="/works-1">Works</Link>
            </li>
            <li>
              <Link href="#">Project</Link>
            </li>
          </ul>
          <h1 className="mil-mb-100 mil-up">{project.title}</h1>
        </div>
      </div>
      {/* project head end */}
      {/* cover */}
      <div className="mil-fw-image mil-up mil-mb-100">
        <img
          loading="lazy"
          src={project.coverImage ? urlFor(project.coverImage).url() : ""}
          alt={project.title}
          data-value-1={1}
          data-value-2="1.1"
          className="mil-scale-img"
        />
      </div>
      {/* cover end */}
      {/* project info */}
      <div className="mil-p-0-200">
        <div className="container">
          <div className="mil-post-info mil-mb-100 mil-up">
            <h6>Share:</h6>
            <a href="#." className="mil-text-link">
              Facebook
            </a>
            <a href="#." className="mil-text-link">
              X.com
            </a>
            <a href="#." className="mil-text-link">
              Pinterest
            </a>
            <a href="#." className="mil-text-link">
              Linkedin
            </a>
            <a href="#." className="mil-text-link">
              Tiktok
            </a>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-6 mil-mb-100">
              <h2 className="mil-mb-50 mil-up">{project.title}</h2>
              {/* Render description as plain text */}
              <p className="mil-text-22 mil-mb-30 mil-up">
                {project.description &&
                  project.description[0]?.children[0]?.text}
              </p>
              {/* Add more description blocks if needed */}
            </div>
            <div className="col-xl-5 mil-mb-100">
              <ul className="mil-list-4">
                <li className="mil-up">
                  <span>Slug:</span>
                  <span className="mil-dark">{project.slug?.current}</span>
                </li>
                <li className="mil-up">
                  <span>Priority:</span>
                  <span className="mil-dark">{project.priority}</span>
                </li>
                {/* Add more fields as needed */}
              </ul>
            </div>
          </div>
          {/* Gallery images */}
          <div className="row">
            {project.gallery &&
              project.gallery.map((img, idx) => (
                <div className="col-xl-6" key={img._key || idx}>
                  <div className="mil-image-simple mil-square mil-up mil-mb-30">
                    <img
                      loading="lazy"
                      src={urlFor(img).url()}
                      alt={project.title}
                      data-value-1={1}
                      data-value-2="1.1"
                      className="mil-scale-img"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* project info end */}
      {/* post navigation */}
      <div className="mil-p-0-200">
        <div className="container">
          <div className="mil-nav-frame mil-up">
            <div className="row">
              <div className="col-xl-6">
                <Link href="/work" className="mil-post-nav">
                  <div className="mil-cover">
                    <img loading="lazy" src="/img/blog/1.png" alt="cover" />
                  </div>
                  <div className="mil-descr">
                    <p className="mil-text-14 mil-mb-10">Prev Project</p>
                    <h6 className="mil-mb-10">
                      Straworld Successful <br />
                      Collaboration Over Time
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-xl-6">
                <Link href="/work" className="mil-post-nav mil-next">
                  <div className="mil-cover">
                    <img loading="lazy" src="/img/blog/2.png" alt="cover" />
                  </div>
                  <div className="mil-descr">
                    <p className="mil-text-14 mil-mb-10">Next Project</p>
                    <h6 className="mil-mb-10">
                      Athons Hotels Creating <br />
                      Unique Experiences
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* post navigation end */}
    </MoorkLayout>
  );
};

export default ProjectPage;
