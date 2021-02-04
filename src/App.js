import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard.jsx'

function App(queryTerm) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(queryTerm.queryTerm);

  useEffect( () => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then(result => result.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="container mx-auto bg-opacity-0">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>
    </div>

  );
}

export default App;
