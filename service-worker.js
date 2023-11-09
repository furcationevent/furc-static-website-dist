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

const manifest = [{"revision":"5e972e4a69e31dafcdbb21fd79db0ace","url":"about/contact/index.html"},{"revision":"f5efe24551fad8133de9dc8212690d34","url":"about/faq/index.html"},{"revision":"a46e9e787931ae2b507d7628e8af711f","url":"about/history/index.html"},{"revision":"1db98c75c8291e0a775f53290b3a7330","url":"about/index.html"},{"revision":"3d23cc6830cd5c88c18957618a61c61e","url":"about/legal/code-of-conduct/index.html"},{"revision":"0ba8a1603dc932dea820671494df5c78","url":"about/legal/index.html"},{"revision":"619fdac0aecfecda39483edda7f9dbec","url":"attending/index.html"},{"revision":"64d4a20bfa0589486f49406600b517e4","url":"attending/pricing/index.html"},{"revision":"f92c44bf148f7e80e630425366c449ce","url":"attending/registration/index.html"},{"revision":"34c76c26cf95c553f27c1504ece30bcb","url":"attending/travel/index.html"},{"revision":"68df7f66def4d2b0ec4e38165a81bee3","url":"attending/venue/index.html"},{"revision":"d4ef2570c1ae43388782b99200abb866","url":"docs/2023-04-02 - Recruitment - Entertainments Host.pdf"},{"revision":"4c85895e41fabd300f066f72be27ed2e","url":"docs/2023-04-02 - Recruitment - First Aider.pdf"},{"revision":"de1ec30bc2d9ff5b783ee889a29ca2b1","url":"docs/2023-04-02 - Recruitment - Medical Professional.pdf"},{"revision":"5198602564f39657ee349c62191707ea","url":"docs/2023-04-02 - Recruitment - Photographer.pdf"},{"revision":"542f92cf4b4210098fe8829292616cb7","url":"docs/2023-04-02 - Recruitment - Project Management Assistant.pdf"},{"revision":"80ff54282f32b22d2a44faed9e1294b3","url":"docs/2023-04-02 - Recruitment - Riggers & Volunteers.pdf"},{"revision":"df98799f954d5a5509014112885a5a86","url":"docs/2023-04-02 - Recruitment - Security Operative.pdf"},{"revision":"69ffab471120a436f9a8ce993896ec65","url":"docs/2023-04-02 - Recruitment - Sponsor coordinator.pdf"},{"revision":"3eb0b219391d9c125a15bd7fc6261bb2","url":"docs/2023-04-02 - Recruitment - Welfare Steward.pdf"},{"revision":"2c77b9090842802a09783e91f3d32546","url":"docs/2023-04-09 - Recruitment - Engineering Assistant.pdf"},{"revision":"94ff7d2ed40f0e16f5fe71bcb6e1764c","url":"docs/2023-04-14 - Recruitment - AV Engineer.pdf"},{"revision":"ac8a79ea134c2bff2e6466a12af45669","url":"docs/2023-04-14 - Recruitment - Fursuit Liaison.pdf"},{"revision":"c80cbe749a65a21b184a9360f526eda3","url":"docs/2023-04-14 - Recruitment - Operations Personnel.pdf"},{"revision":"29eb78016329db954e9951acfbefb85d","url":"docs/2023-06-20 - Recruitment - Registration Assistant.pdf"},{"revision":"73e106b7148d449772683619244f43fa","url":"docs/2023-07-21 - Furcation Documents - 2023 Code of Conduct v2023.02.pdf"},{"revision":"950932f3287bf21f178a1b44cad35fb6","url":"docs/2023-07-21 - Furcation Documents - 2023 Conditions of Sale v2023.02.pdf"},{"revision":"d2949396901ba352eab339fe7f383d92","url":"docs/first-number-20-timetable.pdf"},{"revision":"1be7cff3401e54a3cf8109f5df843245","url":"docs/furcation-privacy-policy-1.2.pdf"},{"revision":"0d4591f6bfe0985c01a44b9f3ca64f2b","url":"docs/privacypolicy.pdf"},{"revision":"1c972ee27861915dc7acb2ceb7e5a4cf","url":"events/dealers-den/index.html"},{"revision":"a2e64723fdcde7e1a8d47a874b49ac91","url":"events/djs/index.html"},{"revision":"3b36d468cf380e26151cfcff123507c7","url":"events/index.html"},{"revision":"c97b9d3cbe88c0f0b7054e417b9c5098","url":"events/thanks/index.html"},{"revision":"28657dd393608cf83e3881a53bf6430f","url":"events/timetable/index.html"},{"revision":"d1926e2ef4d72310cc8e9b6972bd358a","url":"fonts/antonio-latin-ext.woff2"},{"revision":"b58920cd687bd9e1e405730459840ece","url":"fonts/antonio-latin.woff2"},{"revision":"b3cb9b97c2327360ca886c69b3c4a9c9","url":"fonts/AtkinsonHyperlegible-Bold.woff2"},{"revision":"5a966a0d0a4d5f1717f8b93b7d3c4e8a","url":"fonts/AtkinsonHyperlegible-BoldItalic.woff2"},{"revision":"bea10bef0e9a8d644e411a7ddb26d7b7","url":"fonts/AtkinsonHyperlegible-Italic.woff2"},{"revision":"d3663984591b347c05de42a5aa0ba47b","url":"fonts/AtkinsonHyperlegible-Regular.woff2"},{"revision":"99f31deb8b3666898b6f13f066190542","url":"img/addToHome.png"},{"revision":"bd371b9a44cf9d48a8af43f9be1d9e13","url":"img/black-arrow-right.svg"},{"revision":"cff744aee3eed492094c3f544463532f","url":"img/black-arrow.svg"},{"revision":"42744f8b4ef540823e1c27887d5da974","url":"img/charity-logo.avif"},{"revision":"91f5e0ffa8a99c606c96f2b289ffc444","url":"img/charity-logo.jpg"},{"revision":"3262601c2e8cbd61cfd1e55ebc06a485","url":"img/charity-logo.png"},{"revision":"fc95d8ea19b1fdd5012f0e968de28e1f","url":"img/charity-logo.webp"},{"revision":"28043ddc4c09b39e45ee202bf5078f3e","url":"img/digital-easter-egg.avif"},{"revision":"3f3a0db225442c2e821e28796a626ce7","url":"img/discord.svg"},{"revision":"1e385b2dcc98b61757710e3a8bf84ceb","url":"img/egg-01-fdj3dj90undsd.avif"},{"revision":"abd8c25494a562bf404437fe8638b5f2","url":"img/egg-01-fdj3dj90undsd.jpg"},{"revision":"74901decdeeebb47ebbf39263ca4ca74","url":"img/egg-01-fdj3dj90undsd.png"},{"revision":"30342d9ec02fd5de1f1de8bc01c2af9a","url":"img/egg-01-fdj3dj90undsd.webp"},{"revision":"6c9a626352a67bc6be04d1f9d2531a5b","url":"img/egg-02-fkl292ss2dfjl.avif"},{"revision":"413262abd2849f7822b0f49f8086c01c","url":"img/egg-02-fkl292ss2dfjl.jpg"},{"revision":"c8aadc96ee0e327d01292b5c7f2ff1c1","url":"img/egg-02-fkl292ss2dfjl.png"},{"revision":"0c25adf77144bcd7791b2ebea5da64bb","url":"img/egg-02-fkl292ss2dfjl.webp"},{"revision":"8c2e08cfabe3de71da04373ee836adf4","url":"img/egg-03-kdklj2uj1khd2.avif"},{"revision":"416cf3bc8b4698157c44f7f66ae10db9","url":"img/egg-03-kdklj2uj1khd2.jpg"},{"revision":"ef4f3320965366abe28b7e612e75e531","url":"img/egg-03-kdklj2uj1khd2.png"},{"revision":"115ce647af85665a844417a007b19d67","url":"img/egg-03-kdklj2uj1khd2.webp"},{"revision":"da76a9fb088bfb6e89757e971a7f99a3","url":"img/egg-04-15154231d14e2.avif"},{"revision":"746a5ab0cd5acc6b0ed08bbf130e2d56","url":"img/egg-04-15154231d14e2.jpg"},{"revision":"8b52d0bdee2da9324d6eb5dc4c862b30","url":"img/egg-04-15154231d14e2.png"},{"revision":"6dc7085df02ccdeb48ff6b38636d1d41","url":"img/egg-04-15154231d14e2.webp"},{"revision":"c47cb6a39c90a804f7fd61a74a3fca78","url":"img/egg-05-kdku33hd821j4.avif"},{"revision":"eda466b434b07fa6e6622d65778c6705","url":"img/egg-05-kdku33hd821j4.jpg"},{"revision":"4b6700d494d93de58fe58c212c83ebac","url":"img/egg-05-kdku33hd821j4.png"},{"revision":"cc0421937c69955a36c457a2855d3e81","url":"img/egg-05-kdku33hd821j4.webp"},{"revision":"be7cb4d3b0c699033dbf9a1f9ba1fe62","url":"img/egg-06-11562dkljljio.avif"},{"revision":"a5ba102b26ad8afc4b7ace55a6531f6f","url":"img/egg-06-11562dkljljio.jpg"},{"revision":"adb1b583d4ae935c7ad1d8bbe413667c","url":"img/egg-06-11562dkljljio.png"},{"revision":"4b0c9dcf6c92da625cd4550c2172e332","url":"img/egg-06-11562dkljljio.webp"},{"revision":"5d0c7e0bdfc219b52600fa475bb75346","url":"img/egg-07-ji89uy3d4542d.avif"},{"revision":"4b58c7d59b4051437456d860a5f15e88","url":"img/egg-07-ji89uy3d4542d.jpg"},{"revision":"d6d70d238db2ffecd1ccd23489d8284d","url":"img/egg-07-ji89uy3d4542d.png"},{"revision":"415086fbe1268bd7c0e0cbb9040dd8d8","url":"img/egg-07-ji89uy3d4542d.webp"},{"revision":"f7a654e97c8a5587ad71b783d3ce36da","url":"img/egg-08-djio3897dd564.avif"},{"revision":"81600d2d8f0b46224bb2e2d2c726d344","url":"img/egg-08-djio3897dd564.jpg"},{"revision":"a78d50ffbc16b4b09ff7f61504f067a0","url":"img/egg-08-djio3897dd564.png"},{"revision":"d7a68be00eff68b16bbc743590f8d52c","url":"img/egg-08-djio3897dd564.webp"},{"revision":"c82d49e65cfdbaa769abaf1d7594eb04","url":"img/egg-09-df3erj35477dd.avif"},{"revision":"58bbda69ea1d2a4db233fb13949fee03","url":"img/egg-09-df3erj35477dd.jpg"},{"revision":"6abfd949cd0d3d1b97c1a0741711ae6a","url":"img/egg-09-df3erj35477dd.png"},{"revision":"57e8a62cd0460085927ae109157bd660","url":"img/egg-09-df3erj35477dd.webp"},{"revision":"24bf666cc94e41241875353b010f1b68","url":"img/events-01-dealers-den-thumb.jpg"},{"revision":"725cd81e2f82c867174d0710a7766443","url":"img/events-01-dealers-den.jpg"},{"revision":"553d40f90a0da069c81a845cbf010237","url":"img/events-02-hungry-hippos-thumb.jpg"},{"revision":"0710638c494272efac1fd73a8c7c3216","url":"img/events-02-hungry-hippos.jpg"},{"revision":"1fcfa6e31ac69d5fcbc0116033efde49","url":"img/events-03-social-thumb.jpg"},{"revision":"4a6b86edb0ea741afccd0a76b6a68905","url":"img/events-03-social.jpg"},{"revision":"0f2011e596d8d21a2acac4c0683955fc","url":"img/events-04-shows-thumb.jpg"},{"revision":"a568e87f8176604a57a33cd4e2f95041","url":"img/events-04-shows.jpg"},{"revision":"01738aac113c2308d0a8c2fe084af465","url":"img/events-05-dances-thumb.jpg"},{"revision":"b240fbdd48e5e3975843bfa2954ed3ef","url":"img/events-05-dances.jpg"},{"revision":"69d70825fdd9d7d48342cb7312b5a71f","url":"img/events-06-ceremonies-thumb.jpg"},{"revision":"8bdd9038d3728417b46d5a06ee422d9f","url":"img/events-06-ceremonies.jpg"},{"revision":"84f3ea1cce4032fe72312677decfded7","url":"img/facebook.svg"},{"revision":"5135effa86ae17d4dc405673b0379d29","url":"img/ferret.avif"},{"revision":"ac15262f88c4cef4f8ff200e210a3421","url":"img/ferret.jpg"},{"revision":"af03544b2599b00eab7e9b94c155ccf6","url":"img/ferret.webp"},{"revision":"7d9a4fcc3c5b6da606a0490cce2eee7c","url":"img/firefox-install.png"},{"revision":"9988e661571d57da1e57d3dd26bedef3","url":"img/firefox-menu.png"},{"revision":"a8671155523cbc81134942450d25d07d","url":"img/furcation-2020-original.png"},{"revision":"219041230a06e50cd680896af3aa6301","url":"img/furcation-history-2016.avif"},{"revision":"2c3e9a8ba89e1c6a7280f466f3e8376b","url":"img/furcation-history-2016.jpg"},{"revision":"d727f042deefb23cbdd09ec3741895b2","url":"img/furcation-history-2016.webp"},{"revision":"ae648bb69b74cdb54329b7d5e62e9f7b","url":"img/furcation-history-2017.avif"},{"revision":"5857388585549aecbfa130c44b19e233","url":"img/furcation-history-2017.jpg"},{"revision":"fc1d0d5ef2d4287b828a6664156ddd92","url":"img/furcation-history-2017.webp"},{"revision":"e1c77543fc283dd30995e6dcf49af263","url":"img/furcation-history-2018.avif"},{"revision":"b8a7e2dc0fbbc98f47ba74b8313d5542","url":"img/furcation-history-2018.jpg"},{"revision":"ebf8ddbfa0d4a6f1bc897cc8f5c51602","url":"img/furcation-history-2018.webp"},{"revision":"83bac1c60909bca980b5051f57fb76c4","url":"img/furcation-history-2019.avif"},{"revision":"385927746cd5b63accdc5719047572e9","url":"img/furcation-history-2019.jpg"},{"revision":"447b46b43e2dea2b66a382f40c5804cf","url":"img/furcation-history-2019.webp"},{"revision":"50981216557dcb4a48fea8fa75f402eb","url":"img/furcation-history-2020.avif"},{"revision":"e9587564d3739390566a53c38cd1b33b","url":"img/furcation-history-2020.png"},{"revision":"0f4041af1a44469cd5b9e3c8259e34e3","url":"img/furcation-history-2020.webp"},{"revision":"5b4a080dc0fd9a52c7f23e05912b96bc","url":"img/furcation-history-2021.avif"},{"revision":"ee0317459212da7dc7ce3f1276607aa8","url":"img/furcation-history-2021.png"},{"revision":"3d745cb72caf46c1d49387fd38ee7c5b","url":"img/furcation-history-2021.webp"},{"revision":"e263561d10c5cc4c239b476b73788d88","url":"img/furcation-history-2022.avif"},{"revision":"91b12aecdd2a93ba6262750bbfdb6653","url":"img/furcation-history-2022.jpg"},{"revision":"d061e3bfc34d7f54d7c0b2580588e65e","url":"img/furcation-history-2022.png"},{"revision":"d89f9c2302cad5754a8a788f7c92495f","url":"img/furcation-history-2022.webp"},{"revision":"3d6b85e80183056a5fb37609386efdcc","url":"img/furcation-logo-circle.svg"},{"revision":"db8c1e9a074906f9d50dcbca341a4a9d","url":"img/furcation-logo-square.svg"},{"revision":"8cc48c73a1f1203e0f4d07bfaac10992","url":"img/home-background.avif"},{"revision":"90836e1d13b5bd59d506bca486e9d316","url":"img/home-background.jpg"},{"revision":"ea3e2e4d85619e348235a97931157b3f","url":"img/home-background.webp"},{"revision":"518f5dfc1c7112d2024543c9fa3f18b7","url":"img/icons/app-144.png"},{"revision":"7aecdc156d2c6b60c2e8c01c2c9f7b2b","url":"img/icons/app-192.png"},{"revision":"76d9708f03fecec871228b2579a644a9","url":"img/icons/app-48.png"},{"revision":"51ea854cf8d11e9458fceb7d6875b06b","url":"img/icons/app-72.png"},{"revision":"ae4d4da1798634c938bf86df577c0a27","url":"img/icons/app-96.png"},{"revision":"48b09e4c02a03a345aef08ab11eae3d2","url":"img/icons/favicon-16x16.png"},{"revision":"fe308bac6e236bf2326f69118e6a1dff","url":"img/icons/favicon-32x32.png"},{"revision":"c5c20bfc1382db13fbbf749204d8b928","url":"img/icons/maskable_icon_x128.png"},{"revision":"3153831e7e1bfde1b2b4723f87c2cc48","url":"img/icons/maskable_icon_x192.png"},{"revision":"7b3437fa42df4b03250c20464d6496ed","url":"img/icons/maskable_icon_x384.png"},{"revision":"52137bac903e0ab1a465dccf4195822c","url":"img/icons/maskable_icon_x48.png"},{"revision":"93cf10d999690540560e0925c6a2724c","url":"img/icons/maskable_icon_x512.png"},{"revision":"839c2746937565b077b2b49a879ccdef","url":"img/icons/maskable_icon_x72.png"},{"revision":"974e8e2d5857e841582b5a7cecdeff6a","url":"img/icons/maskable_icon_x96.png"},{"revision":"12e926d4917cb563054883310753d62a","url":"img/icons/maskable_icon.png"},{"revision":"1ce3cf782fe4f6f4cd89f858549b2092","url":"img/lcars-piece-br.svg"},{"revision":"312419d36ac52fe398ae1ffe2e44422d","url":"img/lcars-piece-tr.svg"},{"revision":"1d4f606fab2f237c6389847ae5eca635","url":"img/linkedin.svg"},{"revision":"e3c96a74a037c941e8514666922ee8a7","url":"img/mgm.png"},{"revision":"7e8155800c998fc9be407c670442df0c","url":"img/page-contacts.avif"},{"revision":"2200861286622b84216ca83df548e8df","url":"img/page-contacts.jpg"},{"revision":"44a289223126b7c45e96f7b06d4672cf","url":"img/page-contacts.png"},{"revision":"3c4d534f530562f346dfe30bc852eb55","url":"img/page-contacts.webp"},{"revision":"7f37fc67906d992a7d1bb597c7b2991c","url":"img/page-registration.avif"},{"revision":"f71513b6db848878c369234b0d133f27","url":"img/page-registration.jpg"},{"revision":"a2811b5029c6a4182ed6e3fa96b4194f","url":"img/page-registration.png"},{"revision":"8396a92862d661894e8e6ad385111ab3","url":"img/page-registration.webp"},{"revision":"be72916eacd45cf9acd84d02cea3f844","url":"img/page-travel.avif"},{"revision":"4bd75d0dd26245ba761a9259fac186e0","url":"img/page-travel.png"},{"revision":"e2903cb0797b363f51fad476f7b15333","url":"img/page-travel.webp"},{"revision":"5e58e5d2c599995df576b2969b8e68a8","url":"img/park-map-thumb.avif"},{"revision":"1e41e50f0eddbcb10d0302e08fe770bb","url":"img/park-map-thumb.png"},{"revision":"8714fef85d4dcc4c1cd9f503a3dccdb9","url":"img/park-map-thumb.webp"},{"revision":"5513faeaf87b0fb6c9a7a06eda440b70","url":"img/park-map.png"},{"revision":"295f419dc8f9d04ce2681fa348a53b50","url":"img/park-map.webp"},{"revision":"91810d2efbb5f5181862298662f9a25c","url":"img/redalert.svg"},{"revision":"9512e047397796d1b0a2d6585cf78ee4","url":"img/share-image.jpg"},{"revision":"2da59947d07c9be3e6baf46d8d3cc450","url":"img/siteicon.avif"},{"revision":"65da40ed363275fb484ffaaeb185e727","url":"img/siteicon.png"},{"revision":"e6668a7dd994aa5f4f4c75a5182e36fd","url":"img/siteicon.webp"},{"revision":"cdfa096683b050fd6e3f282a50bfaa9f","url":"img/telegram.svg"},{"revision":"cf37dd49fa2cb66e550753d19eee62dc","url":"img/tng-style-titlecard-obj.svg"},{"revision":"e838e708e7b8657f2ccd978826e115d9","url":"img/tng-style-titlecard.png"},{"revision":"4ddc07e59b5004b30b1a719c0c061a1b","url":"img/tng-style-titlecard.svg"},{"revision":"9902fec08a6142fc004c815f605ff5ac","url":"img/transporter-game-instructions-1.png"},{"revision":"0fdddbcf933a7faf617fbc372efcefcc","url":"img/transporter-game-instructions-1.svg"},{"revision":"c9008bfdc5622ecb646a54e32abdc101","url":"img/transporter-game-instructions-2.png"},{"revision":"59b10397429ff5d151c2f1ae46785c6f","url":"img/transporter-game-instructions-2.svg"},{"revision":"6e9b30e9d7daa06af56f7f4ddc6347d6","url":"img/transporter-game-instructions-3.png"},{"revision":"5644f478dad6a3fe840f8a74f75cf139","url":"img/transporter-game-instructions-3.svg"},{"revision":"c46e313f78365b962520c66f8a6139c6","url":"img/transporter-room.svg"},{"revision":"9e3e5a2d21141dd0abb307d740c78ed9","url":"img/twitch.svg"},{"revision":"460412505f8ab9a55a850269e0f6bf0c","url":"img/twitter.svg"},{"revision":"9823dc2308c6811dac34e066b8cf9db6","url":"img/venue-01-entrance-original.jpg"},{"revision":"53f64d40bbc4196c941c9bfebe28832f","url":"img/venue-01-entrance.avif"},{"revision":"d6ba65b9b3ef893ed3d12afbece31a47","url":"img/venue-01-entrance.jpg"},{"revision":"810b968ec80604bd19d415f77a96531b","url":"img/venue-01-entrance.webp"},{"revision":"a2f8396114508e9b33f1bf8baa787b11","url":"img/venue-03-beach-original.jpg"},{"revision":"e5d78c9bdfe083a63ef2e7c38f1c3e5e","url":"img/venue-03-beach.avif"},{"revision":"a5a0805fb866f360f05dc53392e556f3","url":"img/venue-03-beach.jpg"},{"revision":"4b268c1c5c9949391478e57bf2d47936","url":"img/venue-03-beach.webp"},{"revision":"6f6486feabd0baeebebfa1b4d295c1af","url":"img/white-arrow-right.svg"},{"revision":"b589494e090acc26b115d0d666f98b55","url":"img/white-arrow.svg"},{"revision":"84596feae7d2eff29c2edf74c07d3c54","url":"img/youtube.svg"},{"revision":"75f3eecc591892eb5236d2c50b71c7b4","url":"index.html"},{"revision":"c8c046f184852c828ac310c73bf6236e","url":"media/live/index.html"},{"revision":"1db01a5ab7a44ad25fe002c7bfd9cfed","url":"media/starwars/index.html"},{"revision":"095f57205341095606fbe3b11ba3c0d5","url":"media/transporter-game/index.html"},{"revision":"336db58af3910be4aa8358d1c73153c5","url":"media/videos/index.html"},{"revision":"357d00450e220e4854875f1195f415c8","url":"news/2022-12-05-charity-update/index.html"},{"revision":"69f40afcbd32c34ab3bfbf1d254082ce","url":"news/2023-04-07-easter-egg-hunt/index.html"},{"revision":"5b2ee7949c5b2e177adc7632ab3f991d","url":"news/index.html"},{"revision":"cc87e1831e625c244ead6aebeab6756b","url":"volunteer/index.html"},{"revision":"49a1d7e8c1c8124dc3bdd0d6cca6a2d7","url":"volunteer/riggers-old/index.html"},{"revision":"5d284c57f1d3793840f8433fb5aa3466","url":"volunteer/riggers-old/thanks/index.html"}];

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
