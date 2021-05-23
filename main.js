'use strict';

const pantsBtn=document.querySelector('.pantsBtn');
const skirtBtn=document.querySelector('.skirtBtn');
const tshirtBtn=document.querySelector('.tshirtBtn');

const pinkBtn=document.querySelector('.pink');
const yellowBtn=document.querySelector('.yellow');
const blueBtn=document.querySelector('.blue');


const Main=document.querySelector('.box');
const buttons=document.querySelector('nav');
const logo=document.querySelector('.logo');
const items=document.getElementsByTagName('li');


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

    logo.addEventListener('click',()=>{
        displayAll();
    })
    buttons.addEventListener('click',(event)=>{
        select(event.target.classList.value.slice(0,5)); 
    });
})
.catch(console.log);


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

    for (let i of items){
        if (i.className.includes(colorOrStyle)){
            i.setAttribute('style','visibility:visible');
        }
        else {
            i.setAttribute('style','visibility:hidden');
        }
      }};
    
function displayAll(){


    for (let i of items){
        i.setAttribute('style','visibility:visible');
      }};

