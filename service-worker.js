const cacheName = 'furcationCache-v1.0.0001';

let filesToCache = [
    '/',
    '/manifest.json',
    'https://events.furcation.org.uk/furcation-2022/schedule/export/schedule.json',
];

const manifest = [{"revision":"bfde9f9ebdf1d2650b90eb09b9f899a2","url":"about/contact/index.html"},{"revision":"5c1c9e35b0d46b21cb1c9a76dd511874","url":"about/faq/index.html"},{"revision":"4840e9ef5d597348a828dc8a61b50dc5","url":"about/history/index.html"},{"revision":"9b5271c2964e2520d02c8ec09a5465d6","url":"about/index.html"},{"revision":"28337cf0dd0bc83b6c936b6d663c76a5","url":"about/legal/code-of-conduct/index.html"},{"revision":"4e97283c5a4a2c7906186ac7174d4ebe","url":"about/legal/index.html"},{"revision":"f42847963a29967c89af1598332e2d74","url":"attending/index.html"},{"revision":"4a9eab638abde8f26eca58949bedbba6","url":"attending/pricing/index.html"},{"revision":"d67ac881d9e5fea2e903394ec7ecfd1a","url":"attending/registration/index.html"},{"revision":"7dc894ba6a4c6dc0667a9046ea99f2b1","url":"attending/travel/index.html"},{"revision":"0c20d92efcff79291d2e309734d2a9c7","url":"attending/venue/index.html"},{"revision":"7ad2c26cece07dfd63ad6dfc846cadc6","url":"docs/first-number-20-timetable.pdf"},{"revision":"a221b8ab993ac182c9d195e9ad16eb52","url":"docs/firstaid.pdf"},{"revision":"325163d6659a08bde3ab54d6a53c8444","url":"docs/flounge.pdf"},{"revision":"5a3c668097408a3c84259cc27c36bb43","url":"docs/furcation-code-of-conduct.2022.03-inverted.pdf"},{"revision":"54f66333ad58d8e9f590ad1ef75898fb","url":"docs/furcation-code-of-conduct.2022.03.pdf"},{"revision":"4e2da2aff518ae77a8950ee2f347d11f","url":"docs/furcation-privacy-policy-1.2.pdf"},{"revision":"000c129e60140bcb11d5ba6a16ac709f","url":"docs/photography.pdf"},{"revision":"7f58a9e05f425816628211ba75f4d8d2","url":"docs/privacypolicy.pdf"},{"revision":"d5815066e79e86aa5c521dc9af3bf02c","url":"docs/recruit-reg.pdf"},{"revision":"06dae44d980156b16ea512d550f3d5d3","url":"docs/recruit-software.pdf"},{"revision":"2c52350379d8f46bb93179c1b1cdf4ca","url":"docs/secoperative.pdf"},{"revision":"5193bf0c68afa133b942fd28a5cc0018","url":"events/dealers-den/index.html"},{"revision":"c4b7332e16cccd428a919ca3d80ed365","url":"events/djs/index.html"},{"revision":"d014008577258b842e5afb617e0b9dbe","url":"events/index.html"},{"revision":"61f225876570e65ef222a21792132e33","url":"events/thanks/index.html"},{"revision":"63c1e38e86fd93fc7a80d1864627c2cf","url":"events/timetable/index.html"},{"revision":"d1926e2ef4d72310cc8e9b6972bd358a","url":"fonts/antonio-latin-ext.woff2"},{"revision":"b58920cd687bd9e1e405730459840ece","url":"fonts/antonio-latin.woff2"},{"revision":"918f1751b4ebda6bf3e387277ed30aec","url":"fonts/SonicBT-ExtraBold.otf"},{"revision":"5a4cf9ec2e71bd1c15748e8af2cccc02","url":"fonts/SonicCutThruBT-Heavy.otf"},{"revision":"2a87dd5bdf2e6a412ec28597deba9aa5","url":"fonts/Sonicxb.ttf"},{"revision":"b970aba55e8ff7b0f96a08ef89a146c8","url":"fonts/square_721_bold_extended_bt.ttf"},{"revision":"42744f8b4ef540823e1c27887d5da974","url":"img/charity-logo.avif"},{"revision":"1b0d000545bf199b10a2b0ad993d796c","url":"img/charity-logo.jpg"},{"revision":"2110960c8c76b369382ac527fe635603","url":"img/charity-logo.png"},{"revision":"db647a5e40d02ab34c68a2c220a92f3c","url":"img/charity-logo.webp"},{"revision":"28043ddc4c09b39e45ee202bf5078f3e","url":"img/digital-easter-egg.avif"},{"revision":"3f3a0db225442c2e821e28796a626ce7","url":"img/discord.svg"},{"revision":"24bf666cc94e41241875353b010f1b68","url":"img/events-01-dealers-den-thumb.jpg"},{"revision":"4fb47e959f84f2984b03492f92a4d23b","url":"img/events-01-dealers-den.jpg"},{"revision":"553d40f90a0da069c81a845cbf010237","url":"img/events-02-hungry-hippos-thumb.jpg"},{"revision":"8089e4a6a9e51e16b1eb33c51cbade0d","url":"img/events-02-hungry-hippos.jpg"},{"revision":"073d357a61bac58f846c5544d98e28fc","url":"img/events-03-social-thumb.jpg"},{"revision":"c3ce2a9d6535230330856ca75e549b88","url":"img/events-03-social.jpg"},{"revision":"ead43c9bb72f08a6b615b447e3750fb4","url":"img/events-04-shows-thumb.jpg"},{"revision":"691184833a94958d276e92b20c0032d3","url":"img/events-04-shows.jpg"},{"revision":"01738aac113c2308d0a8c2fe084af465","url":"img/events-05-dances-thumb.jpg"},{"revision":"b01196362c1c2fc61e38a4eb99e6f725","url":"img/events-05-dances.jpg"},{"revision":"69d70825fdd9d7d48342cb7312b5a71f","url":"img/events-06-ceremonies-thumb.jpg"},{"revision":"faec8223de2fda12acfdb6794f517c97","url":"img/events-06-ceremonies.jpg"},{"revision":"986b14f235eeaf6fca597568b1f93ee9","url":"img/facebook.svg"},{"revision":"c82fe9c55119dc2fcfa8735d16cd43d7","url":"img/furcation-2020-original.png"},{"revision":"219041230a06e50cd680896af3aa6301","url":"img/furcation-history-2016.avif"},{"revision":"2c3e9a8ba89e1c6a7280f466f3e8376b","url":"img/furcation-history-2016.jpg"},{"revision":"454e4d4bce42324bd671181c672dfafc","url":"img/furcation-history-2016.webp"},{"revision":"ae648bb69b74cdb54329b7d5e62e9f7b","url":"img/furcation-history-2017.avif"},{"revision":"5857388585549aecbfa130c44b19e233","url":"img/furcation-history-2017.jpg"},{"revision":"0e2b51abd2cce26909692ed79a98cd80","url":"img/furcation-history-2017.webp"},{"revision":"e1c77543fc283dd30995e6dcf49af263","url":"img/furcation-history-2018.avif"},{"revision":"b8a7e2dc0fbbc98f47ba74b8313d5542","url":"img/furcation-history-2018.jpg"},{"revision":"cdde010105d104d50f1ca5b2d03a5b15","url":"img/furcation-history-2018.webp"},{"revision":"83bac1c60909bca980b5051f57fb76c4","url":"img/furcation-history-2019.avif"},{"revision":"01f45931c800ce331b77d11fa7937e56","url":"img/furcation-history-2019.jpg"},{"revision":"f3fa7c31865758969f11809450b9c5a0","url":"img/furcation-history-2019.webp"},{"revision":"50981216557dcb4a48fea8fa75f402eb","url":"img/furcation-history-2020.avif"},{"revision":"0dc62dd446fc1c344312d66c9ed55445","url":"img/furcation-history-2020.png"},{"revision":"0f4041af1a44469cd5b9e3c8259e34e3","url":"img/furcation-history-2020.webp"},{"revision":"5b4a080dc0fd9a52c7f23e05912b96bc","url":"img/furcation-history-2021.avif"},{"revision":"943666c9f31f52644ea165c07b983e86","url":"img/furcation-history-2021.png"},{"revision":"66bb76b081899d08b472df4019291a09","url":"img/furcation-history-2021.webp"},{"revision":"173e25a151d032703fb67db1fa20ddea","url":"img/furcation-history-2022.avif"},{"revision":"c4ba45eb8dcb06cb3581e59ded8be213","url":"img/furcation-history-2022.jpg"},{"revision":"d984259704379536c1042313c6332312","url":"img/furcation-history-2022.webp"},{"revision":"f4f8b2db4d48c7f62697c5bbb3da1731","url":"img/furcation-logo-sm.png"},{"revision":"8729fbc563001ec62f159c07fb223f1d","url":"img/icons/app-144.png"},{"revision":"926f25757e414e81f6238af91477f054","url":"img/icons/app-192.png"},{"revision":"c6fbce3791637c9e82df2980aa51f815","url":"img/icons/app-48.png"},{"revision":"ada7f512fbfd928052f419311f6caf5f","url":"img/icons/app-72.png"},{"revision":"12da3f42654be284452bab05f3ddd6d6","url":"img/icons/app-96.png"},{"revision":"0be6e3bd190371aa85aa9f3623e2502b","url":"img/linkedin.svg"},{"revision":"5e58e5d2c599995df576b2969b8e68a8","url":"img/park-map-thumb.avif"},{"revision":"63c38d4dc1fdd63b01df52016d9752c6","url":"img/park-map-thumb.png"},{"revision":"8714fef85d4dcc4c1cd9f503a3dccdb9","url":"img/park-map-thumb.webp"},{"revision":"cf050f9084af9eab651fcb40109f3982","url":"img/park-map.png"},{"revision":"295f419dc8f9d04ce2681fa348a53b50","url":"img/park-map.webp"},{"revision":"9df6f7456da3695516b79a0c1485fa10","url":"img/redalert.svg"},{"revision":"01b991782b0bcd7ac115778fb8290da1","url":"img/share-image.jpg"},{"revision":"2da59947d07c9be3e6baf46d8d3cc450","url":"img/siteicon.avif"},{"revision":"463138ba70095e642c7ebebf291ff0ac","url":"img/siteicon.png"},{"revision":"e6668a7dd994aa5f4f4c75a5182e36fd","url":"img/siteicon.webp"},{"revision":"cdfa096683b050fd6e3f282a50bfaa9f","url":"img/telegram.svg"},{"revision":"2fe65ce8a2be26905d7e82a75ec2a643","url":"img/TNG Style Titlecard.png"},{"revision":"4561fde447a01b8ae84c49f39f25b6dd","url":"img/TNG Style Titlecard.svg"},{"revision":"9e3e5a2d21141dd0abb307d740c78ed9","url":"img/twitch.svg"},{"revision":"fbcbe304946cc373d109e68cdea6c791","url":"img/twitter.svg"},{"revision":"7f033d204cdbfc0e5c51551047bb3a82","url":"img/venue-01-entrance-original.jpg"},{"revision":"53f64d40bbc4196c941c9bfebe28832f","url":"img/venue-01-entrance.avif"},{"revision":"b0ecc2648a6d2db295cd1e3df2c6ca43","url":"img/venue-01-entrance.jpg"},{"revision":"0d1b341372275ae3d54366584cbe5ae7","url":"img/venue-01-entrance.webp"},{"revision":"4bac2079c97c3b56e242a0cc4c1583c3","url":"img/venue-03-beach-original.jpg"},{"revision":"e5d78c9bdfe083a63ef2e7c38f1c3e5e","url":"img/venue-03-beach.avif"},{"revision":"a5a0805fb866f360f05dc53392e556f3","url":"img/venue-03-beach.jpg"},{"revision":"07038a6e95f43369d1cafc7bf3389f13","url":"img/venue-03-beach.webp"},{"revision":"01d7811223c0a69195eda1249de5ca0a","url":"img/youtube.svg"},{"revision":"101db01516080361dade8dc77180efd6","url":"index.html"},{"revision":"61d309add9d03cd462d70d3d1f9f2712","url":"news/2022-12-05-charity-update/index.html"},{"revision":"9b41dacc7873a51887d2d2e0c30eb7e4","url":"news/index.html"},{"revision":"13c46aeba3b45baea21bbfaa95dcac4b","url":"sfx/button-push.mp3"},{"revision":"ed27b956ac5011c1142b8df88702b355","url":"sfx/page-load.mp3"},{"revision":"73fdcd8dc818bf589906a0599b2d8004","url":"sfx/red-alert.mp3"},{"revision":"597f46f49607de6f93feb015c99fdcc2","url":"sfx/toggle.mp3"},{"revision":"a2be356c413d4e71eb7bf2daa3b0ade9","url":"volunteer/index.html"},{"revision":"ce38edd4a432f610e2d22b5612674516","url":"volunteer/riggers/index.html"},{"revision":"b2ca0652efa131dd4d190abe88b42d11","url":"volunteer/riggers/thanks/index.html"}];

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async function () {
            const cache = await caches.open(cacheName);
            filesToCache = filesToCache.concat(manifest.map((u) => u.url));
            filesToCache = filesToCache.concat(manifest.map((u) => {
                return u.url.replace("index.html", "") || "/";
            }));
            cache.addAll(filesToCache.filter((v,i,a) => a.indexOf(v) === i)).then(() => {

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

            const cachedResponse = await cache.match(event.request);

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
                        return null;
                    });
                    try {
                        event.waitUntil(
                            cache.put(event.request, networkResponse.clone()).catch(() => {

                            })
                        );
                    } catch (e) {

                    }
                    return networkResponse;
                } catch (e) {
                    return null;
                }
            }
        })(),
    );
});
