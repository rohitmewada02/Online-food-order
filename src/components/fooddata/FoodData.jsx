// ---------------- Import All Images Here ----------------

// Indian Food
import Ind1 from "../image/Indfood-1.jpg";
import Ind2 from "../image/Indfood-2.jpg";
import Ind3 from "../image/Indfood-3.jpg";
import Ind4 from "../image/Indfood-4.jpg";
import Ind5 from "../image/Indfood-5.jpg";
import Ind6 from "../image/Indfood-6.jpg";
import Ind7 from "../image/Indfood-7.jpg";
import Ind8 from "../image/Indfood-8.jpg";
import Ind9 from "../image/Indfood-9.jpg";
import Ind10 from "../image/Indfood-10.jpg";
import Ind11 from "../image/Indfood-11.png";
import Ind12 from "../image/indfood-12.png";

// Italian Food
import Ita1 from "../image/Italifood-1.jpg";
import Ita2 from "../image/italifood-2.jpg";
import Ita3 from "../image/italifood-3.jpg";
import Ita4 from "../image/italifood-4.jpg";
import Ita5 from "../image/italifood-5.jpg";
import Ita6 from "../image/italifood-6.jpg";
import Ita7 from "../image/Italifood-7.png";
import Ita8 from "../image/italifood-8.jpg";

// Korean Food
import Kor1 from "../image/kor-1.jpg";
import Kor2 from "../image/kor-2.jpg";
import Kor3 from "../image/kor-3.jpg";
import Kor4 from "../image/kor-4.jpg";
import Kor5 from "../image/kor-5.jpg";
import Kor6 from "../image/kor-6.png";
import Kor7 from "../image/kor-7.jpg";

// --------------------------------------------------------

const Food = [

    // ---------------- Indian Food ----------------
    {
        id: 1,
        url: Ind1,
        rate: '50',
        title: 'Idly',
        quantity: '2 pieces',
        star: 4.5,
        description: 'Idli are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented white gram whole and rice rava. and dipped into sambar. its also called as dip sambar idli.',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 2,
        url: Ind2,
        rate: '100',
        title: 'Dosa',
        quantity: '2 pieces',
        star: 4.5,
        fakerate: 900,
        description: 'A thin and crispy pancake prepared with fermented dosa batter which is topped with red garlic chutney and potato masala. the appearance and texture is very similar to world famous masala dosa. but the main difference lies with the red garlic chutney spread topped on bangalore dosa.',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 3,
        url: Ind3,
        rate: '100',
        title: 'Puri',
        quantity: '2 pieces',
        star: 4.5,
        description: 'South Indian style potato masala made with boiled, crumbled potatoes in mild, flavorful gravy. It is served with hot Poori which is a deep-fried bread made from unleavened whole-wheat flour',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 4,
        url: Ind4,
        rate: '100',
        title: 'Upma',
        quantity: '1 Serve',
        star: 3,
        description: "The best aromatic upma topped with vegetables and ghee and it comes with more vegetables. Staying consious of one's health is the way to go, thus is a light upma made of wheat grains and vegetable ",
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 5,
        url: Ind5,
        rate: '100',
        title: 'Chappathi',
        quantity: '2 pieces',
        star: 5,
        description: 'Traditional whole wheat Tawa special,What are the few lines for chapati Chapati is Indian flat bread made of wheat flour. It is the staple food in the North Asian countries especially in North India and Pakistan. It can also be made of various other flours like the jowar, bajra, soya, raji etc.',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 6,
        url: Ind6,
        rate: '100',
        title: 'Biriyani',
        quantity: '1 Serve',
        star: 4,
        description: 'Rich in taste and creamy in texture. Think we are talking about a dessert? Well,this biryani might as well be one with the way it melts in your mouth. Tender chicken is marinated in yogurt&spices to make this biryani delicious',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 7,
        url: Ind7,
        rate: '100',
        title: 'Fish fry',
        quantity: '2 pieces',
        star: 5,
        description: 'Fish fry is cooked by coating it with flours and spices which adds crispness and spiciness.fish battered and fried with authentic andra spices. And served in a traditional south Indian masala - Served with Res Chutni & Onion Salad',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 8,
        url: Ind8,
        rate: '100',
        title: 'Crab',
        quantity: '2 pieces',
        star: 4.5,
        description: 'Singapore style chili pepper fried soft shell crab served with jasmine rice. Hand picked crab prepared with traditional spices',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 9,
        url: Ind9,
        rate: '100',
        title: 'Prawn',
        quantity: '6 pieces',
        star: 5,
        description: 'King prawns stir fried in a  hunan style soy-chilli sause with fresh chillies,lemongrass,kaffir lime leaves,shallots,onion and celery',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 10,
        url: Ind10,
        rate: '100',
        title: 'Pav baaji',
        quantity: '2 pieces',
        star: 5,
        description: 'Pav Bhaji is a fast food dish from Mumbai (Bombay), India, consisting of a vegetable curry (bhaji) cooked in tomato gravy and served with a soft bread roll (pav).',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 11,
        url: Ind11,
        rate: '100',
        title: 'Parotta',
        quantity: '3 pieces',
        star: 5,
        description: 'Parotta or Porotta is a layered Indian and Sri Lankan flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.',
        titlename: 'IndianFood',
        titleId: 1
    },
    {
        id: 12,
        url: Ind12,
        rate: '100',
        title: 'Veg meals',
        quantity: '1 Serve',
        star: 5,
        description: 'A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants',
        titlename: 'IndianFood',
        titleId: 1
    },

    // ---------------- Italian Food ----------------
    {
        id: 21,
        url: Ita1,
        rate: '300',
        title: 'Spaghetti',
        quantity: '2 pieces',
        star: 4.5,
        description: 'Spaghetti is a long, thin, solid, cylindrical noodle pasta. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian dried spaghetti is made from durum wheat semolina, however; outside of Italy, it can be made in a variety of different ways.',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 22,
        url: Ita2,
        rate: '250',
        title: 'Lasagna',
        quantity: '1 Serve',
        star: 4.5,
        description: 'Lasagna is a flat and expanded pasta sheet, traditionally made in Italy with Parmigiano-Reggiano (Parmesan cheese), Béchamel sauce (white sauce), and ragù (a meat-based sauce).',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 23,
        url: Ita3,
        rate: '500',
        title: ' Risotto milanese',
        quantity: '1 serve',
        star: 5,
        description: 'A classic risotto is a rich, creamy dish with nearly a porridge-like consistency, yet each grain of rice retains a distinct bite. In Italian risotto, the rice is parched as in the pilaf method, but the liquid is added and absorbed gradually while the grain is stirred almost constantly.',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 24,
        url: Ita4,
        rate: '700',
        title: 'Ratatouille',
        quantity: '2 serve',
        star: 4.5,
        description: 'Traditional French Ratatouille is an easy French side dish that consists of stewed vegetables: eggplant, zucchini, onions, yellow squash, bell peppers garlic, fresh tomatoes and herbs.',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 25,
        url: Ita5,
        rate: '200',
        title: 'Tiramisu',
        quantity: '1 serve',
        star: 4.5,
        description: 'Tiramisù is a velvety mélange of savoiardi cookies dipped in an espresso, layered with delicately sweetened whipped eggs and mascarpone cheese, and topped with a dusting of cocoa powder.',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 26,
        url: Ita6,
        rate: '439',
        title: 'Frittata',
        quantity: '2 serve',
        star: 4.5,
        description: 'Frittata is an egg-based Italian dish similar to an omelette or crustless quiche or scrambled eggs, enriched with additional ingredients such as meats, cheeses, or vegetables. The word frittata is Italian and roughly translates to "fried".',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 27,
        url: Ita7,
        rate: '639',
        title: 'Foccacia',
        quantity: '1 piece',
        star: 4.5,
        description: 'Focaccia is made from flour, oil, water, yeast, and salt, like pizza dough. However, it has more yeast than pizza dough, which allows it to rise more and make a fluffier, bread-like loaf. People love focaccia because of its smooth texture and taste.',
        titlename: 'ItalianFood',
        titleId: 2
    },
    {
        id: 28,
        url: Ita8,
        rate: '239',
        title: 'Pizza',
        quantity: '1 serve',
        star: 4.5,
        description: "With real italian pizza, you will find homemade sauce made from freshly peeled tomatoes and a blend of savory, complimenting herbs. You will also notice that authentic Italian pizza doesn't combine the toppings and sauce to be cooked together. They simply layer the sauce along the crus",
        titlename: 'ItalianFood',
        titleId: 2
    },

    // ---------------- Korean Food ----------------
    {
        id: 31,
        url: Kor1,
        rate: '250',
        title: 'Tteokbokki',
        quantity: '1 Serve',
        star: 4.5,
        description: "Tteokbokki is a Korean street food snack made primarily of chewy rice cakes and fiery, funky gochujang chili paste. In Lonely Planet's The World's Best Spicy Food, the cakes are tossed with slices of fried eomuk fish cake, cabbage, scallions, and garlic.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 32,
        url: Kor2,
        rate: '400',
        title: 'Sundubu jjigae',
        quantity: '1 Serve',
        star: 4.5,
        description: "Sundubu jjigae is a Korean stew made with soft (uncurdled) tofu as a highlight ingredient. There are a few different ways to make sundubu jjigae using different ingredients (e.g. kimchi, minced pork and seafood) but by far my favorite version is the seafood version known as Haemul Sundubu Jjigae (해물 순두부 찌개).  You can really taste the refreshing and clear tasting soup.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 33,
        url: Kor3,
        rate: '450',
        title: 'Jjin-mandu',
        quantity: '1 Serve',
        star: 4.5,
        description: "Jjin-mandu (찐만두) is steamed, either in a traditional bamboo steamer or modern versions. Gullin-mandu (굴린만두), also called gulmandu, is a variety of mandu in a ball shape without a covering. It is mainly eaten in summer. Wang mandu (왕만두) is a bun stuffed with pork and vegetables, similar to the Chinese baozi.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 34,
        url: Kor4,
        rate: '400',
        title: 'Kimchi fried rice',
        quantity: '1 Serve',
        star: 4.5,
        description: "Kimchi fried rice or kimchi-bokkeum-bap (김치볶음밥) is a variety of bokkeum-bap (fried rice), a popular dish in South Korea. Kimchi fried rice is made primarily with kimchi and rice, along with other available ingredients, such as diced vegetables or meats like spam.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 35,
        url: Kor5,
        rate: '450',
        title: 'Kimbap',
        quantity: '5 pieces',
        star: 4.5,
        description: "Kimbap is a Korean dish made from cooked rice and ingredients such as vegetables, fish, and meats that are rolled in gim (김)—dried sheets of seaweed—and served in bite-sized slices. The origins of gimbap are debated.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 36,
        url: Kor6,
        rate: '150',
        title: 'Hobakjuk',
        quantity: '1 Serve',
        star: 4.5,
        description: "Hobak-juk (호박죽) or pumpkin porridge is a variety of Korean porridge, or juk, made with pumpkin and glutinous rice flour. It is a smooth and naturally sweet porridge that is traditionally served to recovering patients or the elderly.",
        titlename: 'korean',
        titleId: 3
    },
    {
        id: 37,
        url: Kor7,
        rate: '380',
        title: 'Korean fried chicken',
        quantity: '1 Serve',
        star: 4.5,
        description: "Korean fried chicken is crunchy, crispy, and covered in various sauces of your choosing. Some flavours are spicy, while others are covered in delicious umami sesame and soy sauce flavours, and some in a sweet sauce.",
        titlename: 'korean',
        titleId: 3
    },
];

export default Food;
