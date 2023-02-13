import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Gallery from './components/gallery';

function App() {
  const [query, setQuery] = useState("");
  
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  //console.log(process.env);

  const client_id = process.env.REACT_APP_CLIENT_ID;

  const handleSubmit = (event) => {
         event.preventDefault();
         setLoading(true);

         fetch(
                 `https://api.unsplash.com/search/photos?query=${query}&client_id=${client_id}&per_page=30`
        )
              .then((data) => data.json())
              .then((data) => {
                                setPhotos(data.results);
                                setLoading(false);
              })
              .catch((err) => console.log(err));

         setQuery("");
  };

  return (
        <div>
         <Header brand='Unsplash' className='header-container'>
           <form onSubmit={handleSubmit}>
           <input 
                type='text' 
                className='header-input' 
                onChange={(event) => setQuery(event.target.value)}
                value={query}
              />
            </form>
          </Header>
          <Gallery photos={photos} loading={loading}/>
        </div>
     );
}

export default App;
