/* Part 3 original project implementation. APIs and techniques informed by MDN (n.d.) Client-side form validation; EventTarget.addEventListener(); Fetch API; HTML dialog element. See REFERENCES.md. */
document.addEventListener('DOMContentLoaded', () => {
 const nav=document.querySelector('nav');
 if(nav){const toggle=document.createElement('button');toggle.type='button';toggle.className='nav-toggle';toggle.textContent='☰ Menu';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Toggle navigation');nav.prepend(toggle);toggle.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));});}
 document.querySelectorAll('form[data-project-form]').forEach(form=>{
  const status=form.querySelector('.form-status');
  form.addEventListener('submit',async event=>{
   event.preventDefault();status.textContent='';
   if(!form.reportValidity()){status.textContent='Please correct the highlighted fields.';return;}
   const data=new FormData(form), name=String(data.get('name')||'').trim();
   if(form.dataset.projectForm==='enquiry'){
    const quantity=Number(data.get('quantity'));const category=String(data.get('product'));
    const prices={'Celebration cake':450,'Birthday cake':350,'Cupcakes (box of 6)':150,'Cookies (half dozen)':90,'DIY cupcake kit':180};
    const estimate=(prices[category]||0)*quantity;
    status.textContent=`Thank you, ${name}! Your ${category.toLowerCase()} enquiry has been prepared. Indicative starting total: R${estimate}. This is not a confirmed order or final quote. Please use the email button below to send it.`;
   }else{status.textContent=`Thank you, ${name}. Your message is ready to send using your email application. It has not yet been delivered.`;}
   const subject=encodeURIComponent(form.dataset.projectForm==='enquiry'?'Custom bakery enquiry':'Website contact message');
   const body=encodeURIComponent([...data.entries()].map(([key,value])=>`${key}: ${value}`).join('\n'));
   const link=form.querySelector('.send-email');link.href=`mailto:hello@sweetcrumbbakehouse.co.za?subject=${subject}&body=${body}`;link.hidden=false;
  });
 });
 const search=document.querySelector('#product-search'),sort=document.querySelector('#product-sort');
 if(search&&sort){const cards=[...document.querySelectorAll('.menu-section')];const update=()=>{const q=search.value.toLowerCase().trim();cards.forEach(card=>card.hidden=!card.textContent.toLowerCase().includes(q));const container=cards[0]?.parentElement;if(!container)return;const ordered=[...cards].sort((a,b)=>{const an=a.querySelector('h2')?.textContent||'',bn=b.querySelector('h2')?.textContent||'';return sort.value==='az'?an.localeCompare(bn):sort.value==='za'?bn.localeCompare(an):Number(a.dataset.startPrice)-Number(b.dataset.startPrice);});ordered.forEach(card=>container.appendChild(card));};search.addEventListener('input',update);sort.addEventListener('change',update);}
 const images=[...document.querySelectorAll('.menu-section img')];if(images.length){const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.innerHTML='<button type="button" class="close-dialog" aria-label="Close image">× Close</button><img alt=""><p></p>';document.body.append(dialog);dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});images.forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label',`View larger image: ${img.alt}`);const show=()=>{dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal();};img.addEventListener('click',show);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}});});}
});
