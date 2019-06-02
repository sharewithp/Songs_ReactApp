//Action creator
export const selectSong = song => {
    //Return 
return {
    type: 'SONG_SELECTED',
    payload: song
 };
};

