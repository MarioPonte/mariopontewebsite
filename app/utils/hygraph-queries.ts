export const pageQuery = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        about {
          raw
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          description
          technologies {
            name
          }
        } 
      }
    }
`;

export const projectsQuery = `
      query ProjectsQuery {
        projects {
          description
          slug
          title
          thumbnail {
            url
          }
          technologies {
            name
          }
        }
      }
`;

export const projectsSlugsQuery = `
    query ProjectsSlugsQuery() {
        projects(first: 100) {
            slug
        }
    }
`;

export const projectQuery = (slug:string) => `
    query ProjectQuery() {
        project(where: {slug: "${slug}"}) {
          thumbnail {
            url
          }
          title
          description
          technologies {
            name
          }
          liveProjectUrl
          githubUrl
        }
      }
`;