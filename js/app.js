const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const waNumber='919739953849';
const instagramUrl='https://www.instagram.com/scentwithsajjad/';
const orderUrl=(p,size='5ML')=>waNumber?`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi @scentwithsajjad, I would like to order ${p.name} (${size}) by ${p.brand}. Please help me place my order.`)}`:`https://wa.me/?text=${
  encodeURIComponent(`Hi Sajjad, I'd like ${p.name} (${size}) by ${p.brand}. Please share availability and price.`)}`;

//function card(p){return `<article class="product-card" data-name="${(p.name+' '+p.brand).toLowerCase()}" data-reviewed="${p.reviewed}" data-decant="${p.decant}"><div class="product-img"><img src="${p.image}" alt="${p.brand} ${p.name} with decants" loading="lazy"><span class="status">${p.reviewed?'REVIEWED':'COLLECTION'}</span></div><div class="product-info"><p class="brand-name">${p.brand}</p><h3>${p.name}</h3><p class="tag">${p.tag}</p><div class="chips">${p.notes.map(n=>`<span>${n}</span>`).join('')}</div><div class="card-actions"><button class="view" data-id="${p.id}">View & Order</button></div></div></article>`}

function card(p){return `<article class="product-card" data-name="${(p.name+' '+p.brand).toLowerCase()}" data-reviewed="${p.reviewed}" data-decant="${p.decant}">
    <div class="product-img"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="tag">${p.reviewed ? 'REVIEWED' : 'COLLECTION'}</span></div>
    <div class="product-info"><p class="brand-name">${p.brand}</p><h3>${p.name}</h3><p class="tag">${p.tag}</p><div class="chips">${p.notes.map(n=>`<span>${n}</span>`).join('')}</div>
    <div class="decant-status">${p.decant ? 'DECANT AVAILABLE' : 'COLLECTION ONLY'}</div>
    <div class="card-actions"><button class="view" data-id="${p.id}">${p.decant ? 'VIEW & ORDER' : 'VIEW DETAILS'}</button></div></div></article>`;}

//function render(filter='all',q=''){let arr=PRODUCTS.filter(p=>(filter==='all'||(filter==='reviewed'&&p.reviewed)||(filter==='decant'&&p.decant))&&(p.name+' '+p.brand).toLowerCase().includes(q.toLowerCase()));
//$('#productGrid').innerHTML=arr.map(card).join('')||'<div class="empty">No fragrances match your search.</div>'; $$('.view').forEach(b=>b.onclick=()=>openModal(PRODUCTS.find(p=>p.id===b.dataset.id)));}

function render(filter='all',q=''){let search=q.toLowerCase();let a=PRODUCTS.filter(function(p){let matchesFilter=filter==='all' || (filter==='reviewed' && p.reviewed===true) || (filter==='decant' && p.decant===true) ||
      (filter==='collection' && p.decant===false);let matchesSearch=(p.name+' '+p.brand).toLowerCase().includes(search);return matchesFilter && matchesSearch;});
$('#productGrid').innerHTML=arr.map(card).join('')||'<div class="empty">No fragrances match your search.</div>'; $$('.view').forEach(b=>b.onclick=()=>openModal(PRODUCTS.find(p=>p.id===b.dataset.id)));}

//function openModal(p){$('#modalContent').innerHTML=`<div class="modal-grid"><div class="modal-img"><img src="${p.image}" alt="${p.name}"></div><div class="modal-copy"><p class="eyebrow">${p.brand}</p><h2>${p.name}</h2><div class="tag">${p.tag}</div><div class="modal-status"><span>${p.reviewed ? 'REVIEWED' : 'COLLECTION'}</span></div><div class="chips big">${p.notes.map(function(n){return '<span>'+n+'</span>';}).join('')}</div><h4>Choose a size</h4><div class="size-buttons">${['5ML','8ML','10ML'].map(function(s){const price=p.prices && p.prices[s]!=null ? p.prices[s] : ''; return '<a class="btn btn-gold full" target="_blank" rel="noopener" href="'+orderUrl(p,s)+'">'+s+' <span class="size-price">₹'+price+'</span></a>';}).join('')}</div><p class="payment-note">Payment &amp; order confirmation will be completed via WhatsApp.</p><p class="shipping-note">Note: Shipping charges are borne by the customer and are additional to the product price.</p>${p.reviewUrl ? '<a class="btn btn-gold full" target="_blank" rel="noopener" href="'+p.reviewUrl+'">Watch Review</a>' : ''}</div></div>`;

function openModal(p){$('#modalContent').innerHTML=`<div class="modal-grid"><div class="modal-img"><img src="${p.image}" alt="${p.name}"></div><div class="modal-copy"><p class="eyebrow">${p.brand}</p><h2>${p.name}</h2><div class="tag">
  ${p.tag}</div><div class="modal-status"><span>${p.reviewed ? 'REVIEWED' : 'COLLECTION'}</span></div><div class="chips big">${p.notes.map(function(n){return '<span>'+n+'</span>';}).join('')}</div> ${p.decant ? `<div class="decant-status">
  DECANT AVAILABLE</div><h4>Choose a size</h4><div class="size-buttons">${['5ML','8ML','10ML'].map(function(s){const price=p.prices && p.prices[s]!=null ? p.prices[s] : '';return '<a class="btn btn-gold full" target="_blank" rel="noopener" 
  href="'+orderUrl(p,s)+'">'+s+' <span class="size-price">₹'+price+'</span></a>';}).join('')}</div><p class="payment-note">Payment &amp; order confirmation will be completed via WhatsApp.</p><p class="shipping-note">
  Note: Shipping charges are borne by the customer and are additional to the product price.</p> ` : ` <div class="collection-message"><div class="decant-status">COLLECTION ONLY</div><p>This fragrance is currently part of the collection 
    and is not available as a decant.</p></div>`}${p.reviewUrl ? '<a class="btn btn-gold full" target="_blank" rel="noopener" href="'+p.reviewUrl+'">Watch Review</a>' : ''}</div></div>`;
$('#modal').classList.add('show');
$('#modal').setAttribute('aria-hidden','false');}
$('#search').oninput=e=>{const f=$('.filters button.active').dataset.filter;render(f,e.target.value)};
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter,$('#search').value)});
function reviews(){const arr=PRODUCTS.filter(p=>p.reviewed);$('#reviewGrid').innerHTML=arr.length?arr.map(p=>`<article class="review-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><div><p class="brand-name">${p.brand}</p>
<h3>${p.name}</h3><p>Reviewed on Scent With Sajjad.</p>${p.reviewUrl?`<a target="_blank" href="${p.reviewUrl}">Watch Reel ↗</a>`:'<span class="muted">Review link coming soon</span>'}</div></article>`).join(''):'<p class="empty">
  Reviews will appear here as Reels are published.</p>'} {'<p class="shipping-note">Note:Shipping charges are borne by the customer and are additional to he product price.</p>'}
$('.menu-btn').onclick=()=>$('.nav').classList.toggle('open');$$('.nav a').forEach(a=>a.onclick=()=>$('.nav').classList.remove('open'));
$('.modal-close').onclick=()=>$('#modal').classList.remove('show');$('.modal-backdrop').onclick=()=>$('#modal').classList.remove('show');document.addEventListener('keydown',e=>e.key==='Escape'&&$('#modal').classList.remove('show'));
$('#waFloat').href=`https://wa.me/${waNumber}`;$('#year').textContent=new Date().getFullYear();render();reviews();
