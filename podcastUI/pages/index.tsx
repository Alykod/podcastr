import Link from "next/link";
import Header from "../components/header";
import Layout from "../components/layout";
import React, { useContext, useEffect, useState} from "react";
import PodcastContext from '../components/context/podcastContext';
import {UPDATE_CURRENT_PODCAST} from '..//components/context/reducers'
// import apollo, { withApollo } from '../lib/apollo'
// import PodcastsList from '../components/apolloLayout';
import { useQuery } from '@apollo/react-hooks';
import PodcastCard from '../components/podcastCard'
import {PodcastsQuery, LatestPodcastQuery} from '../services/query';
import _ from 'lodash'


const Index = () => {
    const podcastContext = useContext(PodcastContext)
    const { data, loading, error } = useQuery(PodcastsQuery);
    const [loadingStatus, setLoadingStatus] = useState(loading);
    const [podcastData, setPodcastData] = useState(null);

    // console.log("data", data);

    useEffect(()=> {
        if(data && !_.isEqual(data.podcasts, podcastData)) {
            setPodcastData(data)
        }
    }, [data]);

    useEffect(()=> {
        setLoadingStatus(loading);
    }, [loading])
    

    const handleCardsMapping = () => {
     return  podcastData && podcastData.podcasts.map((podcast)=> {
       return <PodcastCard key={podcast.id} {...podcast} />
      })
    }

  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between'}}>
      {handleCardsMapping()}

      </div>
    {/* <PodcastsList /> */}
      <p>Hello Next.js</p>
    </Layout>
  );
};

//reason get initial props is not used in this situation, is due to the fact that it would not work with hooks. When react suspense is out, this might be updated. 


export default Index;
