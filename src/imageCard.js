import React from 'react';
import ImageTag from './components/imageTag.js';

const ImageCard = ({ image }) => {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-100">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-blue-800 text-xl mb-2">
          Photo Credits : {image.user}
        </div>
        <ul>
          <li>
            <strong>View Count:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Thumbs:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
            <ImageTag key={1} tag={"#cool"}/>
            <ImageTag key={2} tag={"#funky"}/>
            <ImageTag key={3} tag={"#snappy"}/>
      </div>
      
    </div>
    )
}

export default ImageCard