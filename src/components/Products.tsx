import { MessageCircle, Eye } from 'lucide-react';
import { products } from '@/lib/data';
import { openWhatsAppEnquiry } from '@/lib/whatsapp';

export default function Products() {
  return (
    <section id="products" data-section-name="Products" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 reveal">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">
            Our Products
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-steel-950">
            Stainless Steel Product Range
          </h2>
          <p className="text-steel-400 mt-3 text-sm lg:text-base max-w-2xl mx-auto">
            Complete range of SS railing accessories, pipes, fittings, balls, finials and kitchen
            storage solutions for homes, fabricators and projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="reveal group bg-offwhite rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 border border-steel-100 hover:border-gold-500/30"
            >
              {/* Product Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-steel-950/80 backdrop-blur-sm text-gold-500 text-xs font-medium">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3 className="font-heading font-bold text-base lg:text-lg text-steel-950 mb-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-steel-400 text-sm mb-4 leading-relaxed">{product.description}</p>

                {/* Applications */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-steel-500 mb-1.5 uppercase tracking-wide">
                    Applications
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 rounded-md bg-steel-100 text-steel-600 text-xs font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-steel-100">
                  <button
                    onClick={() => openWhatsAppEnquiry(product.title, 'Product Enquiry')}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-whatsapp text-white font-semibold text-xs hover:bg-whatsapp-dark transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Ask Price / Availability
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-steel-100 text-steel-600 font-medium text-xs hover:bg-steel-200 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Gallery
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
