import { combineReducers } from 'redux';

const songsReducers = () => {
return [
        { title: 'No Scrubs', duration:'4:05' },
        { title: 'Macarena',duration:'2:03' },
        { title:'All Star',duration:'3:15' },
        { title:'I want it the way',duration:'1:45' }
 ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
});