import PageBanner from "@/components/PageBanner";
import MoorkLayout from "@/layout/MoorkLayout";
import Link from "next/link";
import { sanityClient, urlFor } from "../../lib/plugins/sanity.client";

// Define the query to fetch projects from Sanity
const projectsQuery = `*[_type == "project"] | order(priority desc) {
  _id,
  title,
  "category": category->title, // Assuming you have a category reference
  slug,
  coverImage,
  gallery
}`;

// Set the revalidation interval for this page
export const revalidate = 60; // Re-fetches data at most every 60 seconds

// The page component is now an async function
const ProjectsPage = async () => {
  // Fetch data directly inside the component
  const projects = await sanityClient.fetch(projectsQuery);

  // Simple way to divide projects into two columns
  const half = Math.ceil(projects.length / 2);
  const column1Projects = projects.slice(0, half);
  const column2Projects = projects.slice(half);

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
            {/* Column 1 */}
            <div className="col-xl-5">
              {column1Projects.map((project, index) => (
                <Link
                  href={`/work/${project._id}`}
                  key={project._id}
                  className={`mil-project-card ${
                    index % 2 !== 0 ? "mil-long-m" : "" // Apply class for long cards
                  } mil-mb-50`}
                >
                  <div className="mil-cover-frame mil-up">
                    <div className="mil-hover-frame">
                      <img
                        loading=""
                        src={urlFor(project.coverImage).url()} // Dynamic image
                        alt={project.title}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="mil-descr mil-pad-0 mil-up">
                    <h4 className="mil-mb-10">{project.title}</h4>
                    <p>{project.slug?.current}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="col-xl-5">
              {column2Projects.map((project, index) => (
                <Link
                  href={`/work/${project._id}`}
                  key={project._id}
                  className={`mil-project-card ${
                    index % 2 === 0 ? "mil-long-m" : "" // Apply class for long cards
                  } mil-mb-50`}
                >
                  <div className="mil-cover-frame mil-up">
                    <div className="mil-hover-frame">
                      <img
                        loading="lazy"
                        src={urlFor(project.coverImage).url()}
                        alt={project.title}
                        className="mil-scale-img"
                      />
                    </div>
                  </div>
                  <div className="mil-descr mil-pad-0 mil-up">
                    <h4 className="mil-mb-10">{project.title}</h4>
                    <p>{project.slug?.current}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* works end */}
    </MoorkLayout>
  );
};

export default ProjectsPage;
