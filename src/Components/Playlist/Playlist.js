import './Playlist.css';

function Playlist() {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
  }
  
  export default Playlist;