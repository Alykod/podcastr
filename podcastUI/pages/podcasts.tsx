import { useRouter } from 'next/router';
import Layout from '../components/layout';
import React, { useEffect, useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SelectedPodcastQuery } from '../services/query';
import _ from 'lodash'
import { Box, Tile, Title , Content} from 'bloomer';
import {Podcast} from '../services/interface'
import PodcastContext from '../components/context/podcastContext';




const PodcastPage = () => {
    const router = useRouter();
    const PodcastSelectedContext = useContext(PodcastContext);
    console.log(PodcastSelectedContext)
    debugger;
    const { data, loading, error } = useQuery(SelectedPodcastQuery, { variables: { someTitle: router.query.title } })
    const [podcast, setPodcast] = useState<Podcast | null>(null);


    useEffect(() => {
        debugger;
        if (data && !_.isEqual(data.podcasts, podcast)) {
            setPodcast(data)
        }
    }, [data]);


    const handleLayout = () => {
        return (
            <section className="section">
            <div className="container">
                <Tile isAncestor>
                    <Tile isParent isVertical is-4>
                        <img style={{height: '100%', objectFit: "cover", width: '100%'}} src={cardUrlHandler(podcast.image.url)} alt={podcast.title}/>
                    </Tile>
                    <Tile isParent>
                        <Box>
                            <Title>{podcast.title}</Title>
                            <audio>
                                <source src={cardUrlHandler(podcast.audioFile.url)} type={podcast.audioFile.mime} />
                            </audio>
                            <Content>{podcast.description}</Content>
                        </Box>
                    </Tile>
                </Tile>
            </div>
        </section>
        )
    }

    return (
        <Layout>
           {podcast ? handleLayout(): null}
        </Layout>
    )
}


export default PodcastPage



const cardUrlHandler = (url) => {
    return `http://localhost:1337/${url}`
   }