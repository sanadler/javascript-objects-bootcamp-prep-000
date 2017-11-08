var playlist = {artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  console.log(playlist);
}
updatePlaylist(playlist, yo, "hello");
