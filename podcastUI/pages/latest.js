import Layout from '../components/layout'
import { useQuery } from '@apollo/react-hooks';
import {LatestPodcastQuery} from '../services/query';


const Latest = () =>  {

    const { data, loading, error } = useQuery(LatestPodcastQuery, { variables: {someId: "1"}})
    console.log(data)
  return (
    <Layout>
      <div>
        <p>This is the about page</p>
        <a className="button is-primary">test</a>
      </div>
    </Layout>
  );
}


export default Latest;