export const track1 = {
    id: 'unique track id', // Must be a string, required
    
    url: require('../app/assets/music/song.mp3'), // Load media from the app bundle
    //url: 'http://example.com/avaritia.mp3', // Load media from the network
    //url: 'file:///storage/sdcard0/Music/avaritia.wav', // Load media from the file system 

    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    
    artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    //artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
    //artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
};