const WA="525635123355",IMG={h:"./assets/hombre.jpg",m:"./assets/dama.jpg",u:"./assets/unisex.jpg"};
const CATS={h:["Hombre","Para él: clásicos, frescos y de noche."],m:["Dama","Para ella: florales, dulces y elegantes."],u:["Unisex","Para todos: se comparten y se disfrutan igual."]};
const RAW={h:`Noche 29|The Noir 29
Herencia París|Paris Hilton for Men
Noche Deseada|Wanted by Night, Azzaro
Monte Plata|Silver Mountain Water, Creed
Nómada Absoluto|L'Homme Nomade, Louis Vuitton
Aqua Eterna|Acqua di Giò
Explosión de Especias|Spicebomb, Viktor&Rolf
Especias al Extremo|Spicebomb Extreme
Fantasma Imperial|Phantom, Paco Rabanne
Fantasma Intenso|Phantom Intense
Explorador Élite|Explorer, Montblanc
Explorador Ultra Azul|Explorer Ultra Blue
Azul Clásico|Polo Blue
Aqua Profunda|Acqua di Giò Profumo
Santal Imperial 33|Santal 33
Imaginación Pura|Imagination, Louis Vuitton
Caballero Privado|CH for Men
Invencible|Invictus
Salvaje Absoluto|Sauvage
Mi Esencia|MYSLF, YSL
Roma Intensa|Born in Roma Intense, Valentino
Verde Extravagante|Green Stravaganza, Valentino
Dios del Amor|Eros, Versace
Energía Vital|Energy, Versace
Urbano 212|212
VIP Exclusivo|212 VIP
Oro Millón|One Million
Suerte de Oro|One Million Lucky
Único|CK One
Inmensidad|L'Immensité, Louis Vuitton
Celeste Claro|Light Blue, D&G
Leyenda Roja|Montblanc Legend Red
Leyenda Negra|Montblanc Legend Black
Espíritu de Leyenda|Montblanc Legend Spirit
Viaje Marino|Nautica Voyage
Código Secreto|Armani Code
Blanco Puro|Lacoste White
Azul Dinámico|Coach Blue
Ícono Azul|Bleu de Chanel
Soberano|Aventus, Creed
Ámbar Oriental|Khamrah, Lattafa
Soberano Absoluto|Absolu Aventus, Creed
Ídolo Rebelde|Toy Boy
Tabaco y Vainilla|Tobacco Vanille, Tom Ford
Cuero Oscuro|Ombré Leather, Tom Ford
Escándalo|Scandal, Jean Paul Gaultier
El Hombre Perfecto|Le Male Le Parfum
El Hombre|Le Male
El Bello|Le Beau
El Bello Aroma|Le Beau Le Parfum
Elixir del Hombre|Le Male Elixir
Élite de Noche|Boss Bottled Night
Élite Clásico|Boss Bottled
Élite Naranja|Boss Orange
Simplemente Diferente|Boss Just Different
Club de Noche|Club de Nuit, Armaf
Cielo Mandarina Árabe|Mandarin Sky, Armaf
La Aventura|L'Aventure, Al Haramain
Mega Hombre|Odyssey Mega Man, Armaf
Rebelde de Noche|9PM Rebel, Afnan`,
m:`Destello 2|Toy 2
Coral Brillante|Omnia Coral
Bomba Floral|Flowerbomb, Viktor&Rolf
Urbana 212|212
VIP Exclusiva|212 VIP
Para Ella|Her, Burberry
Señorita Dior|Miss Dior
Cristal Radiante|Bright Crystal, Versace
Vida Bella|La Vie Est Belle, Lancôme
Celeste Femenino|Light Blue, D&G
Sorbete Rojo|Sorbetto Rosso, Escada
Nube Rosa|Cloud, Ariana Grande
Silueta Elegante|Good Girl, CH
Estrella de París|Paris Hilton
Burbuja de Amor|Toy 2 Bubble Gum
Hermosa Gardenia|Flora Gorgeous Gardenia, Gucci
Amor Sin Miedo|Love, Don't Be Shy, Kilian
Chocolate Dubai|Odyssey Dubai Chocolate, Armaf
Dulce Caramelo|Odyssey Candy, Armaf
Lichi Delicia|Odyssey Li'Chi Lush, Armaf
Rosa Pop|Odyssey Pink Pop, Armaf
Bosque Negro|Odyssey Black Forest, Armaf
Princesa Yara|Yara, Lattafa
Yara Oro|Yara Tous, Lattafa
Yara Dulce|Yara Candy, Lattafa
Su Confesión|Her Confession, Lattafa
Destello de Vainilla|Eclaire, Lattafa
Mujer de Hoy|Now Women, Lattafa`,
u:`Cielo Mandarina|Mandarin Sky
Rojo Baccarat 540|Baccarat Rouge 540
Hierba Pura|Erba Pura, Xerjoff
Rey Absoluto|King, Bharara
Cereza Perdida|Lost Cherry, Tom Ford
Isla Naxos|Naxos, Xerjoff
Esencia Pura|Erba Pura, Xerjoff
Limón Fresco|Odyssey Limoni Fresh, Armaf
Ámbar y Oro|Amber Oud Gold, Al Haramain
Espectro|Odyssey Spectra, Armaf
Rey del Desierto|King, Bharara
Aqua Dubai|Amber Oud Aqua Dubai, Al Haramain
Mango Tropical|Odyssey Go Mango, Armaf
Escape Bahamas|Odyssey Bahamas, Armaf
9 de la Noche|9PM, Afnan
9 de la Mañana|9AM, Afnan`};
const P=[];for(const c in RAW)RAW[c].split("\n").forEach((l,i)=>{const[n,s]=l.split("|");P.push({id:c+i,c,n,s})});
const price=n=>Math.floor(n/3)*500+[0,200,350][n%3],mx=v=>"$"+v.toLocaleString("es-MX");
let cart={};try{cart=JSON.parse(localStorage.getItem("yan")||"{}")}catch(e){}Object.keys(cart).forEach(k=>{if(!P.some(p=>p.id==k))delete cart[k]});const save=()=>{try{localStorage.setItem("yan",JSON.stringify(cart))}catch(e){}};let tt;function toast(n){const x=$("toast");x.textContent="Agregado: "+n;x.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>x.classList.remove("show"),1400)}let cat="h";const $=i=>document.getElementById(i);
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
function tabs(){$("tabs").innerHTML=Object.keys(CATS).map(k=>`<button class="tab" role="tab" data-k="${k}" aria-selected="${k==cat}">${CATS[k][0]}</button>`).join("")}
function list(a){const q=$("q").value.trim().toLowerCase();
 const all=P.filter(p=>p.c==cat),rs=all.filter(p=>!q||(p.n+p.s).toLowerCase().includes(q));
 const im=$("img");if(im.getAttribute("src")!=IMG[cat]){im.src=IMG[cat];im.classList.remove("swap");void im.offsetWidth;im.classList.add("swap")}$("grid").className="grid"+(a?" ani":"");$("img").alt="Perfumes YAN para "+CATS[cat][0].toLowerCase();$("cap").textContent=CATS[cat][1];
 $("ttl").textContent="Perfumes de "+CATS[cat][0].toLowerCase();$("cnt").textContent=rs.length+" de "+all.length+" fragancias";
 $("grid").innerHTML=rs.length?rs.map((p,i)=>{const k=cart[p.id]||0;return `<div class="card${k?" on":""}" style="--i:${Math.min(i,14)}"><div><b>${p.n}</b><small>Inspirado en ${p.s}</small></div>`+(k?`<div class="st"><button data-d="-1" data-id="${p.id}" aria-label="Quitar uno">−</button>${k}<button data-d="1" data-id="${p.id}" aria-label="Agregar otro">+</button></div>`:`<button class="add" data-d="1" data-id="${p.id}" aria-label="Agregar ${p.n}">+</button>`)+`</div>`}).join(""):`<p class="empty">No encontramos "${q}". Prueba con otra palabra.</p>`}
function bar(){const n=count();$("open").disabled=!n;$("n").textContent=n?n+(n>1?" perfumes":" perfume")+" · Ver pedido":"Elige tus perfumes";const pe=$("p"),old=pe.textContent;pe.textContent=n?mx(price(n)):"";if(n&&old!=pe.textContent){pe.classList.remove("bump");void pe.offsetWidth;pe.classList.add("bump")}$("hint").textContent=n?(n%3==0?"¡Mejor precio! Cada 3 perfumes pagas $500":"Un perfume más: solo +"+mx(price(n+1)-price(n))):"3 perfumes por solo $500";save()}
function chg(id,d){cart[id]=Math.max(0,(cart[id]||0)+d);if(!cart[id])delete cart[id];list();bar();if(d>0)toast(P.find(p=>p.id==id).n);if(dlg.open)lines()}
const dlg=$("dlg");
function lines(){const n=count();if(!n){dlg.close();return}
 $("lines").innerHTML=P.filter(p=>cart[p.id]).map(p=>`<div class="li"><span>${cart[p.id]}× ${p.n} <small style="color:var(--mut)">(${CATS[p.c][0]})</small></span><button data-d="-1" data-id="${p.id}">Quitar</button></div>`).join("");
 $("tot").textContent=mx(price(n));const sv=n*200-price(n);$("save").textContent=sv?"Ahorras "+mx(sv)+" con el paquete":""}
document.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;
 if(t.dataset.k){cat=t.dataset.k;tabs();list(true)}else if(t.dataset.id)chg(t.dataset.id,+t.dataset.d)});
$("q").oninput=list;
$("open").onclick=()=>{lines();$("err").textContent="";dlg.showModal()};$("x").onclick=()=>dlg.close();
$("clr").onclick=()=>{for(const k in cart)delete cart[k];list();bar();dlg.close()};
$("send").onclick=()=>{const nm=$("nm").value.trim(),ad=$("ad").value.trim();
 if(!nm||!ad){$("err").textContent="Escribe tu nombre y tu zona o dirección de entrega.";return}
 const n=count(),ls=P.filter(p=>cart[p.id]).map(p=>`• ${cart[p.id]}× ${p.n} (inspirado en ${p.s})`).join("\n");
 const m=`Hola YAN Fragance, quiero hacer un pedido:\n\n${ls}\n\nTotal: ${mx(price(n))} (${n} ${n>1?"perfumes":"perfume"}, 60 ml c/u)\nNombre: ${nm}\nEntrega: ${ad}`;
 window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,"_blank","noopener")};
let tk=false;addEventListener("scroll",()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{document.querySelector(".ring").style.transform="translate(-50%,calc(-50% + "+Math.min(scrollY,500)*.25+"px))";tk=false})},{passive:true});
tabs();list(true);bar();
