const cacheName = 'furcationCache-v1.0.0001';

let filesToCache = [
    '/',
    '/manifest.json',
    'https://events.furcation.org.uk/furcation-2022/schedule/export/schedule.json',
];

let mediaToCache = [
    '/sfx/button-push.mp3',
    '/sfx/page-load.mp3',
    '/sfx/red-alert.mp3',
    '/sfx/toggle.mp3'
];

const manifest = [{"revision":"f54d48e809f0e37f47d0725565da70e1","url":"about/contact/index.html"},{"revision":"f38a44bc3af4c4030282d27e1481bb0d","url":"about/faq/index.html"},{"revision":"75acb1156819e752a24db4d944fcaf6d","url":"about/history/index.html"},{"revision":"96d20b35b62b67350f884ebd91fd22af","url":"about/index.html"},{"revision":"58e266a04770ef05d069f58080ce7ba0","url":"about/legal/code-of-conduct/index.html"},{"revision":"a9fbd424f4e7734f022dcc93639e8c4d","url":"about/legal/index.html"},{"revision":"0feeaf88c332f17fe8065da024619033","url":"attending/index.html"},{"revision":"d763f007d4a20b4d4ced7473b8ef141b","url":"attending/pricing/index.html"},{"revision":"84ad7b9389efe4071bb598b5f02d714d","url":"attending/registration/index.html"},{"revision":"4cf8c0ce22272330f974ccb7e210ff26","url":"attending/travel/index.html"},{"revision":"742c7097faa74cd64d5282c89845e568","url":"attending/venue/index.html"},{"revision":"d2949396901ba352eab339fe7f383d92","url":"docs/first-number-20-timetable.pdf"},{"revision":"437cd2e80a9a5a0419518c6e53694dc0","url":"docs/firstaid.pdf"},{"revision":"490a55d2fed3e9da7091bb4827dfaabf","url":"docs/flounge.pdf"},{"revision":"8c6d8996f23931915f2060cc8e6c5b75","url":"docs/furcation-code-of-conduct.2022.03-inverted.pdf"},{"revision":"5af8eb3ef6abc79418280333f33d7ac0","url":"docs/furcation-code-of-conduct.2022.03.pdf"},{"revision":"1be7cff3401e54a3cf8109f5df843245","url":"docs/furcation-privacy-policy-1.2.pdf"},{"revision":"f7dbc01b76770dbddebdf659d137c7b9","url":"docs/photography.pdf"},{"revision":"0d4591f6bfe0985c01a44b9f3ca64f2b","url":"docs/privacypolicy.pdf"},{"revision":"8325f071117ed94a1cd3110f92d5eec2","url":"docs/recruit-reg.pdf"},{"revision":"32f55c508d53be2d1189cf3b4ff0cf80","url":"docs/recruit-software.pdf"},{"revision":"71e3339e1f5e9efbf3f55a2f664f9659","url":"docs/secoperative.pdf"},{"revision":"75d620642ee5e6b36cb05ec032afc426","url":"events/dealers-den/index.html"},{"revision":"427410b76522f49e2a23c229fa3ec27c","url":"events/djs/index.html"},{"revision":"6f7d906dae3df1c6bfc51ae66a372d69","url":"events/index.html"},{"revision":"11a335f57868a0796eefb3a9fa538ab0","url":"events/thanks/index.html"},{"revision":"a0e4d2575b775e7622dd94ab623c8c35","url":"events/timetable/index.html"},{"revision":"d1926e2ef4d72310cc8e9b6972bd358a","url":"fonts/antonio-latin-ext.woff2"},{"revision":"b58920cd687bd9e1e405730459840ece","url":"fonts/antonio-latin.woff2"},{"revision":"b3cb9b97c2327360ca886c69b3c4a9c9","url":"fonts/AtkinsonHyperlegible-Bold.woff2"},{"revision":"5a966a0d0a4d5f1717f8b93b7d3c4e8a","url":"fonts/AtkinsonHyperlegible-BoldItalic.woff2"},{"revision":"bea10bef0e9a8d644e411a7ddb26d7b7","url":"fonts/AtkinsonHyperlegible-Italic.woff2"},{"revision":"d3663984591b347c05de42a5aa0ba47b","url":"fonts/AtkinsonHyperlegible-Regular.woff2"},{"revision":"99f31deb8b3666898b6f13f066190542","url":"img/addToHome.png"},{"revision":"bd371b9a44cf9d48a8af43f9be1d9e13","url":"img/black-arrow-right.svg"},{"revision":"cff744aee3eed492094c3f544463532f","url":"img/black-arrow.svg"},{"revision":"42744f8b4ef540823e1c27887d5da974","url":"img/charity-logo.avif"},{"revision":"91f5e0ffa8a99c606c96f2b289ffc444","url":"img/charity-logo.jpg"},{"revision":"3262601c2e8cbd61cfd1e55ebc06a485","url":"img/charity-logo.png"},{"revision":"fc95d8ea19b1fdd5012f0e968de28e1f","url":"img/charity-logo.webp"},{"revision":"28043ddc4c09b39e45ee202bf5078f3e","url":"img/digital-easter-egg.avif"},{"revision":"3f3a0db225442c2e821e28796a626ce7","url":"img/discord.svg"},{"revision":"24bf666cc94e41241875353b010f1b68","url":"img/events-01-dealers-den-thumb.jpg"},{"revision":"725cd81e2f82c867174d0710a7766443","url":"img/events-01-dealers-den.jpg"},{"revision":"553d40f90a0da069c81a845cbf010237","url":"img/events-02-hungry-hippos-thumb.jpg"},{"revision":"0710638c494272efac1fd73a8c7c3216","url":"img/events-02-hungry-hippos.jpg"},{"revision":"1fcfa6e31ac69d5fcbc0116033efde49","url":"img/events-03-social-thumb.jpg"},{"revision":"4a6b86edb0ea741afccd0a76b6a68905","url":"img/events-03-social.jpg"},{"revision":"0f2011e596d8d21a2acac4c0683955fc","url":"img/events-04-shows-thumb.jpg"},{"revision":"a568e87f8176604a57a33cd4e2f95041","url":"img/events-04-shows.jpg"},{"revision":"01738aac113c2308d0a8c2fe084af465","url":"img/events-05-dances-thumb.jpg"},{"revision":"b240fbdd48e5e3975843bfa2954ed3ef","url":"img/events-05-dances.jpg"},{"revision":"69d70825fdd9d7d48342cb7312b5a71f","url":"img/events-06-ceremonies-thumb.jpg"},{"revision":"8bdd9038d3728417b46d5a06ee422d9f","url":"img/events-06-ceremonies.jpg"},{"revision":"84f3ea1cce4032fe72312677decfded7","url":"img/facebook.svg"},{"revision":"5135effa86ae17d4dc405673b0379d29","url":"img/ferret.avif"},{"revision":"ac15262f88c4cef4f8ff200e210a3421","url":"img/ferret.jpg"},{"revision":"af03544b2599b00eab7e9b94c155ccf6","url":"img/ferret.webp"},{"revision":"7d9a4fcc3c5b6da606a0490cce2eee7c","url":"img/firefox-install.png"},{"revision":"9988e661571d57da1e57d3dd26bedef3","url":"img/firefox-menu.png"},{"revision":"a8671155523cbc81134942450d25d07d","url":"img/furcation-2020-original.png"},{"revision":"219041230a06e50cd680896af3aa6301","url":"img/furcation-history-2016.avif"},{"revision":"2c3e9a8ba89e1c6a7280f466f3e8376b","url":"img/furcation-history-2016.jpg"},{"revision":"d727f042deefb23cbdd09ec3741895b2","url":"img/furcation-history-2016.webp"},{"revision":"ae648bb69b74cdb54329b7d5e62e9f7b","url":"img/furcation-history-2017.avif"},{"revision":"5857388585549aecbfa130c44b19e233","url":"img/furcation-history-2017.jpg"},{"revision":"fc1d0d5ef2d4287b828a6664156ddd92","url":"img/furcation-history-2017.webp"},{"revision":"e1c77543fc283dd30995e6dcf49af263","url":"img/furcation-history-2018.avif"},{"revision":"b8a7e2dc0fbbc98f47ba74b8313d5542","url":"img/furcation-history-2018.jpg"},{"revision":"ebf8ddbfa0d4a6f1bc897cc8f5c51602","url":"img/furcation-history-2018.webp"},{"revision":"83bac1c60909bca980b5051f57fb76c4","url":"img/furcation-history-2019.avif"},{"revision":"385927746cd5b63accdc5719047572e9","url":"img/furcation-history-2019.jpg"},{"revision":"447b46b43e2dea2b66a382f40c5804cf","url":"img/furcation-history-2019.webp"},{"revision":"50981216557dcb4a48fea8fa75f402eb","url":"img/furcation-history-2020.avif"},{"revision":"e9587564d3739390566a53c38cd1b33b","url":"img/furcation-history-2020.png"},{"revision":"0f4041af1a44469cd5b9e3c8259e34e3","url":"img/furcation-history-2020.webp"},{"revision":"5b4a080dc0fd9a52c7f23e05912b96bc","url":"img/furcation-history-2021.avif"},{"revision":"ee0317459212da7dc7ce3f1276607aa8","url":"img/furcation-history-2021.png"},{"revision":"3d745cb72caf46c1d49387fd38ee7c5b","url":"img/furcation-history-2021.webp"},{"revision":"173e25a151d032703fb67db1fa20ddea","url":"img/furcation-history-2022.avif"},{"revision":"c4ba45eb8dcb06cb3581e59ded8be213","url":"img/furcation-history-2022.jpg"},{"revision":"d984259704379536c1042313c6332312","url":"img/furcation-history-2022.webp"},{"revision":"3d6b85e80183056a5fb37609386efdcc","url":"img/furcation-logo-circle.svg"},{"revision":"db8c1e9a074906f9d50dcbca341a4a9d","url":"img/furcation-logo-square.svg"},{"revision":"518f5dfc1c7112d2024543c9fa3f18b7","url":"img/icons/app-144.png"},{"revision":"7aecdc156d2c6b60c2e8c01c2c9f7b2b","url":"img/icons/app-192.png"},{"revision":"76d9708f03fecec871228b2579a644a9","url":"img/icons/app-48.png"},{"revision":"51ea854cf8d11e9458fceb7d6875b06b","url":"img/icons/app-72.png"},{"revision":"ae4d4da1798634c938bf86df577c0a27","url":"img/icons/app-96.png"},{"revision":"48b09e4c02a03a345aef08ab11eae3d2","url":"img/icons/favicon-16x16.png"},{"revision":"fe308bac6e236bf2326f69118e6a1dff","url":"img/icons/favicon-32x32.png"},{"revision":"c5c20bfc1382db13fbbf749204d8b928","url":"img/icons/maskable_icon_x128.png"},{"revision":"3153831e7e1bfde1b2b4723f87c2cc48","url":"img/icons/maskable_icon_x192.png"},{"revision":"7b3437fa42df4b03250c20464d6496ed","url":"img/icons/maskable_icon_x384.png"},{"revision":"52137bac903e0ab1a465dccf4195822c","url":"img/icons/maskable_icon_x48.png"},{"revision":"93cf10d999690540560e0925c6a2724c","url":"img/icons/maskable_icon_x512.png"},{"revision":"839c2746937565b077b2b49a879ccdef","url":"img/icons/maskable_icon_x72.png"},{"revision":"974e8e2d5857e841582b5a7cecdeff6a","url":"img/icons/maskable_icon_x96.png"},{"revision":"12e926d4917cb563054883310753d62a","url":"img/icons/maskable_icon.png"},{"revision":"1ce3cf782fe4f6f4cd89f858549b2092","url":"img/lcars-piece-br.svg"},{"revision":"312419d36ac52fe398ae1ffe2e44422d","url":"img/lcars-piece-tr.svg"},{"revision":"1d4f606fab2f237c6389847ae5eca635","url":"img/linkedin.svg"},{"revision":"5e58e5d2c599995df576b2969b8e68a8","url":"img/park-map-thumb.avif"},{"revision":"1e41e50f0eddbcb10d0302e08fe770bb","url":"img/park-map-thumb.png"},{"revision":"8714fef85d4dcc4c1cd9f503a3dccdb9","url":"img/park-map-thumb.webp"},{"revision":"5513faeaf87b0fb6c9a7a06eda440b70","url":"img/park-map.png"},{"revision":"295f419dc8f9d04ce2681fa348a53b50","url":"img/park-map.webp"},{"revision":"91810d2efbb5f5181862298662f9a25c","url":"img/redalert.svg"},{"revision":"9512e047397796d1b0a2d6585cf78ee4","url":"img/share-image.jpg"},{"revision":"2da59947d07c9be3e6baf46d8d3cc450","url":"img/siteicon.avif"},{"revision":"65da40ed363275fb484ffaaeb185e727","url":"img/siteicon.png"},{"revision":"e6668a7dd994aa5f4f4c75a5182e36fd","url":"img/siteicon.webp"},{"revision":"cdfa096683b050fd6e3f282a50bfaa9f","url":"img/telegram.svg"},{"revision":"40798782d24d27a968d171f93c345581","url":"img/tng-style-titlecard.png"},{"revision":"70636df81be952cdf92e72b4db6687e4","url":"img/tng-style-titlecard.svg"},{"revision":"c46e313f78365b962520c66f8a6139c6","url":"img/transporter-room.svg"},{"revision":"9e3e5a2d21141dd0abb307d740c78ed9","url":"img/twitch.svg"},{"revision":"460412505f8ab9a55a850269e0f6bf0c","url":"img/twitter.svg"},{"revision":"9823dc2308c6811dac34e066b8cf9db6","url":"img/venue-01-entrance-original.jpg"},{"revision":"53f64d40bbc4196c941c9bfebe28832f","url":"img/venue-01-entrance.avif"},{"revision":"d6ba65b9b3ef893ed3d12afbece31a47","url":"img/venue-01-entrance.jpg"},{"revision":"810b968ec80604bd19d415f77a96531b","url":"img/venue-01-entrance.webp"},{"revision":"a2f8396114508e9b33f1bf8baa787b11","url":"img/venue-03-beach-original.jpg"},{"revision":"e5d78c9bdfe083a63ef2e7c38f1c3e5e","url":"img/venue-03-beach.avif"},{"revision":"a5a0805fb866f360f05dc53392e556f3","url":"img/venue-03-beach.jpg"},{"revision":"4b268c1c5c9949391478e57bf2d47936","url":"img/venue-03-beach.webp"},{"revision":"6f6486feabd0baeebebfa1b4d295c1af","url":"img/white-arrow-right.svg"},{"revision":"b589494e090acc26b115d0d666f98b55","url":"img/white-arrow.svg"},{"revision":"84596feae7d2eff29c2edf74c07d3c54","url":"img/youtube.svg"},{"revision":"40eddd58555a4092a5714a12b6a0f7a7","url":"index.html"},{"revision":"508a8750267ba10e378dac83e6dde7e7","url":"media/transporter-game/index.html"},{"revision":"66d6b161884b98db7f77d90a4e58c191","url":"media/videos/index.html"},{"revision":"4b893cedf4bb5b5dc32fb31338374e8e","url":"news/2022-12-05-charity-update/index.html"},{"revision":"ddd3cc36a943b3ca97d90e0fa7c23823","url":"news/index.html"},{"revision":"c3c67b7df8c038e590a69eff485b5072","url":"volunteer/index.html"},{"revision":"aa2f50a61ef1d474f5710981f7449caa","url":"volunteer/riggers/index.html"},{"revision":"8f2e38b265a0783ecee8dbc20a5995f4","url":"volunteer/riggers/thanks/index.html"}];

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
