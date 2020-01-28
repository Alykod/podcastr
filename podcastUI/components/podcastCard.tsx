import React, { FunctionComponent,useContext } from 'react';
import Link from 'next/link'
import * as Interfaces from '../services/interface';
import {Card, CardHeader, CardImage, CardContent, Content, Title, Image} from 'bloomer'
import PodcastContext from './context/podcastContext';
// style={{width: "100%", height: "10vh"}}
const PodcastCard:FunctionComponent<Interfaces.Podcast> = ({title, description, image, id}) => {
    
    const {podcastState, updatePodcastList, updateCurrentPodcast} = useContext(PodcastContext);

    const handleSelectedPodcast = () => {
        updateCurrentPodcast({title, description, image, id});
    }

return (
    <Link href={`/podcasts?title=${title}`}>
     <a onClick={()=> handleSelectedPodcast()}>
    <Card style={{margin: "5vh 0"}}>
        <CardHeader style={{height: '20vh'}}>
            <img style={{height: '100%', objectFit: "cover", width: '100%'}} src={cardUrlHandler(image.url)} alt={title} />
        </CardHeader>
        <CardContent>
            <Title>{title}</Title>
            <Content>{description}</Content>
        </CardContent>
    </Card>
    </a>   
    </Link>
)

}

const cardUrlHandler = (url) => {
 return `http://localhost:1337/${url}`
}

export default PodcastCard