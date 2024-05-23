// const container = document.querySelector(".container")
// const card = document.querySelector('.card')
// const h1=document.querySelector('h1');
// // container.appendChild(h1.cloneNode(true))
// // card.innerText=1;

// // for(let i=1;i<100;i++){
// //    container.append(card.cloneNode(true));

// // }

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')
// const poki=document.querySelector('#pokemon')

// for(let i=1;i<=100;i++){
// //    const temp= container.append(poki.cloneNode(true))
// //    poki.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png"
//       const temp=poki.cloneNode(true);
//       container.append(temp);
//       temp.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// }
// const newEle=document.createElement('img')
// newEle.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
// container.append(newEle);
// for(let i=2;i<=100;i++){
//     const newEle=document.createElement('img');
//     newEle.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(newEle);
// }

// const temp=document.createElement('div');

for(let i=1;i<=100;i++){
const temp=document.createElement('div');
temp.id=i;
const image=document.createElement('img');
image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
temp.append(image);
const text=document.createElement('p');
text.innerText=i;
temp.append(text);
container.append(temp);
    
}
