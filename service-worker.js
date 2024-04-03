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

const manifest = [{"revision":"7e04c9db0950f5bfb697c981a7a749a9","url":"about/charity/index.html"},{"revision":"2fa872d17132da9cdb4d389d20914eb0","url":"about/contact/index.html"},{"revision":"13261c0931cf36602a555b8ac950f6e4","url":"about/faq/index.html"},{"revision":"e52beebd481c3e3f7b425fce427513c8","url":"about/history/index.html"},{"revision":"b403565d8d92a11dc8dc7dc7a6340886","url":"about/index.html"},{"revision":"280da90f6a7ebd0eaea0e266ba6e8625","url":"about/legal/code-of-conduct/index.html"},{"revision":"c93bb6e64a5803d2cf0e20cbc2ee9c16","url":"about/legal/index.html"},{"revision":"1776ef6138f0c8f7fee090b463f30c7b","url":"attending/index.html"},{"revision":"51783e8075fb1b030a578f3916ecffc7","url":"attending/pricing/index.html"},{"revision":"b9de11fb32ef9c2d55b53df469d611f5","url":"attending/registration/index.html"},{"revision":"7fe5805c556413bbf23a73d624828e4c","url":"attending/travel/index.html"},{"revision":"8b882247abdd0ebf0af4d017d17ee532","url":"attending/venue/index.html"},{"revision":"7ad2c26cece07dfd63ad6dfc846cadc6","url":"docs/first-number-20-timetable.pdf"},{"revision":"a221b8ab993ac182c9d195e9ad16eb52","url":"docs/firstaid.pdf"},{"revision":"325163d6659a08bde3ab54d6a53c8444","url":"docs/flounge.pdf"},{"revision":"ecde5b9f8926fe962c5b35fb463ce2bf","url":"docs/furcation-code-of-conduct-v2024.03.pdf"},{"revision":"69a795aecbd163f0ea0e45080a751d38","url":"docs/furcation-conditions-of-sale-v2024.03.pdf"},{"revision":"6bf2507c2b6db88d93d6000a7416901e","url":"docs/furcation-privacy-policy-v1.3.pdf"},{"revision":"000c129e60140bcb11d5ba6a16ac709f","url":"docs/photography.pdf"},{"revision":"7f58a9e05f425816628211ba75f4d8d2","url":"docs/privacypolicy.pdf"},{"revision":"d5815066e79e86aa5c521dc9af3bf02c","url":"docs/recruit-reg.pdf"},{"revision":"06dae44d980156b16ea512d550f3d5d3","url":"docs/recruit-software.pdf"},{"revision":"3db36001a549ab9d5541497a2213435a","url":"docs/recruitment/entertainments-host.pdf"},{"revision":"680223031075ac17917432ccb1b3f4dd","url":"docs/recruitment/first-aider.pdf"},{"revision":"cb172532af654fc5e59872f6f50e9681","url":"docs/recruitment/medical-professional.pdf"},{"revision":"c7df1ced51ea4629da3a62cb4364f59e","url":"docs/recruitment/photographer.pdf"},{"revision":"504a9586f2a5b08de269e23aa5595491","url":"docs/recruitment/production-services-crew.pdf"},{"revision":"7b46a9c9575c1d09a260841b04db8421","url":"docs/recruitment/riggers.pdf"},{"revision":"b5973df5bb6ca51089c99bc3d1d482c0","url":"docs/recruitment/security-operatives.pdf"},{"revision":"1864fd171801adb7c10ceed6feb72a7d","url":"docs/recruitment/steward.pdf"},{"revision":"2c52350379d8f46bb93179c1b1cdf4ca","url":"docs/secoperative.pdf"},{"revision":"55ac51ecc591b0d62aadd19978e8ca46","url":"events/dealers-den/index.html"},{"revision":"7902cadc973e27f8e51bfd56da3fe886","url":"events/djs/index.html"},{"revision":"7875ac1cd5cb7ea70e68c38962e65986","url":"events/index.html"},{"revision":"50ba99c8a22280718d62f0fe7f39de36","url":"events/suggest/index.html"},{"revision":"1f07964d157f6d08b00ec64b8b230cf9","url":"events/thanks/index.html"},{"revision":"1b4ada3a09e916a6de7ad435d6760d78","url":"events/timetable/index.html"},{"revision":"df1e5c9a1e244300d1111aca8b314e88","url":"fonts/JollyLodger-Regular.ttf"},{"revision":"4b501b918962f6ed549e066c6f371d8e","url":"fonts/ModernAntiqua-Regular.ttf"},{"revision":"9a6e534dc2fd24c01602c6abac7d00cb","url":"fonts/Underdog-Regular.ttf"},{"revision":"42744f8b4ef540823e1c27887d5da974","url":"img/charity-logo.avif"},{"revision":"1b0d000545bf199b10a2b0ad993d796c","url":"img/charity-logo.jpg"},{"revision":"2110960c8c76b369382ac527fe635603","url":"img/charity-logo.png"},{"revision":"db647a5e40d02ab34c68a2c220a92f3c","url":"img/charity-logo.webp"},{"revision":"28043ddc4c09b39e45ee202bf5078f3e","url":"img/digital-easter-egg.avif"},{"revision":"3f3a0db225442c2e821e28796a626ce7","url":"img/discord.svg"},{"revision":"24bf666cc94e41241875353b010f1b68","url":"img/events-01-dealers-den-thumb.jpg"},{"revision":"4fb47e959f84f2984b03492f92a4d23b","url":"img/events-01-dealers-den.jpg"},{"revision":"553d40f90a0da069c81a845cbf010237","url":"img/events-02-hungry-hippos-thumb.jpg"},{"revision":"8089e4a6a9e51e16b1eb33c51cbade0d","url":"img/events-02-hungry-hippos.jpg"},{"revision":"073d357a61bac58f846c5544d98e28fc","url":"img/events-03-social-thumb.jpg"},{"revision":"c3ce2a9d6535230330856ca75e549b88","url":"img/events-03-social.jpg"},{"revision":"ead43c9bb72f08a6b615b447e3750fb4","url":"img/events-04-shows-thumb.jpg"},{"revision":"691184833a94958d276e92b20c0032d3","url":"img/events-04-shows.jpg"},{"revision":"01738aac113c2308d0a8c2fe084af465","url":"img/events-05-dances-thumb.jpg"},{"revision":"b01196362c1c2fc61e38a4eb99e6f725","url":"img/events-05-dances.jpg"},{"revision":"69d70825fdd9d7d48342cb7312b5a71f","url":"img/events-06-ceremonies-thumb.jpg"},{"revision":"faec8223de2fda12acfdb6794f517c97","url":"img/events-06-ceremonies.jpg"},{"revision":"986b14f235eeaf6fca597568b1f93ee9","url":"img/facebook.svg"},{"revision":"c82fe9c55119dc2fcfa8735d16cd43d7","url":"img/furcation-2020-original.png"},{"revision":"219041230a06e50cd680896af3aa6301","url":"img/furcation-history-2016.avif"},{"revision":"2c3e9a8ba89e1c6a7280f466f3e8376b","url":"img/furcation-history-2016.jpg"},{"revision":"454e4d4bce42324bd671181c672dfafc","url":"img/furcation-history-2016.webp"},{"revision":"ae648bb69b74cdb54329b7d5e62e9f7b","url":"img/furcation-history-2017.avif"},{"revision":"5857388585549aecbfa130c44b19e233","url":"img/furcation-history-2017.jpg"},{"revision":"0e2b51abd2cce26909692ed79a98cd80","url":"img/furcation-history-2017.webp"},{"revision":"e1c77543fc283dd30995e6dcf49af263","url":"img/furcation-history-2018.avif"},{"revision":"b8a7e2dc0fbbc98f47ba74b8313d5542","url":"img/furcation-history-2018.jpg"},{"revision":"cdde010105d104d50f1ca5b2d03a5b15","url":"img/furcation-history-2018.webp"},{"revision":"83bac1c60909bca980b5051f57fb76c4","url":"img/furcation-history-2019.avif"},{"revision":"01f45931c800ce331b77d11fa7937e56","url":"img/furcation-history-2019.jpg"},{"revision":"f3fa7c31865758969f11809450b9c5a0","url":"img/furcation-history-2019.webp"},{"revision":"50981216557dcb4a48fea8fa75f402eb","url":"img/furcation-history-2020.avif"},{"revision":"0dc62dd446fc1c344312d66c9ed55445","url":"img/furcation-history-2020.png"},{"revision":"0f4041af1a44469cd5b9e3c8259e34e3","url":"img/furcation-history-2020.webp"},{"revision":"5b4a080dc0fd9a52c7f23e05912b96bc","url":"img/furcation-history-2021.avif"},{"revision":"943666c9f31f52644ea165c07b983e86","url":"img/furcation-history-2021.png"},{"revision":"66bb76b081899d08b472df4019291a09","url":"img/furcation-history-2021.webp"},{"revision":"e263561d10c5cc4c239b476b73788d88","url":"img/furcation-history-2022.avif"},{"revision":"d061e3bfc34d7f54d7c0b2580588e65e","url":"img/furcation-history-2022.png"},{"revision":"d89f9c2302cad5754a8a788f7c92495f","url":"img/furcation-history-2022.webp"},{"revision":"bb8ce0c7a7ff684c6359a5e04ae3b41d","url":"img/furcation-history-2023.avif"},{"revision":"e9a985b2226385f01dca3b83a61cc981","url":"img/furcation-history-2023.png"},{"revision":"df86f6cc7b19dca3a06b4f293eeb7eb3","url":"img/furcation-history-2023.webp"},{"revision":"cd08acc22cb72662bdccb37a44856e29","url":"img/furcation-logo-sm.png"},{"revision":"4cfb3c466a14f9223091b32a5c1d3548","url":"img/homepage-graphic.png"},{"revision":"0be6e3bd190371aa85aa9f3623e2502b","url":"img/linkedin.svg"},{"revision":"cd22b15300d7294a59588a14b3c18cc0","url":"img/main-bg.avif"},{"revision":"98b083fbdbabdd9643badbc7267cf59d","url":"img/main-bg.jpg"},{"revision":"b1f69bfd8fa3b2cc932ac020e49cf945","url":"img/main-bg.png"},{"revision":"2cc4fbfa93609dfaa5bda3801dd6eaa0","url":"img/main-bg.webp"},{"revision":"1dcebaaa83f425fcc1d6d46ac810a252","url":"img/page-contacts.avif"},{"revision":"76d81f3a916566788df690bd048168c4","url":"img/page-contacts.png"},{"revision":"7f7e0efa9340eac99386a023a056bbd5","url":"img/page-contacts.webp"},{"revision":"7066d760f21ee8942b681ad1f44b03a8","url":"img/page-dealers-den.avif"},{"revision":"8e2c1023739014d0ae7a5fe845f34d00","url":"img/page-dealers-den.png"},{"revision":"d99f17224a78b9b4261d7de6414f69c9","url":"img/page-dealers-den.webp"},{"revision":"d6d7f6bd06f007f2b6ab78b797911808","url":"img/page-djs.avif"},{"revision":"9012af7c54bfa7cd51403ad7b60ad87c","url":"img/page-djs.png"},{"revision":"c76d1b01bdc5ce76933c3cb0911e4357","url":"img/page-djs.webp"},{"revision":"97e6771fa13a0e8462a9d564adf5183c","url":"img/page-faqs.avif"},{"revision":"a7431736bc50a6714583c1cb5163bca8","url":"img/page-faqs.png"},{"revision":"f1faebec6f5bcd54574d49e6afa1a3d8","url":"img/page-faqs.webp"},{"revision":"909dc8c0385dc17cc68fc73b8e3f6dd9","url":"img/page-pricing.avif"},{"revision":"7dcfe1801ac82b2566d405619f3b27ae","url":"img/page-pricing.png"},{"revision":"2e8deb3859ee83bd5a3c6437710dc6d4","url":"img/page-pricing.webp"},{"revision":"f24741f952f3a6eea894ea4d8d63a5da","url":"img/page-venue.avif"},{"revision":"818704c6d24fe186e3a996fecd513a2a","url":"img/page-venue.png"},{"revision":"6ad9c719d38c7f4bf77f8b16c5c7a0e1","url":"img/page-venue.webp"},{"revision":"4b6ea8456b3a44d1f8da60265a7a87b7","url":"img/page-volunteer.avif"},{"revision":"6508f5a9974d6598dcfc89aea676376e","url":"img/page-volunteer.png"},{"revision":"d4127fbc31cbb6a6d3e855c1c0fbbddf","url":"img/page-volunteer.webp"},{"revision":"5e58e5d2c599995df576b2969b8e68a8","url":"img/park-map-thumb.avif"},{"revision":"63c38d4dc1fdd63b01df52016d9752c6","url":"img/park-map-thumb.png"},{"revision":"8714fef85d4dcc4c1cd9f503a3dccdb9","url":"img/park-map-thumb.webp"},{"revision":"cf050f9084af9eab651fcb40109f3982","url":"img/park-map.png"},{"revision":"295f419dc8f9d04ce2681fa348a53b50","url":"img/park-map.webp"},{"revision":"9512e047397796d1b0a2d6585cf78ee4","url":"img/share-image.jpg"},{"revision":"2da59947d07c9be3e6baf46d8d3cc450","url":"img/siteicon.avif"},{"revision":"463138ba70095e642c7ebebf291ff0ac","url":"img/siteicon.png"},{"revision":"e6668a7dd994aa5f4f4c75a5182e36fd","url":"img/siteicon.webp"},{"revision":"cdfa096683b050fd6e3f282a50bfaa9f","url":"img/telegram.svg"},{"revision":"9e3e5a2d21141dd0abb307d740c78ed9","url":"img/twitch.svg"},{"revision":"fbcbe304946cc373d109e68cdea6c791","url":"img/twitter.svg"},{"revision":"7f033d204cdbfc0e5c51551047bb3a82","url":"img/venue-01-entrance-original.jpg"},{"revision":"00cd89071bea544f611ec48b345f99fb","url":"img/venue-01-entrance.avif"},{"revision":"d56ca0d5cb95e5824f2c8922110c345f","url":"img/venue-01-entrance.jpg"},{"revision":"46089a9287008992b915b9621b739b57","url":"img/venue-01-entrance.webp"},{"revision":"4bac2079c97c3b56e242a0cc4c1583c3","url":"img/venue-03-beach-original.jpg"},{"revision":"e5d78c9bdfe083a63ef2e7c38f1c3e5e","url":"img/venue-03-beach.avif"},{"revision":"a5a0805fb866f360f05dc53392e556f3","url":"img/venue-03-beach.jpg"},{"revision":"07038a6e95f43369d1cafc7bf3389f13","url":"img/venue-03-beach.webp"},{"revision":"01d7811223c0a69195eda1249de5ca0a","url":"img/youtube.svg"},{"revision":"8bc9d4e2f3145ec98cdf66251da9f4fa","url":"index.html"},{"revision":"42ddb524b3d0e3656b6ce2585c1f160c","url":"volunteer/index.html"}];

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
