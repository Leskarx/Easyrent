"use client";
import React, { useState, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';

export default function MainImageUpload({ setValue }) {
  const [imagePresent, setImagePresent] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const existingImageSrc = localStorage.getItem("mainImageSrc");
    if (existingImageSrc) {
      setSrc(existingImageSrc);
      setImagePresent(true);
    }
  }, []);

  async function handleUpload(results) {
    const newSrc = results?.info?.secure_url;

    // Trigger server-side deletion of the old image
    const oldImageId = src?.split('/').pop().split('.')[0];
    if (oldImageId) {
      await fetch('/api/deleteImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId: oldImageId }),
      });
    }

    // Save the new image URL in the state and localStorage
    setSrc(newSrc);
    setImagePresent(true);
    setValue("mainImageSrc", newSrc);
    localStorage.setItem("mainImageSrc", newSrc);
  }

  return (
    <div>
      <CldUploadWidget 
        options={{ maxFiles: 1 }} 
        onUpload={handleUpload}
        uploadPreset="ml_default"
      >
        {({ open }) => (
          <section 
            onClick={() => {
              if (open) {
                open();
              } else {
                console.error("Upload widget could not be opened.");
              }
            }} 
            className="cursor-pointer relative rounded-lg md:rounded-full h-40 w-40 bg-slate-200"
          >
            {
              imagePresent ? (
                <div className='rounded-lg md:rounded-full w-full h-full inset-0'>
                  <Image
                    className='rounded-lg md:rounded-full'
                    alt='Image'
                    src={src}
                    quality={100}
                    priority
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <p className='text-center text-6xl h-full w-full flex items-center justify-center'>
                  +
                </p>
              )
            }
          </section>
        )}
      </CldUploadWidget>
    </div>
  );
}
