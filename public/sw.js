if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,i,c)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=c(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/2852872c-afc837b60119b8c4e4b1.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/29107295-62449f6ab50432c0efef.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/395-8165265177afe44036c5.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/43-cc6d6f355a5c0fd99a0a.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/450-2960e5fbc1bac9d61bd4.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/493-3405bb38eb9e25182680.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/504-ad878d93b7d5685f14ba.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/507-b182640f7b8e0d4153b2.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/579-20614b39f3e8b3269ac8.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/605-5d4aca2240e2d6fd3965.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/649-d38675adb53807c6134c.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/668-5909a911cf9657c227ff.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/75fc9c18-96647c347895bf24656d.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/911-9243173b6c5257314eec.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/99-70c47108d098d89efda3.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/b637e9a5-f8aecf6ed2afa2d28836.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/framework-ae56fb84cd498d79bb72.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/main-ab323b593da0498bf8cc.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/404-08f4f4ec3c30fec7a7ea.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/_app-7076f3270d11e8ef12eb.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/_error-b44d9ba00071b088aa36.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/cart-45806085d093a82aad8f.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-602f979d5dd9bf781f3c.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/category/detail/%5Bslug%5D-c8884839947d321cad33.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/checkout-07cf8b5ff065a3ed778b.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/index-2624302babd6e85aa280.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/login-85a2732e464cccee8f7f.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/orders-7f7c7c5ab48831f3ad31.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/orders/%5Bid%5D-9756aaa7415f85b03e34.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-4ad889d799b9acaa2a4e.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/product/search/%5Bproduct_name%5D-ee27fdd6ee04a3e34041.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/profile-d79623975a0f5073f612.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/profile/edit-e19af1095bac105b9749.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/signup-aad2d3cbbfc39069c432.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/pages/thanks-4ac729314359a8bc1550.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/polyfills-7b08e4c67f4f1b892f4b.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/chunks/webpack-ea83fe41f8aecd6cab64.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/css/083dc82ce0c0d3a9974b.css",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/css/49c482a50cb22361236f.css",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/css/cecfaf46283652cef4fd.css",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/wDctWbzTjXQPM8g64EuNq/_buildManifest.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/_next/static/wDctWbzTjXQPM8g64EuNq/_ssgManifest.js",revision:"wDctWbzTjXQPM8g64EuNq"},{url:"/assets/default/loktomninh-192x192.png",revision:"357614c7ce54db792d10c154d3cbb3ce"},{url:"/assets/default/loktomninh-384x384.png",revision:"553785ebfb630ce718484950505f10ea"},{url:"/assets/default/loktomninh-512x512.png",revision:"43783119cdc215c4a94e8388e3c76a40"},{url:"/assets/images/icons/Group.svg",revision:"1c38f94b3ed336122f894cee9a56fa04"},{url:"/assets/images/icons/admin-dashboard.svg",revision:"e20d8d425bf709e240e7512a8cc5fb34"},{url:"/assets/images/icons/alarm-clock.svg",revision:"d9af221c40ba596c27feb9de23789bf8"},{url:"/assets/images/icons/app-store.svg",revision:"aadaa9daa426aa8fb94340576f00c4a3"},{url:"/assets/images/icons/apple.svg",revision:"5e9bf3203ca8db660ceff7852d555ce5"},{url:"/assets/images/icons/arrow-down-filled.svg",revision:"1a24a675456b67c226e563965ed32063"},{url:"/assets/images/icons/arrow-left.svg",revision:"1c4c4fc809a79f33ff4c975c15caf635"},{url:"/assets/images/icons/arrow-long-right.svg",revision:"dbe34023b46d0d93e9f7720c034a9c99"},{url:"/assets/images/icons/arrow-right.svg",revision:"6f621d498639c6df823f3fefcc4add4b"},{url:"/assets/images/icons/baby-boy.svg",revision:"2423af611f6d6eb38d6c9d9fa602db2c"},{url:"/assets/images/icons/baby-feeder.svg",revision:"3db19e750c7e62629db419e6c9086062"},{url:"/assets/images/icons/baby-girl.svg",revision:"5e4b9149216fe957618b2bc27f33237a"},{url:"/assets/images/icons/bag.svg",revision:"c06742f534cfaf00c6d66d3ec419e9eb"},{url:"/assets/images/icons/bag_filled.svg",revision:"08532824fc78d9480cf532e1b6a957cd"},{url:"/assets/images/icons/bangladesh.svg",revision:"3114729fae63a0c28a3118df7e46e8a2"},{url:"/assets/images/icons/basket-ball.svg",revision:"7b47c3fcce0a0f09b0f9f8295b5a37fd"},{url:"/assets/images/icons/basketball-ball.svg",revision:"ab468d41601806e3199ce19d3ddf738d"},{url:"/assets/images/icons/beauty-products.svg",revision:"1f72b1259fa847edd341b28e848fcaa5"},{url:"/assets/images/icons/beer.svg",revision:"6f7698c1c20af551731085e30c776545"},{url:"/assets/images/icons/board.svg",revision:"cc1ab285a9b0f123485efef3987a19aa"},{url:"/assets/images/icons/bottle.svg",revision:"fb063986163a2272447f914114f6e050"},{url:"/assets/images/icons/box.svg",revision:"895ec273f45875fa9acd49500045b343"},{url:"/assets/images/icons/brand.svg",revision:"02ed085fb5721039832b914578bd7145"},{url:"/assets/images/icons/breakfast.svg",revision:"002be4866ae351d9fe3634a789dfba9e"},{url:"/assets/images/icons/camera.svg",revision:"cb8020498cb03b26774f6568ed49f749"},{url:"/assets/images/icons/car.svg",revision:"0bc9d0382c691f12011daaea84b7623b"},{url:"/assets/images/icons/carrot.svg",revision:"3df8fc96694748b5751bb0940bd3611f"},{url:"/assets/images/icons/categories.svg",revision:"eef4f8a10704aa34e94d09ac03267bac"},{url:"/assets/images/icons/category.svg",revision:"c946eb04e695a71cf114228f3ab6800e"},{url:"/assets/images/icons/check.svg",revision:"10a5b071548379871a331ddae24e289f"},{url:"/assets/images/icons/checkbox.svg",revision:"d39c60d8a4e6aba37a2c2e3bf804c95e"},{url:"/assets/images/icons/chevron-down.svg",revision:"c66b213d1dfff391c61146727032f068"},{url:"/assets/images/icons/chevron-left.svg",revision:"5727f869509c87f4d25c2225f0968573"},{url:"/assets/images/icons/chevron-right.svg",revision:"9c59704b1de34c9fbb54c100b907ac85"},{url:"/assets/images/icons/chevron-up.svg",revision:"90f47098c8908802053427f30191c643"},{url:"/assets/images/icons/clock-circular-outline.svg",revision:"8844b36e0366e80e0827ab3a8308ca49"},{url:"/assets/images/icons/close.svg",revision:"88c0195eea56c4bf5b777cb158a2bddd"},{url:"/assets/images/icons/cloud-data.svg",revision:"e0ef222b0464c2ff2e4b34a38ad79e59"},{url:"/assets/images/icons/code.svg",revision:"82700310d20fb99089b0053366df8026"},{url:"/assets/images/icons/comment.svg",revision:"f13e0649476c9f99814e9bcef01dccc6"},{url:"/assets/images/icons/credit-card-1.svg",revision:"8e305fadd6dca8a26293dd5ea81e7122"},{url:"/assets/images/icons/credit-card-2.svg",revision:"ea33c6931f0b7625d3c53c095ec918d2"},{url:"/assets/images/icons/credit-card.svg",revision:"dea744ce2bf8d846ee866f42427b1f7d"},{url:"/assets/images/icons/credit-card_filled.svg",revision:"d18827c35c1be82f677f8ba5e2184b1c"},{url:"/assets/images/icons/credit.svg",revision:"0db1a66e7bd02f93c50a0196ef7dacce"},{url:"/assets/images/icons/customer-service.svg",revision:"bd67f2d78d15048ebab16de0e2600c73"},{url:"/assets/images/icons/delete.svg",revision:"dab6ea2b22d1d9696ef95f6afa7627a7"},{url:"/assets/images/icons/delivery-box.svg",revision:"7cea6e308f1862843805fb83fc072438"},{url:"/assets/images/icons/delivery-truck.svg",revision:"f550ffa02261be88a9ff5b3e37b52aa1"},{url:"/assets/images/icons/delivery.svg",revision:"da033b3a3d0c6d1e7d5aa6bf5c05a34c"},{url:"/assets/images/icons/dollar.svg",revision:"1a3a6f1a56c1bb4a6a40943135dab453"},{url:"/assets/images/icons/done.svg",revision:"63c98b87fe6ab52771c11966658ce1ed"},{url:"/assets/images/icons/dress-1.svg",revision:"a5e8b4d12961da87669c2c1be73ed47f"},{url:"/assets/images/icons/dress.svg",revision:"f7baa7dab705085628aea2becc1206bf"},{url:"/assets/images/icons/drill-machine.svg",revision:"35722daa39a800fae85f4f1b8bec63a0"},{url:"/assets/images/icons/edit.svg",revision:"3c18c0a4f035781121d12d2df79837d4"},{url:"/assets/images/icons/eye-alt.svg",revision:"b6b98030c529cfe5e2dc34405fe7fe5a"},{url:"/assets/images/icons/eye.svg",revision:"99a017d5ce0c63025b780d5571584cb2"},{url:"/assets/images/icons/facebook-1.svg",revision:"6520d06ef619ce3541d23c90d650324e"},{url:"/assets/images/icons/facebook-filled-white.svg",revision:"144af0698834b04d9a5e93da7e243bbb"},{url:"/assets/images/icons/facebook.svg",revision:"66b2ebb5c398357fee2324521bf1381d"},{url:"/assets/images/icons/facebook_filled.svg",revision:"f1836ff00c5d9aaa8a69bc9445bc4a33"},{url:"/assets/images/icons/feature.svg",revision:"c9bf1b651d76e214fd9491c00018c6bd"},{url:"/assets/images/icons/feedback-thumbs-up.svg",revision:"18400989d1a5439aec8d6660edd97eab"},{url:"/assets/images/icons/feeding-bottle.svg",revision:"088f5b40e065c21524b0e28c856729c5"},{url:"/assets/images/icons/figma.svg",revision:"9866b4f5745c1c4f67e600df21c88e28"},{url:"/assets/images/icons/food.svg",revision:"03dbc755ef38bd8aa921b8c0cbc4d454"},{url:"/assets/images/icons/gear-2.svg",revision:"1a509e291ae8d6aa6433da0e0f263532"},{url:"/assets/images/icons/gift-1.svg",revision:"ec6e2c84ae772e5172f0af3fa69cd198"},{url:"/assets/images/icons/gift.svg",revision:"a5b97faca1e67c34fecd731fdbf59cae"},{url:"/assets/images/icons/google-1.svg",revision:"a0bc06d6c4f7d12d1e056e601832375d"},{url:"/assets/images/icons/google.svg",revision:"9519f494d5db5006e3ab2929e5c5c6b3"},{url:"/assets/images/icons/grid.svg",revision:"ddd1979021c9b0b019e858b8d084a620"},{url:"/assets/images/icons/healthy-food.svg",revision:"e8e16ffceee950115d3f2e6d02411a36"},{url:"/assets/images/icons/heart-filled.svg",revision:"36cb7e900dbba61185df4370ee200bb3"},{url:"/assets/images/icons/heart.svg",revision:"e861ebf08a20929b9e486ea338801c45"},{url:"/assets/images/icons/heart_filled.svg",revision:"6c3d5b210db4cc7a361371a2607d8f1a"},{url:"/assets/images/icons/home.svg",revision:"423daefb200ca389b81978f42bebd370"},{url:"/assets/images/icons/honey.svg",revision:"f15f4896f9a8edeb99da966fa894ce17"},{url:"/assets/images/icons/hot-deal.svg",revision:"fababf32dcb0c8ada5411f4afef8d1d5"},{url:"/assets/images/icons/india.svg",revision:"22ed30bb1b8910eeff0b7fac5d40e07e"},{url:"/assets/images/icons/instagram-1.svg",revision:"315ede9980cc52b4f1e01d3d842153f9"},{url:"/assets/images/icons/instagram.svg",revision:"fa84b3ccc8de620a17e5db7c73eb40e8"},{url:"/assets/images/icons/instagram_filled.svg",revision:"7cb5cc92302a297a271dab2f9e6b5267"},{url:"/assets/images/icons/laptop.svg",revision:"f41e3529da2eaff601fcfad41471162f"},{url:"/assets/images/icons/layout-list.svg",revision:"63da10ab04bb0a2d5d4454c6dcb523e8"},{url:"/assets/images/icons/light.svg",revision:"4dc9a1c9520a15a9fa6dc08c2f26afde"},{url:"/assets/images/icons/lighting.svg",revision:"697a7a74fa829aa673668b536f159e66"},{url:"/assets/images/icons/mail.svg",revision:"f9553a115a4422263d2f551b24cf66ff"},{url:"/assets/images/icons/make-up.svg",revision:"6bd151d041a75a3b13508aff01c32cb4"},{url:"/assets/images/icons/man.svg",revision:"659fff7baee151a7d342de1be1a0c291"},{url:"/assets/images/icons/map-pin (2).svg",revision:"9a00f303cab337ab7a639dac7a3d151a"},{url:"/assets/images/icons/map-pin-2.svg",revision:"063e799d999e58dd56709a3bc5675bfb"},{url:"/assets/images/icons/map-pin.svg",revision:"5b201bb8c1b560ffb9011d3745f394dd"},{url:"/assets/images/icons/map-pin_filled.svg",revision:"95fffdc6e91c184411c764e09c6f3fa1"},{url:"/assets/images/icons/math-equal.svg",revision:"ebbce017af0c8c058be2541b79b3124b"},{url:"/assets/images/icons/menu.svg",revision:"683301a498929198b01ad9df67c48121"},{url:"/assets/images/icons/milk.svg",revision:"5b43106204b893346665b1f8b47d989c"},{url:"/assets/images/icons/minus.svg",revision:"fe9e7a0c99f437e1617148f3965f359f"},{url:"/assets/images/icons/more-horizontal.svg",revision:"f0e83cb823af985e89d1ff48b92b5d8b"},{url:"/assets/images/icons/motorbike.svg",revision:"923c74378513a26c9a2c66e9ddc00c3d"},{url:"/assets/images/icons/multivendor.svg",revision:"37d249affd79934cfe529137037a37ce"},{url:"/assets/images/icons/new-product-1.svg",revision:"fc64bae8a90251fdea72be7df4c7f5e4"},{url:"/assets/images/icons/new-product.svg",revision:"1c6386b80a4cfcf5d676175f926c4956"},{url:"/assets/images/icons/no-shopping-cart.svg",revision:"e8562ce830722528aa08be511fab74fd"},{url:"/assets/images/icons/optimization.svg",revision:"7ce49a288a887865399538d16eb52784"},{url:"/assets/images/icons/options.svg",revision:"47ae262abf442c2365e57b9b735ffcd7"},{url:"/assets/images/icons/package-box.svg",revision:"03cdb9fabed0cfae65bd667edfbe0196"},{url:"/assets/images/icons/phone-call.svg",revision:"79b740b257d2c38f6d435598c4fa5706"},{url:"/assets/images/icons/phone.svg",revision:"a33dec582485b66d0d5b3155a14bd386"},{url:"/assets/images/icons/phone_filled.svg",revision:"b85f7488ecc2980dba97501220185386"},{url:"/assets/images/icons/picture.svg",revision:"08d3239ab7348a715c4ad60f8d849edb"},{url:"/assets/images/icons/piggy-bank.svg",revision:"4c46884081a0cb919d626dbea1fa7a77"},{url:"/assets/images/icons/pin.svg",revision:"9a00f303cab337ab7a639dac7a3d151a"},{url:"/assets/images/icons/pin_filled.svg",revision:"e2e98026d3f9e739c63ab23830457648"},{url:"/assets/images/icons/plant-pot.svg",revision:"c664295f51ab32fe5b38f1956cafb1e0"},{url:"/assets/images/icons/play-store.svg",revision:"fbec9b5fd9b6f0934b21959d47075822"},{url:"/assets/images/icons/plus.svg",revision:"2e61c28d3a5dc20615a8cae233cb632b"},{url:"/assets/images/icons/quote-close.svg",revision:"74df540405ceabea31be0cf17dfec773"},{url:"/assets/images/icons/quote-open.svg",revision:"ba7c41d1ff6eb74eb970cbd77e8493d2"},{url:"/assets/images/icons/ranking-1.svg",revision:"581f131888bece9a0c22c95ea7a8089c"},{url:"/assets/images/icons/ranking.svg",revision:"ca9bc94787d88150559dfa8132c38c75"},{url:"/assets/images/icons/right-arrow.svg",revision:"08c2eddb388bb060038da716c83f5a83"},{url:"/assets/images/icons/rotate-ccw.svg",revision:"7260812bc8d1081d6602e788fecce953"},{url:"/assets/images/icons/search.svg",revision:"cd80b3b0d6e2ee35f5c674ac9410f9c1"},{url:"/assets/images/icons/settings.svg",revision:"e92c00b31162850d9db00d7ee498209d"},{url:"/assets/images/icons/settings_filled.svg",revision:"5b6c70b7cb05bcfab3216a4d93ff5051"},{url:"/assets/images/icons/shield.svg",revision:"e1c6697e0eb2864cbcb47955e7f1a988"},{url:"/assets/images/icons/shop.svg",revision:"25bf5c4962d9f92290e2b2ffa39689f0"},{url:"/assets/images/icons/shopping-cart.svg",revision:"7b9045c3176c83b376bea2eebae9b000"},{url:"/assets/images/icons/smartphone.svg",revision:"045acddce095b896d5d417977faa80b2"},{url:"/assets/images/icons/snack.svg",revision:"03b4142580b025312ffb716f93940008"},{url:"/assets/images/icons/sofa.svg",revision:"536e89b47ecd7bfec8fc1a8a8326f3e6"},{url:"/assets/images/icons/star.svg",revision:"ac8ea2135e1379656f02ca2eea26cc87"},{url:"/assets/images/icons/support.svg",revision:"397028968497fde91f82a1de0d8bebec"},{url:"/assets/images/icons/t-shirt.svg",revision:"9eb395f53613121249b725b5336a91c6"},{url:"/assets/images/icons/teddy-bear.svg",revision:"61c8d18f347c1531d6afc1cdf2366bbc"},{url:"/assets/images/icons/telegram.svg",revision:"e0e2b73901ac0ef1ff22b22d7cc10b11"},{url:"/assets/images/icons/top-categories.svg",revision:"069334e4d1dc675fde59f0eeb5f74084"},{url:"/assets/images/icons/track.svg",revision:"3722cb784dd5a5359520bf28e93b51fb"},{url:"/assets/images/icons/triple-dot.svg",revision:"e108f8bc3a5470ff1b81f504785a3b73"},{url:"/assets/images/icons/truck-1.svg",revision:"a137557daa30b8ffb90a8a2266f4ed24"},{url:"/assets/images/icons/truck.svg",revision:"2ddc000b6ba50d3ab93739a39d5ad3ec"},{url:"/assets/images/icons/twitter-1.svg",revision:"f255b2472db2ddcafc7a3ad80fb87b99"},{url:"/assets/images/icons/twitter.svg",revision:"9eac10f03a79853c36a1434f1fa90a2d"},{url:"/assets/images/icons/twitter_filled.svg",revision:"83dc1d21bf2929a5152c604182d172de"},{url:"/assets/images/icons/united-kingdom.svg",revision:"8987950dedd49c12db107313dc0f3b85"},{url:"/assets/images/icons/united-states.svg",revision:"cbfe8d83119f9172fd29f8961503014a"},{url:"/assets/images/icons/upload.svg",revision:"60e81d6a3048bab0fc368886d1353bfb"},{url:"/assets/images/icons/user-1.svg",revision:"de65a015a99364a4f630bed7ab7242aa"},{url:"/assets/images/icons/user-2.svg",revision:"79e4707fcf83324db6c586c29edf9044"},{url:"/assets/images/icons/user.svg",revision:"0e0813784a64415bf0726c58eb13a3f2"},{url:"/assets/images/icons/user_filled.svg",revision:"207467eec85023ee0ac9f063c7798274"},{url:"/assets/images/icons/verify.svg",revision:"a995bf668b719cdb79953865f2045480"},{url:"/assets/images/icons/voice-recorder.svg",revision:"0fef5b6917fb30f8435289460501e076"},{url:"/assets/images/icons/watch.svg",revision:"b3dbec2a548da54e7a2a61f6c937524b"},{url:"/assets/images/icons/wheat-flour.svg",revision:"a1e1ea6679cb1666f33e1ee0ec1f19e0"},{url:"/assets/images/icons/wheel.svg",revision:"fac1c39037cd6520dfff032927c03955"},{url:"/assets/images/icons/woman.svg",revision:"e2e1373fc37ac11eba9794f875657b41"},{url:"/assets/images/icons/women-dress.svg",revision:"34e02779a8bbe500b16cd9d120bff8ec"},{url:"/assets/images/icons/x.svg",revision:"b0200bf7cbbb26c32989e7a0e4d19eef"},{url:"/assets/images/icons/yogurt.svg",revision:"9b869e4b031993c30e575df528b50cde"},{url:"/assets/images/icons/youtube-1.svg",revision:"1cc3c98385c14a1fccd5af9e44372d44"},{url:"/assets/images/icons/youtube.svg",revision:"6102a1542361ddacb9efb7d7786babbe"},{url:"/assets/images/icons/youtube_filled.svg",revision:"629ec1d78e17a623eb5d669ea02e81d1"},{url:"/assets/images/logo/brand.png",revision:"4f2fc72a3c28a51894bea0d9ceb2648b"},{url:"/browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"/favicon-16x16.png",revision:"c6fc4f38b1ca04c26968296245c43530"},{url:"/favicon-32x32.png",revision:"5e9b367ecf13545a7330f4853f2940c8"},{url:"/favicon.ico",revision:"ee81ba075df5e880c7e309b664009310"},{url:"/imagePlaceholder.png",revision:"bc5f3cb173fb7c392d4de08d11ee4c32"},{url:"/mstile-150x150.png",revision:"4403beb3309129a4f210109c7546366f"},{url:"/safari-pinned-tab.svg",revision:"e558470812aef4b036d760027b4d0b72"},{url:"/site.webmanifest",revision:"ae7a5d79f9701723096da0e8399d9336"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:mp3|mp4)$/i,new s.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
