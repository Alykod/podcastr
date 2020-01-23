export const UPDATE_PODCASTS_LIST: string = 'UPDATE_PODCASTS_LIST';
export const UPDATE_CURRENT_PODCAST: string = 'UPDATE_CURRENT_PODCAST';

interface State {
    podcasts: Array<Object>,
    currentPodcast: Object,
    theme: string
}

interface Action {
    type: string
    value: any
}

const updatePodcastsList = (podcasts) => {
    return podcasts;
}

const updateCurrentPodcast = (podcast) => {
    return podcast;
}


export const podcastReducer = (state: State, action: Action) => {
    debugger;
    switch(action.type) {
        case UPDATE_PODCASTS_LIST: {
            // let podcasts = updatePodcastsList(state.podcasts);
            return {...state, podcasts: action.value};
        }
        case UPDATE_CURRENT_PODCAST: {
            debugger;
            // let currentPodcast = updateCurrentPodcast(state.currentPodcast);
            return {...state, currentPodcast: action.value}
        }
        default: return state;
    }
}
