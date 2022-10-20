import React from 'react';

const ImageList = ({imageList}) => {
    const images = imageList.map(image => <img src={image.imageUrl} alt="image" style={{height:'300px',width:'300px'}}/>)
    return images
}

export default ImageList;