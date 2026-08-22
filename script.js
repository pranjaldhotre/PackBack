function toggleMenu(){
  const nav=document.querySelector("nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  if(nav.style.display==="flex"){
    nav.style.position="absolute";
    nav.style.top="82px";
    nav.style.left="0";
    nav.style.right="0";
    nav.style.background="white";
    nav.style.padding="20px";
    nav.style.flexDirection="column";
    nav.style.alignItems="stretch";
  }
}

document.querySelectorAll(".faq-question").forEach(button=>{
  button.addEventListener("click",()=>{
    const answer=button.nextElementSibling;
    const isOpen=answer.style.display==="block";
    document.querySelectorAll(".faq-answer").forEach(a=>a.style.display="none");
    document.querySelectorAll(".faq-question").forEach(q=>q.classList.remove("active"));
    if(!isOpen){
      answer.style.display="block";
      button.classList.add("active");
    }
  });
});

const counters=document.querySelectorAll("[data-target]");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const target=Number(el.dataset.target);
      let current=0;
      const step=Math.max(1,Math.ceil(target/80));
      const timer=setInterval(()=>{
        current+=step;
        if(current>=target){current=target;clearInterval(timer);}
        el.textContent=current.toLocaleString();
      },20);
      observer.unobserve(el);
    }
  });
},{threshold:.5});
counters.forEach(c=>observer.observe(c));

function submitForm(event){
  event.preventDefault();
  alert("Thank you! Your PackBack enquiry has been received.");
  event.target.reset();
}
