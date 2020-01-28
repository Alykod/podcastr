import { useRouter } from 'next/router';
import Layout from '../components/layout';
import React, { useEffect, useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SelectedPodcastQuery,SinglePodcast } from '../services/query';
import _ from 'lodash'
import { Box, Tile, Title , Content} from 'bloomer';
import {Podcast} from '../services/interface'
import PodcastContext from '../components/context/podcastContext';
import AudioPlayer from '../components/audio/audioPlayer';





const PodcastTemplate = (props) => {

    const cardUrlHandler = (url) => {
        return `http://localhost:1337/${url}`
       }


    return (
        <section className="section">
        <div className="container">
            <Tile isAncestor>
                <Tile isParent isVertical className="is-4">
                    <img style={{height: '100%', objectFit: "cover", width: '100%'}} src={cardUrlHandler(props.podcast.image.url)} alt={props.podcast.title}/>
                </Tile>
                <Tile isParent>
                    <Box>
                        <Title>{props.podcast.title}</Title>
                        {/* <audio controls>
                            <source src={cardUrlHandler(podcast.audioFile.url)} type={podcast.audioFile.mime} id={podcast.audioFile.id}/>
                        </audio> */}
                        <AudioPlayer {...props.podcast.audioFile} />
                        <Content>{props.podcast.description}</Content>
                    </Box>
                </Tile>
            </Tile>
        </div>
    </section>
    )
}


export default PodcastTemplate


