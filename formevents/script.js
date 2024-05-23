const inn=document.querySelector('#in')
const pp=document.querySelector('#p')

// inn.addEventListener('click',()=>{
//     console.log("hi there")
// })

// inn.addEventListener('dblclick',()=>{
//     console.log("hi")
// })
// // inn.ondblclick=()=>{console.log("double clicked")};
const pre=pp.innerText;


// inn.addEventListener('input',(e)=>{
//     console.log(e)
//     // console.log('input event triggered');
//     // console.log(e.target.value)
//     const newdata=e.target.value
//     pp.innerText=pre+ " "+ newdata;
// })

//change event:

// inn.addEventListener('change',(e)=>{
//     pp.innerText=e.target.value;
// })

inn.addEventListener('focus',(e)=>{
     pp.innerText="";
})

inn.addEventListener('blur',(e)=>{
    pp.innerText="hi there";
})

document.forms[0].addEventListener('click',(e)=>{ console.log("hi there"); })
 


