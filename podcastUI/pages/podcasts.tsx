import { useRouter } from 'next/router';
import Layout from '../components/layout';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SinglePodcast } from '../services/query';
import _ from 'lodash'
import {Podcast} from '../services/interface'
import PodcastTemplate from '../components/podcastTemplate';



const PodcastPage = () => {
    const router = useRouter();
    const { data, loading, error } = useQuery(SinglePodcast, { variables: { filter: router.query.title } })

    const [podcast, setPodcast] = useState<Podcast | null>(null);


    useEffect(() => {
        if (data && !_.isEqual(data.podcast, podcast)) {
            setPodcast(data.podcasts[0])
        }
    }, [data]);


    useEffect(()=> {
        if(error) {
            window.location.href =  window.location.origin;
        }
    }, [error]);


    return (
        <Layout>
           {podcast ? <PodcastTemplate podcast={podcast} /> : null}
        </Layout>
    )
}


export default PodcastPage



