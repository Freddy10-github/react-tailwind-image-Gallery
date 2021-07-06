import React from 'react';

const ImageCard = ({image}) => {
  const tags = image.tags.split(', ')
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg" >
      <img src={image.webformatURL} alt="" className='w-full'/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user}</div>
        
      </div>
      <div>
        <ul>
          <li>
            <strong className='m-2'>Views: </strong>{image.views}
          </li>
          <li>
            <strong className='m-2'>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong className='m-2'>Likes: </strong>{image.likes}
          </li>
        </ul>
      </div> 
      <div className="px-6 py-3">
        {tags.map((tags,index) =>
          (
            <span key = {index} className="inline-block bg-gray-200 rounded-full px-3 py-1 
            text-sm font-semibold text-gray-700 mr-2 my-1 cursor-pointer">
              #{tags}
            </span>
          )
        )}
      </div>     
    </div>
  );
};

export default ImageCard;