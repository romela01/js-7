'use strict';
    let startNum =0;
    let endNUm =10;
    let minNum = 1;
    let maxNum =0

function start(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET'
    })
    .then(function(response){
        if(response.status!==200){
            throw "error"
        }
        return response.json()
    })
    .then(function(response){
        maxNum = response.length
        page(response);
        
    })
    .catch(function(error){
        console.log('error')
    })
}
start()

    let content = document.querySelector('.content')
    let main = document.querySelector('.main');
    let update = document.querySelector('.update')
    let btnBack = document.querySelector('.btn1');
    let btnNext = document.querySelector('.btn2');
    let overLay = document.querySelector('.overlay')
    let fullover = document.querySelector('.fulloverlay')
    let close = document.querySelector('.close')
    let info = document.querySelector('.infos')



function page(response){

    let fragment = document.createDocumentFragment();

    response.forEach(item => {
        if(item.id>startNum && item.id<=endNUm){

            let childDiv = document.createElement('div');
            childDiv.classList.add('child-div')

            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.textContent = "Person"

            let li2 = document.createElement('li');
            li2.textContent = "User Id: "+ item.id;

            let li3 = document.createElement('li');
            li3.textContent = "More About. . .";
            
            let blarDiv = document.createElement('div')
            blarDiv.classList.add('blarDiv');
            blarDiv.setAttribute('data-id', item.id)

            
            
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(blarDiv)
            childDiv.appendChild(ul)
            fragment.appendChild(childDiv)
            
            blarDiv.addEventListener('click', function(event){
                let itemId = event.target.getAttribute('data-id')
                openWindow(itemId)
            })

            function openWindow(itemId){
                fullover.style.display = 'block';
                overLay.style.display = 'block';
                content.style.display='none';

                let ul = document.createElement('ul')

                let li1 = document.createElement('li')
                li1.textContent ='Person ID: ' + itemId;
                ul.appendChild(li1)

                let li20 = document.createElement('li')
                li20.textContent ="Title"
                let li2 = document.createElement('li')
                li2.textContent =item.title;
                ul.appendChild(li20)
                ul.appendChild(li2)

                let li30 = document.createElement('li')
                li30.textContent ='Body'
                let li3 = document.createElement('li')
                li3.textContent =item.body;
                ul.appendChild(li30)
                ul.appendChild(li3)

                info.appendChild(ul)
            

             }

        }
       
    });
    main.appendChild(fragment)

    
}
close.addEventListener('click',()=>{
    info.innerHTML ='';
    fullover.style.display = 'none';
    overLay.style.display = 'none';
    content.style.display='block'
})

update.addEventListener('click', ()=>{
    window.location.reload()
    })


btnBack.addEventListener('click',()=>{
    if(startNum>0){
        main.innerHTML = "";
        start();
        startNum -=10;
        endNUm -=10;
    }
})

btnNext.addEventListener('click',()=>{
    if(endNUm<maxNum){
        main.textContent = "";
        start()
        startNum +=10;
        endNUm +=10;
        
        console.log(startNum)
        console.log(endNUm)
    }
})
