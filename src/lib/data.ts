// All site data — products, gallery, FAQ, service areas, etc.

export interface Product {
  id: string;
  title: string;
  description: string;
  applications: string[];
  image: string;
  alt: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ApplicationItem {
  title: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: 'railing-accessories',
    title: 'Stainless Steel Railing Accessories',
    description: 'Railing posts, holders, connectors, clamps, brackets and related accessories for staircase and balcony applications.',
    applications: ['Staircase Railings', 'Balcony Railings', 'Glass Railing Systems'],
    image: 'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Stainless steel railing posts and accessories supplied by Shree Ramdev Steel in Pune',
    category: 'SS Railing Accessories',
  },
  {
    id: 'ss-pipes-tubes',
    title: 'SS Pipes & Tubes',
    description: 'Stainless steel pipes and tubes for railing, fabrication and structural applications.',
    applications: ['Railing Fabrication', 'Structural Work', 'Handrail Construction'],
    image: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Stainless steel pipes and tubes for railing fabrication supplied in Pune PCMC',
    category: 'SS Pipes & Fittings',
  },
  {
    id: 'ss-bends-fittings',
    title: 'SS Bends & Fittings',
    description: 'SS bends, elbows, joints, connectors and finishing components for railing and fabrication work.',
    applications: ['Railing Corners', 'Fabrication Joints', 'Pipe Connections'],
    image: 'https://images.pexels.com/photos/8853524/pexels-photo-8853524.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'SS bends elbows and fitting components for railing supplied by Shree Ramdev Steel',
    category: 'SS Pipes & Fittings',
  },
  {
    id: 'ss-balls-finials',
    title: 'SS Balls & Finials',
    description: 'Decorative stainless steel balls, end caps and finials for railings and architectural applications.',
    applications: ['Railing End Caps', 'Decorative Finials', 'Architectural Accents'],
    image: 'https://images.pexels.com/photos/16587776/pexels-photo-16587776.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Decorative stainless steel balls and finials for railings from Shree Ramdev Steel',
    category: 'SS Railing Accessories',
  },
  {
    id: 'kitchen-trolleys',
    title: 'Kitchen Trolleys',
    description: 'Stainless steel kitchen trolleys and storage trolleys for modular kitchens and homes.',
    applications: ['Modular Kitchens', 'Kitchen Storage', 'Pantry Organization'],
    image: 'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Stainless steel kitchen trolley for modular kitchen supplied in Pune',
    category: 'Kitchen Trolleys',
  },
  {
    id: 'kitchen-baskets-storage',
    title: 'Kitchen Drawer Baskets & Storage',
    description: 'Kitchen drawer baskets, pull-out baskets, corner units, cabinet storage and modular kitchen hardware.',
    applications: ['Drawer Storage', 'Cabinet Organization', 'Corner Units', 'Pull-out Systems'],
    image: 'https://images.pexels.com/photos/38311093/pexels-photo-38311093.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'SS kitchen drawer basket and storage trolley for modular kitchen from Shree Ramdev Steel',
    category: 'Kitchen Storage',
  },
];

export const galleryCategories = [
  'All',
  'SS Railing Accessories',
  'SS Pipes & Fittings',
  'Staircase Railings',
  'Balcony Railings',
  'Glass + SS Railings',
  'Kitchen Trolleys',
  'Kitchen Storage',
  'Modular Kitchen',
  'Project Work',
] as const;

export const galleryItems: GalleryItem[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/23940459/pexels-photo-23940459.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stainless steel railing posts and accessories supplied by Shree Ramdev Steel in Pune', caption: 'SS Railing Posts & Accessories', category: 'SS Railing Accessories' },
  { id: 'g2', src: 'https://images.pexels.com/photos/575450/pexels-photo-575450.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern staircase with stainless steel railings in Pune residential project', caption: 'Staircase with SS Railing', category: 'Staircase Railings' },
  { id: 'g3', src: 'https://images.pexels.com/photos/8345720/pexels-photo-8345720.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Glass and stainless steel balcony railing project in PCMC', caption: 'Glass Balcony Railing', category: 'Glass + SS Railings' },
  { id: 'g4', src: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stainless steel pipes and tubes supplied by Shree Ramdev Steel Pune', caption: 'SS Pipes & Tubes', category: 'SS Pipes & Fittings' },
  { id: 'g5', src: 'https://images.pexels.com/photos/38311093/pexels-photo-38311093.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'SS kitchen drawer basket and storage trolley for modular kitchen', caption: 'Kitchen Drawer Baskets', category: 'Kitchen Storage' },
  { id: 'g6', src: 'https://images.pexels.com/photos/27999552/pexels-photo-27999552.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern apartment balcony with glass and SS railing in PCMC Pune', caption: 'Balcony Glass Railing', category: 'Balcony Railings' },
  { id: 'g7', src: 'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modular kitchen with stainless steel trolley supplied by Shree Ramdev Steel', caption: 'Modular Kitchen with SS Trolley', category: 'Modular Kitchen' },
  { id: 'g8', src: 'https://images.pexels.com/photos/8853524/pexels-photo-8853524.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'SS railing connectors clamps and fittings supplied in Pune PCMC', caption: 'SS Railing Connectors & Clamps', category: 'SS Railing Accessories' },
  { id: 'g9', src: 'https://images.pexels.com/photos/36272819/pexels-photo-36272819.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stainless steel railing on wall for staircase supplied in Pune', caption: 'Wall-Mounted SS Handrail', category: 'Staircase Railings' },
  { id: 'g10', src: 'https://images.pexels.com/photos/16587776/pexels-photo-16587776.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Decorative SS balls and finials for railing ends from Shree Ramdev Steel', caption: 'SS Decorative Balls & Finials', category: 'SS Railing Accessories' },
  { id: 'g11', src: 'https://images.pexels.com/photos/6933770/pexels-photo-6933770.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Glass and metal railing on terrace of contemporary apartment in PCMC', caption: 'Terrace Glass + SS Railing', category: 'Glass + SS Railings' },
  { id: 'g12', src: 'https://images.pexels.com/photos/38310812/pexels-photo-38310812.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kitchen drawer organizer with SS basket from Shree Ramdev Steel Pune', caption: 'Kitchen Drawer Organizer', category: 'Kitchen Storage' },
  { id: 'g13', src: 'https://images.pexels.com/photos/10432218/pexels-photo-10432218.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'SS pipe fittings and valves supplied by Shree Ramdev Steel in Pune', caption: 'SS Pipe Fittings & Valves', category: 'SS Pipes & Fittings' },
  { id: 'g14', src: 'https://images.pexels.com/photos/12029115/pexels-photo-12029115.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern residential building with glass and SS balcony railings in Pune', caption: 'Residential Balcony Railings', category: 'Balcony Railings' },
  { id: 'g15', src: 'https://images.pexels.com/photos/7515855/pexels-photo-7515855.png?auto=compress&cs=tinysrgb&w=800', alt: 'Modular kitchen interior with SS hardware and storage solutions Pune', caption: 'Modern Modular Kitchen', category: 'Modular Kitchen' },
  { id: 'g16', src: 'https://images.pexels.com/photos/22717514/pexels-photo-22717514.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Steel fabrication work for railing project supplied by Shree Ramdev Steel', caption: 'Railing Fabrication Project', category: 'Project Work' },
  { id: 'g17', src: 'https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stainless steel pipes with fittings supplied for fabrication in Pune', caption: 'SS Pipes for Fabrication', category: 'SS Pipes & Fittings' },
  { id: 'g18', src: 'https://images.pexels.com/photos/13272374/pexels-photo-13272374.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern stainless steel railing design supplied in Pune PCMC', caption: 'Designer SS Railing', category: 'SS Railing Accessories' },
  { id: 'g19', src: 'https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Modern kitchen with stainless steel storage solutions in Pune', caption: 'Kitchen with SS Storage', category: 'Modular Kitchen' },
  { id: 'g20', src: 'https://images.pexels.com/photos/19748679/pexels-photo-19748679.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Glass and SS railing with geometric patterns in PCMC residential project', caption: 'Geometric Glass + SS Railing', category: 'Glass + SS Railings' },
  { id: 'g21', src: 'https://images.pexels.com/photos/17406672/pexels-photo-17406672.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Steel welding fabrication for railing project by Shree Ramdev Steel', caption: 'Welding & Fabrication Work', category: 'Project Work' },
  { id: 'g22', src: 'https://images.pexels.com/photos/36788717/pexels-photo-36788717.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stainless steel handrail mounted on concrete wall supplied in Pune', caption: 'SS Handrail on Concrete', category: 'Staircase Railings' },
  { id: 'g23', src: 'https://images.pexels.com/photos/38310817/pexels-photo-38310817.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kitchen drawer with SS storage basket from Shree Ramdev Steel Pune', caption: 'SS Storage Basket Drawer', category: 'Kitchen Storage' },
  { id: 'g24', src: 'https://images.pexels.com/photos/9562864/pexels-photo-9562864.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Apartment building with glass and SS railings supplied in PCMC Pune', caption: 'Apartment Glass Railings', category: 'Balcony Railings' },
];

export const applications: ApplicationItem[] = [
  { title: 'Staircase Railings', image: 'https://images.pexels.com/photos/575450/pexels-photo-575450.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Staircase with stainless steel railing supplied in Pune' },
  { title: 'Balcony Railings', image: 'https://images.pexels.com/photos/27999552/pexels-photo-27999552.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Balcony with stainless steel railing in PCMC' },
  { title: 'Glass + SS Railing Systems', image: 'https://images.pexels.com/photos/8345720/pexels-photo-8345720.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Glass and stainless steel railing system in Pune' },
  { title: 'Fabrication Projects', image: 'https://images.pexels.com/photos/22717514/pexels-photo-22717514.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Steel fabrication project supplied by Shree Ramdev Steel' },
  { title: 'Modular Kitchens', image: 'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Modular kitchen with SS hardware in Pune' },
  { title: 'Kitchen Storage', image: 'https://images.pexels.com/photos/38311093/pexels-photo-38311093.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Kitchen storage with SS baskets from Shree Ramdev Steel' },
  { title: 'Cabinet Hardware', image: 'https://images.pexels.com/photos/38310812/pexels-photo-38310812.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Kitchen cabinet hardware with SS drawer baskets in Pune' },
  { title: 'Commercial & Residential Projects', image: 'https://images.pexels.com/photos/11680852/pexels-photo-11680852.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial building with SS railings supplied in PCMC' },
];

export const faqs: FaqItem[] = [
  { question: 'Do you handle wholesale stainless steel orders?', answer: 'Yes. Shree Ramdev Steel handles both retail and wholesale stainless steel orders. For bulk quantities and project requirements, call or WhatsApp +91 99207 76840 to discuss wholesale pricing.' },
  { question: 'What stainless steel railing products do you supply?', answer: 'We supply SS railing posts, holders, connectors, clamps, brackets, bends, balls, finials, end caps and related accessories for staircase and balcony railing applications.' },
  { question: 'Do you provide SS pipes, bends and fittings?', answer: 'Yes. We supply stainless steel pipes, tubes, bends, elbows, joints and connectors suitable for railing, fabrication and structural applications. Contact us for sizes, finishes and availability.' },
  { question: 'Do you supply kitchen trolleys and drawer baskets?', answer: 'Yes. We supply stainless steel kitchen trolleys, drawer baskets, pull-out baskets, corner units, cabinet storage and modular kitchen hardware solutions.' },
  { question: 'Can I send a photo of the product I need?', answer: 'Absolutely. You can send a photo of the product you need along with your requirement and quantity on WhatsApp at +91 99207 76840. Our team will help you identify and quote the right product.' },
  { question: 'Do you serve customers in Pune and PCMC?', answer: 'Yes. We serve customers across Pune, Pimpri-Chinchwad (PCMC), Alandi, Bhosari, Moshi, Chakan, Nigdi, Akurdi, Ravet, Baner, Hadapsar and nearby areas along the Pune-Nashik Highway.' },
  { question: 'Where is Shree Ramdev Steel located?', answer: 'Shree Ramdev Steel is located at Alandi on the Pune-Nashik Highway, Pune, Maharashtra, India. You can reach us at +91 99207 76840 for directions and enquiries.' },
  { question: 'How can I get a wholesale price list?', answer: 'For a wholesale price list, please call or WhatsApp +91 99207 76840 with your product requirement, sizes and quantity. Our team will share pricing information based on your specific needs.' },
];

export const serviceAreas: string[] = [
  'Pune', 'Pimpri-Chinchwad', 'Alandi', 'Bhosari', 'Moshi', 'Chakan',
  'Nigdi', 'Akurdi', 'Ravet', 'Baner', 'Hadapsar', 'Pune-Nashik Highway',
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#applications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
