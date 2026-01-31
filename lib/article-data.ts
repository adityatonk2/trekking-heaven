export interface Article {
  slug: string;
  title: string;
  intro: string;
  image: string;
  publishedAt: string;
  readTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: 'top-10-treks-india',
    title: 'Top 10 Treks in India - Adventures of a Lifetime',
    intro:
      'From snow-clad Himalayan peaks to lush Western Ghats, India offers some of the world\'s finest trekking experiences. Discover our pick of the top 10 treks that every adventurer should add to their bucket list.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    publishedAt: '2025-01-15',
    readTime: '8 min read',
    content: [
      'India is a trekker\'s paradise, with trails spanning from the mighty Himalayas in the north to the verdant hills of the south. Whether you\'re a beginner or a seasoned mountaineer, there\'s a trek that matches your skill level and thirst for adventure.',
      'Our top 10 list includes classics like Kedarkantha for winter snow lovers, Har Ki Dun for valley enthusiasts, and Kuari Pass for those seeking panoramic Himalayan views. Each trek offers unique landscapes, cultural encounters, and unforgettable memories.',
      'Winter treks like Kedarkantha and Chopta Tungnath bring 360° snow views. Summer treks such as Har Ki Dun and Sar Pass treat you to alpine meadows and wildflowers. Monsoon treks in Hampta Pass reveal misty valleys and cascading waterfalls.',
      'Planning your first trek? Start with easier trails like Kedarkantha (5 days) or Chopta Tungnath (3 days). For moderate challenges, Har Ki Dun and Kuari Pass are excellent choices. Ready for the ultimate test? Consider the Everest Base Camp trek from Nepal or our Black Peak Kalanag expedition.',
      'At Trekkers Heaven, we guide thousands of trekkers every year. Our expert local guides, small batch sizes, and safety-first approach ensure you have the adventure of a lifetime. Ready to explore? Browse our treks and find your perfect trail.',
    ],
  },
  {
    slug: 'trekking-uttarakhand-hidden-trails',
    title: 'Trekking in Uttarakhand - Discover the Hidden Himalayan Trails',
    intro:
      'Uttarakhand is home to some of India\'s most spectacular and lesser-known trekking routes. Beyond the popular trails, hidden valleys and remote villages await those willing to venture off the beaten path.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    publishedAt: '2025-01-10',
    readTime: '6 min read',
    content: [
      'Uttarakhand, often called the "Land of the Gods," is a trekker\'s dream. From Dehradun and Rishikesh as gateways, the state offers trails that wind through ancient forests, alpine meadows, and snow-capped peaks.',
      'While Kedarkantha and Har Ki Dun attract many trekkers, the hidden gems include Phulara Ridge—a unique ridge walk with 360° views—and the Bali Pass trek, which connects Har Ki Dun to Yamunotri through stunning glacier landscapes.',
      'Village tours in Sankri, Osla, and Sour offer cultural immersion. Walk through centuries-old hamlets, meet local communities, and experience the warmth of Himalayan hospitality. These gentle tours are perfect for families and first-time visitors.',
      'The best time to trek in Uttarakhand depends on your preference: winter (Dec–Feb) for snow, summer (May–July) for meadows and wildflowers, monsoon (July–Aug) for lush greenery and fewer crowds, and autumn (Sep–Nov) for clear skies and comfortable temperatures.',
      'Based in Dehradun, Trekkers Heaven has deep roots in Uttarakhand\'s trekking scene. We know these trails intimately and are committed to sustainable, responsible trekking that benefits local communities.',
    ],
  },
  {
    slug: 'winter-trekking-beginners-guide',
    title: 'Winter Trekking in the Himalayas - A Beginner\'s Guide',
    intro:
      'Your first winter trek doesn\'t have to be intimidating. With the right preparation, gear, and trail choice, you can enjoy snow-clad peaks and crisp mountain air even as a beginner.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    publishedAt: '2025-01-05',
    readTime: '7 min read',
    content: [
      'Winter trekking in the Himalayas is a magical experience. Snow-covered trails, 360° mountain views, and fewer crowds make it a favourite season for many. But if you\'re new to trekking, the cold and snow can seem daunting.',
      'Start with beginner-friendly winter treks. Kedarkantha is our top recommendation: a 5-day trek with a summit day that rewards you with panoramic views. Chopta Tungnath (3 days) combines spirituality with scenic beauty. Dayara Bugyal offers expansive snowfields with gentle terrain.',
      'Layering is key. Wear moisture-wicking base layers, insulating mid-layers, and a waterproof outer shell. Invest in good trekking shoes with grip suitable for snow. Don\'t forget gloves, a warm cap, and sunglasses for snow glare.',
      'Winter treks run from December to February. January is often the peak of snowfall, while February brings clearer skies. Our guided treks include all camping gear, so you don\'t need to carry heavy equipment.',
      'Join a small group led by experienced guides. At Trekkers Heaven, we keep batch sizes small, provide hot meals at camp, and ensure your safety at every step. Your first winter trek will be unforgettable—and likely not your last.',
    ],
  },
  {
    slug: 'everest-base-camp-preparation',
    title: 'Everest Base Camp Trek - How to Prepare for the Adventure of a Lifetime',
    intro:
      'The Everest Base Camp trek is on every trekker\'s bucket list. Here\'s a practical guide to physical preparation, gear, acclimatization, and what to expect on this iconic 13-day journey.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
    publishedAt: '2024-12-28',
    readTime: '10 min read',
    content: [
      'The trek to Everest Base Camp (EBC) is one of the world\'s most iconic adventures. Walking in the footsteps of legendary climbers, through Sherpa villages and high-altitude terrain, is an experience that stays with you forever.',
      'Physical preparation is essential. Aim for 3–6 months of training: cardio (running, cycling), strength (legs and core), and hiking with a loaded backpack. The trek involves 6–7 hours of walking per day at altitudes up to 5,364m.',
      'Acclimatization is built into good itineraries. Our 13-day EBC trek includes rest days in Namche Bazaar and Dingboche to help your body adapt. Never rush—altitude sickness is a real risk and can be avoided with proper pacing.',
      'Pack smart: layered clothing, a warm sleeping bag (-15°C rated), good trekking boots, and a daypack. Most operators (including us) provide porters for duffel bags, so you only carry essentials during the day.',
      'Best seasons are pre-monsoon (March–May) and post-monsoon (September–November). Clear skies, stable weather, and vibrant trails make these months ideal. Ready to take on EBC? We run guided groups with experienced Sherpa support—your adventure of a lifetime awaits.',
    ],
  },
  {
    slug: 'kedarkantha-trek-complete-guide',
    title: 'Kedarkantha Trek - Complete Guide for First-Time Trekkers',
    intro:
      'Kedarkantha is one of India\'s most popular winter treks, perfect for beginners. Here\'s everything you need to know: itinerary, best season, gear list, and what makes this trek special.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    publishedAt: '2024-12-20',
    readTime: '7 min read',
    content: [
      'Kedarkantha, at 3,850m, is one of the best winter treks in India. Its summit offers 360° views of snow-clad peaks including Swargarohini, Bandarpoonch, and Kalanag. What makes it ideal for beginners? A well-defined trail, manageable altitude, and stunning views at every step.',
      'The trek typically runs 5–6 days ex-Dehradun. You\'ll pass through Govind National Park, camp at Juda ka Talab (a frozen lake), and summit before dawn for sunrise views. The trail is moderate with gradual ascents and clear paths.',
      'December to February is peak season. Snow is at its best in January. March brings clearer skies but less snow. Our guided treks include all camping gear, meals, and permits—you just need to bring personal items and a good attitude.',
      'Essential gear: insulated trekking shoes, layered clothing (base, mid, shell), warm sleeping bag (-10°C rated), gloves, cap, and sunglasses. We provide tents, sleeping mats, and all group equipment.',
      'At Trekkers Heaven, Kedarkantha is one of our most loved winter treks. Small batches, experienced guides, and hot meals at camp make it a comfortable yet adventurous introduction to Himalayan trekking.',
    ],
  },
  {
    slug: 'essential-trekking-gear-checklist',
    title: 'Essential Trekking Gear - A Complete Checklist for Himalayan Treks',
    intro:
      'Packing for a Himalayan trek? Here\'s a practical checklist of what to bring—and what to leave behind. From footwear to first aid, we cover everything you need for a safe, comfortable adventure.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
    publishedAt: '2024-12-15',
    readTime: '6 min read',
    content: [
      'The right gear can make or break your trek. Too much and you\'re weighed down; too little and you\'re cold or uncomfortable. Here\'s a balanced checklist based on years of guiding trekkers in the Himalayas.',
      'Footwear is critical. Invest in waterproof trekking shoes with good ankle support and grip. Break them in before your trek. For winter treks, insulated boots or gaiters help in snow. Avoid new shoes on the trail.',
      'Clothing: layer in threes—base (moisture-wicking), mid (insulation), shell (waterproof). Avoid cotton; it stays wet. Quick-dry t-shirts, fleece, and a rain jacket are essentials. For winter, add down jacket and thermal innerwear.',
      'Other essentials: head torch, sun protection (hat, sunglasses, sunscreen), first aid kit, water bottles or hydration bladder, trekking poles (optional but helpful), and dry bags to keep electronics and clothes dry.',
      'Most organised treks provide tents, sleeping mats, and meals. Check with your operator. At Trekkers Heaven, we provide all camping gear—you bring personal items and clothing. When in doubt, pack less; you can always layer up.',
    ],
  },
  {
    slug: 'har-ki-dun-valley-of-gods',
    title: 'Har Ki Dun - Valley of the Gods, A Timeless Himalayan Trek',
    intro:
      'Har Ki Dun is a timeless valley trek in Uttarakhand, often called the "Valley of Gods." Discover ancient villages, alpine meadows, and the mythology that surrounds this stunning trail.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80',
    publishedAt: '2024-12-10',
    readTime: '6 min read',
    content: [
      'Har Ki Dun, in the Garhwal Himalayas, is a cradle-shaped valley at 3,566m. Legend says the Pandavas ascended to heaven from here. Whether you believe the mythology or not, the valley\'s beauty is undeniable.',
      'The 7-day trek ex-Dehradun takes you through ancient villages like Osla and Sankri, past lush meadows, and into a valley surrounded by snow peaks. Summer (May–July) brings wildflowers; autumn (Sep–Nov) offers clear skies and golden landscapes.',
      'Cultural immersion is a highlight. The villages of Osla and Sankri have wooden houses, traditional dress, and warm hospitality. A village tour extension lets you spend more time with local communities.',
      'The trail is moderate—suitable for fit beginners. You\'ll walk 5–7 hours per day with gradual ascents. Camping is in meadows beside streams. Our guides share local stories and ensure you experience the valley at a relaxed pace.',
      'Har Ki Dun remains one of our favourite summer and autumn treks. It\'s less crowded than some popular trails, yet equally rewarding. Book early—batch sizes are limited to preserve the experience.',
    ],
  },
  {
    slug: 'leh-ladakh-bike-tour-guide',
    title: 'Leh-Ladakh Bike Tour - Riding Through the Roof of the World',
    intro:
      'A motorcycle tour through Leh-Ladakh is the adventure of a lifetime. Here\'s what to expect: routes, best season, permits, and tips for riding on the world\'s highest motorable roads.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    publishedAt: '2024-12-05',
    readTime: '8 min read',
    content: [
      'Leh-Ladakh, often called the "Land of High Passes," is a biker\'s paradise. Khardung La (5,359m), Umling La (5,798m), and numerous other passes offer riding experiences unlike anywhere else on earth.',
      'The classic Manali–Leh Highway opens June–September. The Srinagar–Leh route is another option. Our 12-day Leh-Ladakh Bike Expedition covers Nubra Valley, Pangong Lake, Tso Moriri, and key passes with support vehicles and experienced ride leaders.',
      'Acclimatization is crucial. We spend 2 days in Leh before riding to avoid altitude sickness. Permits for restricted areas (Nubra, Pangong, Tso Moriri) are arranged by us. You focus on the ride.',
      'Ride your own bike or rent in Leh. Royal Enfield Himalayan and Classic 350 are popular. Bring riding gear: helmet, jacket, gloves, and proper boots. The weather can change quickly—layer up.',
      'Best months: June to September. July–August see the most riders but also the best weather. September offers clearer skies and fewer crowds. Ready for the ride of your life? Our guided bike tours handle logistics so you can soak in every kilometre.',
    ],
  },
  {
    slug: 'monsoon-trekking-himalayas',
    title: 'Monsoon Trekking in the Himalayas - Mist, Meadows & Fewer Crowds',
    intro:
      'Monsoon (July–August) transforms the Himalayas into a green paradise. Lush meadows, blooming rhododendrons, and misty valleys make it a magical—and often overlooked—season for trekking.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80',
    publishedAt: '2024-11-28',
    readTime: '5 min read',
    content: [
      'Monsoon trekking isn\'t for everyone—but for those who embrace rain and mist, it\'s unforgettable. The Himalayas turn emerald green. Waterfalls cascade everywhere. Rhododendrons and wildflowers bloom. And crowds thin out significantly.',
      'Choose trails wisely. Rain-shadow regions like Spiti, Ladakh, and parts of Himachal see less rain. Hampta Pass, Bhrigu Lake, and Sar Pass are monsoon-friendly. Avoid Uttarakhand\'s heavy-rain zones during peak July.',
      'Waterproof everything: rain jacket, rain cover for your backpack, dry bags for clothes and electronics. Quick-dry clothing helps. Trekking poles add stability on slippery trails.',
      'Expect leeches in forest sections—long socks and salt help. Trails can be muddy; sturdy shoes with good grip are essential. Our monsoon batches are smaller, and we plan flexible itineraries for weather.',
      'If you seek solitude and raw natural beauty, monsoon trekking is for you. At Trekkers Heaven, we run select monsoon treks with experienced guides who know the trails in all conditions. The mountains never look more alive.',
    ],
  },
  {
    slug: 'annapurna-base-camp-vs-everest',
    title: 'Annapurna Base Camp vs Everest Base Camp - Which Trek to Choose?',
    intro:
      'Both ABC and EBC are bucket-list treks in Nepal. But they offer different experiences. Here\'s a practical comparison to help you choose the right one for your fitness, timeline, and style.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    publishedAt: '2024-11-20',
    readTime: '7 min read',
    content: [
      'Everest Base Camp (5,364m) is iconic—the trail to the world\'s highest mountain. Annapurna Base Camp (4,130m) is lower but no less spectacular, with 360° views of Annapurna and Machapuchare in a natural amphitheatre.',
      'EBC is longer (12–14 days) and higher. You need better acclimatization and fitness. The terrain is more rugged, the atmosphere more "expedition." ABC is 8–10 days, slightly easier, with tea-house stays and lush forests before the snow.',
      'EBC attracts more trekkers; the trail is busier. ABC sees fewer crowds, especially in shoulder seasons. Both offer Sherpa/Nepali culture, but ABC includes Gurung villages and more varied landscapes—rice terraces, rhododendron forests, alpine meadows.',
      'Cost-wise, EBC is typically more expensive (flights to Lukla, permits, longer duration). ABC can be done from Pokhara with a drive to the trailhead. Both are achievable for fit beginners with proper preparation.',
      'Can\'t choose? Do both—many trekkers do ABC first as a warm-up, then EBC. At Trekkers Heaven, we run guided treks to both. Tell us your fitness, timeline, and preference, and we\'ll help you decide.',
    ],
  },
  {
    slug: 'village-tours-himalayan-culture',
    title: 'Village Tours in the Himalayas - Culture, Trails & Community',
    intro:
      'Beyond summit treks, Himalayan village tours offer gentle walks, cultural immersion, and authentic encounters with mountain communities. Perfect for families and first-time visitors.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80',
    publishedAt: '2024-11-15',
    readTime: '5 min read',
    content: [
      'Village tours are a different kind of Himalayan adventure. Instead of pushing to summits, you walk through ancient hamlets, meet local families, and experience daily life in the mountains. It\'s slower, gentler, and deeply rewarding.',
      'Our Osla Village Tour (10 days ex-Dehradun) takes you to one of Uttarakhand\'s most remote villages. Sankri-Sour & Jokhal Village (4 days) is shorter, ideal for families. Both include homestays or camping, local meals, and guided walks.',
      'You\'ll learn about traditional architecture, farming, and folklore. Many villages have wooden temples, stone houses, and customs unchanged for generations. The pace is relaxed—3–4 hours of walking per day with plenty of rest.',
      'Best season: April–June and September–November. Winter can be cold; monsoon can be wet. Spring brings wildflowers; autumn brings harvest festivals and clear skies.',
      'Village tours support local communities directly. We work with village committees to ensure fair wages and minimal environmental impact. It\'s trekking with purpose—and a great introduction to the Himalayas for those who prefer culture over climbs.',
    ],
  },
  {
    slug: 'kuari-pass-curzon-trail',
    title: 'Kuari Pass - The Curzon Trail, Views of Nanda Devi',
    intro:
      'Kuari Pass is known as the "Curzon Trail" after the British Viceroy who trekked here. Today it remains one of India\'s most scenic treks, with unmatched views of Nanda Devi and the Garhwal giants.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    publishedAt: '2024-11-10',
    readTime: '6 min read',
    content: [
      'Kuari Pass (3,646m) offers some of the finest mountain vistas in Uttarakhand. Nanda Devi (7,816m), India\'s highest peak entirely within its borders, dominates the skyline. Dronagiri, Kamet, and Hathi Ghoda Parbat fill the horizon.',
      'The 6-day trek ex-Dehradun passes through dense forests, meadows, and high ridges. Winter (Dec–Feb) brings snow; summer (May–June) brings wildflowers. Both seasons are spectacular—winter for snowscapes, summer for greenery.',
      'The trail is moderate—suitable for fit beginners with some trekking experience. You\'ll walk 5–6 hours per day. Camping is in meadows with stunning views. Our guides share the history of the Curzon Trail and the region\'s mountaineering legacy.',
      'Lord Curzon trekked here in 1905. The route hasn\'t changed much—it\'s still a classic. We keep batch sizes small to preserve the experience. Book early for winter slots; they fill fast.',
      'Kuari Pass is a Trekkers Heaven favourite. Whether you choose winter snow or summer meadows, you\'ll leave with memories—and photos—that last a lifetime. Ready for Nanda Devi\'s embrace?',
    ],
  },
  {
    slug: 'altitude-sickness-prevention-tips',
    title: 'Altitude Sickness - Prevention, Symptoms & What to Do',
    intro:
      'Altitude sickness can affect anyone above 2,500m. Here\'s what you need to know: how to prevent it, recognise symptoms, and respond if you or a fellow trekker is affected.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
    publishedAt: '2024-11-05',
    readTime: '6 min read',
    content: [
      'Altitude sickness (Acute Mountain Sickness, AMS) occurs when you ascend too quickly. Your body needs time to adapt to lower oxygen. Symptoms include headache, nausea, fatigue, dizziness, and loss of appetite. In severe cases, it can progress to HACE or HAPE—both life-threatening.',
      'Prevention is key. Ascend gradually: don\'t gain more than 300–500m of sleeping altitude per day above 3,000m. Stay hydrated. Avoid alcohol and smoking. Some trekkers use Diamox (acetazolamide) after consulting a doctor—it helps acclimatization but isn\'t a substitute for slow ascent.',
      'Our itineraries build in acclimatization days. On EBC, we rest in Namche and Dingboche. On Indian treks, we plan gradual gains. Listen to your body—if you feel unwell, don\'t push. Descend if symptoms worsen.',
      'Recognise warning signs: severe headache that doesn\'t improve with rest, vomiting, confusion, difficulty walking. If someone shows these, descend immediately. Altitude sickness improves with descent—don\'t wait.',
      'At Trekkers Heaven, our guides are trained to spot early symptoms and respond. We carry oximeters and first-aid kits. Your safety is our priority. Trek smart, trek slow, and enjoy the mountains.',
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
