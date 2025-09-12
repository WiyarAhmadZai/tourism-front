import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Translation dictionary
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    tours: "Tours",
    hotels: "Hotels",
    restaurants: "Restaurants",
    contact: "Contact",
    signIn: "Sign In",
    search: "Search",
    
    // Home page
    discoverAfghanistan: "Discover Afghanistan",
    experienceBeauty: "Experience the beauty and rich heritage of the heart of Asia",
    exploreTours: "Explore Tours",
    learnMore: "Learn More",
    exploreAfghanistan: "Explore Afghanistan",
    toursCategory: "Tours",
    hotelsCategory: "Hotels",
    restaurantsCategory: "Restaurants",
    cultureCategory: "Culture",
    featuredTours: "Featured Tours",
    viewAllTours: "View All Tours",
    kabulTour: "Kabul City Tour",
    bamiyanTour: "Bamiyan Valley Tour",
    heratTour: "Herat Historical Tour",
    
    // About page
    aboutAfghanistan: "About Afghanistan Tourism",
    discoverHeart: "Discover the rich heritage, stunning landscapes, and warm hospitality of Afghanistan",
    heartOfAsia: "Discover the Heart of Asia",
    afghanistanDescription: "Afghanistan, often referred to as the \"Heart of Asia,\" is a land of breathtaking landscapes, ancient civilizations, and rich cultural heritage. From the towering peaks of the Hindu Kush to the historic cities along the Silk Road, Afghanistan offers a unique and unforgettable travel experience.",
    ourMission: "Our mission is to showcase the true beauty of Afghanistan to the world, breaking stereotypes and inviting travelers to experience the authentic warmth and hospitality of the Afghan people. We provide safe, well-organized tours that highlight the country's archaeological sites, natural wonders, and vibrant local cultures.",
    safeTravel: "Safe Travel",
    securityPriority: "Security is our priority",
    localGuides: "Local Guides",
    expertKnowledge: "Expert local knowledge",
    happyTravelers: "Happy Travelers",
    destinations: "Destinations",
    expertGuides: "Expert Guides",
    yearsExperience: "Years Experience",
    ourTeam: "Our Expert Team",
    meetTeam: "Meet our passionate team of travel experts dedicated to providing you with unforgettable experiences",
    
    // Tours page
    afghanistanTours: "Afghanistan Tours",
    exploreToursDesc: "Explore our carefully curated tours across Afghanistan's most beautiful destinations",
    allTours: "All Tours",
    cityTours: "City Tours",
    adventure: "Adventure",
    cultural: "Cultural",
    nature: "Nature",
    religious: "Religious",
    popular: "Popular",
    kabulCityTour: "Kabul City Tour",
    bamiyanValley: "Bamiyan Valley Adventure",
    heratHistorical: "Herat Historical Journey",
    mazarPilgrimage: "Mazar-i-Sharif Pilgrimage",
    bandAmir: "Band-e-Amir National Park",
    jalalabadTour: "Jalalabad Cultural Tour",
    viewDetails: "View Details",
    readyAdventure: "Ready for an Unforgettable Adventure?",
    bookTour: "Book your Afghanistan tour today and experience the beauty of the Heart of Asia",
    contactUs: "Contact Us",
    downloadBrochure: "Download Brochure",
    
    // Hotels page
    afghanistanHotels: "Afghanistan Hotels",
    findAccommodation: "Find comfortable accommodation across Afghanistan's major cities and destinations",
    allHotels: "All Hotels",
    luxury: "Luxury",
    midRange: "Mid-Range",
    budget: "Budget",
    ecoFriendly: "Eco-Friendly",
    featured: "Featured",
    kabulSerena: "Kabul Serena Hotel",
    heratGuest: "Herat Guest House",
    mazarHotel: "Mazar-i-Sharif Hotel",
    bamiyanLodge: "Bamiyan Eco Lodge",
    kandaharPalace: "Kandahar Palace Hotel",
    jalalabadInn: "Jalalabad Riverside Inn",
    needHelp: "Need Help Finding the Perfect Accommodation?",
    travelExperts: "Our travel experts can help you find the best hotels for your Afghanistan trip",
    viewAllProperties: "View All Properties",
    
    // Restaurants page
    afghanistanRestaurants: "Afghanistan Restaurants",
    experienceFlavors: "Experience the rich flavors of Afghan cuisine and international dishes",
    allRestaurants: "All Restaurants",
    traditionalAfghan: "Traditional Afghan",
    fineDining: "Fine Dining",
    vegetarian: "Vegetarian",
    cafes: "Cafes",
    kabulRestaurant: "Kabul Restaurant",
    heratCuisine: "Herat Cuisine",
    mazarBistro: "Mazar-i-Sharif Bistro",
    bamiyanVegetarian: "Bamiyan Vegetarian",
    kandaharGrill: "Kandahar Grill",
    jalalabadTea: "Jalalabad Tea House",
    discoverCuisine: "Discover Afghan Cuisine",
    signatureDishes: "Signature Dishes",
    signatureDesc: "Try traditional dishes like Kabuli Palaw, Mantu, and Qabili Chicken that define Afghan culinary culture.",
    freshBread: "Fresh Bread",
    breadDesc: "Experience the famous Afghan bread (Naan) baked in traditional tandoor ovens.",
    hospitality: "Hospitality",
    hospitalityDesc: "Enjoy the warm Afghan hospitality with endless cups of chai and generous servings.",
    
    // Contact page
    contactUsTitle: "Contact Us",
    questions: "Have questions about traveling to Afghanistan? Get in touch with our team",
    getInTouch: "Get In Touch",
    ourOffice: "Our Office",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    workingHours: "Working Hours",
    followUs: "Follow Us",
    sendMessage: "Send Us a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    faq: "Frequently Asked Questions",
    safeToTravel: "Is it safe to travel to Afghanistan?",
    safeDesc: "We prioritize the safety of our travelers. Our tours are carefully planned to avoid high-risk areas and are led by experienced local guides who know the regions well.",
    whatToPack: "What should I pack for an Afghanistan tour?",
    packDesc: "Pack comfortable clothing suitable for the season, modest attire for cultural sensitivity, good walking shoes, and any personal medications. We provide a detailed packing list with your booking.",
    visaRequired: "Do I need a visa to visit Afghanistan?",
    visaDesc: "Yes, most foreign nationals require a visa to enter Afghanistan. We can provide guidance on the visa application process and assist with necessary documentation.",
    currency: "What currency is used in Afghanistan?",
    currencyDesc: "The official currency is the Afghan Afghani (AFN). US Dollars are also widely accepted in tourist areas. We recommend carrying some cash for smaller purchases.",
    
    // Footer
    footerDesc: "Discover the beauty and rich heritage of Afghanistan with our expertly curated tours and experiences.",
    quickLinks: "Quick Links",
    destinationsFooter: "Destinations",
    contactFooter: "Contact Us",
    allRights: "All rights reserved."
  },
  ps: {
    // Navigation
    home: "کور",
    about: "په اړه",
    tours: "تورونه",
    hotels: "هوټلونه",
    restaurants: "خوړنځی",
    contact: "اړیکه",
    signIn: "ننوزل",
    search: "لټون",
    
    // Home page
    discoverAfghanistan: "افغانستان وپېژنئ",
    experienceBeauty: "د آسیا مرکز کې د ښکلاو او ور inheritance غني تجربه کړئ",
    exploreTours: "تورونه وګورئ",
    learnMore: "نور زده کړئ",
    exploreAfghanistan: "افغانستان وګورئ",
    toursCategory: "تورونه",
    hotelsCategory: "هوټلونه",
    restaurantsCategory: "خوړنځی",
    cultureCategory: "کلتور",
    featuredTours: "ځانګړي تورونه",
    viewAllTours: "ټول تورونه وګورئ",
    kabulTour: "کابل ښار تور",
    bamiyanTour: "بامیان دره تور",
    heratTour: "هرا تاریخي تور",
    
    // About page
    aboutAfghanistan: "د افغانستان ټوریزم په اړه",
    discoverHeart: "د افغانستان ور inheritance غني، ښکلای درې او بانګ دوستانه مېلمستی وپېژنئ",
    heartOfAsia: "د آسیا مرکز وپېژنئ",
    afghanistanDescription: "افغانستان، چې ډېر وخت د \"د آسیا مرکز\" په توګه یادېږي، د هیبت انګړې درې، تاریخي تمدنونه او ور inheritance غني لرونکی یو هیواد دی. د هندوکش په لوړو څوکو څخه تر د سیلک روډ تاریخي ښارونو پورې، افغانستان یو بې نظیر او یاد وړ توریستي تجربه وړاندې کوي.",
    ourMission: "زموږ ماموریت دا دی چې د افغانستان اصلي ښکلاو نړۍ ته وښیې، د چارو چارو په منځ تلل او لیدونکي ته د افغان خلکو اصلي ګرمۍ او مېلمستی تجربه کولو لپاره بلنه ورکړئ. موږ بخاطر خوندي، ښه تنظیم شوي تورونه وړاندې کوو چې د هیواد اړیخنی سایټونه، سببی جادوګرې او فعال محلي کلتورونه ښکاره کوي.",
    safeTravel: "خوندي سفر",
    securityPriority: "خونديتوب زموږ لومړیتوب دی",
    localGuides: "محلي لارښوونکي",
    expertKnowledge: "د محليو په اړه ماهر زده کړې",
    happyTravelers: "خوشحال لیدونکي",
    destinations: "موخې",
    expertGuides: "ماهر لارښوونکي",
    yearsExperience: "د کلونو تجربه",
    ourTeam: "زموږ ماهر ټیم",
    meetTeam: "زموږ د ټوریزم په اړه غواړنده ټیم سره لیدله کړئ چې د بې نظیر تجربو وړاندې کولو لپاره یوځای شوی دی",
    
    // Tours page
    afghanistanTours: "د افغانستان تورونه",
    exploreToursDesc: "زموږ په اړه غوره شوي تورونه په افغانستانو ښکلای موخو کې وګورئ",
    allTours: "ټول تورونه",
    cityTours: "ښار تورونه",
    adventure: "ماجرا",
    cultural: "کلتورال",
    nature: "طبیعت",
    religious: "مذهبي",
    popular: "مشهور",
    kabulCityTour: "کابل ښار تور",
    bamiyanValley: "بامیان دره ماجرا",
    heratHistorical: "هرا تاریخي سفر",
    mazarPilgrimage: "مذار شریف زیارت",
    bandAmir: "د بند امیر ملی پارک",
    jalalabadTour: "جلال اباد کلتورال تور",
    viewDetails: "تفصیلات وګورئ",
    readyAdventure: "د یو بې نظیر ماجرا لپاره چمتو یاست؟",
    bookTour: "نن افغانستان تور خپل کړئ او د د آسیا مرکز ښکلاو تجربه کړئ",
    contactUs: "موږ سره اړیکه ونیسئ",
    downloadBrochure: "بروشور ښکته کړئ",
    
    // Hotels page
    afghanistanHotels: "د افغانستان هوټلونه",
    findAccommodation: "په افغانستانو لویو ښارونو او موخو کې د خوندي استوګنې لټون کړئ",
    allHotels: "ټول هوټلونه",
    luxury: "لوکس",
    midRange: "منځنی",
    budget: "بودجه",
    ecoFriendly: "اکو-دوستانه",
    featured: "ځانګړی",
    kabulSerena: "کابل سرینا هوټل",
    heratGuest: "هرا مېهمان خانه",
    mazarHotel: "مذار شریف هوټل",
    bamiyanLodge: "بامیان اکو لوډج",
    kandaharPalace: "قندهار سرای هوټل",
    jalalabadInn: "جلال اباد دريایي این",
    needHelp: "د سم هوټل پیدا کولو کې مرسته غواړئ؟",
    travelExperts: "زموږ د ټوریزم ماهر خلک کولی شې تاسې ته په افغانستان تور کې د غوره هوټلونو په پیدا کولو کې مرسته وکړي",
    viewAllProperties: "ټول ملکونه وګورئ",
    
    // Restaurants page
    afghanistanRestaurants: "د افغانستان خوړنځی",
    experienceFlavors: "د افغان خوړنې د ښکلایو چارو او نړیوالو چارو تجربه کړئ",
    allRestaurants: "ټول خوړنځی",
    traditionalAfghan: "دودیز افغان",
    fineDining: "ښه خوړنځی",
    vegetarian: "ناگوښتی",
    cafes: "کافی خونې",
    kabulRestaurant: "کابل خوړنځی",
    heratCuisine: "هرا خوړنځی",
    mazarBistro: "مذار شریف بیسټرو",
    bamiyanVegetarian: "بامیان ناگوښتی",
    kandaharGrill: "قندهار ګریل",
    jalalabadTea: "جلال اباد چای خونه",
    discoverCuisine: "د افغان خوړنې پېژندنه",
    signatureDishes: "د ځانګړو چارو",
    signatureDesc: "دودیز چارې لکه کابلی پالو، منتو او قابلی چیکن هڅه کړئ چې د افغان خوړنې کلتور ښکاره کوي.",
    freshBread: "تازه نان",
    breadDesc: "د تрадیسیونالي تندور کې پکل شوي مشهوري افغان نان تجربه کړئ.",
    hospitality: "مېلمستی",
    hospitalityDesc: "د افغان مېلمستی سره د چایو د ناپای له سره او د لرغوې سره خوراکونه خورئ.",
    
    // Contact page
    contactUsTitle: "موږ سره اړیکه ونیسئ",
    questions: "د افغانستان تور په اړه پوښتنې لرئ؟ زموږ سره اړیکه ونیسئ",
    getInTouch: "اړیکه ونیسئ",
    ourOffice: "زموږ دفتر",
    phoneNumber: "د تیلفون شمېره",
    emailAddress: "بریښنالیک پته",
    workingHours: "د کار وخت",
    followUs: "موږ تعقیب کړئ",
    sendMessage: "موږ ته پیغام واستوئ",
    yourName: "ستاسو نوم",
    yourEmail: "ستاسو بریښنالیک",
    subject: "موضوع",
    message: "پیغام",
    send: "پیغام واستوئ",
    faq: "لو ځل شوې پوښتنې",
    safeToTravel: "آیا افغانستان ته سفر کول خوندي دی؟",
    safeDesc: "موږ د لیدونکي خونديتوب لومړیتوب وکړئ. زموږ تورونه په ښه توګه تنظیم شوي دي چې د لوړ خطر لرونکي سیمو څخه ډګرېږي او د تجربه لرونکي محلي لارښوونکي لخوا ریښتیا کیږي چې سیمې په اړه زده دي.",
    whatToPack: "د افغانستان تور لپاره څه څیزونه باید سره ونیوم؟",
    packDesc: "د موسم لپاره مناسب خوږ ا одежونه، د کلتور په اړه د ښکتی ا одежونه، ښه پښۍ، او هر ډول شخصي درملونه سره. موږ ستاسو د کتابونو سره یو تفصیلي لیست وړاندې کوو.",
    visaRequired: "آیا زما لپاره د افغانستان لیدلو لپاره ویزا ته اړتیا ده؟",
    visaDesc: "هو، ډېر خارجي نه ګڼل کیږي چې د افغانستان لیدلو لپاره ویزا ته اړتیا لري. موږ کولی شو د ویزا د اپلیکیشن عملیات په اړه لارښود ورکړو او د اړینو لاسوندونو سره مرسته وکړو.",
    currency: "په افغانستان کې کومه پیسې کارول کیږي؟",
    currencyDesc: "رسمی پیسې د افغان افغانۍ (AFN) دي. د توریستو په سیمو کې امریکايي ډالرونه هم پراخه ومنل کیږي. موږ وړاندیز وکړئ چې د کوچنيو پیرودونو لپاره ځینې پیسې سره ورسیږئ.",
    
    // Footer
    footerDesc: "زموږ په اړه غوره شوي تورونو او تجربو سره د افغانستان ښکلاو او ور inheritance غني وپېژنئ.",
    quickLinks: "چټکې تړنې",
    destinationsFooter: "موخې",
    contactFooter: "اړیکه",
    allRights: "ټول حقونه خوندي دي."
  },
  fa: {
    // Navigation
    home: "خانه",
    about: "درباره",
    tours: "تورها",
    hotels: "هتلها",
    restaurants: "رستورانها",
    contact: "تماس",
    signIn: "ورود",
    search: "جستجو",
    
    // Home page
    discoverAfghanistan: "افغانستان را کشف کنید",
    experienceBeauty: "زیبایی و میراث غنی قلب آسیا را تجربه کنید",
    exploreTours: "تورها را کشف کنید",
    learnMore: "بیشتر بدانید",
    exploreAfghanistan: "افغانستان را کشف کنید",
    toursCategory: "تورها",
    hotelsCategory: "هتلها",
    restaurantsCategory: "رستورانها",
    cultureCategory: "فرهنگ",
    featuredTours: "تورهای ویژه",
    viewAllTours: "مشاهده همه تورها",
    kabulTour: "تور شهر کابل",
    bamiyanTour: "تور دره بامیان",
    heratTour: "سفر تاریخی هرات",
    
    // About page
    aboutAfghanistan: "درباره گردشگری افغانستان",
    discoverHeart: "میراث غنی، مناظر زیبا و میهمان نوازی افغانستان را کشف کنید",
    heartOfAsia: "قلب آسیا را کشف کنید",
    afghanistanDescription: "افغانستان، که اغلب به عنوان \"قلب آسیا\" شناخته می شود، سرزمینی از مناظر نفس گیر، تمدن های باستانی و میراث فرهنگی غنی است. از قله های بلند هندوکش تا شهرهای تاریخی در امتداد جاده ابریشم، افغانستان یک تجربه گردشگری منحصر به فرد و فراموش نشدنی ارائه می دهد.",
    ourMission: "ماموریت ما نشان دادن زیبایی واقعی افغانستان به جهان، شکستن کلیشه ها و دعوت گردشگران برای تجربه گرمی و میهمان نوازی واقعی مردم افغان است. ما تورهای ایمن، سازمان یافته و برجسته ارائه می دهیم که سایت های باستان شناسی، جادوی طبیعت و فرهنگ های محلی پرجنب و جوش کشور را برجسته می کند.",
    safeTravel: "سفر ایمن",
    securityPriority: "ایمنی اولویت ماست",
    localGuides: "راهنمایان محلی",
    expertKnowledge: "دانش تخصصی محلی",
    happyTravelers: "مسافران خوشحال",
    destinations: "مقاصد",
    expertGuides: "راهنمایان متخصص",
    yearsExperience: "سال تجربه",
    ourTeam: "تیم متخصص ما",
    meetTeam: "تیم پرشور گردشگری ما را ملاقات کنید که متعهد به ارائه تجربیات فراموش نشدنی به شماست",
    
    // Tours page
    afghanistanTours: "تورهای افغانستان",
    exploreToursDesc: "تورهای دقتی ما را در زیباترین مقاصد افغانستان کشف کنید",
    allTours: "همه تورها",
    cityTours: "تورهای شهری",
    adventure: "ماجراجویی",
    cultural: "فرهنگی",
    nature: "طبیعت",
    religious: "مذهبی",
    popular: "محبوب",
    kabulCityTour: "تور شهر کابل",
    bamiyanValley: "ماجراجویی دره بامیان",
    heratHistorical: "سفر تاریخی هرات",
    mazarPilgrimage: "حج به مزار شریف",
    bandAmir: "پارک ملی بند امیر",
    jalalabadTour: "تور فرهنگی جلال آباد",
    viewDetails: "مشاهده جزئیات",
    readyAdventure: "آماده برای یک ماجراجویی فراموش نشدنی؟",
    bookTour: "امروز تور افغانستان را رزرو کنید و زیبایی قلب آسیا را تجربه کنید",
    contactUs: "با ما تماس بگیرید",
    downloadBrochure: "دانلود بروشور",
    
    // Hotels page
    afghanistanHotels: "هتلهای افغانستان",
    findAccommodation: "اقامتگاه مناسبی در شهرهای اصلی و مقاصد افغانستان پیدا کنید",
    allHotels: "همه هتلها",
    luxury: "لوکس",
    midRange: "متوسط",
    budget: "ارزان",
    ecoFriendly: "دوستدار محیط زیست",
    featured: "ویژه",
    kabulSerena: "هتل سرنا کابل",
    heratGuest: "خانه مهمان هرات",
    mazarHotel: "هتل مزار شریف",
    bamiyanLodge: "کلبه اکویی بامیان",
    kandaharPalace: "هتل کاخ قندهار",
    jalalabadInn: "متل کنار رودخانه جلال آباد",
    needHelp: "کمک برای پیدا کردن اقامتگاه مناسب نیاز دارید؟",
    travelExperts: "متخصصان گردشگری ما می توانند به شما در پیدا کردن بهترین هتلها برای سفر به افغانستان کمک کنند",
    viewAllProperties: "مشاهده همه املاک",
    
    // Restaurants page
    afghanistanRestaurants: "رستورانهای افغانستان",
    experienceFlavors: "طعم غذاهای افغانی و بین المللی را تجربه کنید",
    allRestaurants: "همه رستورانها",
    traditionalAfghan: "سنتی افغانی",
    fineDining: "پذیرایی رسمی",
    vegetarian: "گیاهخواری",
    cafes: "کافه ها",
    kabulRestaurant: "رستوران کابل",
    heratCuisine: "آشپزی هرات",
    mazarBistro: "بیسترو مزار شریف",
    bamiyanVegetarian: "گیاهخواری بامیان",
    kandaharGrill: "گریل قندهار",
    jalalabadTea: "چای خانه جلال آباد",
    discoverCuisine: "آشپزی افغانی را کشف کنید",
    signatureDishes: "غذاهای امضایی",
    signatureDesc: "غذاهای سنتی مانند کابلی پلو، منتو و قابلی چیکن را امتحان کنید که فرهنگ آشپزی افغانی را تعریف می کنند.",
    freshBread: "نان تازه",
    breadDesc: "نان افغانی معروف را که در تنورهای سنتی پخته شده است تجربه کنید.",
    hospitality: "میهمان نوازی",
    hospitalityDesc: "از میهمان نوازی افغانی با فنجانهای بی پایان چای و سروهای بزرگ لذت ببرید.",
    
    // Contact page
    contactUsTitle: "با ما تماس بگیرید",
    questions: "سوالی درباره سفر به افغانستان دارید؟ با تیم ما تماس بگیرید",
    getInTouch: "در تماس باشید",
    ourOffice: "دفتر ما",
    phoneNumber: "شماره تلفن",
    emailAddress: "آدرس ایمیل",
    workingHours: "ساعات کاری",
    followUs: "ما را دنبال کنید",
    sendMessage: "برای ما پیام ارسال کنید",
    yourName: "نام شما",
    yourEmail: "ایمیل شما",
    subject: "موضوع",
    message: "پیام",
    send: "ارسال پیام",
    faq: "سؤالات متداول",
    safeToTravel: "آیا سفر به افغانستان ایمن است؟",
    safeDesc: "ما ایمنی مسافران خود را در اولویت قرار می دهیم. تورهای ما به دقت برنامه ریزی شده اند تا از مناطق پرخطر دوری کنند و توسط راهنمایان محلی با تجربه انجام می شوند که منطقه را به خوبی می شناسند.",
    whatToPack: "برای تور افغانستان چه چیزهایی باید همراه داشته باشم؟",
    packDesc: "لباسهای راحت مناسب فصل، لباسهای متین برای حساسیت فرهنگی، کفش پیاده روی خوب و داروهای شخصی خود را همراه داشته باشید. ما یک لیست بسته بندی تفصیلی را با رزرو شما ارائه می دهیم.",
    visaRequired: "آیا برای ورود به افغانستان به ویزا نیاز دارم؟",
    visaDesc: "بله، اکثر شهروندان خارجی برای ورود به افغانستان به ویزا نیاز دارند. ما می توانیم راهنمایی لازم برای فرآیند درخواست ویزا را ارائه دهیم و در اخذ مدارک لازم کمک کنیم.",
    currency: "واحد پول در افغانستان چیست؟",
    currencyDesc: "واحد پول رسمی افغانستان افغانی (AFN) است. دلار آمریکا نیز در مناطق گردشگری به طور گسترده پذیرفته شده است. توصیه می کنیم مقداری پول نقد برای خریدهای کوچک همراه داشته باشید.",
    
    // Footer
    footerDesc: "با تورها و تجربیات دقتی ما، زیبایی و میراث غنی افغانستان را کشف کنید.",
    quickLinks: "لینک های سریع",
    destinationsFooter: "مقاصد",
    contactFooter: "تماس با ما",
    allRights: "کلیه حقوق محفوظ است."
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);
  
  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || key
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;