import gql from "graphql-tag";

export const PodcastsQuery = gql`
  query Podcasts {
    podcasts {
      description
      title
      image {
        url
        id
        mime
      }
      id
    }
  }
`;

  export const SelectedPodcastQuery  = gql`
    query Podcasts($someId: ID!) {
      podcast(id: $someId) {
        description
        title
        image {
          url
          id
          mime
        }
        id
        audioFile {
          url
          id
          mime
        }
      }
    }
  `;


  export const SinglePodcast  = gql`
    query Podcasts($filter: String!) {
      podcasts(limit: 1, where: {title: $filter}) {
        description
        title
        image {
          url
          id
          mime
        }
        id
        audioFile {
          url
          id
          mime
        }
      }
    }
  `;



  export const LatestPodcast  = gql`
    query Podcasts {
      podcasts(limit: 1, sort: "created_at:DESC" ) {
        description
        title
        image {
          url
          id
          mime
        }
        created_at
        id
        audioFile {
          url
          id
          mime
        }
      }
    }
  `;


  export const Posts = gql `
  query Posts {
    posts {
      title,
      content, 
      image {
        url,
        id,
        mime
      },
      publishDate
    }
  }`