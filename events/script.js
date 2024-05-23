function hi(){
    // alert("hi")
    const temp=document.querySelector('#hii')
    temp.classList.add('body');
}

function bye(){
    // const temp=document.querySelector('.card')
    // temp.classList.add('body');
    console.log("all hail vishnu")
}

const temp=document.querySelector('.card');
temp.addEventListener('click',bye);

const c=document.querySelector('.container')

temp.addEventListener('click',()=>{
   const newbox=temp.cloneNode();
   c.append(newbox);

   newbox.innerText=Number(newbox.previousSibling.textContent)+1;
})

temp.addEventListener('mouseover',()=>{
    console.log('hi')
})


