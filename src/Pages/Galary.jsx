import React, { useEffect, useState } from 'react';
import FlowerBackground from '../assets/Background/Flower.jpeg';

const ProductPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from backend
  const fetchGallery = async () => {
    try {
      const res = await fetch('http://localhost/react_admin_db/get_gallery.php');
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setGalleryImages(data);
      } else {
        setError('No gallery images found.');
        setGalleryImages([]);
      }
    } catch (e) {
      console.error('Fetch gallery error:', e);
      setError('⚠️ Could not fetch gallery images.');
      setGalleryImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Map gallery images to products (first 4 images for the product carousel)
  const products = galleryImages.slice(0, 4).map((item) => ({
    image: item.image_url,
  }));

  // Map gallery images to mainProducts (next images for full-image and grid sections)
  const mainProducts = [
    {
      type: 'full-image',
      image: galleryImages[4]?.image_url || 'https://via.placeholder.com/600x400',
      title: 'Demitore',
    },
    {
      type: 'full-image',
      image: galleryImages[5]?.image_url || 'https://via.placeholder.com/600x400',
      title: 'Ponokae',
    },
    {
      type: 'full-image',
      image: galleryImages[6]?.image_url || 'https://via.placeholder.com/600x400',
      title: 'Korolvo',
    },
    {
      type: 'grid',
      images: [
        galleryImages[7]?.image_url || 'https://via.placeholder.com/300x300',
        galleryImages[8]?.image_url || 'https://via.placeholder.com/300x300',
        galleryImages[9]?.image_url || 'https://via.placeholder.com/300x300',
        galleryImages[10]?.image_url || 'https://via.placeholder.com/300x300',
      ],
    },
  ];

  // Hero section images (use last two images or placeholders)
  const heroImages = [
    galleryImages[11]?.image_url || 'https://via.placeholder.com/800x600',
    galleryImages[12]?.image_url || 'https://via.placeholder.com/800x600',
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      {/* Main white container with shadow and rounded corners */}
      <div className="relative z-10 bg-white shadow-2xl w-[100%] max-w-[1700px] mx-auto text-gray-900 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold tracking-widest">Gallery</div>
          <div className="flex items-center space-x-6 text-sm">
            {/* <a href="#" className="hover:underline">Catalog</a>
            <a href="#" className="hover:underline">Search</a>
            <a href="#" className="hover:underline">Корзина (0)</a> */}
          </div>
        </header>

        {/* Error Message */}
        {error && (
          <div className="mx-8 my-4 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="mx-8 my-4 p-4 text-center text-gray-600">Loading gallery images...</div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 pb-16">
          <div className="relative">
            <img
              src={heroImages[0]}
              alt="Model 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src={heroImages[1]}
              alt="Model 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-6xl font-bold tracking-widest text-white">
                ESOLO
              </h1>
              <p className="text-white mt-2">New Collection</p>
            </div>
          </div>
        </section>

        {/* Product Carousel/Grid */}
        <section className="px-8 py-12 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-auto object-cover mb-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Main Product Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
          {mainProducts.map((item, index) => (
            <div key={index} className="relative">
              {item.type === 'full-image' ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  {item.images.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`Product ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductPage;