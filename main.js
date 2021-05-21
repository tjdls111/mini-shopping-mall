'use strict';

const Main=document.querySelector('.box');
console.log(Main);
function addList(gender,size,color,style)
{
    const item=document.createElement('li');
    item.setAttribute('class',color);
    item.setAttribute('class',style);
    item.setAttribute('class','list_item')
    item.innerHTML=`<img src="imgs/${color}_${style}.png" alt="">
       ${gender}, ${size} size`;
    Main.appendChild(item);
}

addList('male','small','blue','p');
addList('female','large','pink','s');
addList('male','xsmall','yellow','t');
addList('male','xlarge','pink','p');
addList('female','xxlarge','yellow','p');
addList('female','xxlarge','yellow','p');
addList('male','large','blue','t');
addList('male','large','blue','t');
addList('female','small','blue','s');
addList('female','medium','yellow','s');


function select(colorOrStyle){
    for (let i in Main){
        console.log(i.value);
        /*if (i.class!=colorOrStyle){
            i.setAttribute('style','visibility:hidden');
        }
        else {
            i.setAttribute('style','visibility:visible');
        }*/
    }
}

const pantsBtn=document.querySelector('.pantsBtn');
const skirtBtn=document.querySelector('.skirtBtn');
const tshirtBtn=document.querySelector('.tshirtBtn');

const pinkBtn=document.querySelector('.pinkBtn');
const yellowBtn=document.querySelector('.yellowBtn');
const blueBtn=document.querySelector('.blueBtn');
select('pants');

pantsBtn.addEventListener('click',()=>{
    select('pants');
});



