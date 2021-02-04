import React from 'react';

const ImageTag = ({ tag }) => {
    return(
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {tag}
        </span>
    )
}

export default ImageTag;