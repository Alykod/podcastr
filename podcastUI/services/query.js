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

export const LatestPodcastQuery  = gql`
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
