'use strict';

const pantsBtn=document.querySelector('.pantsBtn');
const skirtBtn=document.querySelector('.skirtBtn');
const tshirtBtn=document.querySelector('.tshirtBtn');

const pinkBtn=document.querySelector('.pink');
const yellowBtn=document.querySelector('.yellow');
const blueBtn=document.querySelector('.blue');


const Main=document.querySelector('.box');
const buttons=document.querySelector('nav');


function loadItems() {
    return fetch('data.json').then(response=>response.json()
    .then(json=>json.items))
}


loadItems()
.then(items=>{
    console.log(items);
    //displayItems(items);

    for (let tmp of items)
    {
        addList(tmp.gender,tmp.size,tmp.color,tmp.type[0]);
    }

    buttons.addEventListener('click',(event)=>{
        console.log(event.target.classList.value.slice(0,5));
        select(event.target.classList.value.slice(0,5)); 
    });

})
.catch(console.log);



console.log(Main);
function addList(gender,size,color,style)
{
    const item=document.createElement('li');
    item.setAttribute('class', 'list_item');
    item.className+=` ${color}`;
    item.className+=` ${style}`;
    if (style=='p'){
        item.className+=` pants`;
    }
    else if (style=='s'){
        item.className+=` skirt`;
    }
    else if (style=='t'){
        item.className+=` shirt`;
    }
    item.innerHTML=`<img class='item_img' src="imgs/${color}_${style}.png" alt="">
       ${gender}, ${size} size`;
    Main.appendChild(item);
}



function select(colorOrStyle){

    const items=document.getElementsByTagName('li');
    console.log(items);
    for (let i of items){
        console.log(i.className);
        if (i.className.includes(colorOrStyle)){
            i.setAttribute('style','visibility:visible');
        }
        else {
            i.setAttribute('style','visibility:hidden');
        }
      }};
    
