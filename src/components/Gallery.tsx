import { useState, useMemo, useCallback } from 'react';
import { X, MessageCircle, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/lib/data';
import { openWhatsApp } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

type Category = (typeof galleryCategories)[number];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
  if (activeFilter === 'All') return galleryItems;

  return galleryItems.filter(
    (item) =>
      item.category.trim().toLowerCase() ===
      activeFilter.trim().toLowerCase()
  );
}, [activeFilter]);

  const openLightbox = useCallback((index: number) => {
    const item = filteredItems[index];
    setLightboxIndex(index);
    trackEvent('gallery_image_view', {
      label: 'Gallery Enquiry',
      image_id: item.id,
      caption: item.caption,
    });
  }, [filteredItems]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (dir: 'prev' | 'next') => {
      setLightboxIndex((prev) => {
        if (prev === null) return prev;
        const max = filteredItems.length - 1;
        if (dir === 'prev') return prev === 0 ? max : prev - 1;
        return prev === max ? 0 : prev + 1;
      });
    },
    [filteredItems.length]
  );

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" data-section-name="Gallery" className="bg-offwhite py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Image Gallery
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Product &amp; Project Gallery
          </h2>
          <p className="text-steel-400 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            Browse our stainless steel railing, fittings and kitchen storage products and projects.
            Click any image to zoom.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal mb-8">
          <div className="flex flex-wrap gap-2 pb-2 justify-center">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-steel-950 text-gold-500 shadow-card'
                    : 'bg-white text-steel-400 border border-steel-200 hover:border-gold-500/30 hover:text-steel-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
        <div className="col-span-full py-16 text-center">
          <p className="text-steel-950 font-semibold">
            No images found in this category.
          </p>
          <p className="mt-2 text-sm text-steel-400">
            Please select another category or choose All.
          </p>
          <button
            onClick={() => setActiveFilter('All')}
            className="mt-4 rounded-lg bg-steel-950 px-5 py-2 text-white"
          >
            View All Images
          </button>
        </div>
      )}
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-premium transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Zoom icon */}
              <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-steel-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-4 w-4" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="inline-block px-2 py-0.5 rounded bg-gold-500/20 text-gold-500 text-[10px] font-medium mb-1">
                  {item.category}
                </span>
                <p className="text-white text-xs font-medium leading-tight">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-2 sm:left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full max-h-[70vh] object-contain bg-steel-900"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-500 text-xs font-medium mb-1">
                  {currentItem.category}
                </span>
                <p className="text-white text-sm font-medium">{currentItem.caption}</p>
              </div>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello Shree Ramdev Steel, I would like to enquire about this product: ${currentItem.caption}`,
                    'Gallery Enquiry'
                  )
                }
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp text-white font-semibold text-sm hover:bg-whatsapp-dark transition-colors whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire About This Product
              </button>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-2 sm:right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
