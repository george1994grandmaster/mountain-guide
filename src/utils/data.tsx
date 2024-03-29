import harness from '../assets/img/harness.png';
import chalkbag from '../assets/img/chalkbag.png';
import carabiner from '../assets/img/carabiner.png';
import rope from '../assets/img/rope.png';
import quickDraw from '../assets/img/quickDraw.png';
import shoes from '../assets/img/shoes.png';
import crampons from '../assets/img/crampons.png';
import belayDevice from '../assets/img/belayDevice.png';
import alpiner from '../assets/img/alpiner.png';
import helmet from '../assets/img/helmet.png';
import landshaft from '../assets/img/landshaft.png';
import route from '../assets/img/route.png';
import ecosystem from '../assets/img/ecosystem.png';
import mountWithney from '../assets/img/mountWithney.png';
import mountKarakoram from '../assets/img/karakoram.png';
import mountCook from '../assets/img/mountCook.png';
import mountMatterhorn from '../assets/img/mountMatterhorn.png';
import mountMoncBlanc from '../assets/img/mountMoncBlanc.png';
import mountKilimanjaro from '../assets/img/mountKilimanjaro.png';
import mountAconcagua from '../assets/img/mountAconcagua.png';
import mountElbrus from '../assets/img/mountElbrus.png';
import news1 from '../assets/img/news1.png';
import news2 from '../assets/img/news2.png';
import news3 from '../assets/img/news3.png';
import news4 from '../assets/img/news4.png';
import news5 from '../assets/img/news5.png';
import news6 from '../assets/img/news6.png';
import news7 from '../assets/img/news7.png';
import news8 from '../assets/img/news8.png';
import news9 from '../assets/img/news9.png';
import news10 from '../assets/img/news10.png';
import news11 from '../assets/img/news11.png';
import news12 from '../assets/img/news12.png';
import certificateLayout1 from '../assets/img/certificateLayout1.png';
import certificateLayout2 from '../assets/img/certificateLayout2.png';
import gallery1 from '../assets/img/gallery1.png';
import gallery2 from '../assets/img/gallery2.png';
import gallery3 from '../assets/img/gallery3.png';
import gallery4 from '../assets/img/gallery4.png';
import gallery5 from '../assets/img/gallery5.png';
import gallery6 from '../assets/img/gallery6.png';
import gallery7 from '../assets/img/gallery7.png';
import gallery8 from '../assets/img/gallery8.png';
import gallery9 from '../assets/img/gallery9.png';
import gallery10 from '../assets/img/gallery10.png';
import gallery11 from '../assets/img/gallery11.png';
import gallery12 from '../assets/img/gallery12.png';
import gallery13 from '../assets/img/gallery13.png';
import gallery14 from '../assets/img/gallery14.png';
import gallery15 from '../assets/img/gallery15.png';
import gallery16 from '../assets/img/gallery16.png';
import gallery17 from '../assets/img/gallery17.png';
import gallery18 from '../assets/img/gallery18.png';
import gallery19 from '../assets/img/gallery19.png';
import gallery20 from '../assets/img/gallery20.png';
import gallery21 from '../assets/img/gallery21.png';
import gallery22 from '../assets/img/gallery22.png';
import {Facebook} from '../components/svg-format-components';
import {Instagram} from '../components/svg-format-components';
import {Phone} from '../components/svg-format-components';
import {Email} from '../components/svg-format-components';
import homeSlide1 from '../assets/img/homeSlide1.png';
import homeSlide2 from '../assets/img/homeSlide2.png';
import homeSlide3 from '../assets/img/homeSlide3.png';
import homeSlide4 from '../assets/img/homeSlide4.png';
import becomeBlock1 from '../assets/img/becomeBlock1.png';
import becomeBlock2 from '../assets/img/becomeBlock2.png';
import becomeBlock3 from '../assets/img/becomeBlock3.png';
import becomeBlock4 from '../assets/img/becomeBlock4.png';
import courseSlide1 from '../assets/img/courseSlide1.png';
import courseSlide2 from '../assets/img/courseSlide2.png';
import courseSlide3 from '../assets/img/courseSlide3.png';
import courseSlide4 from '../assets/img/courseSlide4.png';

interface headerDatas {
  path: string;
  label: string;
}

export  const navbarLinksData: headerDatas[] = [
  { path: '/story', label: 'OUR STORY' },
  { path: '/guide-marathon', label: 'GUIDE MARATHON' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/become-guide', label: 'BECOME A GUIDE' },
  { path: '/blog-media', label: 'MEDIA' },
  { path: '/contact', label: 'GET IN TOUCH' },
];

export  const mobileNavbarLinksData: headerDatas[] = [
  { path: '/', label: 'HOME' },
  { path: '/story', label: 'OUR STORY' },
  { path: '/guide-marathon', label: 'GUIDE MARATHON' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/become-guide', label: 'BECOME A GUIDE' },
  { path: '/blog-media', label: 'MEDIA' },
  { path: '/contact', label: 'GET IN TOUCH' },
];

interface footerDatas {
  path: string;
  label: string;
  icon?: any;
}

export const footerLinksData: footerDatas[] = [
  { path: '#', label: 'TERMS & CONDITIONS' },
  { path: '#', label: 'PROVACY POLICY' },
  { path: '#', icon: <Facebook />, label: 'FACEBOOK' },
  { path: '#', icon: <Instagram/>, label: 'INSTAGRAM' },
  { path: '#', icon: <Phone/>, label: 'PHONE' },
  { path: '#', icon:  <Email/>, label: 'EMAIL' },
];

interface homeSliderImages {
  id: number;
  image: string;
}

export const homeSliderBannerimages: homeSliderImages[] = [
  { id: 1, image: homeSlide1 },
  { id: 2, image:  homeSlide2 },
  { id: 3, image:  homeSlide3 },
  { id: 4, image:  homeSlide4 },
];

interface becomeBlocks {
  id: number;
  title: string;
  text: string;
  image?: string;
}

export const mainBecomeBlocks: becomeBlocks[] = [
  {
    id: 1,
    title: "Embark on a Journey of Knowledge",
    text: "Learn the essential skills and techniques required to become a knowledgeable mountain guide. Our comprehensive training program covers navigation, safety protocols, weather analysis, and more, empowering you to lead expeditions with confidence.",
    image: becomeBlock1, 
  },
  {
    id: 2,
    title: "Master the Art of Mountaineering",
    text: "Gain expertise in the art of mountaineering and conquer the world's most breathtaking peaks. Our experienced instructors will teach you advanced climbing techniques, rope management, ice climbing, and other essential skills needed to guide others through challenging terrain.",
    image: becomeBlock2, 
  },
  {
    id: 3,
    title: "Navigate with Precision",
    text: "Develop your navigation skills to guide fellow adventurers through rugged mountain landscapes. Learn how to read maps, use compasses, and make critical decisions in changing environments. Become a trusted navigator capable of leading others to their destinations safely.",
    image: becomeBlock3, 
  },
  {
    id: 4,
    title: "Share Your Passion and Inspire",
    text: "As a mountain guide, you have the unique opportunity to inspire others with your love for the mountains. Teach aspiring climbers about the importance of conservation, the rich history of the mountains, and the thrill of overcoming challenges. Make a lasting impact on the next generation of adventurers.",
    image: becomeBlock4, 
  },
];

interface gear {
  image: string;
  text: string
}

export const gears: gear[] = [
  { image: harness, text: "Harness" },
  { image: chalkbag, text: "Chalkbag" },
  { image: quickDraw, text: "QuickDraw" },
  { image: rope, text: "Rope" },
  { image: carabiner, text: "Carabiner" },
  { image: shoes, text: "Shoes" },
  { image: belayDevice, text: "BelayDevice" },
  { image: helmet, text: "Helmet" },
  { image: crampons, text: "Crampons" },
];


interface slide {
  id: number;
  title: string;
  text: string;
  image: string;
  date: string
}

export const blogMediaSlides: slide[] = [
  {
    id: 1,
    title: "Essential Gear for Mountain Adventurers",
    text: "Discover the must-have gear and equipment for mountain exploration. From hiking boots to navigation tools, ensure you're well-prepared for your next adventure in the mountains. Additionally, don't forget to pack adequate layers of clothing to adapt to changing weather conditions and a reliable headlamp to illuminate your path during nighttime expeditions.",
    image: alpiner,
    date: "15 september, 2023"
  },
  {
    id: 2,
    title: "Capturing Breathtaking Mountain Landscapes",
    text: "Learn the art of photographing stunning mountain landscapes. Gain insights into composition, lighting, and post-processing techniques to capture the beauty of mountains in your blog media. Master the craft of photographing breathtaking mountain landscapes, using composition, lighting, and post-processing techniques to create visually stunning images that will leave a lasting impression on your blog readers",
    image: landshaft,
    date: "15 september, 2023"
  },
  {
    id: 3,
    title: "Navigating Challenging Terrain: Tips for Mountain Hikers",
    text: "Explore essential tips and techniques for hiking in challenging mountain terrains. From route planning to safety precautions, enhance your mountain hiking skills and share valuable insights with your readers. Embark on thrilling hikes, conquer challenging trails, and inspire your readers with your mountain adventure stories",
    image: route,
    date: "15 september, 2023"
  },
  {
    id: 4,
    title: "Exploring Alpine Flora and Fauna",
    text: "Delve into the fascinating world of alpine flora and fauna. Learn about unique plant species, wildlife encounters, and conservation efforts in mountain ecosystems to enrich your mountain guide blog. Discover the delicate balance of nature in these high-altitude environments and gain a deeper appreciation for the intricate connections between the living organisms and their habitat",
    image: ecosystem,
    date: "15 september, 2023"
  },
];

interface overlayTextItems {
  id: number;
  optionClass: string;
  title: string;
  text: string;
}

export const overlayText: overlayTextItems[] = [
  {
    id: 1,
    optionClass: "mission-block",
    title: "OUR MISSION",
    text:  "our mission is to provide exceptional mountain guiding services and unforgettable experiences for adventurers of all levels. We are dedicated to ensuring the safety, enjoyment, and growth of our clients as they explore the wonders of the mountains Through our expert guidance, we aim to inspire a love for the outdoors, instill confidence in climbers, and help them achieve their mountain goals. With a strong emphasis on professionalism, knowledge, and personalized attention, we create tailored experiences that cater to individual aspirations and abilities. We prioritize safety above all else, adhering to strict industry standards and utilizing the latest techniques and equipment. "
  },
  {
    id: 2,
    optionClass: "partners-block",
    title: "MAIN PARTNERS",
    text: "We are proud to collaborate with esteemed partners who share our passion for mountain exploration and outdoor experiences. These partnerships enhance our services and provide exceptional opportunities for unforgettable mountain adventures. Our longstanding partnership provides top-of-the-line equipment and gear, ensuring safety and performance in the mountains. Adventure Travel Agency: Our collaboration ensures seamless travel arrangements and logistics, allowing clients to focus on their adventure. Environmental Conservation Foundation: Our partnership contributes to environmental conservation efforts and raises awareness about preserving the fragile mountain ecosystems."
  },
];

interface mountSlides {
  id: number;
  image: string;
  title: string;
  text: string;
}

export const mountainSlider: mountSlides[] = [
  {
    id: 1,
    image: mountWithney,
    title: "Conquering the Tallest Peak in the United States - Mount Whitney",
    text: "Embark on an awe-inspiring journey to conquer the towering heights of Mount Whitney, located in the United States."
  },

  {
    id: 2,
    image: mountMatterhorn,
    title: "Conquering the Iconic Matterhorn in the Swiss Alps",
    text: "Challenge yourself to conquer the iconic Matterhorn, an emblem of the Swiss Alps and a symbol of mountaineering"
  },
    
  {
    id: 3,
    image: mountKarakoram,
    title: "Conquering the Mighty Karakoram Range",
    text :  "Embark on a daring expedition to conquer the formidable peaks of the Karakoram Range, spanning Pakistan, India, and China."
  },

  {
    id: 4,
    image: mountCook,
    title: "Conquering the Magnificent Mount Cook in New Zealand",
    text:  "Experience the thrill of conquering the majestic heights of Mount Cook, the highest peak in New Zealand.",
  },

  {
    id: 5,
    image: mountMoncBlanc,
    title: "Conquering the Majestic Mont Blanc in the French Alps",
    text: "Embark on an unforgettable journey to conquer the majestic heights of Mont Blanc, the highest peak in the Alps"
  },
  
  {
    id: 6,
    image: mountKilimanjaro,
    title: "Conquering the Roof of Africa - Mount Kilimanjaro",
    text: "Embark on an extraordinary adventure to conquer the legendary Mount Kilimanjaro, the highest peak in Africa"
  },
  
  {
    id: 7,
    image: mountAconcagua,
    title: "Conquering the Majestic Aconcagua in the Andes",
    text: "Take on the ultimate challenge of conquering the towering heights of Aconcagua, the highest peak in the Andes"
  },

  {
    id: 8,
    image: mountElbrus,
    title: "Conquering the Mighty Mount Elbrus in Russia",
    text: "Embark on an epic expedition to conquer the mighty heights of Mount Elbrus, the highest peak in Europe"
  },
];

interface marathonTitle {
  title: string
}

export const marathonTitles: marathonTitle[] = [
  {title: "EXPLORE"},
  {title: "EXPEDITIONS"},
  {title: "CHALLENGE"},
  {title: "SUMMIT"}
];

interface accord {
  question: string;
  answer: string;
}

export const accordion: accord[] = [
  {
    question: "How experienced are the marathon mountain guides?",
    answer: "Our marathon mountain guides are highly experienced and have extensive knowledge of the local terrain. They have undergone specialized training and have a deep understanding of the challenges and requirements of marathon-level hiking and running."
  },

  {
    question: "What is the typical duration of a marathon mountain guiding session?",
    answer: "The duration of a marathon mountain guiding session typically varies depending on the specific route and individual capabilities. On average, it can range from 4 to 8 hours, considering the distance, elevation gain, and desired pace."
  }, 

  {
    question: "What safety measures do the marathon guides have in place?",
    answer: "Our marathon guides prioritize safety and adhere to strict safety protocols. They are trained in wilderness first aid and carry essential safety equipment such as communication devices, first aid kits, and emergency supplies. They also closely monitor weather conditions and adjust plans accordingly."
  },

  {
    question: "Are there any specific requirements or prerequisites for joining a marathon mountain guiding session?",
    answer: "Participants should have a basic level of fitness and endurance to undertake a marathon-level mountain guiding session. It is also recommended to have some prior hiking or running experience. Specific requirements and prerequisites may vary based on the difficulty level and technicality of the route."
  },

  {
    question: "How much does it cost to hire a marathon mountain guide?",
    answer: "The cost of hiring a marathon mountain guide can vary based on factors such as the duration of the session, the expertise of the guide, and any additional services provided. It is best to contact us directly to inquire about current pricing and package options."
  },

  {
    question: "What kind of equipment should participants bring for a marathon mountain guiding session?",
    answer: "Participants should bring appropriate hiking or trail running gear, including sturdy footwear, weather-appropriate clothing, a backpack with essentials (water, snacks, extra layers), a headlamp, a map or GPS device, and a personal first aid kit. Our guides can provide a detailed gear list based on the specific requirements of the session."
  },

  {
    question: "Can marathon mountain guides accommodate different skill levels and fitness levels?",
    answer: "Yes, our marathon mountain guides can accommodate various skill and fitness levels. They are skilled at adapting the pace and difficulty level of the session to meet the needs and abilities of the participants. Whether you are a seasoned trail runner or a recreational hiker, our guides will strive to provide a tailored experience for you."
  }
];

interface accordTitle {
  title: string;
}

export const accordionMainTitle: accordTitle[] = [
  {
    title: "Frequently",
  },

  {
    title: "Asked",
  },

  {
    title: "Questions"
  },
]

interface newsCardsItems {
  id: number;
  image: string;
  title: string;
  text: string;
  completeText: string;
}

export const newsCards: newsCardsItems[] = [
  {
    id: 1,
    image: news1,
    title: "Alpine Marathon Unveils New Eco-Friendly Initiatives: Preserving the Mountain Playground",
    text: "In a groundbreaking move, the Alpine Marathon introduces innovative eco-friendly initiatives. From biodegradable race bibs to zero-waste aid stations, this event sets a new standard for sustainable mountain racing. With a commitment to minimizing environmental impact, the Alpine Marathon aims to preserve the pristine beauty of the alpine environment for future generations",
    completeText: "In a groundbreaking move aimed at preserving the pristine beauty of the alpine environment, the Alpine Marathon introduces a series of innovative eco-friendly initiatives. From the use of biodegradable race bibs to the establishment of zero-waste aid stations, this event sets a new standard for sustainable mountain racing. By minimizing its environmental impact, the Alpine Marathon is committed to ensuring that future generations can continue to revel in the awe-inspiring beauty of the mountains while participating in an unforgettable race experience."
  },

  {
    id: 2,
    image: news2,
    title: " Alpine Marathon Celebrates Milestone Anniversary: A Decade of Mountain Running Excellence",
    text: "It's a milestone year for the Alpine Marathon as it celebrates a decade of unforgettable alpine racing. This prestigious event has become synonymous with challenging trails, breathtaking views, and a sense of camaraderie among participants. Join the celebration and be part of the legacy that has inspired countless athletes to conquer the mountains.",
    completeText: "Get ready to celebrate as the Alpine Marathon marks a momentous milestone, commemorating a decade of exhilarating alpine racing. For ten extraordinary years, this iconic event has pushed the boundaries of endurance, challenged participants to conquer rugged trails, and rewarded them with breathtaking views. Join the festivities and be part of the legacy that has inspired countless athletes to embrace the spirit of adventure and triumph over the mountains."
  },

  {
    id: 3,
    image: news3,
    title: "Alpinists Conquer New Heights at Alpine Marathon Vertical Challenge",
    text: "The Alpine Marathon Vertical Challenge brings together fearless alpinists for an extraordinary mountain adventure. Scaling steep ascents, navigating exposed ridgelines, and conquering technical terrain, these athletes push the limits of human endurance. Witness their triumphs and be inspired by their remarkable feats of alpine athleticism and sheer determination.",
    completeText: "The Alpine Marathon goes beyond the realms of a mere race; it serves as a vibrant celebration of the rich cultural heritage found within alpine communities. Through collaborations with local organizations, this event provides an immersive experience, inviting runners and spectators to explore the unique traditions, savor the culinary delights, and immerse themselves in the warm hospitality of the mountain regions. Prepare for an extraordinary journey that not only tests your physical endurance but also exposes you to the vibrant tapestry of the alpine culture."
  },

  {
    id: 4,
    image: news4,
    title: "Alpine Marathon Engages Local Communities: Promoting Cultural Exchange in Mountain Regions",
    text: "The Alpine Marathon is not just a race; it's a catalyst for cultural exchange and community engagement. By partnering with local organizations, this event celebrates the unique traditions, heritage, and cuisine of alpine communities. Runners and spectators alike have the opportunity to immerse themselves in the rich culture of these mountain regions.",
    completeText: "The Alpine Marathon calls out to the daring souls who seek to conquer the ultimate mountain challenge. Brace yourself for an awe-inspiring adventure that will test your limits and ignite your spirit of exploration. Navigate treacherous trails, scale imposing ascents, and marvel at the breathtaking beauty of the alpine landscape. With every step, you'll push beyond your perceived boundaries, discover your inner strength, and experience an unparalleled sense of accomplishment. Embrace the Alpine Marathon as your personal journey to conquer the mountains and unleash your true potential."
  },

  {
    id: 5,
    image: news5,
    title: "Spectacular Sunrise Start for Alpine Marathon: A Picture-Perfect Beginning",
    text: "The Alpine Marathon starts in awe-inspiring fashion with a breathtaking sunrise send-off. As dawn breaks over the majestic alpine peaks, runners embark on an unforgettable journey through nature's masterpiece. The stunning colors, crisp mountain air, and sense of anticipation create a truly magical atmosphere for the start of this iconic race.",
    completeText: "Prepare to be mesmerized as the Alpine Marathon commences with an epic start that captures the essence of adventure in the alpine wonderland. As the first rays of dawn break over the majestic peaks, participants embark on a thrilling journey through nature's masterpiece. The stunning hues of the sky, the crisp mountain air, and the palpable sense of anticipation create a truly magical atmosphere for the start of this iconic race. Let the Alpine Marathon be your gateway to a world of extraordinary experiences and unforgettable memories."
  },

  {
    id: 6,
    image: news6,
    title: "Alpine Marathon Expands International Partnerships: Uniting Mountain Communities",
    text: "The Alpine Marathon strengthens its international ties by forging partnerships with other renowned mountain races around the world. This collaboration fosters a sense of global unity among mountain communities and provides opportunities for athletes to experience diverse alpine landscapes. Together, these races aim to promote mountain sports and foster a spirit of friendship and cooperation.",
    completeText: "The Alpine Marathon is proud to strengthen its international ties by forging partnerships with other renowned mountain races around the world. This collaborative effort fosters a sense of global unity among mountain communities and offers athletes the chance to immerse themselves in diverse alpine landscapes. As these races join forces, they aim to promote mountain sports, inspire athletes from all corners of the globe, and foster a spirit of friendship and cooperation. Together, they create a tapestry of shared experiences and unforgettable adventures that transcend borders."
  },

  {
    id: 7,
    image: news7,
    title: "Alpine Marathon Trailblazers: Pioneering Routes Through Uncharted Alpine Terrain",
    text: "Adventurous trailblazers are redefining alpine marathon routes, exploring uncharted terrain, and uncovering hidden gems in the mountains. These bold explorers are designing innovative courses that challenge runners to navigate rugged landscapes, remote valleys, and pristine alpine meadows. Witness their pioneering spirit as they carve out new paths in the world of mountain racing.",
    completeText: "Embark on a trailblazing adventure with the Alpine Marathon as it redefines alpine marathon routes, exploring uncharted terrain and unveiling hidden gems in the mountains. Fearless explorers are designing innovative courses that challenge runners to navigate rugged landscapes, remote valleys, and pristine alpine meadows. Witness their pioneering spirit as they carve out new paths in the world of mountain racing, pushing the boundaries of what's possible and inspiring a new generation of trailblazers to follow in their footsteps."
  },

  {
    id: 8,
    image: news8,
    title: "Alpine Marathon Inspires Youth: Fostering the Next Generation of Mountain Athletes",
    text: "The Alpine Marathon is on a mission to inspire the next generation of mountain athletes. Through educational programs, youth camps, and mentorship initiatives, young aspiring runners are introduced to the magic of alpine racing. The event fosters a love for the mountains, promotes a healthy lifestyle, and instills values of perseverance, teamwork, and environmental stewardship.",
    completeText: " The Alpine Marathon is on a mission to inspire the next generation of mountain athletes. Through educational programs, youth camps, and mentorship initiatives, young aspiring runners are introduced to the magic of alpine racing. The event fosters a love for the mountains, promotes a healthy lifestyle, and instills values of perseverance, teamwork, and environmental stewardship. By nurturing the passion for mountain sports in young hearts, the Alpine Marathon ensures that the spirit of adventure will continue to thrive for years to come."
  },

  {
    id: 9,
    image: news9,
    title: "Alpine Marathon's Futuristic Tech: Enhancing Safety and Race Experience",
    text: "Embracing cutting-edge technology, the Alpine Marathon introduces futuristic innovations to enhance safety and the race experience. From GPS tracking devices that provide real-time updates to advanced weather monitoring systems, runners can navigate the alpine terrain with confidence. These tech advancements ensure participant well-being and add an extra layer of excitement to the event.",
    completeText: "Embracing cutting-edge technology, the Alpine Marathon introduces futuristic innovations that enhance safety and elevate the race experience. From state-of-the-art GPS tracking devices that provide real-time updates on runner positions to advanced weather monitoring systems, participants can navigate the alpine terrain with confidence. These tech advancements ensure participant well-being, offer peace of mind to loved ones, and add an extra layer of excitement and anticipation to the event. Welcome to the future of mountain racing."
  },

  {
    id: 10,
    image: news10,
    title: "Alpine Marathon Charity Run: Supporting Mountain Conservation and Local Projects",
    text: "Lace up your shoes for the Alpine Marathon Charity Run, where participants go the extra mile for a meaningful cause. This philanthropic event raises funds to support mountain conservation efforts, promote sustainable tourism, and invest in local community projects. Every stride taken in this race contributes to preserving the pristine beauty of the alpine environment.",
    completeText: "Lace up your shoes and join the Alpine Marathon Charity Run, where every step taken goes beyond personal accomplishment. This philanthropic event raises funds to support mountain conservation efforts, promote sustainable tourism, and invest in local community projects. By participating, you become a steward of the alpine environment, ensuring that its pristine beauty is preserved for future generations. With each stride, you make a meaningful impact and contribute to the sustainability of the mountains we hold dear."
  },

  {
    id: 11,
    image: news11,
    title: "Alpine Marathon's Epic Finish Line: A Triumph Amidst Majestic Mountain Backdrop",
    text: "The Alpine Marathon's epic finish line stands as a testament to the runners' resilience and determination. As participants cross the final marker, they are greeted by a breathtaking backdrop of towering alpine peaks and sweeping valleys. It's a moment of triumph, a celebration of their alpine journey, and a reminder of the indomitable spirit of the human quest for adventure.",
    completeText: "As participants cross the Alpine Marathon's epic finish line, they are greeted by a breathtaking backdrop of towering alpine peaks, majestic valleys, and serene beauty. It's a moment of triumph, a celebration of their alpine journey, and a testament to the indomitable spirit of the human quest for adventure. With every arduous step taken, runners embody resilience, determination, and a profound connection to the mountains. Let the Alpine Marathon be your platform to embrace the grandeur of the finish line and savor a triumph that will forever remain etched in your memory."
  },

  {
    id: 12,
    image: news12,
    title: "Alpine Marathon's Vision for the Future: Promoting Sustainable Mountain Racing",
    text: "The Alpine Marathon looks ahead with a vision for sustainable mountain racing. By implementing eco-friendly practices, promoting responsible tourism, and embracing innovative technologies, this event aims to be a leader in environmentally conscious racing.",
    completeText: "The Alpine Marathon gazes into the future with a visionary approach to sustainable mountain racing. By implementing eco-friendly practices, promoting responsible tourism, and embracing innovative technologies, this event aims to be a leader in environmentally conscious racing. With a steadfast commitment to preserving the alpine environment, the Alpine Marathon paves the way for a future where athletes can continue to experience the beauty of the mountains in perfect harmony with nature. Join this movement towards sustainable adventure and be part of a transformative journey that leaves a positive impact on the world."
  },
]


interface coursesSlideData {
  id: number;
  image: string;
  title: string;
  text: string;
}

export const courseSlides: coursesSlideData[] = [
  {
    id: 1,
    image: courseSlide1,
    text: "If you seek adventure on the mountain, climbing on cliffs, thrilling serials, and mingling with skiers, then the two-year diploma program for high-level international qualification in tourism is perfect for you. This physically demanding program offers an adrenaline-filled income that will take your career to new heights.",
    title: "Mountain Guide"
  },

  {
    id: 2,
    image: courseSlide2,
    text: "If you feel that the transition from a joyful life to a professional career is the right time, then the 8-week, multi-faceted program tailored specifically for you is waiting. The course is mainly focused on theoretical and practical training in high-level tourism.",
    title: "Trekking Guide"
  },

  {
    id: 3,
    image: courseSlide3,
    text: "If you also have a passion for winter mountains, whether it's skiing or snowboarding, and you want to improve your performance based on the results achieved through competition or freeriding, then the 1-year program for snowboarders is perfect for you. In this program, you will learn various freeride techniques, mastering snowboarding skills, understanding avalanche safety, and other risks.",
    title: "SKI GUIDE"
  },

  {
    id: 4,
    image: courseSlide4,
    text: "A 6-week intensive professional program for cycling enthusiasts has been developed to facilitate eco-friendly travel using various types of bicycles. The program covers different routes, including mountain trails, roads, auditoriums, and velodromes.",
    title: "BIKE TOUR GUIDE"
  },
]

interface certificateItems {
  id: number;
  image: string;
  text: string;
}


export const certificate: certificateItems[] = [
  {
    id: 1,
    image: certificateLayout1,
    text: 'Because it’s a dream job, and we won’t be modest about it. It is simply one of the most exciting, rewarding and interesting jobs out there. As a guide you will be traveling in the breathtaking nature, meeting new people from across the globe, leading them through stunning sights & awe-inspiring experiences, sharing the best of your country… and you will be very well paid for it. What could be better? You will be the cocreator of the happiest holidays of your guests, making sure they leave with unforgettable memories longing to return for more. '
  },

  {
    id: 2,
    image: certificateLayout2,
    text: 'As in any profession, having a strong desire, motivation, and dedication is essential. If we add to this the qualification that corresponds to international standards, then success becomes inevitable. The knowledge acquired in the "School of Sustainable Tourism" will help you professionally, enabling you to acquire necessary skills, make friends, and become a member of the global professional network. Your new qualification will make you a highly sought-after employee in both local and international tourist companies.'
  }
]

interface galleryItem {
  id: number;
  image: string;
}

export const galleryItems: galleryItem[] = [
  {
    id: 1,
    image: gallery1,
  },

  {
    id: 2,
    image: gallery2,
  },

  {
    id: 3,
    image: gallery3,
  },

  {
    id:4,
    image: gallery4,
  },

  {
    id: 5,
    image: gallery5,
  },

  {
    id: 6,
    image: gallery6,
  },

  {
    id: 7,
    image: gallery7,
  },

  {
    id: 8,
    image: gallery8,
  },

  {
    id: 9,
    image: gallery9,
  },

  {
    id: 10,
    image: gallery10,
  },

  {
    id: 11,
    image: gallery11,
  },

  {
    id: 12,
    image: gallery12,
  },

  {
    id: 13,
    image: gallery13,
  },

  {
    id: 14,
    image: gallery14,
  },

  {
    id: 15,
    image: gallery15,
  },

  {
    id: 16,
    image: gallery16,
  },

  {
    id: 17,
    image: gallery17,
  },

  {
    id: 18,
    image: gallery18,
  },

  {
    id: 19,
    image: gallery19,
  },

  {
    id: 20,
    image: gallery20,
  },

  {
    id: 21,
    image: gallery21,
  },

  {
    id: 22,
    image: gallery22,
  },
]

interface contactInfoItem {
  icon: any
  label: string;
}

export const contactInfo: contactInfoItem[] = [
  { icon: <Facebook />, label: 'Facebook.com/company' },
  { icon: <Instagram/>, label: 'Instagram.com/company' },
  { icon:  <Email/>, label: 'company@gmail.com' },
  { icon: <Phone/>, label: 'Phone' },
]





