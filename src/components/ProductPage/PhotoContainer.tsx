import { useState } from 'react';

interface PhotoContainerProps {
    photos: string[];
}


const PhotoContainer = ({ photos }: PhotoContainerProps) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    const handleThumbnailClick = (index: number) => {
        setActivePhotoIndex(index);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <div className="w-full relative h-96">
                <img
                    src={`http://127.0.0.1:1337/${photos[activePhotoIndex]}`}
                    alt={`Photo ${activePhotoIndex}`}
                    className="w-full h-full object-cover object-center rounded-lg"
                />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`w-full h-32 relative cursor-pointer ${index === activePhotoIndex ? 'border-2 rounded-lg border-dark-blue' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img
                            src={`http://127.0.0.1:1337/${photo}`}
                            alt={`Photo ${index}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoContainer;
