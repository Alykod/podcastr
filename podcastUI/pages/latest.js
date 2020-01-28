import Layout from '../components/layout'
import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/react-hooks';
import {LatestPodcast} from '../services/query';
import PodcastTemplate from '../components/podcastTemplate';

const Latest = () =>  {

    const { data, loading, error } = useQuery(LatestPodcast);
    const [podcastData, setPodcastData] = useState(null);


    useEffect(()=> {
        if(data && data.podcasts[0] != podcastData )
        {
            setPodcastData(data.podcasts[0])
        }
    }, [data])

  return (
    <Layout>
      {podcastData && <PodcastTemplate podcast={podcastData} />}
    </Layout>
  );
}


export default Latest;