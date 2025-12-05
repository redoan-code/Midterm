// ===========================
// EXPANDED PRODUCT CATALOG (100 PRODUCTS WITH UNIQUE IMAGES)
// ===========================
const products = [
    // MEN'S T-SHIRTS (5)
    { id: 1, name: 'Basic Cotton T-Shirt', category: 'mens-clothing', subcategory: 'tshirts', price: 450, image: 'picture/00021117641-ult24.jpg', badge: null, description: 'Comfortable cotton t-shirt for everyday wear', rating: 4.5, reviews: 89 },
    { id: 2, name: 'V-Neck Premium Tee', category: 'mens-clothing', subcategory: 'tshirts', price: 550, image: 'picture/00021118500-ult24.jpg', badge: 'New', description: 'Stylish v-neck t-shirt in premium fabric', rating: 4.6, reviews: 102 },
    { id: 3, name: 'Polo T-Shirt', category: 'mens-clothing', subcategory: 'tshirts', price: 750, image: 'picture/tour-dri-fit-golf-polo-ulHDq1Ym.jpeg', badge: 'Popular', description: 'Classic polo shirt for smart casual look', rating: 4.7, reviews: 145 },
    { id: 4, name: 'Graphic Print Tee', category: 'mens-clothing', subcategory: 'tshirts', price: 650, image: 'picture/00021119802-ult24.jpg', badge: null, description: 'Trendy graphic print t-shirt', rating: 4.4, reviews: 78 },
    { id: 5, name: 'Long Sleeve T-Shirt', category: 'mens-clothing', subcategory: 'tshirts', price: 700, image: 'picture/00021506500-e5.jpg', badge: null, description: 'Comfortable long sleeve tee', rating: 4.5, reviews: 92 },

    // MEN'S SHIRTS (5)
    { id: 6, name: 'Casual Cotton Shirt', category: 'mens-clothing', subcategory: 'shirts', price: 1200, image: 'picture/00021506641-ult24.jpg', badge: null, description: 'Relaxed fit casual shirt', rating: 4.6, reviews: 134 },
    { id: 7, name: 'Formal Dress Shirt', category: 'mens-clothing', subcategory: 'shirts', price: 1500, image: 'picture/00021506802-ult24.jpg', badge: 'Best Seller', description: 'Professional formal shirt', rating: 4.8, reviews: 198 },
    { id: 8, name: 'Denim Shirt', category: 'mens-clothing', subcategory: 'shirts', price: 1800, image: 'picture/00021596529-ult24.jpg', badge: 'Trending', description: 'Stylish denim shirt', rating: 4.7, reviews: 156 },
    { id: 9, name: 'Flannel Shirt', category: 'mens-clothing', subcategory: 'shirts', price: 1400, image: 'picture/00021596712-ult24.jpg', badge: null, description: 'Warm flannel shirt', rating: 4.5, reviews: 87 },
    { id: 10, name: 'Linen Summer Shirt', category: 'mens-clothing', subcategory: 'shirts', price: 1600, image: 'picture/00021597715-ult24.jpg', badge: 'New', description: 'Breathable linen shirt', rating: 4.6, reviews: 112 },

    // MEN'S PANTS (5)
    { id: 11, name: 'Classic Blue Jeans', category: 'mens-clothing', subcategory: 'pants', price: 2200, image: 'picture/Jeans-02-3-600x800.jpg', badge: 'Popular', description: 'Timeless blue denim jeans', rating: 4.7, reviews: 234 },
    { id: 12, name: 'Chino Pants', category: 'mens-clothing', subcategory: 'pants', price: 1900, image: 'picture/Jeans-03-3-600x800.jpg', badge: null, description: 'Smart casual chino pants', rating: 4.6, reviews: 167 },
    { id: 13, name: 'Cargo Pants', category: 'mens-clothing', subcategory: 'pants', price: 2100, image: 'picture/Jeans-03-4-600x800.jpg', badge: null, description: 'Utility cargo pants', rating: 4.5, reviews: 143 },
    { id: 14, name: 'Dress Pants', category: 'mens-clothing', subcategory: 'pants', price: 2500, image: 'picture/Jeans-04-600x800.jpg', badge: 'Premium', description: 'Formal dress pants', rating: 4.8, reviews: 189 },
    { id: 15, name: 'Jogger Pants', category: 'mens-clothing', subcategory: 'pants', price: 1700, image: 'picture/Jeans-E043-600x800.webp', badge: 'New', description: 'Comfortable jogger pants', rating: 4.4, reviews: 98 },

    // MEN'S JACKETS (5)
    { id: 16, name: 'Leather Jacket', category: 'mens-clothing', subcategory: 'jackets', price: 5500, image: 'picture/00021598500-ult24.jpg', badge: 'Premium', description: 'Genuine leather jacket', rating: 4.9, reviews: 276 },
    { id: 17, name: 'Denim Jacket', category: 'mens-clothing', subcategory: 'jackets', price: 3200, image: 'picture/00021599715-ult24.jpg', badge: 'Popular', description: 'Classic denim jacket', rating: 4.7, reviews: 198 },
    { id: 18, name: 'Bomber Jacket', category: 'mens-clothing', subcategory: 'jackets', price: 4200, image: 'picture/00021700500-ult24.jpg', badge: 'Trending', description: 'Stylish bomber jacket', rating: 4.8, reviews: 223 },
    { id: 19, name: 'Windbreaker', category: 'mens-clothing', subcategory: 'jackets', price: 2800, image: 'picture/00021701641-ult24.jpg', badge: null, description: 'Lightweight windbreaker', rating: 4.5, reviews: 134 },
    { id: 20, name: 'Blazer', category: 'mens-clothing', subcategory: 'jackets', price: 4800, image: 'picture/00021702802-ult24.jpg', badge: 'Best Seller', description: 'Formal blazer', rating: 4.8, reviews: 245 },

    // WOMEN'S DRESSES (5)
    { id: 21, name: 'Casual Summer Dress', category: 'womens-clothing', subcategory: 'dresses', price: 1800, image: 'picture/3Y2A1354-Edit-600x800.webp', badge: 'New', description: 'Light summer dress', rating: 4.6, reviews: 156 },
    { id: 22, name: 'Evening Gown', category: 'womens-clothing', subcategory: 'dresses', price: 4500, image: 'picture/3Y2A1405-Edit-600x800.webp', badge: 'Premium', description: 'Elegant evening gown', rating: 4.9, reviews: 198 },
    { id: 23, name: 'Maxi Dress', category: 'womens-clothing', subcategory: 'dresses', price: 2200, image: 'picture/3Y2A1425-Edit-600x800.webp', badge: 'Popular', description: 'Flowing maxi dress', rating: 4.7, reviews: 187 },
    { id: 24, name: 'Mini Dress', category: 'womens-clothing', subcategory: 'dresses', price: 1600, image: 'picture/3Y2A1458-Edit-scaled-600x800.webp', badge: 'Trending', description: 'Chic mini dress', rating: 4.5, reviews: 123 },
    { id: 25, name: 'Midi Dress', category: 'womens-clothing', subcategory: 'dresses', price: 1900, image: 'picture/3Y2A1481-Edit-600x800.webp', badge: null, description: 'Versatile midi dress', rating: 4.6, reviews: 145 },

    // WOMEN'S TOPS (5)
    { id: 26, name: 'Silk Blouse', category: 'womens-clothing', subcategory: 'tops', price: 1400, image: 'picture/3Y2A1575-Edit-scaled-600x800.webp', badge: 'Premium', description: 'Luxurious silk blouse', rating: 4.8, reviews: 167 },
    { id: 27, name: 'Tank Top', category: 'womens-clothing', subcategory: 'tops', price: 600, image: 'picture/3Y2A1594-Edit-600x800.webp', badge: null, description: 'Basic tank top', rating: 4.4, reviews: 89 },
    { id: 28, name: 'Crop Top', category: 'womens-clothing', subcategory: 'tops', price: 750, image: 'picture/3Y2A1646-Edit-600x800.webp', badge: 'Trending', description: 'Stylish crop top', rating: 4.5, reviews: 134 },
    { id: 29, name: 'Tunic Top', category: 'womens-clothing', subcategory: 'tops', price: 1100, image: 'picture/3Y2A1668-Edit-600x800.webp', badge: null, description: 'Comfortable tunic', rating: 4.6, reviews: 112 },
    { id: 30, name: 'Knit Sweater', category: 'womens-clothing', subcategory: 'tops', price: 1800, image: 'picture/3Y2A1703-Edit-scaled-600x800.webp', badge: 'New', description: 'Cozy knit sweater', rating: 4.7, reviews: 156 },

    // WOMEN'S BOTTOMS (5)
    { id: 31, name: 'Skinny Jeans', category: 'womens-clothing', subcategory: 'bottoms', price: 2100, image: 'picture/Jeans-E692-600x800.webp', badge: 'Popular', description: 'Fitted skinny jeans', rating: 4.7, reviews: 234 },
    { id: 32, name: 'A-Line Skirt', category: 'womens-clothing', subcategory: 'bottoms', price: 1300, image: 'picture/Jeans-E694-600x800.webp', badge: null, description: 'Classic a-line skirt', rating: 4.5, reviews: 123 },
    { id: 33, name: 'Leggings', category: 'womens-clothing', subcategory: 'bottoms', price: 900, image: 'picture/Jeans-E695-600x800.webp', badge: 'Best Seller', description: 'Stretchy leggings', rating: 4.6, reviews: 298 },
    { id: 34, name: 'Denim Shorts', category: 'womens-clothing', subcategory: 'bottoms', price: 1100, image: 'picture/Jeans-E700-600x800.webp', badge: null, description: 'Casual denim shorts', rating: 4.4, reviews: 145 },
    { id: 35, name: 'Palazzo Pants', category: 'womens-clothing', subcategory: 'bottoms', price: 1600, image: 'picture/Jeans-E701-600x800.webp', badge: 'New', description: 'Wide leg palazzo pants', rating: 4.6, reviews: 167 },

    // WOMEN'S OUTERWEAR (5)
    { id: 36, name: 'Winter Coat', category: 'womens-clothing', subcategory: 'outerwear', price: 5200, image: 'picture/3Y2A1796-Edit-600x800.webp', badge: 'Premium', description: 'Warm winter coat', rating: 4.9, reviews: 234 },
    { id: 37, name: 'Cardigan', category: 'womens-clothing', subcategory: 'outerwear', price: 1800, image: 'picture/3Y2A1818-Edit-600x800.webp', badge: null, description: 'Cozy cardigan', rating: 4.6, reviews: 156 },
    { id: 38, name: 'Leather Jacket', category: 'womens-clothing', subcategory: 'outerwear', price: 4800, image: 'picture/3Y2A1943-Edit-600x800.webp', badge: 'Trending', description: 'Stylish leather jacket', rating: 4.8, reviews: 198 },
    { id: 39, name: 'Trench Coat', category: 'womens-clothing', subcategory: 'outerwear', price: 4200, image: 'picture/3Y2A1960-Edit-600x800.webp', badge: 'Popular', description: 'Classic trench coat', rating: 4.7, reviews: 187 },
    { id: 40, name: 'Parka', category: 'womens-clothing', subcategory: 'outerwear', price: 3800, image: 'picture/3Y2A2258-Edit-scaled-600x800.webp', badge: null, description: 'Insulated parka', rating: 4.6, reviews: 145 },

    // ACCESSORIES - HATS (3)
    { id: 41, name: 'Baseball Cap', category: 'accessories', subcategory: 'hats', price: 700, image: 'picture/cap.png', badge: 'Popular', description: 'Classic baseball cap', rating: 4.5, reviews: 234 },
    { id: 42, name: 'Beanie', category: 'accessories', subcategory: 'hats', price: 550, image: 'picture/00021750898-ult24.jpg', badge: null, description: 'Warm winter beanie', rating: 4.4, reviews: 167 },
    { id: 43, name: 'Fedora Hat', category: 'accessories', subcategory: 'hats', price: 1200, image: 'picture/00021751700-ult24.jpg', badge: 'Premium', description: 'Stylish fedora hat', rating: 4.7, reviews: 123 },

    // ACCESSORIES - BELTS (3)
    { id: 44, name: 'Leather Belt', category: 'accessories', subcategory: 'belts', price: 950, image: 'picture/02582660251-ult24.jpg', badge: 'Best Seller', description: 'Genuine leather belt', rating: 4.6, reviews: 198 },
    { id: 45, name: 'Canvas Belt', category: 'accessories', subcategory: 'belts', price: 600, image: 'picture/02582660704-ult24.jpg', badge: null, description: 'Casual canvas belt', rating: 4.3, reviews: 89 },
    { id: 46, name: 'Designer Belt', category: 'accessories', subcategory: 'belts', price: 2200, image: 'picture/02582660812-ult24.jpg', badge: 'Premium', description: 'Luxury designer belt', rating: 4.8, reviews: 145 },

    // ACCESSORIES - SCARVES (3)
    { id: 47, name: 'Silk Scarf', category: 'accessories', subcategory: 'scarves', price: 1100, image: 'picture/05536704712-ult24.jpg', badge: 'Premium', description: 'Elegant silk scarf', rating: 4.7, reviews: 134 },
    { id: 48, name: 'Wool Scarf', category: 'accessories', subcategory: 'scarves', price: 850, image: 'picture/05536713500-ult24.jpg', badge: null, description: 'Warm wool scarf', rating: 4.5, reviews: 112 },
    { id: 49, name: 'Cotton Scarf', category: 'accessories', subcategory: 'scarves', price: 650, image: 'picture/05536713641-ult24.jpg', badge: null, description: 'Light cotton scarf', rating: 4.4, reviews: 98 },

    // ACCESSORIES - SUNGLASSES (3)
    { id: 50, name: 'Aviator Sunglasses', category: 'accessories', subcategory: 'sunglasses', price: 1500, image: 'picture/05536713802-ult24.jpg', badge: 'Popular', description: 'Classic aviator style', rating: 4.7, reviews: 245 },
    { id: 51, name: 'Wayfarer Sunglasses', category: 'accessories', subcategory: 'sunglasses', price: 1400, image: 'picture/00048304802-ult24.jpg', badge: 'Trending', description: 'Iconic wayfarer design', rating: 4.6, reviews: 198 },
    { id: 52, name: 'Round Sunglasses', category: 'accessories', subcategory: 'sunglasses', price: 1300, image: 'picture/00048305700-ult24.jpg', badge: null, description: 'Vintage round sunglasses', rating: 4.5, reviews: 167 },

    // ACCESSORIES - WATCHES (3)
    { id: 53, name: 'Digital Watch', category: 'accessories', subcategory: 'watches', price: 2500, image: 'picture/IMR00166_58d9caa4-0acd-454c-ac48-679442863aff.jpg', badge: null, description: 'Modern digital watch', rating: 4.6, reviews: 189 },
    { id: 54, name: 'Analog Watch', category: 'accessories', subcategory: 'watches', price: 3200, image: 'picture/IMR00180.jpg', badge: 'Premium', description: 'Classic analog watch', rating: 4.8, reviews: 234 },
    { id: 55, name: 'Smart Watch', category: 'accessories', subcategory: 'watches', price: 5500, image: 'picture/IMR00188.jpg', badge: 'Best Seller', description: 'Advanced smart watch', rating: 4.9, reviews: 312 },

    // FOOTWEAR - SNEAKERS (4)
    { id: 56, name: 'Running Sneakers', category: 'footwear', subcategory: 'sneakers', price: 3200, image: 'picture/zoom-fly-6-road-racing-shoes-PZG8ZD.jpeg', badge: 'Popular', description: 'Performance running shoes', rating: 4.7, reviews: 267 },
    { id: 57, name: 'Casual Sneakers', category: 'footwear', subcategory: 'sneakers', price: 2500, image: 'picture/air-max-moto-2k-shoes-jzOkK6YX.jpeg', badge: 'Best Seller', description: 'Everyday casual sneakers', rating: 4.6, reviews: 345 },
    { id: 58, name: 'High-Top Sneakers', category: 'footwear', subcategory: 'sneakers', price: 2900, image: 'picture/air-jordan-4-rm-shoes-NNlJjc.jpeg', badge: 'Trending', description: 'Stylish high-top sneakers', rating: 4.7, reviews: 234 },
    { id: 59, name: 'Slip-On Sneakers', category: 'footwear', subcategory: 'sneakers', price: 2200, image: 'picture/ava-rover-shoes-with-reflective-design-accents-2QcfTFBi.jpeg', badge: null, description: 'Easy slip-on sneakers', rating: 4.5, reviews: 198 },

    // FOOTWEAR - BOOTS (4)
    { id: 60, name: 'Ankle Boots', category: 'footwear', subcategory: 'boots', price: 3500, image: 'picture/p-6000-suede-shoes-0spVfw.jpeg', badge: 'Popular', description: 'Versatile ankle boots', rating: 4.7, reviews: 223 },
    { id: 61, name: 'Chelsea Boots', category: 'footwear', subcategory: 'boots', price: 3800, image: 'picture/total-90-shoes-Yr4jp94v.jpeg', badge: 'Premium', description: 'Classic chelsea boots', rating: 4.8, reviews: 198 },
    { id: 62, name: 'Combat Boots', category: 'footwear', subcategory: 'boots', price: 3200, image: 'picture/air-rift-shoes-BERkrPJQ.jpeg', badge: 'Trending', description: 'Rugged combat boots', rating: 4.6, reviews: 176 },
    { id: 63, name: 'Hiking Boots', category: 'footwear', subcategory: 'boots', price: 4200, image: 'picture/shoes.png', badge: null, description: 'Durable hiking boots', rating: 4.8, reviews: 245 },

    // FOOTWEAR - FORMAL (4)
    { id: 64, name: 'Oxford Shoes', category: 'footwear', subcategory: 'formal', price: 4500, image: 'picture/DSC03122-600x800.webp', badge: 'Premium', description: 'Classic oxford shoes', rating: 4.9, reviews: 234 },
    { id: 65, name: 'Loafers', category: 'footwear', subcategory: 'formal', price: 3800, image: 'picture/DSC03140-600x800.webp', badge: 'Popular', description: 'Elegant loafers', rating: 4.7, reviews: 198 },
    { id: 66, name: 'Derby Shoes', category: 'footwear', subcategory: 'formal', price: 4200, image: 'picture/DSC05579-scaled-600x800.webp', badge: null, description: 'Formal derby shoes', rating: 4.6, reviews: 167 },
    { id: 67, name: 'Monk-Strap Shoes', category: 'footwear', subcategory: 'formal', price: 4800, image: 'picture/DSC05604-color-600x800.webp', badge: 'Premium', description: 'Stylish monk-strap shoes', rating: 4.8, reviews: 189 },

    // FOOTWEAR - SANDALS (3)
    { id: 68, name: 'Flip-Flops', category: 'footwear', subcategory: 'sandals', price: 800, image: 'picture/jordan-nola-slide-ncqgpt.jpeg', badge: null, description: 'Casual flip-flops', rating: 4.3, reviews: 156 },
    { id: 69, name: 'Slide Sandals', category: 'footwear', subcategory: 'sandals', price: 1200, image: 'picture/jordan-deja-sandals-3mH5Np.jpeg', badge: 'Popular', description: 'Comfortable slide sandals', rating: 4.5, reviews: 198 },
    { id: 70, name: 'Gladiator Sandals', category: 'footwear', subcategory: 'sandals', price: 1800, image: 'picture/DSC05620-600x800.webp', badge: 'Trending', description: 'Stylish gladiator sandals', rating: 4.6, reviews: 145 },

    // BAGS - BACKPACKS (4)
    { id: 71, name: 'School Backpack', category: 'bags', subcategory: 'backpacks', price: 1800, image: 'picture/bag.png', badge: 'Popular', description: 'Spacious school backpack', rating: 4.6, reviews: 267 },
    { id: 72, name: 'Travel Backpack', category: 'bags', subcategory: 'backpacks', price: 3200, image: 'picture/IMR01704_5fc37d75-03d2-4380-943f-c336c88c2818.jpg', badge: 'Best Seller', description: 'Large travel backpack', rating: 4.8, reviews: 298 },
    { id: 73, name: 'Laptop Backpack', category: 'bags', subcategory: 'backpacks', price: 2500, image: 'picture/IMR03232_e5c92d8c-a287-4187-a139-bf347188e8fe.jpg', badge: 'Premium', description: 'Padded laptop backpack', rating: 4.7, reviews: 234 },
    { id: 74, name: 'Mini Backpack', category: 'bags', subcategory: 'backpacks', price: 1400, image: 'picture/IMR03260_cffa56d0-4181-4e7e-8dee-5ade605a5f0b.jpg', badge: 'Trending', description: 'Cute mini backpack', rating: 4.5, reviews: 178 },

    // BAGS - HANDBAGS (4)
    { id: 75, name: 'Tote Bag', category: 'bags', subcategory: 'handbags', price: 1500, image: 'picture/IMR04392.jpg', badge: 'Popular', description: 'Versatile tote bag', rating: 4.6, reviews: 245 },
    { id: 76, name: 'Shoulder Bag', category: 'bags', subcategory: 'handbags', price: 1800, image: 'picture/IMR04394.jpg', badge: 'Best Seller', description: 'Classic shoulder bag', rating: 4.7, reviews: 289 },
    { id: 77, name: 'Crossbody Bag', category: 'bags', subcategory: 'handbags', price: 1600, image: 'picture/IMR04438.jpg', badge: null, description: 'Convenient crossbody bag', rating: 4.5, reviews: 198 },
    { id: 78, name: 'Satchel Bag', category: 'bags', subcategory: 'handbags', price: 2200, image: 'picture/IMR04484_e1bb89ad-37f0-490b-8a6a-d3fd7f11e2b5.jpg', badge: 'Premium', description: 'Elegant satchel bag', rating: 4.8, reviews: 212 },

    // BAGS - CLUTCHES (3)
    { id: 79, name: 'Evening Clutch', category: 'bags', subcategory: 'clutches', price: 1200, image: 'picture/IMR07513.jpg', badge: 'Premium', description: 'Elegant evening clutch', rating: 4.7, reviews: 156 },
    { id: 80, name: 'Envelope Clutch', category: 'bags', subcategory: 'clutches', price: 1000, image: 'picture/DSC05637-1-600x800.webp', badge: null, description: 'Sleek envelope clutch', rating: 4.5, reviews: 123 },
    { id: 81, name: 'Box Clutch', category: 'bags', subcategory: 'clutches', price: 1400, image: 'picture/DSC05690-600x800.webp', badge: 'Trending', description: 'Structured box clutch', rating: 4.6, reviews: 134 },

    // BAGS - WALLETS (4)
    { id: 82, name: 'Bifold Wallet', category: 'bags', subcategory: 'wallets', price: 800, image: 'picture/DSC05755-2-600x800.webp', badge: 'Popular', description: 'Classic bifold wallet', rating: 4.5, reviews: 234 },
    { id: 83, name: 'Trifold Wallet', category: 'bags', subcategory: 'wallets', price: 850, image: 'picture/DSC05755-600x800.webp', badge: null, description: 'Compact trifold wallet', rating: 4.4, reviews: 178 },
    { id: 84, name: 'Cardholder', category: 'bags', subcategory: 'wallets', price: 600, image: 'picture/DSC05793-scaled-600x800.webp', badge: 'Best Seller', description: 'Minimalist cardholder', rating: 4.6, reviews: 298 },
    { id: 85, name: 'Zip-Around Wallet', category: 'bags', subcategory: 'wallets', price: 950, image: 'picture/DSC05830-1-600x800.webp', badge: null, description: 'Secure zip-around wallet', rating: 4.5, reviews: 189 },

    // JEWELRY - NECKLACES (4)
    { id: 86, name: 'Gold Chain Necklace', category: 'jewelry', subcategory: 'necklaces', price: 2500, image: 'picture/DSC05830-2-1-600x800.webp', badge: 'Premium', description: 'Elegant gold chain', rating: 4.8, reviews: 198 },
    { id: 87, name: 'Pendant Necklace', category: 'jewelry', subcategory: 'necklaces', price: 1800, image: 'picture/DSC05906-600x800.webp', badge: 'Popular', description: 'Beautiful pendant necklace', rating: 4.7, reviews: 167 },
    { id: 88, name: 'Choker Necklace', category: 'jewelry', subcategory: 'necklaces', price: 1200, image: 'picture/DSC07468-600x800.webp', badge: 'Trending', description: 'Stylish choker', rating: 4.6, reviews: 145 },
    { id: 89, name: 'Statement Necklace', category: 'jewelry', subcategory: 'necklaces', price: 2200, image: 'picture/DSC07595-600x800.webp', badge: null, description: 'Bold statement piece', rating: 4.7, reviews: 134 },

    // JEWELRY - BRACELETS (4)
    { id: 90, name: 'Bangle Bracelet', category: 'jewelry', subcategory: 'bracelets', price: 1500, image: 'picture/DSC07630-600x800.webp', badge: null, description: 'Classic bangle bracelet', rating: 4.6, reviews: 156 },
    { id: 91, name: 'Cuff Bracelet', category: 'jewelry', subcategory: 'bracelets', price: 1800, image: 'picture/DSC07696-600x800.webp', badge: 'Premium', description: 'Elegant cuff bracelet', rating: 4.7, reviews: 178 },
    { id: 92, name: 'Chain Bracelet', category: 'jewelry', subcategory: 'bracelets', price: 1400, image: 'picture/DSC08285-600x800.webp', badge: 'Popular', description: 'Delicate chain bracelet', rating: 4.5, reviews: 134 },
    { id: 93, name: 'Beaded Bracelet', category: 'jewelry', subcategory: 'bracelets', price: 900, image: 'picture/DSC08377-600x800.webp', badge: null, description: 'Handmade beaded bracelet', rating: 4.4, reviews: 112 },

    // JEWELRY - EARRINGS (4)
    { id: 94, name: 'Stud Earrings', category: 'jewelry', subcategory: 'earrings', price: 1200, image: 'picture/EF-25902-CTF-1693-600x800.webp', badge: 'Best Seller', description: 'Classic stud earrings', rating: 4.7, reviews: 267 },
    { id: 95, name: 'Hoop Earrings', category: 'jewelry', subcategory: 'earrings', price: 1400, image: 'picture/3Y2A2273-Edit-600x800.webp', badge: 'Popular', description: 'Timeless hoop earrings', rating: 4.6, reviews: 234 },
    { id: 96, name: 'Drop Earrings', category: 'jewelry', subcategory: 'earrings', price: 1600, image: 'picture/3Y2A2610-Edit-600x800.webp', badge: 'Trending', description: 'Elegant drop earrings', rating: 4.7, reviews: 198 },
    { id: 97, name: 'Chandelier Earrings', category: 'jewelry', subcategory: 'earrings', price: 2200, image: 'picture/JeansE043-600x800.webp', badge: 'Premium', description: 'Glamorous chandelier earrings', rating: 4.8, reviews: 167 },

    // JEWELRY - RINGS (3)
    { id: 98, name: 'Band Ring', category: 'jewelry', subcategory: 'rings', price: 1100, image: 'picture/JeansE692-600x800.webp', badge: null, description: 'Simple band ring', rating: 4.5, reviews: 145 },
    { id: 99, name: 'Statement Ring', category: 'jewelry', subcategory: 'rings', price: 1800, image: 'picture/JeansE694-600x800.webp', badge: 'Premium', description: 'Bold statement ring', rating: 4.7, reviews: 156 },
    { id: 100, name: 'Stackable Rings Set', category: 'jewelry', subcategory: 'rings', price: 1500, image: 'picture/JeansE695-600x800.webp', badge: 'Trending', description: 'Set of stackable rings', rating: 4.6, reviews: 178 }
];
