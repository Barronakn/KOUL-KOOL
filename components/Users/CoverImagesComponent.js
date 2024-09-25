import { useState } from 'react';
import Sidebar from '../Layouts/Sidebar';
import Image from 'next/image';

export default function CoverImagesComponent() {
  const [images, setImages] = useState(Array(7).fill(null));

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      const index = newImages.findIndex((img) => img === null);
      if (index !== -1) {
        newImages[index] = URL.createObjectURL(file);
        setImages(newImages);
      }
    }
  };

  return (
    <div className="flex relative flex-col h-screen mt-64 p-5 rounded-t-xl mx-16">
      <div className="-mt-48 bg-chocolate-white mx-10 h-10 rounded-t-xl"></div>
      <div className="flex flex-1 bg-chocolate-red rounded-t-xl">
        
        <Sidebar />

        
        <main className="flex-1 p-8 bg-gray-white rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Cover Images</h2>

          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex flex-row justify-end w-full h-40 bg-gray-100 rounded-lg"
              >
                {image && (
                  <img
                    src={image}
                    alt={`Cover ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {
                  index == 0 && (
                    <button className="rounded bg-white h-8 mr-3 mt-3 p-2 flex justify-end text-gray-500">
                      <Image src="/assets/icons/plus.png" alt='plus-icon' width={15} height={15} />
                    </button>
                  )
                }
              </div>
            ))}
            <label
              htmlFor="upload-cover"
              className="relative flex bg-white flex-col items-center justify-center w-full h-40 rounded-lg cursor-pointer text-center"
            >
              <Image src="/assets/icons/export-icon.png" alt='export-icon' width={25} height={25} />
              <span className="text-gray-500">Click here to upload a cover image.</span>
              <span className="text-sm text-gray-400">PNG and JPG accepted</span>
              <input
                id="upload-cover"
                type="file"
                accept="image/png, image/jpeg"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleUpload}
              />
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
