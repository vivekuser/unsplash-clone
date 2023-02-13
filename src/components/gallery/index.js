import React from 'react';
import './gallery.css';

const Gallery = ({photos, loading}) => {
    
    return (
    <div className='gallery'> 
    {!loading ? (
				photos.map((photo) => (
					<img
						src={photo.urls.regular}
						alt={photo.alt_description}
						className='grid-images'
						key={photo.id}
					/>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Gallery;