const HOST = [
    "123 Data Entry SA",
    "280 Visagie Street, Monopati, Pretoria Central, 0001",
    "4SkietElectrical",
    "4 Sure Technologies",
    "4th Avenue Theme Park Lodge",
    "AB4IR",
    "A.B.C ECD",
    "Abitz Farming",
    "Absolute Water",
    "Accounting and Tax Solutions",
    "Accounting Instinct",
    "AccTax Solutions",
    "Action Volunteer Africa",
    "Acuity On Demand",
    "Acumen Laboratory Services",
    "Adams Mission Community Centre",
    "Adnotes (Pty) Ltd",
    "Advancing Children For Success",
    "Africa Beyond NPC",
    "Africa Food For Thought",
    "African Angels School",
    "African Childrens Feeding Scheme Community Education",
    "AIONS",
    "Akahluwa Trading",
    "Akhona Pele Attorneys",
    "Akunamlilo Fire Fighters",
    "Alacon Protection Services",
    "Alex Hub",
    "Alexis Botja Inc",
    "Alex Maboja Attorneys INC",
    "Algo Artwork Robotics Academy",
    "Allegro Enterprises",
    "Allergro",
    "Amalangabi Consulting",
    "Amandla Ku Lutsha (Safe Hub)",
    "Amani Good Parenting",
    "Amoyo Performing Arts Foundation",
    "Anglo American P2",
    "Animation SA",
    "Anions, Clear Water Office Park",
    "APJ Computer Solutions and Technologies",
    "APL Cartons",
    "Applewood Preparatory School",
    "Aqua Springs",
    "A Re Kanyeng Leseding Development Initiatives",
    "Arethabeng Primary School_",
    "Argotex Engineering",
    "Aspect Institute",
    "Atlantis Rotary Club",
    "Atlantis School of Skills",
    "Auto Express - RMI Accredited Car & LDV Workshop",
    "Auto Rust Control",
    "Aviok",
    "Avondale Primary School",
    "Axcelerate Outsourced",
    "Azania Food Farm",
    "Bafokeng Auto Centre",
    "Bambalele Attorneys",
    "Banareng Day Care Centre",
    "Barons Durban",
    "Bathusheng Centre",
    "Bellamoon Spa",
    "Bellamy Wines",
    "Berzelia Primary School",
    "Bestway Connect",
    "Better Good",
    "Better Good Jntm",
    "Bhekithemba Primary School",
    "Billal Panel Beaters",
    "Bizfarm Venture Accelerator",
    "Black IT Forum",
    "BLC Academy",
    "Blossom Care Solutions",
    "Bluespec Holdings",
    "Body Rite Auto Sprayers",
    "Boitumelo Secondary School",
    "Boland and Payroll",
    "Boland Payroll & Tax Services",
    "Bonamanzi Game Reserve",
    "Bongani Ngobeni Motor Spares",
    "Bontebok National Park",
    "Boschendal Hospitality (Pty) Ltd",
    "Boschendal Wine Estate",
    "Botsalo Primary School",
    "Boundless Consulting",
    "Boys and Girls Club of Protea Glen",
    "Boys and Girls Club of South Africa",
    "BP Mabopane Station",
    "BP Soshanguve",
    "B Queens trading",
    "B Queen's Trading Company",
    "Bright Path",
    "Bright Path Business Consultants Inc",
    "Brite Wave Group",
    "Broadband Infinities",
    "Buffalo International Logistics",
    "Bull Brothers Holdings",
    "Bumbanani Primary School",
    "Bumba Signs",
    "Bumbatech",
    "Burg-R",
    "Butterfly Palliative Home",
    "Buzwe Bethu Textile Prints",
    "C3 Academy",
    "Cable 5",
    "Campaigning for Cancer",
    "CAP",
    "Cape Town International Convention Centre (RF) SOC Ltd",
    "Cappuccinos Thaba Mall Shop",
    "Care Accounting & Tax Pty Ltd",
    "Cassia Restaurant",
    "Cele Tyres & Projects",
    "Ceres High School",
    "Chefs Hangout",
    "Chef with Compassion",
    "Chez Alina Restaurant",
    "Chippa Agric Services",
    "Chippa Agri Services",
    "Chippa Holdings",
    "Chippa Training Academy",
    "Chrome Mine Primary School",
    "Chrystal Springs Private School",
    "Cinga Phambili Software",
    "City of Tshwane Emergency Services Training Academy",
    "City Stationers",
    "City Tyres and Auto Repairs",
    "Clico Boutique Hotel and Restaurant",
    "Clothing Junction",
    "CNA Thabazimbi",
    "CoCre8 Technology Solutions",
    "Codeflux",
    "Columba Leadership",
    "Columba Leadership-Free State",
    "Commercial Transport Academy",
    "Community Action Partners",
    "Community Careers Agency",
    "Community Care Project",
    "Community Care Project - KZN",
    "Conqueror Technologies",
    "Crazy Store",
    "Creative Emphatics",
    "Cromwell & Associates INC",
    "Crystal Care Foundation",
    "CSIR",
    "CSIR BIDC",
    "CSIR Pretoria",
    "Cyamthembu Architecture (Pty) Ltd",
    "D&B Moldenhauer Trust",
    "Dekwakwas",
    "Department of Education",
    "Department of education ECD section",
    "Devine Touch Tyres",
    "Diamonds of Africa",
    "Digitally Legal",
    "Digital Practitioner",
    "Dimbaza Fibres (Pty) Ltd",
    "Diodi Primary School",
    "District Teacher Development Centre  Tshiya",
    "Divine Touch Wheel & Tyres Auto",
    "DN Erasmus Farming (Pty) Ltd",
    "Dominion Sportswear",
    "Donaventa Holdings la Dixon Batteries",
    "Doubletree",
    "Drama for Life",
    "Dreamztech",
    "Dunlop K&K Tyres",
    "Durban Central Panel Beaters",
    "Durban Manor Hotel",
    "Dwaalboom Circuit",
    "Eagle Media",
    "Easy Parts",
    "Easy Riders",
    "Easy Way Riders",
    "Easyweb",
    "Echo Medias (Adams Mission)",
    "EconoBEE",
    "Ecubbed",
    "Edu Sport",
    "EduSport Youth",
    "Ekoneni Lounge",
    "ELECTROLUX SOUTH AFRICA (PTY)LTD.",
    "Eleven26 Immigration & Training",
    "Emakheni Cleaning and Industrial Solution",
    "Emakheni Group",
    "Emancipation Rehabilitation Centre",
    "Emerald Creative Studios (PTY) LTD",
    "Emily's Playschool",
    "Empowered Homes",
    "Empowerment Consulting (Pty)",
    "Empower You",
    "Engen Garage",
    "Enlabeler",
    "Esangweni high school",
    "Esotho Construction",
    "Ethekwini Neighbourhood Watch NPC",
    "Eureka High School",
    "Executive Mind",
    "Eyadini Lounge",
    "False Bay Primary",
    "Fancourt",
    "Fancourt Hotel",
    "Farren Auto Tyres and Panel",
    "Farren's Tyres",
    "Fast Wise Track Auto Repairs",
    "Fielding Dreams",
    "Finware Enterprise Systems",
    "Firmenich (Pty) Ltd",
    "First Assist,140 daisy Street, Sandown, Sandton, 2196",
    "FK Mechanical Repairs",
    "Flanagans Halfway",
    "Focus On The Family Africa",
    "Focus on the Family Cube house",
    "Food Lovers Market",
    "Foraha Clinic",
    "FS Infrastructure",
    "Fuluthelo Special School",
    "Fusion Secondary School",
    "G6 Holdings",
    "Galxcoc",
    "Ga-Maja Egg Laying Project",
    "Gas Accounting",
    "Gateaways Tracing Services",
    "Gauteng Printworks",
    "Gehring CNC Plasmacut",
    "Gehrring Engeering (Pty) Ltd",
    "Genesis Hub Health",
    "Genplay Foundation",
    "Gerona Communication and Project",
    "Gidani Business Solutions",
    "Gina's Daycare",
    "Giyani Science Centre",
    "Global Teachers Institute Kgoloko Secondary School",
    "Glomo Solutions",
    "GMG Holdings",
    "Graduate Arts Projects",
    "GREEN Solar Academy(Pty) Ltd",
    "Green Solar Centre",
    "Groenfontein Layers",
    "Group 6 Holdings",
    "GTI",
    "Guala Closures",
    "Halfway Auto",
    "Halfway Howick",
    "Halfway Malanda",
    "Halfway Portshepstone Shelly Beach",
    "Halfway Shelly Beach",
    "Halfway Toyota Fourways",
    "Halfway Toyota Honeydew",
    "Halfway Toyota Ottery",
    "Halfway Toyota Scottburgh",
    "Halfway Toyota Shelley Beach",
    "Hall Longmore Infrastructure Pty",
    "Hallmark Auto",
    "Hamilton Makhanya High School",
    "Heuningvlei Primary School",
    "Hidden Bliss an Villas",
    "Hillcrest AIDS Centre Trust",
    "Hlahlelicious PTY Lt",
    "Hlanunathi Projects",
    "Hlumisa-Nurture Training and Development (Pty) Ltd",
    "Holders Car Clinic",
    "Holy Hill Guesthouse",
    "Hoopers Volkswagen Durban",
    "Hotchefs Event Food Services",
    "House 87 Limbono",
    "Hout Bay United Football Community (HBUFC)",
    "Hunters Retreat Hotel",
    "Hyatt Regency Hotel",
    "IABC Group",
    "IDZ",
    "Iinkumbuzo Photography",
    "Ikhwezilomso Educare",
    "Imbalasi Primary School",
    "Imbali Tyre & Car Shop",
    "IMBE Enterprise Incubator",
    "Imbeleko Dr Seni Myeni Foundation",
    "Imbewu",
    "Imbewu Yokuphila",
    "Imbilla Digital Agency",
    "Imbokodo Woman In Business NPC",
    "Imiom Contractor",
    "Imivuyo Multipurpose (Pty) Ltd",
    "Imivuyo Multi Purpose (Pty) Ltd",
    "Impilo Life Community Centre",
    "Imzamo Yomfazi NPC",
    "Indilang, Maroan Square",
    "Inga's Coffee Shop",
    "Inhlangano Primary School",
    "Insaf Projects CC",
    "Intense Protection and Tourist Services",
    "International Hotel School",
    "Intshontshwane",
    "Iqiniso Forensic Investigators",
    "Isambulo Youth Development Centre",
    "ISS Kickstart",
    "Istores Primary School",
    "Italian SA Chamber of Trade and Industries",
    "Itireleng Secondary School",
    "Izingweti ICT Solutions",
    "Jabulani Dlab Precints",
    "Jabulani Safe Hub",
    "Jabulani Safe-Hub Edufootbootball",
    "Jake Mabokela Training & Educational Services Pty Ltd",
    "Johannesburg Development Agency",
    "Josephine Makhanya Primary School",
    "Jubileeskraal Farm",
    "JumpStart Foundation Trust",
    "Just Grace NPC",
    "KA Diagnostic and Repair",
    "Kaolin-Group",
    "Kappoochka Restaurant",
    "Karabo Makgamatho",
    "Kasa Primary School",
    "Kenote Finance",
    "Kenote Finance (Pty) Ltd",
    "Kgutsong Pre School and Creche",
    "Khanyisa Solar and Panels",
    "Khayelitsha Travel And Tours",
    "Khindlimukani Junior Secondary School",
    "KhulaSizwe Primary School",
    "Khulisa DEAFSA",
    "Khulisa Social Solutions",
    "King and Queen Panel and Paint",
    "Kiteview",
    "Kitso Botlhale Development Services",
    "K&K Tyres",
    "Kliff Connect (Pty) Ltd",
    "KM Charted Accountants",
    "KM Chartered Accountants SA",
    "Kronendal Primary School",
    "Kuhle Nails And Beauty",
    "KwaBafana Food and Restaurant",
    "Kwadukathole Comprehensive School",
    "KZL Engineering (Pty) Ltd",
    "Laerskool Koedoeskop",
    "Laerskool Mariepskop",
    "Laka Accountant",
    "Laka Accountants",
    "Land of the Living",
    "Lathitha's Day Care",
    "L&D Salt",
    "Lead Development",
    "Leap 4",
    "Leap Institute",
    "Leap School",
    "Leap Science and Maths School",
    "Lebelo Rasebeoye Attorneys",
    "Leratong Primary School",
    "Lerthoka Tech",
    "Lesedi La batho",
    "Lesedi la Bophelo",
    "Les Stains 6",
    "Les Stains Laundromat and Cleaning Services",
    "Letjhabile Libalele Nursing School",
    "Lettd Cleaning and Laundry Services",
    "Lettd Trading Project",
    "Lexus Fourways",
    "LG Auto Repairs",
    "Libra Health Solutions (Pty) Ltd",
    "Life Choices",
    "Life Health Care",
    "Lihle's Daycare Center",
    "Limacon",
    "Limbono House 87",
    "Limu Lab",
    "Link Sportswear",
    "Litklean Chemical",
    "Little Champs",
    "Little's Day Care",
    "Livestock Wealth",
    "L&L Electrical",
    "Loltekile Primary School",
    "Lorge Consulting",
    "Louis Furniture",
    "Love Birds Day Care Centre",
    "Lucob Palace Bread and Breakfast",
    "Lugaju Innovations (Pty) Ltd",
    "Lukhanyo Farming",
    "LulaBet",
    "Lulibo Internet Solutions",
    "Luluco Place",
    "Lumkani",
    "Lumkani Safer Together",
    "Lusikisiki District Teacher Development Center",
    "Luzuko Day Care Centre",
    "Luzuko Primary School",
    "Mablex Tutoring",
    "Maboloka HIV/AIDS  Awareness Organisation",
    "Mabopane Auto Centre",
    "Mabulane and Sons",
    "MacMillan",
    "Madikoti Putsoa Primary School",
    "Madutle Primary School",
    "Makanatla Consulting and Projects",
    "Makhaya Stones",
    "Makhaya Stonewoks",
    "Malibongwe Resturant",
    "Mampoi Trading",
    "Mandela Century",
    "Man Energy Solutions SA (Pty) Ltd",
    "Ma- Ntlapo and Conferencing",
    "Mapapila Primary School",
    "Marblex Tutoring",
    "Mark White Nissan",
    "Mark White Nissan Amanzimtoti",
    "Masa Aqua",
    "Masonwabe Day Care Centre",
    "Master Mind Educare",
    "Matshediso After Care Home Work",
    "Mbalasi Primary School",
    "Mbali Tyres",
    "Mecedes Benz",
    "Mema Designs",
    "Mercedes-Benz Commercial",
    "Metanoia Payroll Services",
    "Midas - Kempton Park",
    "Mkhonto Consulting",
    "Mobice Consulting",
    "Mobicel",
    "Mochachos Mokopane",
    "Mohamed B Motors",
    "Mohoai's Internet Café",
    "Moldenhauer Group",
    "Moldenhauer Highway",
    "Moldenhauver Group",
    "Molele Attorneys",
    "Monster Projects Cooperative",
    "Morris Isaacson Centre for Music",
    "Mothibistand Teacher Development",
    "M-Power IT Solutions",
    "MSA Mahlangu Exclusive Events",
    "Msitshana Attorneys",
    "Mulax Electronics",
    "Multirooms Management (Pty) Ltd",
    "Multi Rooms Manangement (Pty) Ltd",
    "Murangaphanda Projects Civil Engineering and General Construction",
    "Mvelaphanda Primary School",
    "Mxenge 80 Cooperative",
    "MZ Butchery",
    "Mziyaphi Trading CC",
    "Nabai Foundation",
    "Naletsana Combined",
    "Nazim Security",
    "Ncihana Junior Secondary School",
    "Ncumisa Chartered Accountants and Auditors",
    "Ncumisa Services Accountants",
    "Ndash Food Concepts",
    "Ndulwini Primary School",
    "Ndwedwe District Teacher Development Centre",
    "Neon Energy (Pty) Ltd",
    "Netcare YES Ulusha Hub",
    "Netcobex Pty Ltd",
    "Netcobex (Trading as Ulutha)",
    "Network Associates",
    "New City Stationers",
    "Newell High School",
    "New Era Telecoms",
    "New-Gens Supplies and Logistics",
    "Ngwanamatlang Secondary School",
    "Niani, Tshipise tsha",
    "Niche Consulting",
    "Nicro Soweto",
    "Nights Bridge",
    "Nkqubela Technologies",
    "NMI Durban South Motors t/a Beyond Mobility",
    "Nombasa Craft",
    "Noord Civils",
    "Northam Comprehensive School",
    "Northam Police Station",
    "Northam Primary School",
    "Northern Cape Rural TVET  College",
    "North West University",
    "North-West University",
    "Nosicelo Educare Centre",
    "Nottingham Road Primary School",
    "Novensi Organisation",
    "Noxolo Touch for Beauty and Perfection Spa (Pty) Ltd",
    "Nsete Primary Co-operative",
    "NS Mosebi Tyres",
    "Ntshontshwane PTY(Ltd)",
    "Nyambose Mechanic Autoparts",
    "Oasis Thabazimbi",
    "Okomelang Primary School",
    "Olifantsdrift Primary School",
    "OmKhulu Trading and Project",
    "Omni Africa",
    "OnePlan Insurance",
    "Orion Organization",
    "OS Holdings",
    "Oupadotcom Consulting",
    "Ovondlo District Teacher Development Centre",
    "Panelbeaters and Spray Painting",
    "Park Inn",
    "Park Rynie Motors",
    "Parkview Primary School",
    "PDY Enterprise (Pty) Ltd",
    "Pella Moravian Primary School",
    "Pen IT Solutions",
    "Pepzin Caboose",
    "Perfectify Travel",
    "Petal M Africa Group",
    "Petlam Africa Group",
    "Phola",
    "Phulo ya Morafe Foundation",
    "Pieter Longeveldt Primary School",
    "Pinnacle Accounting",
    "Pizza Hut",
    "Plankomat SA",
    "Plenitude de Wellness INC",
    "Plett F.C",
    "Point S Westmead",
    "Polyoak Packaging",
    "Polyoak Trading",
    "PostNet",
    "Preffered Solutions",
    "Premier Hotel",
    "Premier Hotel Cape Town",
    "Premier Hotel Splendid Inn",
    "Premier Hotel Umhlanga",
    "PrintDotCom",
    "Protea Hotel",
    "Protea Park Primary School",
    "Protem Primary School",
    "Proteus Secondary School",
    "Quodes",
    "Quro Medical",
    "RAB Agri (Pty) Ltd",
    "Raddison Blu",
    "Radisson-Blu Hotel",
    "Radisson Blu Hotel Durbarn Umhlanga",
    "Radisson Blu Hotel Waterfront",
    "Radisson Blu Waterfront",
    "Raizcorp Namya",
    "Ramkiki Lodge",
    "Ramokoka Stand",
    "Ramphi Security",
    "Ran Naidoo and Associates cc",
    "Rare Diseases SA",
    "Rathawa Finance and Burial Society",
    "Rayburn Consulting Pty Ltd",
    "Reaboka Foundation",
    "Reakgona Disability Centre",
    "Realistic CYCC",
    "Realistic (Leap Institute)",
    "Realistic (Leap Science & Maths School)",
    "Realth Capital Holding Pretoria",
    "Realth Capital Holdings",
    "Recadi Technologies",
    "REC Solar",
    "Red Elements (Pty) Ltd",
    "Red Ember",
    "Red Ember Technology",
    "Redfine Holdings",
    "Red Sand Country Lodge",
    "Regorogile Guest House Spa and Conference",
    "Reliable Guards Securiry and Cleaning",
    "Rena Le Lona Creative Centre for Children",
    "Renew It - BlueSpec Holdings",
    "Re-New it Randburg",
    "Re-New it Sandton",
    "Rentoza",
    "Republic",
    "Reserved Projects",
    "Reshomile Primary School",
    "Rethabile Amandebult Crech",
    "Revolution Media Academy",
    "Rex Diff 3",
    "Rex Diff and Gearbox",
    "Reygersdal Primary School",
    "Rietenbosch Primary School",
    "Rise Up Kiddies",
    "Rise Up Primary School",
    "Road Accident Fund",
    "Roar Construction",
    "Robin Hills Primary School",
    "Robinvale High School",
    "Robs CV Joints and Suspension Repairs",
    "Roosevelt Academy",
    "Roosevelt Primary School",
    "Rubi Blue",
    "SAC11/Tsom",
    "SACII",
    "Safe HUB Alex",
    "Safe-Hub Diepsloot",
    "Safe-Hub Tembisa",
    "Sage",
    "Sakhile Panel Beaters",
    "Saldanha Bay Accomodation",
    "Salt and Partners",
    "Sambesiwe Day Care",
    "Sanctuary Mandela Hotel",
    "Sandsloot Youth Development",
    "SAPS",
    "Saxonsea Primary School",
    "SCAGA",
    "School 4 U (Pty) Ltd",
    "SD Imbali Engineering (PTY) LTD",
    "Secret Sithela",
    "Sederberg Contractors",
    "Sefako Makgatho Health Sciences University",
    "Sekwanelengithemba NPO",
    "Senza Cosmetics (Pty) Ltd",
    "Serengeti Golf and Wildlife Estate",
    "Shadreck Transport",
    "Shirinda Primary School",
    "Siceluthando EducareCetre",
    "Silulo Business Solutions",
    "Silulo Ulutho Foundation",
    "Silulo Ulutho Technologies",
    "Sinakokonke Day Care Centre",
    "Sinfotech",
    "SIOPSA",
    "Sisemoyeni Networking",
    "Sisonke Hydraulics and Engineering Propriety limited",
    "Sisonke Hydraulics and Engineering (Pty) Ltd",
    "Sithandizingane Care Project",
    "Siyafunda Tours t/a Youth@worK",
    "Siyathokoza Primary School",
    "Smart Diva Trading",
    "Smart Royal Solutions",
    "Snow Flake Technologies",
    "Socamie Solution Pty Ltd",
    "SofSolutions",
    "Software AG",
    "Soill",
    "Solana Energy",
    "Solomon Auto and Panel/Mziyaphi Trading CC",
    "Soma F.C",
    "Soma Solutions",
    "Soma Workshop",
    "Something Monti Pty Ltd",
    "Sonwabo Primary School",
    "South African Chefs Association",
    "Spanish Chamber of Commerce RSA",
    "Sparrow Combined Technical Skills School",
    "Sparrow Foundation School",
    "Sparrow School Educational Trust",
    "Sparrow Schools",
    "Spar Thabazimbi",
    "SPCA",
    "Splendid Inn Umhlanga",
    "Spot on Fire",
    "Spur Thabazimbi",
    "Spys Catering",
    "Station Auto Sounds",
    "St. Augustine's RC School",
    "Stellenbosch University",
    "Step Ahead Bakery",
    "Stepping Stones Academy",
    "Sterkspruit District Teacher Development Center",
    "St. Francis Links Resort",
    "Sthombe Developments (Pty) Ltd",
    "Strandfontein Secondary School",
    "Sundown Country Estate",
    "Sunflare Traders Preferred Solutions",
    "Sunshine Kiddies Educare",
    "Supa Quick Pinetown",
    "Supreme Cyber Security",
    "Suray Clothing",
    "Swellendam Local Municipality",
    "Swellendam Secondary School",
    "Syakha Wuleza Electrical (Pty) Ltd",
    "Synkx",
    "Taj Hotel",
    "Takuva Attorneys",
    "TANC Utility Wear",
    "Teamwork Africa Group (Pty) Ltd",
    "Team Work Africa (Pty) Ltd",
    "Technostar",
    "Techsprung, Transwerke Building",
    "TED Head Office",
    "Tembisa Hospital",
    "Tenone Venture Group",
    "Tens Automotive",
    "Test Host Site",
    "TForge (Pty) Ltd",
    "Thabakhibidu Primary",
    "Thaba Mall",
    "Thabang Drop In Centre",
    "Thangthini Primary Co - Op",
    "Thanz Beauty Itsoseng",
    "The Black Sheep Cradock",
    "The Brokers Learning Centre (Pty) Ltd",
    "The Bush Camp Site",
    "The Bush Lodge Campsite",
    "The Fountain School",
    "The Genius Academy",
    "The Happy Uncles Restaurant",
    "The Holy Hill B&B",
    "The Home Squad",
    "The Innovation Hub",
    "Thekganang Technical Secondary School",
    "Thekwane Holdings",
    "Thekwane Logistics",
    "The Legal Hub",
    "Thenga Holdings",
    "The Octavia Boutique Hotel",
    "The South African Depression and Anxiety Group",
    "The Widowed Foundation",
    "The Zone Pub & Grill Emndeni",
    "Thulisile Financial Services",
    "Thusanang Primary School",
    "Thusanganageno Youth Empowerment",
    "Thusong Youth Centre",
    "Thuto Bokamoso Day Care",
    "Tigrana Mix",
    "Time Clothing",
    "Times 3 Technologies",
    "Tiny Tots ECD",
    "TiroClif Services",
    "Titan Properties",
    "Tivumbeni Teacher Centre",
    "TMAC Distribution,",
    "TMGG  Amahlongwa Mission",
    "TMP Consulting Solutions",
    "TNS Truss & Timber",
    "TNT Management Consultants",
    "Together Community Project",
    "Tolo Car Clinic",
    "Total Energies",
    "Tourism Shine",
    "Toyota",
    "True Vines",
    "Tshaile Secondary School",
    "Tshiamo Capital",
    "Tshiya College of Education",
    "Tshiya Teacher Development Centre",
    "Tshwane South TVET College",
    "Tsutso Consulting",
    "T.T Dyantyi Inc",
    "Tyre and Auto Durban",
    "Tyre and Auto Pinetown",
    "Ububele Education and Psychotherapy Trust",
    "Ububele Education Psychotherapy Trust",
    "Ubuntu Maths",
    "Ukhanyo Travel and and Events",
    "Ulwazi Center",
    "Umduduzi Hospice for Children",
    "Umgalelo Africa",
    "Umgalelo Products(PTY)(ltd)",
    "Umgoshongo",
    "Umlazi Discount Hardware",
    "Umqondowethu",
    "Umuziwesizwe pty ltd",
    "Unisource Software Services",
    "Unity Comprehensive School, UPEP",
    "Unity Discount Hardware",
    "Unity Discount Hardware Illovo",
    "Unsource Software Services",
    "Upep",
    "UPEP/ Unity Comprehensive School",
    "Uthuthuko Holdings (Pty) Ltd",
    "Vaatjie Mor Primary School",
    "Van Wyksvlei Primary School",
    "VB Consulting",
    "VBE Couriers",
    "Vertex Auto",
    "Victory  Christian School",
    "Viewmax Interactive Media",
    "Vizi Solutions",
    "Vondlo District Teacher Development Centre",
    "Vukucinge Primary School",
    "Vukuzenzele Primary",
    "Vuleka SSB High School,7June Avenue Bordedux Randburg",
    "Vusani Primary",
    "Waterglen Poultry Farm",
    "Water Kiosk SADC",
    "Waumbe Youth DevelopmeNT Centre",
    "Wear Your Brand",
    "Wenzo Trading and Projects",
    "West Coast District Office Department of Education Cape Town",
    "West End Midas",
    "Western Cape Education Department",
    "Widowed Foundation",
    "Wimpy Thabazimbi",
    "Witsand Primary School",
    "Wits University",
    "W Mdlangazi Attorneys",
    "Work Inn Pty Ltd Internet Café",
    "Wytespace (Pty) Ltd",
    "X Royale Studios",
    "Yam Business Solutions",
    "YEM Online Education",
    "Yende Engineering",
    "Yenza Busha IT",
    "Yes Ulusha Hub",
    "Yinyang Auto Spares",
    "Y Jamodien & Associates",
    "YLED",
    "Y Motors",
    "Youthatwork",
    "Youth Employment Services",
    "Youth in Your Oceans",
    "Youth Leadership and Entrepreneurship Development",
    "Youth@work",
    "Youth@WORK",
    "Youth@Work, 410 Jan Smuts, Craighall, Burnside Island Office Park, Randburg, 2196",
    "youth@WORK - Eastern Cape",
    "youth@WORK - KwaZulu Natal",
    "youth@WORK - Western Cape",
    "Ysterberg Primary",
    "Zamz Health and Skin Care",
    "Zayo Sports Academy",
    "Zithathele Primary School",
    "ZM Independent Accountants",
    "Zola Gateway Clinic",
    "Zondi Line",
    "Zondi Line Randfontein",
    "Zondiline Tyres",
    "ZS Consulting",
    "ZT Gcowtela Incorporated",
    "Zyle Clothing Mall of Africa",
];

export default HOST;

const host_options = HOST.map((c) => ({ label: c, value: c }));

export { host_options };