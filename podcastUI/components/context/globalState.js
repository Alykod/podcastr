import React, { useReducer } from "react";
import {
  podcastReducer,
  UPDATE_CURRENT_PODCAST,
  UPDATE_PODCASTS_LIST
} from "./reducers";
import PodcastContext from "./podcastContext";

const GlobalState = props => {
  const initialState = {
      theme: 'light',
      podcastList: [],
      currentPodcast: {},
  }
  
  const [podcastState, dispatch] = useReducer(podcastReducer, initialState);

  const updateCurrentPodcast = (podcast) => {
      dispatch({type: UPDATE_CURRENT_PODCAST, value: podcast})
  };

  const updatePodcastList = (podcasts) => {
      dispatch({type: UPDATE_PODCASTS_LIST, value: podcasts})
  }
  

  return <PodcastContext.Provider value={{podcastState, updatePodcastList, updateCurrentPodcast}}>{props.children}</PodcastContext.Provider>;
};


export default GlobalState;