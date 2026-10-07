
const IMG = {
  nasiGoreng:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Nasi%20goreng%2C%20Warung%20Kuliner%2069%2C%20BG%20Junction%2C%202025%20%2801%29.jpg",
  nasiGorengSpesial:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Nasi%20goreng%2C%20Warung%20Kuliner%2069%2C%20BG%20Junction%2C%202025%20%2802%29.jpg",
  nasiAyam:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Nasi%20ayam%2C%20Emado%27s%20Shawarma%20Embong%20Malang%2C%20Surabaya%2C%202025%20%2801%29.jpg",
  nasiRendang:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/nasi_rendang.jpg",
  mieAceh:"https://nibble-images.b-cdn.net/nibble/original_images/mie-aceh-enak-jakarta-05.jpg",
  mieGoreng:"https://cdn.prod.website-files.com/654369dcffba1c0eb478187e/66fd93b06017f52922a3fe4a_IMG_9778.jpeg",
  kwetiau:"https://image.idn.media/post/20191205/penangsfamouscharkwayteow-pennydelossantosfeat-ec7e1686045c6b24175097ddf72a07aa.jpg",
  ramen:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
  ayamBakar:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
  sateAyam:"https://ukmindonesia.id/uploads/cms/2024-04-15/Picture3.jpg",
  ayamGoreng:"https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2e3c4983-38fe-4cde-9a68-34a79e8ac156_Go-Biz_20250630_113314.jpeg?auto=format",
  ayamPenyet:"https://img-global.cpcdn.com/recipes/52b16b970c3ae8f7/680x781cq80/ayam-penyet-surabaya-foto-resep-utama.jpg",
  pizzaMargherita:"https://fatto.com.au/img/b6GWbS2xcX-UL_IMAGEC6enxo.webp",
  pizzaPepperoni:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
  burgerBeef:"https://images.deliveryhero.io/image/fd-my/LH/igj9-listing.jpg?height=600&width=600",
  burgerChicken:"https://images.deliveryhero.io/image/fd-pk/LH/gnr0-listing.jpg?height=900&width=900",
  lavaCake:"https://itsonly.recipes/images/recipeimages/classic-chocolate-lava-cake.webp",
  pancake:"https://images.squarespace-cdn.com/content/v1/67fbe1a02423cd31c85b4af9/1744681858875-3AHIR8PH19XRUA373PBF/PL105981.jpg?format=1000w",
  iceCream:"https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/haagen-dazs_ice_cream_sundae.jpg",
  croissant:"https://framerusercontent.com/images/rWkAfcTYmOHzTSxObUyFx4cXFf0.jpg",
  hero:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=90",
  restaurant:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  ambience:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85"
}

const foods = [
 {id:1,name:"Nasi Goreng Kampung",category:"Nasi",price:55000,img:IMG.nasiGoreng,rating:4.8,ulasan:[["Alya Putri","Nasinya gurih dan porsinya pas."],["Raka Pratama","Rasa kampungnya kuat, enak banget."],["Nadia Rahma","Telurnya matang dengan pas."]]},
 {id:2,name:"Nasi Goreng Spesial",category:"Nasi",price:62000,img:IMG.nasiGorengSpesial,rating:4.9,ulasan:[["Intan Sari","Topping-nya lengkap dan rasanya gurih."],["Rizky Maulana","Porsinya pas untuk makan siang."]]},
 {id:3,name:"Nasi Ayam",category:"Nasi",price:60000,img:IMG.nasiAyam,rating:4.8,ulasan:[["Citra Dewi","Ayamnya lembut dan bumbunya meresap."],["Fahmi Akbar","Nasinya pulen, sambalnya enak."],["Salsa Putri","Cocok untuk makan siang."]]},
 {id:4,name:"Nasi Rendang",category:"Nasi",price:72000,img:IMG.nasiRendang,rating:4.9,ulasan:[["Dinda Laras","Rendangnya empuk dan bumbunya meresap."],["Mira","Rasanya kaya rempah."],["Tio","Porsinya cukup banyak."],["Nanda","Enak dan tidak terlalu pedas."]]},
 {id:5,name:"Mie Aceh Seafood",category:"Mie",price:68000,img:IMG.mieAceh,rating:4.9,ulasan:[["Nanda Putri","Rempahnya kuat dan seafood-nya terasa segar."],["Fikri","Pedasnya bikin ketagihan."],["Mira","Porsinya mantap."]]},
 {id:6,name:"Mie Goreng",category:"Mie",price:58000,img:IMG.mieGoreng,rating:4.8,ulasan:[["Putri Ananda","Rasanya gurih dan topping-nya pas."],["Arif","Telurnya enak banget."]]},
 {id:7,name:"Kwetiau Goreng",category:"Mie",price:65000,img:IMG.kwetiau,rating:4.8,ulasan:[["Lina","Kwetiaunya lembut dan bumbunya meresap."],["Doni","Udangnya segar."],["Caca","Porsinya pas."]]},
 {id:8,name:"Ramen Ayam",category:"Mie",price:75000,img:IMG.ramen,rating:4.7,ulasan:[["Nina","Kuahnya gurih dan hangat."],["Rafi","Ayamnya lembut."],["Tasya","Mienya kenyal dan enak."]]},
 {id:9,name:"Ayam Bakar Madu",category:"Ayam",price:65000,img:IMG.ayamBakar,rating:4.8,ulasan:[["Sarah Aulia","Manis gurih dan dagingnya lembut."],["Yoga Pratama","Saus madunya enak banget."]]},
 {id:10,name:"Sate Ayam Madura",category:"Ayam",price:60000,img:IMG.sateAyam,rating:4.7,ulasan:[["Lina","Bumbu kacangnya gurih."],["Arif","Dagingnya tidak alot."],["Putri Ananda","Cocok dengan lontongnya."],["Rina","Satenya wangi dan matang pas."]]},
 {id:11,name:"Ayam Goreng",category:"Ayam",price:58000,img:IMG.ayamGoreng,rating:4.8,ulasan:[["Bayu","Kulitnya renyah dan gurih."],["Nisa","Ayamnya juicy."],["Ayu","Sambalnya cocok."]]},
 {id:12,name:"Ayam Penyet Sambal",category:"Ayam",price:62000,img:IMG.ayamPenyet,rating:4.9,ulasan:[["Fira","Sambalnya pedas dan ayamnya empuk."],["Maya","Lalapannya segar."]]},
 {id:13,name:"Pizza Margherita",category:"Pizza & Burger",price:79000,img:IMG.pizzaMargherita,rating:4.8,ulasan:[["Dinda","Keju dan saus tomatnya seimbang."],["Raka","Crust-nya tipis dan renyah."],["Maya","Enak dimakan rame-rame."]]},
 {id:14,name:"Pizza Pepperoni",category:"Pizza & Burger",price:99000,img:IMG.pizzaPepperoni,rating:4.8,ulasan:[["Farhan","Pepperoninya banyak dan kejunya melimpah."],["Lala","Rasanya gurih dan tidak enek."],["Kevin","Crust-nya enak."]]},
 {id:15,name:"Burger Daging Sapi",category:"Pizza & Burger",price:69000,img:IMG.burgerBeef,rating:4.9,ulasan:[["Fira","Dagingnya juicy dan rotinya lembut."],["Maya","Sausnya pas."],["Kevin","Porsinya mengenyangkan."]],},
 {id:16,name:"Burger Ayam Crispy",category:"Pizza & Burger",price:65000,img:IMG.burgerChicken,rating:4.8,ulasan:[["Nisa","Ayam crispy-nya renyah."],["Rani","Sayurnya segar."],["Doni","Enak untuk makan cepat."]],},
 {id:17,name:"Chocolate Lava Cake",category:"Dessert",price:49000,img:IMG.lavaCake,rating:4.9,ulasan:[["Nisa","Cokelatnya lumer dan tidak terlalu manis."],["Rani","Dessert favorit saya."]]},
 {id:18,name:"Pancake Buah",category:"Dessert",price:52000,img:IMG.pancake,rating:4.8,ulasan:[["Lia","Pancake-nya lembut."],["Mira","Buahnya segar."],["Ayu","Tidak terlalu manis."],["Salsa","Tampilannya cantik."]]},
 {id:19,name:"Es Krim Cokelat",category:"Dessert",price:45000,img:IMG.iceCream,rating:4.7,ulasan:[["Vina","Es krimnya creamy dan enak."],["Bayu","Cocok sebagai penutup."]]},
 {id:20,name:"Croissant Mentega",category:"Dessert",price:42000,img:IMG.croissant,rating:4.7,ulasan:[["Tasya","Lapisan croissant-nya renyah."],["Adit","Aromanya wangi dan rasanya lembut."],["Nina","Cocok untuk teman kopi."]]}
 ,{id:21,name:"Iced Coffee Latte",category:"Minuman",price:32000,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",rating:4.9,ulasan:[["Nadia","Kopinya creamy dan tidak terlalu manis."],["Raka","Cocok untuk teman makan siang."]]}
 ,{id:22,name:"Matcha Latte",category:"Minuman",price:35000,img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",rating:4.8,ulasan:[["Alya","Matchanya lembut dan creamy."],["Mira","Rasanya ringan dan segar."]]}
 ,{id:23,name:"Strawberry Milk",category:"Minuman",price:34000,img:"https://images.unsplash.com/photo-1553787499-6f4b0b3b8d7a?auto=format&fit=crop&w=900&q=85",rating:4.8,ulasan:[["Salsa","Segar dan warnanya cantik."],["Lia","Manisnya pas."]]}
 ,{id:24,name:"Iced Lemon Tea",category:"Minuman",price:26000,img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",rating:4.7,ulasan:[["Doni","Segar banget untuk siang hari."],["Nina","Tidak terlalu manis."]]}

]

const rupiah = n => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n)
const readStore = (key, fallback) => {
 try { const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback } catch(e) { return fallback }
}
const getCart = () => { const v=readStore('makanin_cart',[]); return Array.isArray(v)?v:[] }
const setCart = c => {localStorage.setItem('makanin_cart',JSON.stringify(c));updateCartCount()}
const getUsers = () => {
 const v=readStore('makanin_users',[])
 if(!Array.isArray(v)) return []
 const normalized=v.map(u=>({...u,email:String(u.email||'').trim().toLowerCase()})).filter(u=>u.email)
 if(JSON.stringify(normalized)!==JSON.stringify(v)) localStorage.setItem('makanin_users',JSON.stringify(normalized))
 return normalized
}
const getPesanan = () => { const v=readStore('makanin_orders',[]); return Array.isArray(v)?v:[] }
const getFoods = () => {
 const stored=readStore('makanin_foods',null)
 if(!Array.isArray(stored)){ const seed=foods.slice(); localStorage.setItem('makanin_foods',JSON.stringify(seed)); localStorage.setItem('makanin_foods_seeded','true'); return seed }
 if(localStorage.getItem('makanin_foods_seeded')!=='true'){
  const ids=new Set(stored.map(x=>Number(x.id)))
  const migrated=[...stored]
  foods.forEach(f=>{ if(!ids.has(Number(f.id))) migrated.push({...f}) })
  localStorage.setItem('makanin_foods',JSON.stringify(migrated))
  localStorage.setItem('makanin_foods_seeded','true')
  return migrated
 }
 return stored
}
const setFoods = list => { localStorage.setItem('makanin_foods',JSON.stringify(list)); localStorage.setItem('makanin_foods_seeded','true') }

const currentUser = () => { const v=readStore('makanin_current_user',null); return v && typeof v==='object' ? v : null }
const logoutUser = () => { localStorage.removeItem('makanin_current_user'); location.href='index.html' }

function updateCartCount(){document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=getCart().reduce((s,x)=>s+x.qty,0))}

function nav(){
 const u=currentUser()
 return `<div class="top-strip"><div>Gratis ongkir di atas Rp150.000</div><div>Buka setiap hari · 10.00 — 22.00</div><div>+62 812 3456 7890</div></div>
 <header class="nav"><a class="logo" href="index.html"><span class="logo-mark">M</span><span>Makanin<small>RESTAURANT</small></span></a>
 <nav><a href="index.html">Beranda</a><a href="menu.html">Menu</a><a href="index.html#explore">Jelajahi</a><a href="index.html#about">Tentang Kami</a><a href="index.html#ulasan">Ulasan</a></nav>
 <div class="nav-right"><a class="icon-link" href="cart.html">Keranjang <b data-cart-count>0</b></a>${u?`<a class="login-mini" href="profile.html">Profil</a>`:`<a class="login-mini" href="login.html">Masuk</a>`}</div></header>`
}
function footer(){
 return `<footer><div class="footer-inner"><div><a class="logo light" href="index.html"><span class="logo-mark">M</span><span>Makanin<small>RESTAURANT</small></span></a><p>Makanan enak yang dibuat dengan perhatian. Tempat makan yang nyaman untuk berbagai momen.</p></div>
 <div><h4>Jelajahi</h4><a href="menu.html">Menu</a><a href="index.html#explore">Restoran</a><a href="index.html#ulasan">Ulasan</a></div>
 <div><h4>Pelanggan</h4><a href="register.html">Daftar Akun</a><a href="login.html">Masuk</a><a href="orders.html">Pesanan Saya</a><a href="profile.html">Profil Saya</a><a href="admin-login.html">Login Admin</a></div>
 <div><h4>Kunjungi Kami</h4><p>Jl. Teuku Umar No. 18<br>Banda Aceh, Indonesia</p><p>10.00 — 22.00 setiap hari</p></div></div><div class="footer-bottom">© 2026 Makanin Restaurant · Prototype Frontend</div></footer>`
}

function foodCard(f){
 return `<article class="food-card">
   <a class="food-image food-detail-link" href="detail.html?id=${f.id}" aria-label="Lihat detail ${f.name}">
     <img src="${f.img}" alt="${f.name}">
     <span class="category-tag">${f.category}</span>
   </a>
   <div class="food-body">
     <div class="food-title"><h3><a href="detail.html?id=${f.id}">${f.name}</a></h3><span>★ ${f.rating}</span></div>
     <p>Disiapkan segar dengan bahan pilihan khas Makanin.</p>
     <div class="food-meta"><b>${rupiah(f.price)}</b><div><a class="ulasan-link" href="detail.html?id=${f.id}#ulasan">Ulasan (${f.ulasan.length})</a><button class="add" data-add="${f.id}">Tambah</button></div></div>
   </div>
 </article>`
}

function bindFoodActions(){
 document.querySelectorAll('[data-add]').forEach(btn=>btn.onclick=()=>{
  const f=getFoods().find(x=>x.id===Number(btn.dataset.add)),cart=getCart(),found=cart.find(x=>x.id===f.id)
  if(found)found.qty++;else cart.push({...f,qty:1})
  setCart(cart);btn.textContent='Ditambahkan';setTimeout(()=>btn.textContent='Tambah',800)
 })
 document.querySelectorAll('[data-ulasan]').forEach(btn=>btn.onclick=()=>{
  const f=getFoods().find(x=>x.id===Number(btn.dataset.ulasan))
  document.querySelector('#ulasanModal').innerHTML=`<div class="modal-backdrop"><div class="modal"><button class="modal-close">×</button><span class="eyebrow">Ulasan Pelanggan</span><h2>${f.name}</h2><div class="modal-rating">★ ${f.rating} · ${f.ulasan.length} ulasan</div>${f.ulasan.map(r=>`<div class="ulasan"><div class="ulasan-head"><b>${r[0]}</b><span>★★★★★</span></div><p>${r[1]}</p></div>`).join('')}</div></div>`
  document.querySelector('.modal-close').onclick=()=>document.querySelector('#ulasanModal').innerHTML=''
 })
}

function home(){
 document.title='Makanin — Restaurant & Food'
 document.querySelector('#app').innerHTML=`${nav()}<main>
 <section class="hero"><div class="hero-copy"><span class="eyebrow">Makanan hangat, dibuat dengan rasa</span><h1>Good food.<br><em>Good mood.</em></h1><p>Menu favorit yang dibuat dari bahan segar, dengan rasa yang nyaman dan pelayanan yang ramah.</p><div class="hero-actions"><a class="btn primary" href="menu.html">Lihat Menu</a><a class="text-btn" href="#about">Cerita Kami</a></div><div class="hero-note"><span>★★★★★</span><b>4.9/5</b><small>dari 1.000+ pelanggan</small></div></div><div class="hero-visual"><img src="${IMG.hero}" alt="Pilihan makanan Makanin"><div class="hero-card"><b>Signature Table</b><strong>Good food. Good mood.</strong><span>Menu pilihan Makanin · ★ 4.9</span></div></div></section>
 <section class="trust"><div><b>01</b><span>Bahan segar<br><small>dipilih setiap pagi</small></span></div><div><b>02</b><span>Dibuat setelah dipesan<br><small>hangat dan segar</small></span></div><div><b>03</b><span>Pesan dengan mudah<br><small>checkout sederhana</small></span></div><div><b>04</b><span>Pelayanan ramah<br><small>siap membantu</small></span></div></section>
 <section class="section" id="explore"><div class="section-heading"><div><span class="eyebrow">Jelajahi</span><h2>Lebih dari sekadar makanan</h2></div><p>Lihat pilihan menu dan suasana Makanin yang nyaman untuk makan bersama.</p></div>
 <div class="explore-grid"><a class="explore-card large"><img src="${IMG.restaurant}" alt="Restoran Makanin"><div><span>Restoran</span><h3>Tempat untuk bersantai</h3></div></a><a class="explore-card"><img src="${IMG.ambience}" alt="Suasana restoran"><div><span>Atmosfer</span><h3>Hangat, sederhana & nyaman</h3></div></a><a class="explore-card"><img src="${IMG.pizzaMargherita}" alt="Pizza Makanin"><div><span>Dari dapur</span><h3>Dibuat dengan sepenuh hati</h3></div></a></div></section>
 <section class="section light-section"><div class="section-heading"><div><span class="eyebrow">Favorit hari ini</span><h2>Pilihan untuk selera kamu</h2></div><a class="under-link" href="menu.html">Lihat semua menu</a></div><div class="food-grid">${getFoods().slice(0,4).map(foodCard).join('')}</div></section>
 <section class="story section" id="about"><div class="story-image"><img src="${IMG.restaurant}" alt="Makanin restaurant"></div><div><span class="eyebrow">Cerita kami</span><h2>Makanan yang terasa familiar, dengan cara yang lebih spesial.</h2><p>Makanin hadir dengan ide sederhana: membuat pengalaman makan yang nyaman, mudah, dan berkesan. Menu dibuat dari bahan pilihan dengan rasa yang akrab bagi pelanggan lokal.</p><a class="btn outline" href="menu.html">Lihat Menu</a></div></section>
 <section class="section ulasan-section" id="ulasan"><div class="section-heading center"><div><span class="eyebrow">Ulasan pelanggan</span><h2>Kata mereka tentang Makanin</h2></div></div><div class="ulasan-grid">${[
 ['Alya Putri','Nasi Goreng Kampung','Nasinya gurih, porsinya pas, dan datang masih hangat.'],
 ['Raka Pratama','Pizza Margherita','Crust-nya tipis dan renyah. Cocok dimakan ramai-ramai.'],
 ['Nadia Rahma','Ayam Bakar Madu','Ayamnya lembut dan bumbu madunya enak.']
 ].map(x=>`<article class="quote"><span>★★★★★</span><p>“${x[2]}”</p><b>${x[0]}</b><small>${x[1]}</small></article>`).join('')}</div></section>
 </main><div id="ulasanModal"></div>${footer()}`
 bindFoodActions();updateCartCount()
}

function menuPage(){
 document.querySelector('#app').innerHTML=`${nav()}<main class="inner-page"><section class="page-intro"><span class="eyebrow">Menu Makanin</span><h1>Choose what feels good.</h1><p>Pilihan makanan yang disiapkan segar setiap hari.</p></section>
 <div class="filters">${['Semua','Nasi','Mie','Ayam','Pizza & Burger','Dessert','Minuman'].map((x,i)=>`<button class="${i?'':'active'}" data-filter="${x}">${x}</button>`).join('')}</div><div class="food-grid menu-grid">${getFoods().map(foodCard).join('')}</div></main><div id="ulasanModal"></div>${footer()}`
 const render=(cat='Semua')=>{document.querySelector('.menu-grid').innerHTML=getFoods().filter(f=>cat==='Semua'||f.category===cat).map(foodCard).join('');bindFoodActions();document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===cat))}
 document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>render(b.dataset.filter));bindFoodActions();updateCartCount()
}


function detailPage(){
 const id=Number(new URLSearchParams(location.search).get('id'))
 const f=getFoods().find(x=>x.id===id)||getFoods()[0]
 document.title=`${f.name} — Makanin`
 document.querySelector('#app').innerHTML=`${nav()}<main class="detail-page">
   <a class="back-link" href="menu.html">Kembali ke menu</a>
   <section class="detail-layout">
    <div class="detail-image"><img src="${f.img}" alt="${f.name}"></div>
    <div class="detail-content">
      <span class="eyebrow">${f.category}</span>
      <h1>${f.name}</h1>
      <div class="detail-rating">★ ${f.rating} · ${f.ulasan.length} ulasan</div>
      <p class="detail-description">Hidangan ${f.name.toLowerCase()} yang disiapkan segar dengan bahan pilihan. Cocok dinikmati di restoran maupun sebagai bagian dari pesanan online.</p>
      <div class="detail-price">${rupiah(f.price)}</div>
      <button class="btn primary detail-add" data-add="${f.id}">Tambah ke Keranjang</button>
      <div class="detail-info"><div><b>Disiapkan segar</b><span>Dibuat setelah dipesan</span></div><div><b>Porsi</b><span>1 porsi</span></div></div>
    </div>
   </section>
   <section class="detail-reviews" id="ulasan"><div class="section-heading"><div><span class="eyebrow">Ulasan</span><h2>Ulasan pelanggan</h2></div><p>Pengalaman pelanggan setelah menikmati ${f.name}.</p></div>
    <div class="review-list">${f.ulasan.map(r=>`<article class="ulasan"><div class="ulasan-head"><b>${r[0]}</b><span>★★★★★</span></div><p>${r[1]}</p></article>`).join('')}</div>
   </section>
 </main>${footer()}`
 bindFoodActions()
 updateCartCount()
}
function registerPage(){
 document.querySelector('#app').innerHTML=`${nav()}<main class="auth-wrap"><div class="auth-panel"><div class="auth-copy"><span class="eyebrow">Selamat datang di Makanin</span><h1>Make your next meal a little easier.</h1><p>Buat akun customer untuk menyimpan data dan melihat riwayat pesanan.</p></div><div class="form-card"><div class="form-brand">Makanin</div><h2>Daftar Akun</h2><p class="form-muted">Lengkapi data kamu untuk mulai memesan.</p><form id="registerForm"><label>Nama lengkap<input id="name" required placeholder="Nama lengkap"></label><label>No. HP<input id="phone" required placeholder="08xxxxxxxxxx"></label><label>Alamat<textarea id="address" required rows="3" placeholder="Alamat lengkap"></textarea></label><label>Email<input id="email" type="email" required placeholder="nama@email.com"></label><label>Kata sandi<input id="password" type="password" minlength="8" required placeholder="Minimal 8 karakter"></label><button class="btn primary full">Daftar Akun</button></form><p class="switch">Sudah punya akun? <a href="login.html">Masuk</a></p><div id="formMsg"></div></div></div></main>${footer()}`
 document.querySelector('#registerForm').onsubmit=e=>{
  e.preventDefault()
  const emailEl=document.querySelector('#email'),passEl=document.querySelector('#password')
  const email=emailEl.value.trim().toLowerCase(),pass=passEl.value
  if(pass.length<8){document.querySelector('#formMsg').innerHTML='<div class="message error">Kata sandi minimal 8 karakter.</div>';return}
  const users=getUsers()
  if(users.some(u=>u.email===email)){document.querySelector('#formMsg').innerHTML='<div class="message error">Email sudah terdaftar.</div>';return}
  const u={id:Date.now(),name:document.querySelector('#name').value.trim(),phone:document.querySelector('#phone').value.trim(),address:document.querySelector('#address').value.trim(),email,password:pass}
  users.push(u);localStorage.setItem('makanin_users',JSON.stringify(users));localStorage.removeItem('makanin_current_user');localStorage.setItem('makanin_last_register_email',email);location.href='login.html'
 }
}

function loginPage(){
 const rememberedEmail=escapeHtml(localStorage.getItem('makanin_last_register_email')||'')
 document.querySelector('#app').innerHTML=`${nav()}<main class="auth-wrap"><div class="auth-panel single"><div class="form-card"><div class="form-brand">Makanin</div><h2>Selamat datang kembali</h2><p class="form-muted">Masuk untuk melihat pesanan dan melanjutkan pemesanan.</p><form id="loginForm"><label>Email<input id="loginEmail" type="email" value="${rememberedEmail}" required placeholder="nama@email.com"></label><label>Kata sandi<input id="loginPassword" type="password" minlength="8" required placeholder="Minimal 8 karakter"></label><button class="btn primary full">Masuk</button></form><div id="formMsg"></div><div class="or">atau</div><a class="btn outline full" href="admin-login.html">Masuk sebagai Admin</a><p class="switch">Belum punya akun? <a href="register.html">Daftar sekarang</a></p></div></div></main>${footer()}`
 document.querySelector('#loginForm').onsubmit=e=>{
  e.preventDefault()
  const email=document.querySelector('#loginEmail').value.trim().toLowerCase(),pass=document.querySelector('#loginPassword').value
  const u=getUsers().find(x=>x.email===email&&x.password===pass)
  document.querySelector('#formMsg').innerHTML=u?'':'<div class="message error">Email atau kata sandi salah.</div>'
  if(u){localStorage.setItem('makanin_current_user',JSON.stringify(u));localStorage.removeItem('makanin_last_register_email');location.href='menu.html'}
 }
}

function adminMasukPage(){
 document.querySelector('#app').innerHTML=`<main class="admin-login"><div class="admin-login-card"><div class="form-brand">Makanin <small>ADMIN</small></div><h1>Dashboard Restoran</h1><p>Masuk menggunakan email admin untuk mengelola pesanan, pelanggan, menu, pembayaran, dan status pesanan.</p><form id="adminForm"><label>Email Admin<input id="adminEmail" type="email" required value="admin@makanin.id" placeholder="admin@makanin.id"></label><label>Kata sandi<input id="adminPass" type="password" minlength="8" required placeholder="Minimal 8 karakter"></label><button class="btn primary full">Masuk ke Dashboard</button></form><div class="demo">Akun demo · admin@makanin.id / admin1234</div><a class="back-link" href="index.html">Kembali ke Makanin</a></div></main>`
document.querySelector('#adminForm').onsubmit=e=>{
  e.preventDefault()

  const email=document.querySelector('#adminEmail').value.trim().toLowerCase()
  const pass=document.querySelector('#adminPass').value
  const demo=document.querySelector('.demo')

  if(!email){
    demo.innerHTML='<span style="color:#b44">Email admin wajib diisi.</span>'
    return
  }

  if(!pass){
    demo.innerHTML='<span style="color:#b44">Kata sandi wajib diisi.</span>'
    return
  }

  if(pass.length<8){
    demo.innerHTML='<span style="color:#b44">Kata sandi minimal 8 karakter.</span>'
    return
  }

  if(email==='admin@makanin.id'&&pass==='admin1234'){
    localStorage.setItem('makanin_admin','true')
    location.href='admin.html#dashboard'
  }else{
    demo.innerHTML='<span style="color:#b44">Email atau kata sandi admin salah.</span>'
  }
}
}

function profilePage(){
 const u=currentUser()
 if(!u){ location.href='login.html'; return }
 const orders=getPesanan().filter(o=>o && o.customerId===u.id)
 const initials=(u.name||'P').trim().charAt(0).toUpperCase()
 document.querySelector('#app').innerHTML=`${nav()}<main class="profile-page">
  <section class="profile-hero"><div><span class="eyebrow">Akun Makanin</span><h1>Profil pengguna</h1><p>Kelola data akun dan lihat ringkasan aktivitas pesanan kamu.</p></div><div class="profile-avatar-large">${initials}</div></section>
  <section class="profile-grid">
   <article class="profile-card"><div class="profile-card-head"><div><span class="eyebrow">Informasi pribadi</span><h2>Data akun</h2></div><span class="profile-badge">Customer</span></div>
    <form id="profileForm"><label>Nama lengkap<input id="profileName" value="${escapeHtml(u.name)}" required></label><label>No. HP<input id="profilePhone" value="${escapeHtml(u.phone||'')}" required></label><label>Email<input value="${escapeHtml(u.email)}" disabled></label><label>Alamat<textarea id="profileAddress" rows="4" required>${escapeHtml(u.address||'')}</textarea></label><button class="btn primary" type="submit">Simpan perubahan</button></form><div id="profileMsg"></div>
   </article>
   <aside class="profile-card profile-summary"><span class="eyebrow">Aktivitas</span><h2>Ringkasan akun</h2><div class="profile-stat"><span>Total pesanan</span><b>${orders.length}</b></div><a class="profile-action" href="orders.html">Lihat pesanan saya <span>→</span></a><button class="profile-action danger" id="logoutUser">Keluar dari akun <span>↗</span></button></aside>
  </section>
 </main>${footer()}`
 document.querySelector('#profileForm').onsubmit=e=>{
  e.preventDefault()
  const updated={...u,name:document.querySelector('#profileName').value.trim(),phone:document.querySelector('#profilePhone').value.trim(),address:document.querySelector('#profileAddress').value.trim()}
  const users=getUsers().map(x=>x.id===u.id?{...x,...updated}:x)
  localStorage.setItem('makanin_users',JSON.stringify(users));localStorage.setItem('makanin_current_user',JSON.stringify(updated))
  document.querySelector('#profileMsg').innerHTML='<div class="message success">Profil berhasil diperbarui.</div>'
 }
 document.querySelector('#logoutUser').onclick=logoutUser
}

function cartPage(){
 document.querySelector('#app').innerHTML=`${nav()}<main class="inner-page"><div class="page-intro compact"><span class="eyebrow">Keranjang kamu</span><h1>Pesanan kamu</h1><p>Periksa menu sebelum melanjutkan pembayaran.</p></div><div id="cartRoot"></div></main>${footer()}`
 const render=()=>{
  const c=getCart(),sub=c.reduce((s,x)=>s+x.price*x.qty,0),del=sub>=150000||!c.length?0:15000
  document.querySelector('#cartRoot').innerHTML=!c.length?`<div class="empty-state"><h2>Keranjang masih kosong</h2><p>Pilih menu yang kamu suka untuk mulai memesan.</p><a class="btn primary" href="menu.html">Lihat Menu</a></div>`:`<div class="cart-layout"><section class="cart-list">${c.map(x=>`<div class="cart-row"><img src="${x.img}" alt="${x.name}"><div class="cart-info"><h3>${x.name}</h3><span>${x.category}</span><b>${rupiah(x.price)}</b></div><div class="quantity"><button data-minus="${x.id}">−</button><b>${x.qty}</b><button data-plus="${x.id}">+</button></div><button class="remove" data-remove="${x.id}">Hapus</button></div>`).join('')}</section><aside class="summary"><h3>Ringkasan pesanan</h3><div><span>Subtotal</span><b>${rupiah(sub)}</b></div><div><span>Ongkir</span><b>${del?rupiah(del):'Gratis'}</b></div><hr><div class="total"><span>Total</span><b>${rupiah(sub+del)}</b></div><a class="btn primary full" href="checkout.html">Lanjut ke pembayaran</a></aside></div>`
  document.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>change(b.dataset.plus,1))
  document.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>change(b.dataset.minus,-1))
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{setCart(getCart().filter(x=>x.id!==Number(b.dataset.remove)));render()})
 }
 const change=(id,d)=>{let c=getCart(),x=c.find(a=>a.id===Number(id));if(!x)return;x.qty+=d;if(x.qty<1)c=c.filter(a=>a.id!==Number(id));setCart(c);render()}
 render();updateCartCount()
}

function checkoutPage(){
 const u=currentUser()
 document.querySelector('#app').innerHTML=`${nav()}<main class="inner-page"><div class="page-intro compact"><span class="eyebrow">Pembayaran</span><h1>Lengkapi pesanan kamu.</h1><p>Pilih apakah kamu makan di tempat atau memesan untuk diantar.</p></div><div id="checkoutRoot"></div></main>${footer()}`
 const render=()=>{
  const c=getCart(),sub=c.reduce((s,x)=>s+x.price*x.qty,0),del=sub>=150000||!c.length?0:15000
  document.querySelector('#checkoutRoot').innerHTML=!u?`<div class="empty-state"><h2>Silakan masuk terlebih dahulu</h2><p>Kamu perlu akun customer untuk membuat pesanan.</p><a class="btn primary" href="login.html">Masuk</a></div>`:!c.length?`<div class="empty-state"><h2>Keranjang masih kosong</h2><a class="btn primary" href="menu.html">Lihat Menu</a></div>`:`<div class="checkout-layout"><section class="checkout-card"><h2>Jenis pesanan</h2><form id="checkoutForm"><label class="payment"><input type="radio" name="orderType" value="Dine In" checked><span><b>Makan di tempat</b><small>Gunakan meja di restoran. Pembayaran hanya COD.</small></span></label><label class="payment"><input type="radio" name="orderType" value="Online"><span><b>Pemesanan online</b><small>Pesanan diantar ke alamat kamu. Pilih Transfer Bank atau GoPay.</small></span></label><div id="dynamicCheckout"><label>No. meja<input id="tableNumber" required placeholder="Contoh: A12"></label><h2>Data pelanggan</h2><label>Nama<input id="coNama" value="${escapeHtml(u.name)}" required></label><label>No. HP<input id="coPhone" value="${escapeHtml(u.phone)}" required></label><h2>Metode pembayaran</h2><div id="paymentOptions"></div><button class="btn primary full" type="submit">Buat Pesanan</button></div></form><div id="checkoutMsg"></div></section><aside class="summary"><h3>Ringkasan pesanan</h3>${c.map(x=>`<div class="sum-item"><span>${x.name} × ${x.qty}</span><b>${rupiah(x.price*x.qty)}</b></div>`).join('')}<hr><div><span>Ongkir</span><b id="deliveryCost">${rupiah(del)}</b></div><div class="total"><span>Total</span><b id="checkoutTotal">${rupiah(sub+del)}</b></div></aside></div>`
  const form=document.querySelector('#checkoutForm')
  if(!form)return
  const renderType=()=>{
   const type=document.querySelector('input[name="orderType"]:checked').value
   const dyn=document.querySelector('#dynamicCheckout')
   const currentName=document.querySelector('#coNama')?.value||u.name,currentPhone=document.querySelector('#coPhone')?.value||u.phone
   const delivery=type==='Online'
   dyn.innerHTML=`${delivery?`<h2>Data pengantaran</h2>`:`<h2>Data pelanggan</h2>`}<label>Nama<input id="coNama" value="${escapeHtml(currentName)}" required></label><label>No. HP<input id="coPhone" value="${escapeHtml(currentPhone)}" required></label>${delivery?`<label>Alamat pengantaran<textarea id="coAddress" rows="3" required>${escapeHtml(u.address||'')}</textarea></label>`:`<label>No. meja<input id="tableNumber" required placeholder="Contoh: A12"></label>`}<h2>Metode pembayaran</h2>${delivery?`<label class="payment"><input type="radio" name="pay" value="Transfer Bank" checked><span><b>Transfer Bank</b><small>BCA 1234567890 · a.n. Makanin</small></span></label><label class="payment"><input type="radio" name="pay" value="GoPay"><span><b>GoPay</b><small>Nomor GoPay: 0812 3456 7890</small></span></label><label class="payment-confirm"><input id="paidConfirm" type="checkbox" required><span>Saya sudah menyelesaikan pembayaran.</span></label>`:`<label class="payment"><input type="radio" name="pay" value="COD" checked><span><b>COD / Bayar di tempat</b><small>Pembayaran dilakukan saat makan di restoran.</small></span></label>`}<button class="btn primary full" type="submit">Konfirmasi & Buat Pesanan</button>`
   const d=document.querySelector('#deliveryCost'),t=document.querySelector('#checkoutTotal')
   const sub=c.reduce((s,x)=>s+x.price*x.qty,0),del=delivery?(sub>=150000?0:15000):0
   if(d)d.textContent=del?rupiah(del):'Gratis'
   if(t)t.textContent=rupiah(sub+del)
  }
  form.addEventListener('change',e=>{if(e.target.name==='orderType')renderType()})
  renderType()
  form.onsubmit=e=>{
   e.preventDefault()
   const type=document.querySelector('input[name="orderType"]:checked').value
   const payment=document.querySelector('input[name="pay"]:checked').value
   const name=document.querySelector('#coNama').value.trim(),phone=document.querySelector('#coPhone').value.trim()
   const online=type==='Online'
   const address=online?document.querySelector('#coAddress').value.trim():''
   const table=online?'':document.querySelector('#tableNumber').value.trim()
   if(!name||!phone||(online&&!address)||(!online&&!table)){document.querySelector('#checkoutMsg').innerHTML='<div class="message error">Lengkapi data pesanan terlebih dahulu.</div>';return}
   if(online&&!document.querySelector('#paidConfirm')?.checked){document.querySelector('#checkoutMsg').innerHTML='<div class="message error">Konfirmasi pembayaran terlebih dahulu agar pesanan dapat dibuat.</div>';return}
   const sub=c.reduce((s,x)=>s+x.price*x.qty,0),del=online?(sub>=150000?0:15000):0
   const order={id:'MK-'+Date.now().toString().slice(-6),customerId:u.id,orderType:type,customer:{name,phone,address:address||u.address||'',email:u.email},tableNumber:table,items:c.map(x=>({id:x.id,name:x.name,category:x.category,price:x.price,qty:x.qty,img:x.img})),subtotal:sub,delivery:del,total:sub+del,payment,paid:online,paymentStatus:online?'Sudah Dibayar':'Belum Dibayar',status:'Pesanan sedang dibuat',date:new Date().toLocaleString('id-ID')}
   const orders=getPesanan();orders.unshift(order);localStorage.setItem('makanin_orders',JSON.stringify(orders));localStorage.setItem('makanin_current_user',JSON.stringify({...u,name,phone,address:address||u.address||''}));setCart([])
   document.querySelector('#checkoutMsg').innerHTML=`<div class="message success">Pesanan <b>${order.id}</b> berhasil dibuat. ${online?'Pembayaran terverifikasi.':'Pesanan makan di tempat sudah tercatat.'}</div>`
   setTimeout(()=>location.href='orders.html',900)
  }
 }
 render()
}

function ordersPage(){
 const u=currentUser(),orders=u?getPesanan().filter(o=>o.customerId===u.id):[]
 document.querySelector('#app').innerHTML=`${nav()}<main class="inner-page"><div class="page-intro compact"><span class="eyebrow">Area pelanggan</span><h1>Pesanan saya</h1><p>Lihat dan pantau pesanan Makanin kamu.</p></div>${!u?`<div class="empty-state"><h2>Silakan masuk</h2><a class="btn primary" href="login.html">Masuk</a></div>`:!orders.length?`<div class="empty-state"><h2>Belum ada pesanan</h2><p>Menu favorit kamu sudah menunggu.</p><a class="btn primary" href="menu.html">Lihat Menu</a></div>`:orders.map(o=>`<article class="order-card"><div class="order-top"><div><span class="order-id">${o.id}</span><small>${o.date}</small></div><span class="order-status">${o.status}</span></div><div class="order-type-label">${o.orderType==='Online'?'Pemesanan online':'Makan di tempat'}${o.tableNumber?` · Meja ${o.tableNumber}`:''}</div>${o.items.map(i=>`<div class="order-item"><img src="${i.img}" alt="${i.name}"><span>${i.name} × ${i.qty}</span><b>${rupiah(i.price*i.qty)}</b></div>`).join('')}<div class="order-bottom"><span>${o.payment} · <b class="${o.paid?'paid':'unpaid'}">${o.paymentStatus}</b></span><b>${rupiah(o.total)}</b></div>${o.orderType==='Online'?`<div class="delivery-detail"><b>Alamat pengantaran</b><span>${o.customer.name} · ${o.customer.phone}</span><span>${o.customer.address}</span></div>`:`<div class="delivery-detail"><b>Pesanan makan di tempat</b><span>Meja ${o.tableNumber}</span><span>Pembayaran COD dilakukan di restoran.</span></div>`}</article>`).join('')}</main>${footer()}`
}

function adminPage(){
 if(localStorage.getItem('makanin_admin')!=='true'){location.href='admin-login.html';return}
 const statusList=['Pesanan sedang dibuat','Sedang diproses','Sedang diantar','Pesanan selesai','Dibatalkan']
 const categories=['Nasi','Mie','Ayam','Pizza & Burger','Dessert','Minuman']
 const safe=v=>escapeHtml(v??'—')
 const syncUsers=()=>{
  const raw=getUsers(),orders=getPesanan(),byEmail=new Map(raw.map(u=>[String(u.email).toLowerCase(),u]))
  orders.forEach(o=>{
   const c=o?.customer||{},email=String(c.email||'').trim().toLowerCase()
   if(email&&!byEmail.has(email)) byEmail.set(email,{id:o.customerId||Date.now()+Math.random(),name:c.name||'Pelanggan Makanin',phone:c.phone||'',address:c.address||'',email,password:''})
  })
  return [...byEmail.values()].map(u=>{
   const related=orders.filter(o=>o.customerId===u.id||String(o?.customer?.email||'').toLowerCase()===String(u.email).toLowerCase())
   const latest=related[0]?.customer||{}
   return {...u,name:u.name||latest.name||'Pelanggan Makanin',phone:u.phone||latest.phone||'',address:u.address||latest.address||''}
  })
 }
 const getData=()=>({orders:getPesanan().filter(Boolean),users:syncUsers(),foods:getFoods()})
 const getTab=()=>{
  const hash=(location.hash||'#dashboard').slice(1)
  return ['dashboard','online','dinein','customers','menu','reports'].includes(hash)?hash:'dashboard'
 }
 const render=()=>{
  const tab=getTab(),{orders,users,foods:foodsNow}=getData()
  const onlineOrders=orders.filter(o=>o.orderType==='Online')
  const dineinOrders=orders.filter(o=>o.orderType==='Dine In'||o.orderType==='Makan di tempat')
  const paidRevenue=orders.filter(o=>o.paid===true||o.paymentStatus==='Sudah Dibayar').reduce((s,o)=>s+Number(o.total||0),0)
  const statusCount=x=>orders.filter(o=>(o.status||'Pesanan sedang dibuat')===x).length
  const pendingOrders=orders.filter(o=>(o.status||'Pesanan sedang dibuat')==='Pesanan sedang dibuat').length
  const items=o=>Array.isArray(o.items)&&o.items.length?o.items.map(i=>`${safe(i.name)} × ${Number(i.qty||0)}`).join(', '):'—'
  const orderCard=o=>{
   const c=o.customer||{},online=o.orderType==='Online',status=statusList.includes(o.status)?o.status:'Pesanan sedang dibuat'
   return `<article class="admin-order-card" data-order-card="${safe(o.id)}">
    <div class="admin-order-top"><div><span class="order-id">${safe(o.id)}</span><small>${safe(o.date)}</small></div><span class="table-status ${o.paid||o.paymentStatus==='Sudah Dibayar'?'paid':'unpaid'}">${safe(o.paymentStatus||'Belum Dibayar')}</span></div>
    <div class="admin-order-grid">
     <div><span class="admin-label">Pelanggan</span><b>${safe(c.name||'Pelanggan Makanin')}</b><small>${safe(c.email)}</small></div>
     <div><span class="admin-label">No. HP</span><b>${safe(c.phone||'Belum diisi')}</b></div>
     <div><span class="admin-label">${online?'Alamat pengantaran':'Meja restoran'}</span><b>${online?safe(c.address||'Alamat belum diisi'):safe(o.tableNumber?`Meja ${o.tableNumber}`:'Meja belum diisi')}</b></div>
     <div class="wide"><span class="admin-label">Menu dipesan</span><b>${items(o)}</b></div>
     <div><span class="admin-label">Pembayaran</span><b>${safe(o.payment||'—')}</b></div>
     <div><span class="admin-label">Total</span><b>${rupiah(Number(o.total||0))}</b></div>
    </div>
    <div class="admin-order-actions single-status-control">
      <label>Status pesanan<select data-status-id="${safe(o.id)}">${statusList.map(x=>`<option value="${safe(x)}" ${x===status?'selected':''}>${safe(x)}</option>`).join('')}</select></label>
      ${!o.paid?`<button type="button" class="admin-paid-btn" data-paid-id="${safe(o.id)}">Tandai sudah dibayar</button>`:'<span class="paid-note">✓ Pembayaran terverifikasi</span>'}
    </div>
   </article>`
  }
  const menuCard=f=>`<article class="admin-menu-card"><img src="${safe(f.img)}" alt="${safe(f.name)}" onerror="this.src='${IMG.restaurant}'"><div class="admin-menu-body"><span>${safe(f.category)}</span><h3>${safe(f.name)}</h3><p>${safe(f.description||'Menu pilihan Makanin yang disiapkan segar.')}</p><b>${rupiah(Number(f.price||0))}</b><small>Stok: ${Number(f.stock??20)}</small><div class="admin-crud-actions"><button type="button" data-edit-food="${safe(f.id)}">Edit</button><button type="button" data-delete-food="${safe(f.id)}" class="danger">Hapus</button></div></div></article>`
  const orderSection=(title,list,empty)=>`<section class="admin-panel active-panel"><div class="admin-section-head"><div><h2>${title}</h2><p class="admin-help">Status pesanan diperbarui langsung melalui satu dropdown.</p></div><span>${list.length} pesanan</span></div><div class="admin-order-list">${list.length?list.map(orderCard).join(''):`<div class="no-data">${empty}</div>`}</div></section>`
  const menuSections=categories.map(cat=>{const list=foodsNow.filter(f=>f.category===cat);return `<section class="admin-menu-category"><div class="admin-menu-category-head"><div><span class="eyebrow">Kategori</span><h3>${cat}</h3></div><span>${list.length} menu</span></div><div class="admin-menu-grid">${list.length?list.map(menuCard).join(''):'<div class="no-data">Belum ada menu pada kategori ini.</div>'}</div></section>`}).join('')
  document.querySelector('#app').innerHTML=`<div class="admin-layout"><aside class="admin-side">
   <a class="admin-logo" href="admin.html#dashboard">Makan<span>in</span><small>RESTAURANT ADMIN</small></a>
   <button type="button" class="side ${tab==='dashboard'?'active':''}" data-tab="dashboard">Dashboard</button>
   <button type="button" class="side ${tab==='online'?'active':''}" data-tab="online">Pesanan Online</button>
   <button type="button" class="side ${tab==='dinein'?'active':''}" data-tab="dinein">Pesanan Dine-in</button>
   <button type="button" class="side ${tab==='customers'?'active':''}" data-tab="customers">Pelanggan</button>
   <button type="button" class="side ${tab==='menu'?'active':''}" data-tab="menu">Menu</button>
   <button type="button" class="side ${tab==='reports'?'active':''}" data-tab="reports">Laporan</button>
   <div class="admin-side-user"><span>Login sebagai</span><b>admin@makanin.id</b></div><button type="button" class="side logout" id="logout">Keluar</button>
  </aside><main class="admin-main"><header class="admin-head"><div><span class="eyebrow">Manajemen Makanin</span><h1>${tab==='dashboard'?'Selamat datang, Admin.':tab==='online'?'Pesanan Online':tab==='dinein'?'Pesanan Dine-in':tab==='customers'?'Data Pelanggan':tab==='menu'?'Kelola Menu':'Laporan Penjualan'}</h1><p>Admin mengelola menu, pelanggan, pesanan, pembayaran, dan laporan restoran.</p></div><span class="admin-pill">Admin</span></header>
   ${tab==='dashboard'?`<section class="admin-panel active-panel"><div class="admin-stats"><div><small>Total Pesanan</small><b>${orders.length}</b></div><div><small>Pesanan Baru</small><b>${pendingOrders}</b></div><div><small>Pelanggan</small><b>${users.length}</b></div><div><small>Menu</small><b>${foodsNow.length}</b></div><div><small>Penjualan Dibayar</small><b>${rupiah(paidRevenue)}</b></div></div><div class="status-overview"><div><span>Dibuat</span><b>${statusCount('Pesanan sedang dibuat')}</b></div><div><span>Diproses</span><b>${statusCount('Sedang diproses')}</b></div><div><span>Diantar</span><b>${statusCount('Sedang diantar')}</b></div><div><span>Selesai</span><b>${statusCount('Pesanan selesai')}</b></div></div><div class="admin-section"><div class="admin-section-head"><h2>Pesanan terbaru</h2><div class="dashboard-order-links"><button type="button" class="admin-link" data-tab="online">Lihat pesanan online</button><button type="button" class="admin-link" data-tab="dinein">Lihat pesanan dine-in</button></div></div><div class="admin-order-list">${orders.length?orders.slice(0,5).map(orderCard).join(''):'<div class="no-data">Belum ada pesanan.</div>'}</div></div></section>`:''}
   ${tab==='online'?orderSection('Pesanan Online',onlineOrders,'Belum ada pesanan online.') :''}
   ${tab==='dinein'?orderSection('Pesanan Dine-in / Makan di Tempat',dineinOrders,'Belum ada pesanan dine-in.') :''}
   ${tab==='customers'?`<section class="admin-panel active-panel"><div class="admin-section-head"><div><h2>Data pelanggan</h2><p class="admin-help">Data akun customer yang sudah terdaftar dan terhubung dengan pesanan.</p></div><span>${users.length} pelanggan</span></div><div class="admin-cards customer-admin-grid">${users.length?users.map(x=>{const n=orders.filter(o=>o.customerId===x.id||String(o?.customer?.email||'').toLowerCase()===String(x.email).toLowerCase()).length;return `<article><div class="avatar">${safe((x.name||'P').charAt(0).toUpperCase())}</div><div><h3>${safe(x.name)}</h3><p>Email: <b>${safe(x.email)}</b></p><p>No. HP: <b>${safe(x.phone||'Belum diisi')}</b></p><p>Alamat: ${safe(x.address||'Belum diisi')}</p><small>${n} pesanan</small></div></article>`}).join(''):'<div class="no-data">Belum ada pelanggan.</div>'}</div></section>`:''}
   ${tab==='menu'?`<section class="admin-panel active-panel"><div class="admin-section-head"><div><h2>Manajemen menu</h2><p class="admin-help">Menu dipisahkan berdasarkan kategori. Tambah, edit, hapus, atur harga, gambar, deskripsi, dan stok.</p></div><button type="button" class="btn primary admin-add-food" id="addFood">+ Tambah Menu</button></div>${menuSections}</section>`:''}
   ${tab==='reports'?`<section class="admin-panel active-panel"><div class="admin-stats"><div><small>Omzet dibayar</small><b>${rupiah(paidRevenue)}</b></div><div><small>Pesanan selesai</small><b>${statusCount('Pesanan selesai')}</b></div><div><small>Online</small><b>${onlineOrders.length}</b></div><div><small>Dine-in</small><b>${dineinOrders.length}</b></div></div><div class="admin-section"><div class="admin-section-head"><h2>Ringkasan penjualan</h2></div><div class="report-table"><div><span>Total transaksi</span><b>${orders.length}</b></div><div><span>Sudah dibayar</span><b>${orders.filter(o=>o.paid||o.paymentStatus==='Sudah Dibayar').length}</b></div><div><span>Belum dibayar</span><b>${orders.filter(o=>!(o.paid||o.paymentStatus==='Sudah Dibayar')).length}</b></div><div><span>Nilai seluruh pesanan</span><b>${rupiah(orders.reduce((s,o)=>s+Number(o.total||0),0))}</b></div></div></div></section>`:''}
  </main></div><div id="foodModal"></div>`

  document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{location.hash=b.dataset.tab}))
  document.querySelector('#logout').onclick=()=>{localStorage.removeItem('makanin_admin');location.href='admin-login.html'}
  document.querySelectorAll('[data-status-id]').forEach(sel=>sel.addEventListener('change',()=>{
   const list=getPesanan()
   const o=list.find(x=>String(x.id)===String(sel.dataset.statusId))

   if(!o)return

   const validStatuses=[
     'Pesanan sedang dibuat',
     'Sedang diproses',
     'Sedang diantar',
     'Pesanan selesai',
     'Dibatalkan'
   ]

   if(!validStatuses.includes(sel.value)){
     alert('Status pesanan tidak valid.')
     render()
     return
   }

   o.status=sel.value

   localStorage.setItem('makanin_orders',JSON.stringify(list))

   render()
}))
  document.querySelectorAll('[data-paid-id]').forEach(btn=>btn.addEventListener('click',()=>{
   const list=getPesanan(),o=list.find(x=>String(x.id)===String(btn.dataset.paidId));
   if(!o)return;o.paid=true;o.paymentStatus='Sudah Dibayar';localStorage.setItem('makanin_orders',JSON.stringify(list));render()
  }))
  document.querySelector('#addFood')?.addEventListener('click',()=>openFoodModal())
  document.querySelectorAll('[data-edit-food]').forEach(b=>b.addEventListener('click',()=>{const f=getFoods().find(x=>String(x.id)===String(b.dataset.editFood));if(f)openFoodModal(f)}))
  document.querySelectorAll('[data-delete-food]').forEach(b=>b.addEventListener('click',()=>{
   const id=String(b.dataset.deleteFood),f=getFoods().find(x=>String(x.id)===id);if(!f)return;
   if(!confirm(`Hapus menu "${f.name}" dari katalog Makanin?`))return;
   const list=getFoods().filter(x=>String(x.id)!==id);setFoods(list);localStorage.setItem('makanin_foods_version',String(Date.now()));render()
  }))
 }
 const openFoodModal=f=>{
  const isEdit=!!f
  document.querySelector('#foodModal').innerHTML=`<div class="modal-backdrop"><div class="modal admin-food-modal"><button type="button" class="modal-close" id="closeFood">×</button><span class="eyebrow">${isEdit?'Edit Menu':'Tambah Menu'}</span><h2>${isEdit?'Perbarui':'Tambah'} Menu Makanin</h2><form id="foodForm"><label>Nama menu<input id="foodName" required value="${safe(f?.name||'')}"></label><label>Kategori<select id="foodCategory"><option>Nasi</option><option>Mie</option><option>Ayam</option><option>Pizza & Burger</option><option>Dessert</option><option>Minuman</option></select></label><label>Harga<input id="foodPrice" type="number" min="0" required value="${Number(f?.price||0)}"></label><label>Stok<input id="foodStock" type="number" min="0" required value="${Number(f?.stock??20)}"></label><label>URL Gambar<input id="foodImg" type="url" required value="${safe(f?.img||'')}"></label><label>Deskripsi<textarea id="foodDesc" rows="3">${safe(f?.description||'')}</textarea></label><button type="submit" class="btn primary full">${isEdit?'Simpan Perubahan':'Tambah Menu'}</button></form></div></div>`
  if(f)document.querySelector('#foodCategory').value=f.category
  document.querySelector('#closeFood').onclick=()=>document.querySelector('#foodModal').innerHTML=''
  document.querySelector('#foodForm').onsubmit=e=>{
  e.preventDefault()

  const list=getFoods()

  const data={
    id:isEdit?f.id:Date.now(),
    name:document.querySelector('#foodName').value.trim(),
    category:document.querySelector('#foodCategory').value,
    price:Number(document.querySelector('#foodPrice').value),
    stock:Number(document.querySelector('#foodStock').value),
    img:document.querySelector('#foodImg').value.trim(),
    description:document.querySelector('#foodDesc').value.trim(),
    rating:f?.rating||5,
    ulasan:f?.ulasan||[]
  }

  if(!data.name){
    alert('Nama menu wajib diisi.')
    return
  }

  if(!data.img){
    alert('URL gambar menu wajib diisi.')
    return
  }

  if(data.price<=0){
    alert('Harga menu harus lebih dari 0.')
    return
  }

  if(data.stock<0){
    alert('Stok menu tidak boleh kurang dari 0.')
    return
  }

  const idx=list.findIndex(x=>String(x.id)===String(data.id))

  if(idx>=0){
    list[idx]=data
  }else{
    list.push(data)
  }

  setFoods(list)
  localStorage.setItem('makanin_foods_version',String(Date.now()))
  document.querySelector('#foodModal').innerHTML=''
  render()
}
 }
 render();window.onhashchange=render
}

function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}

window.addEventListener('storage',e=>{if(e.key==='makanin_foods'||e.key==='makanin_foods_version') location.reload()})

const path=location.pathname.split('/').pop()||'index.html'
if(path==='index.html')home()
else if(path==='menu.html')menuPage()
else if(path==='detail.html')detailPage()
else if(path==='register.html')registerPage()
else if(path==='login.html')loginPage()
else if(path==='profile.html')profilePage()
else if(path==='admin-login.html')adminMasukPage()
else if(path==='admin.html')adminPage()
else if(path==='cart.html')cartPage()
else if(path==='checkout.html')checkoutPage()
else if(path==='orders.html')ordersPage()
else home()
updateCartCount()
