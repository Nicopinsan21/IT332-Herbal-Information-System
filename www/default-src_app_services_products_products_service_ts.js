(self["webpackChunkgrp3_fnlproj"] = self["webpackChunkgrp3_fnlproj"] || []).push([["default-src_app_services_products_products_service_ts"],{

/***/ 3281:
/*!*******************************************************!*\
  !*** ./src/app/services/products/products.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


let ProductsService = class ProductsService {
    constructor() {
        this.selectedCategories = [];
        this.allProducts = [];
        this.cartCount = 0;
        this.show_result_size = true;
        this.bannerImages = [
            {
                imgurl: 'assets/slideshowpic/4.jpg'
            }, {
                imgurl: 'assets/slideshowpic/5.jpg'
            }, {
                imgurl: 'assets/slideshowpic/6.jpg'
            }, {
                imgurl: 'assets/slideshowpic/7.jpg'
            },
        ];
        this.products = [
            {
                id: 1,
                imgurl: 'assets/herbalplants/akapulko.png',
                name: 'Akapulko',
                category: 'Herbal Plants',
                description: 'Ringworm Bush Bayas-bayasan This plant is about 1 to 2 meters tall. The leaves are embraced with 8 to 20 oblongelliptical shaped leaflets It has flowers with oblong sepals.',
                usesprep: '\u2022 Anti-fungal (tinea flava, ringworm, athlete’s foot and scabies) – Fresh, matured leaves are pounded. \n\n \u2022 Apply soap to the affected area 1-2 times a day.'
            }, {
                id: 2,
                imgurl: 'assets/herbalplants/ampalaya.jpg',
                name: 'Ampalaya',
                category: 'Herbal Plants',
                description: 'Bitter Gourd or Bitter melon A climbing vine with tendrils that grow up to 20 cms long. Leaves are heartshaped, which are 5 to 10 cms in diameter Fruits have ribbed and wrinkled surface that are fleshy green with pointed ends at length and has a bitter taste.Ampalaya as an alternative medicine to help alleviate various ailments.',
                usesprep: '\u2022 Diabetes Mellitus (Mild non-insulin dependent) – Chopped leaves then boil in a glass of water for 15 minutes. Do not cover. Cool and strain. Take 1/3 cup 3 times a day after meals'
            }, {
                id: 3,
                imgurl: 'assets/dryleaves/Bryophyllum.jpg',
                name: 'Bryophyllum',
                category: 'Dry Leaves',
                description: 'Bryophyllum calycinum, Bryophyllum pinnatum, also known as the Air Plant, Life Plant, Miracle Leaf, Goethe Plant and the Katakataka (Filipino)) is a succulent plant native to Madagascar.',
                usesprep: '\u2022 To prevent septic to cuts from sharp instruments, 15 leaves with four pepper corns roasted, powdered and mixed in cow ghee is applied. \n\n \u2022 Diabetes'
            }, {
                id: 4,
                imgurl: 'assets/dryleaves/Chinese Yum.jpg',
                name: 'Chinese Yum',
                category: 'Dry Leaves',
                description: 'It is sweet and soothing to the stomach, spleen and has a tonic effect on the lungs and kidneys.',
                usesprep: '\u2022 Tiredness, weight loss, loss of appetite, poor digestion, chronic diarrhea,asthma, dry coughs, uncontrollable urination, diabetes, emotional instability. \n\n \u2022 Sweet yam leaves taste a bit like spinach, but don’t leave that film on your teeth after eating. With the addition of ginger, and garlic'
            }, {
                id: 5,
                imgurl: 'assets/seeds/Cilantro.jpg',
                name: 'Cilantro',
                category: 'Seeds',
                description: 'The seeds have a lemony citrus flavour when crushed, due to terpenes linalool and pinene. It is described as warm, nutty, spicy, and orange-flavoured. \n\n Quick growing cilantro is generally direct sown in garden beds and containers in a hot summet season.',
                usesprep: '\u2022 Add compost or aged manure to the soil before planting and place the seeds 1/2 inch deep and 2 inches apart. Thin seedlings to six-inches once they’re a few inches tall. Cilantro has a well-earned reputation for bolting (flowering) when the hot summer weather arrives. To avoid bolting, plant bolt-resistant varieties like Calypso and grow in spring and fall when the weather is cooler. Growing cilantro in a shaded spot in summer can slow bolting'
            }, {
                id: 6,
                imgurl: 'assets/seeds/Lagundi.jpg',
                name: 'Lagundi',
                category: 'Seeds',
                description: 'is an herb traditionally used in folk medicine as well as for food consumption. Because of its phyto-constituent content, there is evidence of many types of treatments involving Lagundi \n It is planted between June and September and it takes two years to grow.',
                usesprep: '\u2022 Four - to six-month-old seedlings are used for transplanting in the field. It can be reproduced readily from shoot cuttings. Vitex negundo roots are strong and deep and suckers profusely. It produces root suckers, which can also be utilized as planting material.'
            }, {
                id: 7,
                imgurl: 'assets/herbalplants/bawang.png',
                name: 'Bawang or Garlic',
                category: 'Herbal Plants',
                description: 'A low herb and grows up to sixty cms high,  leaves are flat and linear Bulbs consist of several tubers ',
                usesprep: '\u2022 Hypertension – Maybe fried, roasted, soaked in vinegar for 30 minutes, or blanched in boiled water for 15 minutes. Take 2 pieces 3 times a day after meals. \n\n \u2022 Toothache – Pound a small piece and apply to affected area'
            }, {
                id: 8,
                imgurl: 'assets/herbalplants/lagundi.png',
                name: 'Lagundi',
                category: 'Herbal Plants',
                description: '5 Leaved-Chaste Tree A shrub growing wild in vacant lots and waste land. Matured branches are planted. The flowers are blue and bell-shaped. The small fruits turn black when ripe. It is better to collect the leaves when are in bloom. Lagundi can prevent the body’s production of leukotrienes, which are released during an asthma attack.',
                usesprep: '\u2022 Asthma, Cough & Fever – Decoction ( Boil raw fruits or leaves in 2 glasses of water for 15 minutes)Dysentery, Colds & Pain – Decoction ( Boil a handful of leaves & flowers in water to produce a glass, three times a day) \n\n \u2022 Skin diseases (dermatitis, scabies, ulcer, eczema) -Wash & clean the skin/wound with the decoction \n\n \u2022 Headache – Crush leaves may be applied on the forehead \n\n \u2022 Rheumatism, sprain, contusions, insect bites – Pound the leaves and apply on affected area'
            }, {
                id: 9,
                imgurl: 'assets/herbalplants/bayabas.png',
                name: 'Bayabas or Guava',
                category: 'Herbal Plants',
                description: 'A tree about 4 to 5 meters high with tiny white flowers with round or oval fruits that are eaten raw. ',
                usesprep: '\u2022 For washing wounds – Maybe use twice a day \n\n \u2022 Diarrhea – May be taken 3-4 times a day \n\n \u2022 As gargle and for toothache – Warm decoction is used for gargle. Freshly pounded leaves are used for toothache. Boil chopped leaves for 15 minutes at low fire. Do not cover and then let it cool and strain'
            }, {
                id: 10,
                imgurl: 'assets/seeds/Lemon Balm.jpg',
                name: 'Lemon Balm',
                category: 'Seeds',
                description: 'Lesser known than basil and parsley, lemon balm is one of my favorite culinary herbs to start from seed. It’s a reliable perennial down to zone 5 but, like mint, is considered quite invasive. \n\n :  Sow seeds indoors six to eight weeks before the last spring frost.',
                usesprep: '\u2022 Cover the small seeds with a thin layer of potting mix and keep moist until germination. Once the risk of frost has passed, move the plants outdoors to a sunny or partially shaded location and harvest the lemon flavored and scented leaves for tea, seafood dishes, curries, sauces, and vinaigrettes.'
            }, {
                id: 11,
                imgurl: 'assets/seeds/Oregano.jpg',
                name: 'Oregano',
                category: 'Seeds',
                description: 'is a culinary and medicinal herb from the mint, or Lamiaceae family. It has been used in medicine and cooking for thousands of years. \n\n Time oregano seeding ten to twelve weeks before the last spring frost. ',
                usesprep: '\u2022 Oregano needs light to germinate and the tiny seeds should be sprinkled lightly on top of pre-moistened potting mix. Press gently to ensure good soil-seed contact and keep moist until the seeds germinate. Move the seedlings to the garden when the risk of frost has passed in late spring.'
            }, {
                id: 12,
                imgurl: 'assets/seeds/Summer savory.jpg',
                name: 'Summer Savory',
                category: 'Seeds',
                description: 'is an essential culinary herb in my kitchen, used liberally in soups, meatloaf, dressing and stuffing. It’s also one of the fastest herbs to start from seed and therefore is suited to direct sowing. \n\n Start summer savory indoors, start the seeds under grow-lights six to eight weeks before the last frost.  ',
                usesprep: '\u2022 Sow seeds shallowly in a prepared bed, no more than 1/4 inch deep spacing them an inch apart. Keep the soil evenly moist until the plants are well established.'
            }, {
                id: 13,
                imgurl: 'assets/seeds/Sambong.jpg',
                name: 'Sambong',
                category: 'Seeds',
                description: 'A very popular Philippine herbal flowering plant used as medicine to treat wounds and cuts, rheumatism, anti-diarrhea, anti-spams, colds and coughs. It is also used for infected wounds, respiratory infections and stomach pains. \n\n Any type of season.  ',
                usesprep: '\u2022 In a pot put the seed of sambong and dont forget to check replace to the not too much heat of the sun.'
            }, {
                id: 14,
                imgurl: 'assets/dryleaves/Khus.jpg',
                name: 'Khus',
                category: 'Dry Leaves',
                description: 'is used to create a tonic bath, which is the reason why it is often included in high quality soaps.',
                usesprep: '\u2022 Anxiety, epileptic and hysteric attacks, restlessness, nervousness, etc. \n\n \u2022 The oil obtained from khus khus has sedative effect and aids in the treatment of emotional outbursts'
            }, {
                id: 15,
                imgurl: 'assets/dryleaves/Costus.jpg',
                name: 'Costus',
                category: 'Dry Leaves',
                description: 'Consumption of the leaves are believed to lower blood glucose levels and diabetics who consumed the leaves of this plant did report a fall in their blood glucose levels.',
                usesprep: '\u2022 Blood sugar levels under control in diabetes patients. \n\n \u2022 The fresh leaves of this plant is chewed two times daily for 1 week after 1 week, 1 leaf should be chewed twice a day this dosage should be continued for 1 month. It is said that this treatment is effective in bringing blood sugar levels under control in diabetes patients.'
            }, {
                id: 16,
                imgurl: 'assets/herbalplants/sambong.png',
                name: 'Sambong',
                category: 'Herbal Plants',
                description: 'A plant that reaches 1 ½ to 3 meters in height with rough hairy leaves.  Young plants around mother plant may be separated when they have three or more leaves.',
                usesprep: '\u2022 Anti-edema, diuretic, anti-urolithiasis – Boil chopped leaves in a glass of water for 15 minutes until one glassful remains. Divide decoction into 3 parts, drink one part 3 times a day. \n\n \u2022 Diarrhea – Chopped leaves and boil in a glass of water for 15 minutes. Drink one part every 3 hours.'
            }, {
                id: 17,
                imgurl: 'assets/herbalplants/ulasimang_bato.png',
                name: 'Ulasimang Bato',
                category: 'Herbal Plants',
                description: 'Silver bush or Shiny bush or Pansit-pansitan. A weed with heartshaped leaves that grow in shady parts of the garden and yard.This is a very popular traditional medication for gout as this herbal plant contains analgesic properties.',
                usesprep: '\u2022 Lowers uric acid (rheumatism and gout) – One a half cup leaves are boiled in two glass of water over low fire. Do not cover pot. Divide into 3 parts and drink one part 3 times a day.'
            }, {
                id: 18,
                imgurl: 'assets/herbalplants/niyug_niyogan.png',
                name: 'Niyug Niyogan',
                category: 'Herbal Plants',
                description: 'Chinese Honey Suckle A vine which bears tiny fruits and grows wild in backyards. The seeds must come from mature, dried but newly opened fruits. Propagated through stem cuttings about 20cm in height.',
                usesprep: '\u2022 Anti-helmintic – The seeds are taken 2 hours after supper. If no worms are expelled, the dose may be repeated after one week. (Caution: Not to be given to children below 4 years old).'
            }, {
                id: 19,
                imgurl: 'assets/dryleaves/Sagargota.jpg',
                name: 'Sagargota',
                category: 'Dry Leaves',
                description: 'Sagargota, Bonduc nut, Fever nut, physic nut is used as anti diabetic & anti-malarial drug.',
                usesprep: '\u2022 Emmenagogue \n\n \u2022 Prepare a decoction by using the Kalarchikai flower and consume a glass of decoction when you need it. This will help to avoid the accumulation of fluid.'
            }, {
                id: 20,
                imgurl: 'assets/herbalplants/yerba_buena.png',
                name: 'Yerba Buena or Peppermint',
                category: 'Herbal Plants',
                description: 'A small multibranching aromatic herb. The leaves are small, elliptical and with toothed margin. The stem creeps to the ground, and develop roots.It consumed for centuries as tea and herbal medicine as a pain reliever(analgesic).',
                usesprep: '\u2022 Pain (headache, stomachache) – Boil chopped leaves in 2 glasses of water for 15 minutes. Divide decoction into 2 parts, drink one part every 3 hours. \n\n \u2022 Rheumatism, arthritis and headache – Crush the fresh leaves and squeeze sap. Massage sap on painful parts with eucalyptus \n\n \u2022 Cough & Cold – Soak 10 fresh leaves in a glass of hot water, drink as tea. (expectorant) \n\n \u2022 Swollen gums – Steep 6 g. of fresh plant in a glass of boiling water for 30 minutes. Use as a gargle solution \n\n \u2022 Toothache – Cut fresh plant and squeeze sap. Soak a piece of cotton in the sap and insert this in aching tooth cavity \n\n \u2022 Menstrual & gas pain – Soak a handful of leaves in a lass of boiling water. Drink infusion. \n\n \u2022 Nausea & Fainting – Crush leaves and apply at nostrils of patients\n\n \u2022 Insect bites – Crush leaves and apply juice on affected area or pound leaves until like a paste, rub on affected area\n\n \u2022 Pruritis – Boil plant alone or with eucalyptus in water. Use decoction as a wash on affected area.'
            }, {
                id: 21,
                imgurl: 'assets/dryleaves/Rui.jpg',
                name: 'Rui',
                category: 'Dry Leaves',
                description: 'RUVA, Purple ( Ekke, Rui,arka ) Calotropis gigantea \n\n  is a perennial shrub growing 2.5 meter high with various branches and sub branches. Leaves are simple, opposite, sub sessile, ovate and cordate at base. It has bunch of waxy flowers that are white or lavender in color. Flowers consists of pointed five petals and a small beautiful crown, which holds the stamen. It has milky stem and contains cardiac glycosides, fatty acid and calcium oxalate.',
                usesprep: '\u2022 Used for fomentation to paining joints \n\n \u2022 After the plant is cut let it dry in the sun for a day or two. This facilitates easy peeling of the green skin of the stem. Flatten and wash it clean, which makes it white. Then separate out fine thin threads from it. This itself is its thread. As this thread does not easily rot in water it is used as a string in fishing tackle.'
            }, {
                id: 22,
                imgurl: 'assets/dryleaves/Lemon Balm.jpg',
                name: 'Lemon Balm',
                category: 'Dry Leaves',
                description: 'The reason the plant is called lemon balm is because of the lemon minty scent of the leaves. The flowers, which appear during the summer, are full of nectar. The crushed leaves, when rubbed on the skin.',
                usesprep: '\u2022 Used for mosquito repellent, herpes, sores and gout \n\n \u2022 Add whole lemon balm leaves to green salads, or chiffonade the leaves and scatter them over a fruit salad for added zesty flavor.'
            }, {
                id: 23,
                imgurl: 'assets/herbalplants/teatree.png',
                name: 'Tea Tree',
                category: 'Herbal Plants',
                description: 'Even the aborigines have been using the tea tree leaves for medicinal purposes.',
                usesprep: '\u2022 The leaves and twigs, eventually made into tea tree oil, is anti-fungal, antibacterial, antiseptic and deserves a place in every household medicine box. \n\n \u2022 Tea tree oil can be used to treat: cystitis, glandular fever, chronic fatigue syndrome, thrush, vaginal infections, acne, athlete’s foot, verrucae, warts, insect bites, cold sores, nits, minor burns. \n\n \u2022 : Like chewing on young leaves to relieve headaches. The paperbark itself is extremely useful to them as it serves to line coolamons when used as cradles, as a bandage, like a sleeping mat, as material for building humpies, as an aluminum foil, as a disposable raincoat and for tamping holes in canoes.'
            }, {
                id: 24,
                imgurl: 'assets/herbalplants/greatyellowgentian.png',
                name: 'Great Yellow Gentian',
                category: 'Herbal Plants',
                description: 'The great yellow gentian root is a bitter herb used to treat digestive disorders and states of exhaustion from chronic diseases.',
                usesprep: '\u2022 It stimulates the liver, gal bladder, and digestive system, strengthening the overall human body. Internally, it is taken to treat liver complaints indigestion,gastric infections and anorexia.'
            }, {
                id: 25,
                imgurl: 'assets/dryleaves/mullein.png',
                name: 'Mullein (Verbascum thapsus)',
                category: 'Dry Leaves',
                description: 'Mullein is an expectorant, which means it helps the body expel excess mucus, usually by helping make your coughs more productive, to bring up mucus that may be settling in the chest or in the throat.',
                usesprep: '\u2022 Used to treat pulmonary problems, inflammatory diseases, asthma, spasmodic coughs, diarrhoea and migraine headaches. \n\n \u2022 Mullein tea works by reducing inflammation, thereby helping relax the muscles in your respiratory tract.'
            }, {
                id: 26,
                imgurl: 'assets/herbalplants/calendula.png',
                name: 'Calendula',
                category: 'Herbal Plants',
                description: 'It grows in almost any type of soil condition. It has no problem with nutritionally poor, very acidic or very alkaline soils, just as long as it’s moist. Well known as a remedy for skin problems, the deep-orange flowered pot marigold variety is applied externally.',
                usesprep: '\u2022 Internally it is used to treat fevers and chronic infections. \n\n \u2022 The tea of the petals tones up circulation and, taken regularly, eases varicose veins. Applying the crushed stems of the pot marigold to corns and warts will soon have them easily removable.'
            }, {
                id: 27,
                imgurl: 'assets/dryleaves/germanchamomile.png',
                name: 'German chamomile (Matricaria recutita)',
                category: 'Dry Leaves',
                description: 'German chamomile reduces inflammation, speeds wound healing, reduces muscle spasms, and serves as a mild sedative to help with sleep.',
                usesprep: '\u2022 It is used to treat wounds, ulcers, eczema, gout, skin irritations, bruises, burns, canker sores, neuralgia, sciatica, rheumatic pain, hemorrhoids, mastitis and other ailments. \n\n \u2022 Add lemon juice and honey to hot tea.'
            }, {
                id: 28,
                imgurl: 'assets/seeds/caesalpinia.png',
                name: 'Caesalpinia Bonducella',
                category: 'Seeds',
                description: 'Caesalpinia bonducella seeds have long been used in traditional medicine in treating symptoms and ailments.',
                usesprep: '\u2022 It is used to treat abdominal pain, colic, leprosy, fever, edema, and malaria. \n\n \u2022 It is also used as a uterine stimulant, and to cleanse the uterus during the postpartum period. \n\n \u2022 The powder version can make a tea that drink per day.'
            }, {
                id: 29,
                imgurl: 'assets/dryleaves/urtica.png',
                name: 'Urtica Dioica',
                category: 'Dry Leaves',
                description: 'Has traditionally been used in the control of cardiovascular disorders especially hypertension.',
                usesprep: '\u2022 The leaf extract of Urtica dioica has been reported to improve glucose homeostasis in vivo. \n\n \u2022 It can turn dried nettle into a powder. Use this powder in smoothies, baking, pasta (I mean in the noodles themselves!), spaetzle, soups, stews, etc.'
            }, {
                id: 30,
                imgurl: 'assets/dryleaves/kaffirlime.png',
                name: 'Kaffir Lime ',
                category: 'Dry Leaves',
                description: 'Kaffir lime has been good known by their typical smell, often are used as additional ingredients or natural preservative in most of Asian food.',
                usesprep: '\u2022 Lime has benefits that include weight loss, skin & eye care, improved digestion, & scurvy treatment. \n\n \u2022 Making a lime leaves tea.'
            }, {
                id: 31,
                imgurl: 'assets/herbalplants/seabuckthorn.png',
                name: 'Sea Buckthorn',
                category: 'Herbal Plants',
                description: 'The sea-buckthorn has been used throughout the centuries in China to relieve cough, aid digestion, invigorate blood circulation and alleviate pain.',
                usesprep: '\u2022 The branches and leaves are used in Mongolia to treat gastrointestinal distress in humans and animals. \n\n \u2022 Leaves are used for treating diarrhea, gastrointestinal, dermatological disorders and topical compressions for rheumatoid arthritis. \n\n \u2022 Making Fresh sea buckthorn berry juice is known to be taken in the event of colds, fever, exhaustion, stomach ulcers, cancer, metabolic disorders, liver diseases, inflammation, peptic ulcer, gastritis, eczema, canker sores, general ulcerative disorders, keratitis, trachoma.'
            }, {
                id: 32,
                imgurl: 'assets/herbalplants/aloevera.png',
                name: 'Aloe Vera',
                category: 'Herbal Plants',
                description: 'The aloe vera grows only under the sun with well-drained dry or moist soil. Although the plant tastes like a turd, it’s still edible.',
                usesprep: '\u2022 The sap from aloe vera is extremely useful to speed up the healing & reducing the risk of infections for wounds, cuts, burns and reducing inflammation. \n\n \u2022 Make and drinking aloe vera juice it will help by chronic constipation, poor appetite, digestive problems.'
            }, {
                id: 33,
                imgurl: 'assets/seeds/terminaliachebula.png',
                name: 'Terminaliachebula',
                category: 'Seeds',
                description: 'Terminalia chebula is also used topically as a mouthwash and gargle.',
                usesprep: '\u2022 It is good to increase appetite, digestive aid, liver stimulant, stomachic, gastrointestinal prokinetic agent, and mild laxative. \n\n \u2022 The powder of T. chebula fruits has been used in chronic diarrhea. It is used in nervous weakness, nervous irritability.'
            }, {
                id: 34,
                imgurl: 'assets/herbalplants/brazilianorchard.png',
                name: 'Brazilian Orchard (Bauhinia Forficata)',
                category: 'Herbal Plants',
                description: 'Is a fast-growing, pioneer species.',
                usesprep: '\u2022 The leaf of Brazilian orchid tree has been known as remedy for diabetes. It is also an anticholesterolemic, blood purifier, diuretic, hypoglycaemic, and tonic. The wood is soft and moderately heavy, and used for fuel and charcoal making. \n\n \u2022 An infusion of the leaves is drunk regularly after meals for its health benefits.'
            }, {
                id: 35,
                imgurl: 'assets/herbalplants/tulsi.png',
                name: 'Tulsi',
                category: 'Herbal Plants',
                description: 'There are four types of tulsi mentioned in ayurvedic texts ie Rama, Krishna, Vana & Kapoor Tulsi. For over the centuries Tulsi (the queen of herbs) has been known for its remarkable healing properties.',
                usesprep: '\u2022 The oil extracted from the Karpoora Tulsi is mostly used in the herbal toiletry. Its oil is also used against insects and bacteria.The Rama Tulsi is an effective remedy for Severe acute Respiratory Syndrome. Juice of its leaves gives relief in cold, fever, bronchitis and cough. \n\n \u2022 Tulsi is taken as herbal tea.'
            }, {
                id: 36,
                imgurl: 'assets/dryleaves/thyme.png',
                name: 'Thyme (Thymus vulgaris)',
                category: 'Dry Leaves',
                description: 'Thyme essential oil, which is obtained from its leaves, is often used as a natural cough remedy.',
                usesprep: '\u2022 Thyme is taken by mouth for bronchitis, whooping cough, sore throat, colic, arthritis, upset stomach, stomach pain (gastritis), diarrhea, bedwetting, a movement disorder in children (dyspraxia), intestinal gas (flatulence), parasitic worm infections, and skin disorders. \n\n \u2022 Prepare it as a tea. Put a teaspoon of thyme in boiling water, let it stand for 10 minutes and then strain. Add a drop of lemon juice to enhance its disinfectant qualities. You can drink up to three cups a day.'
            }, {
                id: 37,
                imgurl: 'assets/seeds/trigonella.png',
                name: 'Trigonella (Foenum Graecum)',
                category: 'Seeds',
                description: 'Trigonella foenum graecum or called Fenugreek. Is an herb in the same family as soy. People use its fresh and dried seeds, leaves, twigs, and roots as a spice, flavoring agent, and supplement.',
                usesprep: '\u2022 Fenugreek may be able to help reduce the risk of cancer,diabetes,obesity,high cholesterol,high blood pressure,heart conditions,bacterial, fungal, and viral infections and inflammation. \n\n \u2022 Fenugreek extracts are ingredients in many common products, including soaps,cosmetics,teas,garam masala, a spice blend,condiments,imitation maple syrup products.'
            }, {
                id: 38,
                imgurl: 'assets/seeds/symplocos.png',
                name: 'Symplocos Coccinea',
                category: 'Seeds',
                description: 'Symplocos coccinea Seed is an evergreen Ayurvedic plant with broad crown and stems that grows to the height of 6 meters.',
                usesprep: '\u2022 Used to cure gynaecolgical problems, blood diseases, and inflammation, leprosy and eye diseases. It is used for treating dysentery, kapha, bleeding gums, ulcer etc. \n\n \u2022 Apply the paste of the bark over the affected area with swelling and wound as a treatment.'
            }, {
                id: 39,
                imgurl: 'assets/dryleaves/rosemary.png',
                name: 'Rosemary (Rosmarinus Officinalis)',
                category: 'Dry Leaves',
                description: 'Rosemary (Rosmarinus officinalis)  that the carnosic and rosmarinic acids in rosemary have powerful antibacterial, antiviral, and antifungal properties. Consuming rosemary regularly can potentially help lower the risk of infection and help the immune system fight any infections that do occur.',
                usesprep: '\u2022 Rosemary is known to have both antimicrobial and antioxidant effects on animals. \n\n \u2022 Rosemary is a key ingredient in many pasta sauces, pizza recipes, and vinaigrettes.'
            }, {
                id: 40,
                imgurl: 'assets/seeds/syzygium.png',
                name: 'Syzygium Cumini',
                category: 'Seeds',
                description: 'Syzygium cumini seeds is a worldwide medicinal plant traditionally used in herbal medicines ',
                usesprep: '\u2022 Due to its vaunted properties against cardiometabolic disorders, which include: antihyperglycemic, hypolipemiant, antiinflammatory, cardioprotective, and antioxidant activities. \n\n \u2022 Juman juice is a refreshing drink made from ripe Jamun fruits.'
            }, {
                id: 41,
                imgurl: 'assets/herbalplants/lavender.png',
                name: 'Lavender',
                category: 'Herbal Plants',
                description: 'Long recognized for its sweet perfume.',
                usesprep: '\u2022 Lavender also boasts medical benefits as a nervine and mild antidepressant. \n\n \u2022 UMMC suggests adding it to your bath to alleviate stress, tension, and insomnia. \n\n \u2022 It also used in creams to treat sunburns and acne.'
            }
        ].sort((a, b) => b.name < a.name ? 0 : -1);
        this.categories = [
            {
                category: 'Herbal Plants'
            }, {
                category: 'Dry Leaves'
            }, {
                category: 'Seeds'
            }
        ];
    }
    initProductList() {
        this.allProducts = this.products;
        this.showResultCount();
    }
    searchProducts(term) {
        this.products = [];
        if (`${term}`.trim()) {
            let NotFoundInName = this.allProducts.map(item => {
                if (item.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) < 0) {
                    return item;
                }
                else {
                    this.products.push(item);
                }
            });
            console.log({ NotFoundInName });
            let NotFoundInCategory = NotFoundInName.map(item => {
                if (item) {
                    if (item.category.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) < 0) {
                        return item;
                    }
                    else {
                        this.products.push(item);
                    }
                }
            });
            console.log({ NotFoundInCategory });
            let foundInPrice = NotFoundInCategory.map(item => {
                if (item) {
                    if (`${item.price}`.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1) {
                        this.products.push(item);
                    }
                }
            });
        }
        else {
            this.products = this.allProducts;
        }
        this.showResultCount();
    }
    applyFilter() {
        console.log(this.selectedCategories);
        if (this.selectedCategories.length > 0) {
            console.log('Filter applied :>> ');
            this.products = [];
            for (let i = 0; i < this.allProducts.length; i++) {
                let foundCategory = true, founditem = true;
                if (this.selectedCategories.length > 0) {
                    foundCategory = this.selectedCategories.some(val => val.category.toLocaleLowerCase() === this.allProducts[i]['category'].toLocaleLowerCase() && val.isChecked);
                }
                if (foundCategory && founditem) {
                    this.products.push(this.allProducts[i]);
                }
            }
        }
        else {
            console.log('No Filter found:>> ');
            this.products = this.allProducts;
        }
        this.showResultCount();
    }
    showResultCount() {
        this.show_result_size = true;
        setTimeout(() => {
            this.show_result_size = false;
        }, 2000);
    }
    uncheckFilters() {
        this.selectedCategories = [];
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].isChecked = false;
        }
    }
    uncheckSorts() {
        this.defaultSorting();
    }
    defaultSorting() {
    }
    isSorted() {
    }
    isFiltered() {
    }
};
ProductsService.ctorParameters = () => [];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_products_products_service_ts.js.map