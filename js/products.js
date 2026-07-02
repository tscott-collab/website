const PRODUCTS = [
  {
    "title": "Mother Earth",
    "handle": "copy-of-midnight-melody",
    "category": "Candles",
    "note": "cedarwood \u00b7 dirt \u00b7 earth",
    "desc": "Walk through a post-rain forest with Mother Earth\u2014a grounding fragrance that captures moss, fresh soil, and the unmistakable scent of petrichor. A very\u2026",
    "price": "From $14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/c23255bc-e038-44d7-91f5-4c4289699fab.png?v=1778805860"
  },
  {
    "title": "Volcano - Capri Blue Dupe",
    "handle": "copy-of-pain-perdu",
    "category": "Candles",
    "note": "Cream \u00b7 french toast \u00b7 maple",
    "desc": "Uplift your spirits with Spiritual Citrus! Our unique blend of mandarin and pineapple is sure to tantalize your taste buds with its sweet and tangy\u2026",
    "price": "From $18",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/volcano.jpg?v=1710200730"
  },
  {
    "title": "Fruit Loops",
    "handle": "copy-of-spiritual-citrus",
    "category": "Candles",
    "note": "lemon \u00b7 lime \u00b7 pineapple",
    "desc": "Toucan's Carnival evokes childhood memories with its delightful mix of sweet orange, tangy cherry, and creamy vanilla bean balanced by naturally earthy\u2026",
    "price": "From $18",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/u8758427663_A_soft_nature-inspired_scene_featuring_a_plain_am_158195ef-f865-49bd-983d-675562bfd983_3.png?v=1751742046"
  },
  {
    "title": "Cashmere Woods",
    "handle": "cashmere-woods",
    "category": "Candles",
    "note": "amaretto \u00b7 balsam \u00b7 light musk",
    "desc": "Soft cashmere & warm woods. A layer of powder with sweet amaretto, tonka, balsam, musk and deep out.",
    "price": "$28",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/u8758427663_An_outdoor_woodland_scene_featuring_a_plain_amber_0af2c834-ed68-4268-b948-3a680fa28156_3.png?v=1751742521"
  },
  {
    "title": "Warmer for tins",
    "handle": "warmer-for-tins-limited-quantity",
    "category": "Home & Extras",
    "note": "warmer \u00b7 wax melt",
    "desc": "These are used to warm up your wax tin. You can use a mug warmer or dual wax melter.",
    "price": "$12",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/61hbbdFgfEL-PhotoRoom.jpg?v=1700271948"
  },
  {
    "title": "Room Sprays",
    "handle": "4oz-room-linen-spray",
    "category": "Home & Extras",
    "note": "",
    "desc": "Four room sprays for every mood\u2014Sea Salt & Agave, Spa, Zen, and Sea Spray.",
    "price": "$10",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/Default_Sea_Salt_Ocean_Sage_Complex_double_exposure_art_by_Ale_25.jpg?v=1716845566"
  },
  {
    "title": "8 oz Wickless Candles (Wax Melts)",
    "handle": "wickless-candles-wax-melts",
    "category": "Wax Melts",
    "note": "wax melts \u00b7 wickless",
    "desc": "Flame-free wax tin melts\u2014the same rich fragrance, without a wick, soot, or open flame.",
    "price": "$13",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/PhotoRoom_20231126_164737_b0f36d6a-5a90-4cf5-82f5-ea04d9772173.jpg?v=1702252888"
  },
  {
    "title": "Incense Holder",
    "handle": "lotus-incense-holder",
    "category": "Home & Extras",
    "note": "concrete \u00b7 Incense",
    "desc": "Unique and playful Lotus Incense Holder. Handmade with concrete, each vessel is shaped like a lotus flower and weighs one pound. No two are alike, making\u2026",
    "price": "$12",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/black-Photoroom_65365269-0ddc-4d9d-926b-08e9032e2816.png?v=1709257416"
  },
  {
    "title": "Velvet Vanilla",
    "handle": "velvet-vanilla",
    "category": "Candles",
    "note": "jasmine \u00b7 light musk \u00b7 ozone",
    "desc": "At the top, there is a delicate, light vanilla scent paired with a touch of midnight air to start things off. In the heart, a dreamy combination of night\u2026",
    "price": "$22",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/Default_Medium_Photograph_Subject_A_composition_of_items_incl_0.jpg?v=1710361519"
  },
  {
    "title": "32 oz Candle (Special Order)",
    "handle": "32oz-candle-special-order-only",
    "category": "Candles",
    "note": "",
    "desc": "Introducing our 32oz, 60-hour candle. Handmade concrete vessel with 9 wicks for an impeccable burn. Customize your experience with preferred scent and\u2026",
    "price": "$55",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/Photoroom_20240311_203642.jpg?v=1710204377"
  },
  {
    "title": "Black Honey",
    "handle": "black-honey",
    "category": "Candles",
    "note": "",
    "desc": "Inspired by the darker side of honey, this fragrance blends warm spice, tobacco leaf, cedarwood, incense, and soft smoke into a scent that lingers long\u2026",
    "price": "$25",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/fa6b0cd5-75d2-4156-950f-1418bbb762b8.png?v=1778804243"
  },
  {
    "title": "Candle Business E Book",
    "handle": "candle-business-e-book",
    "category": "Home & Extras",
    "note": "Digital \u00b7 Ebook",
    "desc": "Welcome to the ultimate guide for aspiring candle entrepreneurs! In this ebook, we cover all the essentials you need to start your own candle business,\u2026",
    "price": "$9.99",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/FullSizeRender.jpg?v=1717708534"
  },
  {
    "title": "Magnesium Spray",
    "handle": "magnesium-spray",
    "category": "Body & Bath",
    "note": "magnesium",
    "desc": "A soothing magnesium spray to ease tension and support restful sleep.",
    "price": "$10",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/grok-image-48f72075-2660-47d9-9f17-bd30befeef54.jpg?v=1772058216"
  },
  {
    "title": "Nourish & Renew Eye Roller",
    "handle": "nourish-renew-eye-roller",
    "category": "Body & Bath",
    "note": "argan \u00b7 Frankincense",
    "desc": "Nourish & Renew Eye Roller: An organic blend of oils for your delicate eye area. Hydrates, soothes, and reduces fine lines, wrinkles, dark circles, and\u2026",
    "price": "$13",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/rollerballfinal-Photoroom.jpg?v=1720313782"
  },
  {
    "title": "Forgotten Cellar",
    "handle": "forgotten-cellar",
    "category": "Candles",
    "note": "halloween",
    "desc": "Introducing Forgotten Cellar, the limited edition creepy scent perfect for Halloween. With notes of dust, mildew, and aging wood, it captures the eerie\u2026",
    "price": "From $20",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/basement.jpg?v=1729031402"
  },
  {
    "title": "Sweater Weather",
    "handle": "sweater-weather",
    "category": "Candles",
    "note": "apple \u00b7 jasmine \u00b7 peach",
    "desc": "Sweater Weather is the perfect fragrance for those cool autumn and winter days. With refreshing notes of mint, paired with the subtle hints of green\u2026",
    "price": "From $15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/sweaterweather2.jpg?v=1724976163"
  },
  {
    "title": "Serenity Skin Elixir",
    "handle": "serenity-skin-elixir",
    "category": "Body & Bath",
    "note": "face oil \u00b7 spa",
    "desc": "Experience the luxurious blend of nature with our Serenity Skin Elixir, a nourishing roller ball oil crafted from Almond Carrier Oil, Frankincense, and\u2026",
    "price": "$14.99",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/serenityphoto.jpg?v=1728525816"
  },
  {
    "title": "Amber Hollow",
    "handle": "amber-woods",
    "category": "Candles",
    "note": "amberwood \u00b7 oak \u00b7 truffles",
    "desc": "Warm, rich, and alluring, Amber Woods is a fragrance that lingers like a forgotten story. Golden amber and aged oak create a deep, resinous warmth, while\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/8_am_amber_hollow.png?v=1780260720"
  },
  {
    "title": "Lychee + Sugar",
    "handle": "lychee-sugar",
    "category": "Candles",
    "note": "apple \u00b7 eucalyptus \u00b7 jasmine",
    "desc": "A scent that sparkles at first breath, Lychee + Sugar blends juicy exotic fruit with soft floral notes and a delicate creaminess beneath. Ripe red lychee\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/35deb704-aa3c-4cf5-bf3f-f43acf2115ed.png?v=1778805506"
  },
  {
    "title": "Breeze + Salt",
    "handle": "breeze-salt",
    "category": "Candles",
    "note": "amber \u00b7 cardamom \u00b7 mandrin",
    "desc": "Clean, airy, and quietly coastal, Breeze + Salt captures the stillness of early morning by the sea. A whisper of cardamom and citrus opens the air,\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/84b7428b-d46a-475b-8111-c7249e962978.png?v=1778804137"
  },
  {
    "title": "Crimson + Cedar",
    "handle": "crimson-cedar",
    "category": "Candles",
    "note": "caramel \u00b7 cassis \u00b7 cedarwood",
    "desc": "Deep and atmospheric, Crimson + Cedar blends dark fruit and warm woods into a rich, sultry composition. Juicy plum and cr\u00e8me de cassis open the air,\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/crimsonandcedar.png?v=1778802610"
  },
  {
    "title": "Stone + Sea",
    "handle": "stone-sea",
    "category": "Candles",
    "note": "amber \u00b7 lemon \u00b7 musk",
    "desc": "Elemental and enduring, Stone + Sea blends the cool stillness of coastal cliffs with the rhythmic pulse of saltwater air. Bright citrus and marine top\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/38eb6330-7663-4288-bfa4-b491297a7662.png?v=1778802248"
  },
  {
    "title": "Bloom + Steep",
    "handle": "bloom-steep",
    "category": "Candles",
    "note": "lemon \u00b7 peach \u00b7 sugar",
    "desc": "Crisp, sweet, and unmistakably Southern, Bloom + Steep captures the essence of fresh-brewed iced tea sipped slowly in the shade. Juicy peach and tender\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/bloomandsteep.png?v=1778802095"
  },
  {
    "title": "The Commonwealth",
    "handle": "the-commonwealth",
    "category": "Candles",
    "note": "bourbon \u00b7 cedarwood \u00b7 lemon",
    "desc": "Rooted in tradition and softened by time, The Commonwealth is a scent built on strength, warmth, and quiet refinement. Notes of spiced bourbon and aged\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/73b50cff-e66a-40ae-bf50-c27f5cbcd084.png?v=1778801952"
  },
  {
    "title": "Coco + Leaf",
    "handle": "coco-leaf",
    "category": "Candles",
    "note": "coconut \u00b7 musk \u00b7 orange",
    "desc": "Notes of light citrus, spice, coconut, vanilla and musk",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/948de704-7e26-43bf-b219-3abb10c3d6a9_7f986b75-e99f-4a69-b881-add60fe58da8.png?v=1778804065"
  },
  {
    "title": "2 oz Body Sprays",
    "handle": "2-oz-body-sprays",
    "category": "Body & Bath",
    "note": "body spray",
    "desc": "Coconut Vanilla: Amber, marshmallow, and sea breeze \u2014 a luxe take on the beach scent you didn\u2019t know you needed.",
    "price": "$7",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/Photoroom_20250329_213341.jpg?v=1743298979"
  },
  {
    "title": "Signature Wax Melts",
    "handle": "untitled-mar30_11-60",
    "category": "Wax Melts",
    "note": "wax melts",
    "desc": "3 oz wax melts in rotating small-batch scents, made for your favorite warmer.",
    "price": "$5",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/whitelinenwaxmelt_43815766-e437-4005-abbb-859db84d4857.jpg?v=1743351105"
  },
  {
    "title": "Whipped Tallow - Tallow + Bloom",
    "handle": "whipped-tallow-tallow-bloom",
    "category": "Body & Bath",
    "note": "almond oil \u00b7 chamomile \u00b7 honey",
    "desc": "A whipped tallow balm with raw honey and chamomile\u2014deeply nourishing for face, hands, and body.",
    "price": "$14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/tallow_and_bloom.jpg?v=1771865603"
  },
  {
    "title": "Whipped Tallow - Tallow + Bean",
    "handle": "whipped-tallow-tallow-bean",
    "category": "Body & Bath",
    "note": "coffee \u00b7 Tallow \u00b7 Vanilla",
    "desc": "Wake up your senses with Tallow + Bean, a nourishing whipped tallow blend lightly scented with warm vanilla. This rich, velvety formula melts into the\u2026",
    "price": "$14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/grok-image-3a32f033-7665-4fb6-80ee-89f1e10ec50e.jpg?v=1771865333"
  },
  {
    "title": "Coffee + Sugar",
    "handle": "coffee-sugar",
    "category": "Candles",
    "note": "coffee \u00b7 milk \u00b7 sugar",
    "desc": "A warm blend of fresh coffee, vanilla, milk, and sugar. This scent is smooth, sweet, and comforting \u2014 like your favorite morning drink in candle form.",
    "price": "From $14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/coffeeandsugar.png?v=1778803658"
  },
  {
    "title": "4 oz Gift Sets",
    "handle": "untitled-nov4_16-36",
    "category": "Candles",
    "note": "",
    "desc": "The ultimate cozy autumn duo! This gift set features two 4 oz. tin candles (8 oz. total) in our best-selling fall fragrances.",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/IMG_3640.heic?v=1762293049"
  },
  {
    "title": "All Purpose Cleaners",
    "handle": "all-purpose-cleaners",
    "category": "Home & Extras",
    "note": "cleaner",
    "desc": "Made with a plant-based cleaner base derived from coconuts, it cuts through grease and grime without harsh ingredients. Quick-drying, phthalate-free, and\u2026",
    "price": "$10",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/Photoroom_20251104_203044.jpg?v=1762306491"
  },
  {
    "title": "Oatmeal & Milk Soap",
    "handle": "oatmeal-milk-soap",
    "category": "Body & Bath",
    "note": "soap",
    "desc": "Creamy, comforting, and irresistibly gentle \u2014 this bar brings classic oatmeal and warm milk together with a rich blend of shea, cocoa, and mango butters.\u2026",
    "price": "$4",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/oatmealsoup.png?v=1762652811"
  },
  {
    "title": "Sugar Cookie Latte",
    "handle": "sugar-cookie-latte",
    "category": "Candles",
    "note": "cookies \u00b7 espresso \u00b7 Vanilla",
    "desc": "Espresso, sweet vanilla, and cookie crumbles\u2014coffee shop and dessert in one candle.",
    "price": "From $14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/flux-pro-2.0_Add_a_background_with_sugar_cookies_espressp-2.jpg?v=1766432052"
  },
  {
    "title": "Tallow & Drift",
    "handle": "tallow-drift",
    "category": "Body & Bath",
    "note": "Tallow",
    "desc": "Escape to the shoreline with Tallow + Drift, a nourishing whipped tallow blend lightly scented with seawater, coconut waterlily, driftwood, sea moss, and\u2026",
    "price": "$14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/3a32f033-7665-4fb6-80ee-89f1e10ec50e.jpg?v=1771864713"
  },
  {
    "title": "Orchid Sugar",
    "handle": "orchid-sugar",
    "category": "Candles",
    "note": "",
    "desc": "A delicate balance of blooming orchid, sugared plum, and soft violet unfolds into warm vanilla, amber, and sandalwood. Both luminous and grounding, this\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/727b83a1-f20c-4ffd-90e1-c80f7ab027f7.png?v=1778854687"
  },
  {
    "title": "Key lime custard",
    "handle": "key-lime-custard",
    "category": "Candles",
    "note": "",
    "desc": "A bright burst of fresh key lime and citrus zest awakens the senses, softened by silky vanilla cream and whipped sweetness. Beneath the tart, creamy\u2026",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/f808feae-6cf1-49b0-969d-0a996d7e5a11.png?v=1778854821"
  },
  {
    "title": "Pink Sand",
    "handle": "pink-sand",
    "category": "Candles",
    "note": "",
    "desc": "Our take on the cult-favorite Pink Sand candle\u2014soft, warm, and endlessly cozy.",
    "price": "$15",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/0df1d230-424f-457a-a64d-e1997974c8fb.png?v=1780192294"
  },
  {
    "title": "Berry + Bourbon",
    "handle": "berry-bourbon",
    "category": "Candles",
    "note": "bourbon \u00b7 strawberry",
    "desc": "Ripe strawberry, soft bourbon, and creamy vanilla come together in a rich, comforting fragrance with a sweet, velvety finish.",
    "price": "From $14",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/e8cf24fd-119e-4ec1-81d9-7f076d7e587b.png?v=1780270972"
  },
  {
    "title": "14 oz Wickless Candles",
    "handle": "14-oz-wickless-candles",
    "category": "Wax Melts",
    "note": "wickless",
    "desc": "Flame-free wax tin melts in a larger 14 oz size\u2014clean fragrance without an open flame.",
    "price": "$21",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/3f2eece7-81aa-467e-b523-3dcfabc65acb.png?v=1781708758"
  },
  {
    "title": "Bougie Bee",
    "handle": "bougie-bee",
    "category": "Candles",
    "note": "cacao \u00b7 fig \u00b7 grapefruit",
    "desc": "Golden honey drifts through a forgotten orchard where ripe fruit hangs heavy in the trees and bees move quietly between wildflowers. Bright citrus and\u2026",
    "price": "$18",
    "image": "https://cdn.shopify.com/s/files/1/0783/5212/2129/files/IMG_3663048575785510406.png?v=1782951251"
  }
];
