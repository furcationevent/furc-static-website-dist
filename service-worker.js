const cacheName = 'furcationCache-v1.0.0001';

let filesToCache = [
    '/',
    '/manifest.json',
    'https://events.furcation.org.uk/furcation-2023/schedule/export/schedule.json',
];

let mediaToCache = [
    '/sfx/button-push.mp3',
    '/sfx/page-load.mp3',
    '/sfx/red-alert.mp3',
    '/sfx/toggle.mp3'
];

const manifest = [{"revision":"0956b2640d18aea90ac80aeca656eb45","url":"about/charity/index.html"},{"revision":"94fd8b014a463bf2ee144b7899ab3e7b","url":"about/contact/index.html"},{"revision":"9b5629979f36d2b5a0df2ce2ce1ac9be","url":"about/faq/index.html"},{"revision":"72b924a2e5ceffa9d59d3c1245d810a3","url":"about/history/index.html"},{"revision":"f164c98387a5895c0629ffb1cb35c01a","url":"about/index.html"},{"revision":"43e38b4fe885bdf8619c6306e293b951","url":"about/legal/code-of-conduct/index.html"},{"revision":"5ef44db5f1b601288e4d21fa30fffbb1","url":"about/legal/index.html"},{"revision":"170c997f0cf6c6ae33bc0ca8bc729270","url":"attending/index.html"},{"revision":"e200d6ac532791876a930a5be8a5c285","url":"attending/pricing/index.html"},{"revision":"4a4b4a7ffa1401e5f690a02abb3bbc3f","url":"attending/registration/index.html"},{"revision":"bf150df47303136d6c39746521bd7ff2","url":"attending/travel/index.html"},{"revision":"c761b545f81dcd3f6926c31c6aa68a77","url":"attending/venue/index.html"},{"revision":"7ad2c26cece07dfd63ad6dfc846cadc6","url":"docs/first-number-20-timetable.pdf"},{"revision":"a221b8ab993ac182c9d195e9ad16eb52","url":"docs/firstaid.pdf"},{"revision":"325163d6659a08bde3ab54d6a53c8444","url":"docs/flounge.pdf"},{"revision":"37b631e6dcca351dc4a298bbcadbc05c","url":"docs/Furcation2026CodeofConduct.pdf"},{"revision":"e4cc39ff2aac723cd5563f8a9d5c150d","url":"docs/Furcation2026ConditionsofSalev2026.6.pdf"},{"revision":"2ec81b39478311095abed12913169a0b","url":"docs/FurcationPrivacyPolicyv1.42026.6.pdf"},{"revision":"000c129e60140bcb11d5ba6a16ac709f","url":"docs/photography.pdf"},{"revision":"7f58a9e05f425816628211ba75f4d8d2","url":"docs/privacypolicy.pdf"},{"revision":"d5815066e79e86aa5c521dc9af3bf02c","url":"docs/recruit-reg.pdf"},{"revision":"06dae44d980156b16ea512d550f3d5d3","url":"docs/recruit-software.pdf"},{"revision":"717fac72916890bd59682f8b73ae951f","url":"docs/recruitment/charity-liason-crew-member.pdf"},{"revision":"4fbee4aa15866a232e62e83073049403","url":"docs/recruitment/dealers-den-assistant.pdf"},{"revision":"e5e46a81edd146c988a61ab9100b48d0","url":"docs/recruitment/dispatcher.pdf"},{"revision":"afafaad02583e4b4093cec611b0979de","url":"docs/recruitment/first-aider.pdf"},{"revision":"1e06117a1feccc892ccf044cdb770dfb","url":"docs/recruitment/furcops.pdf"},{"revision":"c1a484b6e6634f1259e5d5887faa2d09","url":"docs/recruitment/fursuit-liaison.pdf"},{"revision":"b36613b7dd85ad74c4df9a4a8ddd6fdc","url":"docs/recruitment/hr-team-member.pdf"},{"revision":"497c47b29089f08ea8720cbc4f543fd4","url":"docs/recruitment/mental-health-first-aider.pdf"},{"revision":"19e4b6e8fda4ec270c1a99679c47a227","url":"docs/recruitment/security-operative.pdf"},{"revision":"d6e76c11fdfbda05d50dc06ee20d309f","url":"docs/recruitment/stewards.pdf"},{"revision":"0d3bd6fc2470185418d06005fda1cd12","url":"docs/recruitment/tech-crew-member.pdf"},{"revision":"0299cb572bc696e904abdc00df6c0ab3","url":"docs/recruitment/theming-crew.pdf"},{"revision":"2c52350379d8f46bb93179c1b1cdf4ca","url":"docs/secoperative.pdf"},{"revision":"76f1c00a596901a8ee7d03c548abdc6a","url":"events/dealers-den/index.html"},{"revision":"073f5a99a3aae6edeb09b8a4ffe620cb","url":"events/djs/index.html"},{"revision":"da7b8fc1311efb7bcbcaba2566ab8e1f","url":"events/index.html"},{"revision":"e941a81b6170ac5864c523b5ddb980e5","url":"events/suggest/index.html"},{"revision":"d33d6a718ed65ab4ad80868d07a33fbb","url":"events/thanks/index.html"},{"revision":"10feeb4e5eefcccd8601eddef0e2cd71","url":"events/timetable/index.html"},{"revision":"fe8330e5237f014f564e778063af93ec","url":"fonts/chlorinap.ttf"},{"revision":"df1e5c9a1e244300d1111aca8b314e88","url":"fonts/JollyLodger-Regular.ttf"},{"revision":"7a036854f6ab657e3c1a8315df7f3c9b","url":"fonts/Mario-Kart-DS.ttf"},{"revision":"d865e003d6f5b2df7aa52597c57adad6","url":"fonts/Mario64.ttf"},{"revision":"4b501b918962f6ed549e066c6f371d8e","url":"fonts/ModernAntiqua-Regular.ttf"},{"revision":"9a6e534dc2fd24c01602c6abac7d00cb","url":"fonts/Underdog-Regular.ttf"},{"revision":"1f68db7e92f333983f359fa61a96884f","url":"img/bluesky.svg"},{"revision":"1e146a3534b39261df025c506178e296","url":"img/charity-01-ferrets-thumb.jpg"},{"revision":"43de747bb4a0c180bad857c7b65f37c0","url":"img/charity-01-ferrets.jpg"},{"revision":"97c7c46910214c74ec094caf952671a8","url":"img/charity-02-goats-thumb.jpg"},{"revision":"89c978b2ab7860660e120671f4f537bb","url":"img/charity-02-goats.jpg"},{"revision":"6b3866ab8983e562173bb1fc61f126ec","url":"img/charity-ferne.png"},{"revision":"42744f8b4ef540823e1c27887d5da974","url":"img/charity-logo.avif"},{"revision":"1b0d000545bf199b10a2b0ad993d796c","url":"img/charity-logo.jpg"},{"revision":"2110960c8c76b369382ac527fe635603","url":"img/charity-logo.png"},{"revision":"db647a5e40d02ab34c68a2c220a92f3c","url":"img/charity-logo.webp"},{"revision":"28043ddc4c09b39e45ee202bf5078f3e","url":"img/digital-easter-egg.avif"},{"revision":"3f3a0db225442c2e821e28796a626ce7","url":"img/discord.svg"},{"revision":"24bf666cc94e41241875353b010f1b68","url":"img/events-01-dealers-den-thumb.jpg"},{"revision":"4fb47e959f84f2984b03492f92a4d23b","url":"img/events-01-dealers-den.jpg"},{"revision":"553d40f90a0da069c81a845cbf010237","url":"img/events-02-hungry-hippos-thumb.jpg"},{"revision":"8089e4a6a9e51e16b1eb33c51cbade0d","url":"img/events-02-hungry-hippos.jpg"},{"revision":"073d357a61bac58f846c5544d98e28fc","url":"img/events-03-social-thumb.jpg"},{"revision":"c3ce2a9d6535230330856ca75e549b88","url":"img/events-03-social.jpg"},{"revision":"ead43c9bb72f08a6b615b447e3750fb4","url":"img/events-04-shows-thumb.jpg"},{"revision":"691184833a94958d276e92b20c0032d3","url":"img/events-04-shows.jpg"},{"revision":"01738aac113c2308d0a8c2fe084af465","url":"img/events-05-dances-thumb.jpg"},{"revision":"b01196362c1c2fc61e38a4eb99e6f725","url":"img/events-05-dances.jpg"},{"revision":"69d70825fdd9d7d48342cb7312b5a71f","url":"img/events-06-ceremonies-thumb.jpg"},{"revision":"faec8223de2fda12acfdb6794f517c97","url":"img/events-06-ceremonies.jpg"},{"revision":"986b14f235eeaf6fca597568b1f93ee9","url":"img/facebook.svg"},{"revision":"80db87e2ec718b39ee3b357ab147157e","url":"img/FrankieCliveRefs.png"},{"revision":"c82fe9c55119dc2fcfa8735d16cd43d7","url":"img/furcation-2020-original.png"},{"revision":"219041230a06e50cd680896af3aa6301","url":"img/furcation-history-2016.avif"},{"revision":"2c3e9a8ba89e1c6a7280f466f3e8376b","url":"img/furcation-history-2016.jpg"},{"revision":"454e4d4bce42324bd671181c672dfafc","url":"img/furcation-history-2016.webp"},{"revision":"ae648bb69b74cdb54329b7d5e62e9f7b","url":"img/furcation-history-2017.avif"},{"revision":"5857388585549aecbfa130c44b19e233","url":"img/furcation-history-2017.jpg"},{"revision":"0e2b51abd2cce26909692ed79a98cd80","url":"img/furcation-history-2017.webp"},{"revision":"e1c77543fc283dd30995e6dcf49af263","url":"img/furcation-history-2018.avif"},{"revision":"b8a7e2dc0fbbc98f47ba74b8313d5542","url":"img/furcation-history-2018.jpg"},{"revision":"cdde010105d104d50f1ca5b2d03a5b15","url":"img/furcation-history-2018.webp"},{"revision":"83bac1c60909bca980b5051f57fb76c4","url":"img/furcation-history-2019.avif"},{"revision":"01f45931c800ce331b77d11fa7937e56","url":"img/furcation-history-2019.jpg"},{"revision":"f3fa7c31865758969f11809450b9c5a0","url":"img/furcation-history-2019.webp"},{"revision":"50981216557dcb4a48fea8fa75f402eb","url":"img/furcation-history-2020.avif"},{"revision":"0dc62dd446fc1c344312d66c9ed55445","url":"img/furcation-history-2020.png"},{"revision":"0f4041af1a44469cd5b9e3c8259e34e3","url":"img/furcation-history-2020.webp"},{"revision":"5b4a080dc0fd9a52c7f23e05912b96bc","url":"img/furcation-history-2021.avif"},{"revision":"943666c9f31f52644ea165c07b983e86","url":"img/furcation-history-2021.png"},{"revision":"66bb76b081899d08b472df4019291a09","url":"img/furcation-history-2021.webp"},{"revision":"e263561d10c5cc4c239b476b73788d88","url":"img/furcation-history-2022.avif"},{"revision":"d061e3bfc34d7f54d7c0b2580588e65e","url":"img/furcation-history-2022.png"},{"revision":"d89f9c2302cad5754a8a788f7c92495f","url":"img/furcation-history-2022.webp"},{"revision":"bb8ce0c7a7ff684c6359a5e04ae3b41d","url":"img/furcation-history-2023.avif"},{"revision":"e9a985b2226385f01dca3b83a61cc981","url":"img/furcation-history-2023.png"},{"revision":"df86f6cc7b19dca3a06b4f293eeb7eb3","url":"img/furcation-history-2023.webp"},{"revision":"cd08acc22cb72662bdccb37a44856e29","url":"img/furcation-logo-sm.png"},{"revision":"edbb5a53f449b0d44ce7c0890f8af914","url":"img/homepage-graphic.png"},{"revision":"0be6e3bd190371aa85aa9f3623e2502b","url":"img/linkedin.svg"},{"revision":"2972b1e07b9911ab3246c6fbaea0a98d","url":"img/main-bg.avif"},{"revision":"964683ac046554d59a6599212d69a533","url":"img/main-bg.webp"},{"revision":"1dcebaaa83f425fcc1d6d46ac810a252","url":"img/page-contacts.avif"},{"revision":"76d81f3a916566788df690bd048168c4","url":"img/page-contacts.png"},{"revision":"7f7e0efa9340eac99386a023a056bbd5","url":"img/page-contacts.webp"},{"revision":"7066d760f21ee8942b681ad1f44b03a8","url":"img/page-dealers-den.avif"},{"revision":"8e2c1023739014d0ae7a5fe845f34d00","url":"img/page-dealers-den.png"},{"revision":"d99f17224a78b9b4261d7de6414f69c9","url":"img/page-dealers-den.webp"},{"revision":"d6d7f6bd06f007f2b6ab78b797911808","url":"img/page-djs.avif"},{"revision":"9012af7c54bfa7cd51403ad7b60ad87c","url":"img/page-djs.png"},{"revision":"c76d1b01bdc5ce76933c3cb0911e4357","url":"img/page-djs.webp"},{"revision":"97e6771fa13a0e8462a9d564adf5183c","url":"img/page-faqs.avif"},{"revision":"a7431736bc50a6714583c1cb5163bca8","url":"img/page-faqs.png"},{"revision":"f1faebec6f5bcd54574d49e6afa1a3d8","url":"img/page-faqs.webp"},{"revision":"909dc8c0385dc17cc68fc73b8e3f6dd9","url":"img/page-pricing.avif"},{"revision":"7dcfe1801ac82b2566d405619f3b27ae","url":"img/page-pricing.png"},{"revision":"2e8deb3859ee83bd5a3c6437710dc6d4","url":"img/page-pricing.webp"},{"revision":"f24741f952f3a6eea894ea4d8d63a5da","url":"img/page-venue.avif"},{"revision":"818704c6d24fe186e3a996fecd513a2a","url":"img/page-venue.png"},{"revision":"6ad9c719d38c7f4bf77f8b16c5c7a0e1","url":"img/page-venue.webp"},{"revision":"4b6ea8456b3a44d1f8da60265a7a87b7","url":"img/page-volunteer.avif"},{"revision":"6508f5a9974d6598dcfc89aea676376e","url":"img/page-volunteer.png"},{"revision":"d4127fbc31cbb6a6d3e855c1c0fbbddf","url":"img/page-volunteer.webp"},{"revision":"63661a8672114ae9df94fbfca3d4dcc6","url":"img/park-map-thumb.avif"},{"revision":"10644b8f32885521792c7694ad3e242a","url":"img/park-map-thumb.webp"},{"revision":"10644b8f32885521792c7694ad3e242a","url":"img/park-map.webp"},{"revision":"3446881cd6888828e41668cbabe482d4","url":"img/share-image.jpg"},{"revision":"2da59947d07c9be3e6baf46d8d3cc450","url":"img/siteicon.avif"},{"revision":"463138ba70095e642c7ebebf291ff0ac","url":"img/siteicon.png"},{"revision":"e6668a7dd994aa5f4f4c75a5182e36fd","url":"img/siteicon.webp"},{"revision":"cdfa096683b050fd6e3f282a50bfaa9f","url":"img/telegram.svg"},{"revision":"9e3e5a2d21141dd0abb307d740c78ed9","url":"img/twitch.svg"},{"revision":"fbcbe304946cc373d109e68cdea6c791","url":"img/twitter.svg"},{"revision":"7f033d204cdbfc0e5c51551047bb3a82","url":"img/venue-01-entrance-original.jpg"},{"revision":"00cd89071bea544f611ec48b345f99fb","url":"img/venue-01-entrance.avif"},{"revision":"d56ca0d5cb95e5824f2c8922110c345f","url":"img/venue-01-entrance.jpg"},{"revision":"46089a9287008992b915b9621b739b57","url":"img/venue-01-entrance.webp"},{"revision":"4bac2079c97c3b56e242a0cc4c1583c3","url":"img/venue-03-beach-original.jpg"},{"revision":"e5d78c9bdfe083a63ef2e7c38f1c3e5e","url":"img/venue-03-beach.avif"},{"revision":"a5a0805fb866f360f05dc53392e556f3","url":"img/venue-03-beach.jpg"},{"revision":"07038a6e95f43369d1cafc7bf3389f13","url":"img/venue-03-beach.webp"},{"revision":"01d7811223c0a69195eda1249de5ca0a","url":"img/youtube.svg"},{"revision":"0181d1f786f314dbf54e79181cf49a53","url":"index.html"},{"revision":"63c886523cd46c48ac18d21eafbfccba","url":"volunteer/index.html"}];

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async function () {
            const cache = await caches.open(cacheName);
            filesToCache = filesToCache.concat(manifest.map((u) => u.url));
            filesToCache = filesToCache.concat(manifest.map((u) => {
                return u.url.replace("index.html", "") || "/";
            }));
            await cache.addAll(filesToCache.filter((v,i,a) => a.indexOf(v) === i)).catch((e) => {
                console.error(e);
            });
            await cache.addAll(mediaToCache.filter((v,i,a) => a.indexOf(v) === i)).catch((e) => {
                console.error(e);
            });
        })(),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async function () {
            const cacheNames = await caches.keys();
            await Promise.all(
                cacheNames
                    .filter((cacheName) => {
                        // Return true if you want to remove this cache,
                        // but remember that caches are shared across
                        // the whole origin
                    })
                    .map((cacheName) => caches.delete(cacheName)),
            );
        })(),
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.match('^.*\.m3u8$') ||
        event.request.url.match('^.*\.ts$') ||
        event.request.url.match('^.*\.m4a$') ||
        event.request.url.match('^.*\.m4v$') ||
        event.request.url.match('^.*\.mpd$')) {
        // Do not try to handle streaming stuff
        return false;
    }

    event.respondWith(
        (async function () {
            const cache = await caches.open(cacheName);

            const cachedResponse = await cache.match(event.request, { ignoreVary: true });

            if (cachedResponse) {
                try {
                    const networkResponsePromise = fetch(event.request).catch(() => {
                        return cachedResponse;
                    });
                    event.waitUntil(
                        (async function () {
                            const networkResponse = await networkResponsePromise;
                            try {
                                await cache.put(event.request, networkResponse.clone());
                            } catch (e) {

                            }
                        })(),
                    );

                    // Returned the cached response if we have one, otherwise return the network response.
                    return cachedResponse || networkResponsePromise;
                } catch (e) {
                    return cachedResponse;
                }
            } else {
                try {
                    const networkResponse = await fetch(event.request).catch(() => {
                        return false;
                    });
                    try {
                        event.waitUntil(
                            await cache.put(event.request, networkResponse.clone()).catch(() => {

                            })
                        );
                    } catch (e) {

                    }
                    return networkResponse;
                } catch (e) {
                    return false;
                }
            }
        })(),
    );
});
