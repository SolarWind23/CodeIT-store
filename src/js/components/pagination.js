function defaultpagination () {
    const elementsOnPage = 8; 
    
    let  wishItem = document.querySelectorAll('.wish-item-wrapper')
    for(i=0; i < elementsOnPage; i++) {
        wishItem[i].style ='display:block';
    }
    for(i=8; i < wishItem.length; i++) {
        wishItem[i].style ='display:none';
    }
};
function pagination () {
    
    let paginationContainer = document.querySelector('.pagination');
    let elementsArr = document.querySelectorAll('.wish-item-wrapper');
    
    let totalAmount = elementsArr.length; 
    const elementsOnPage = 8; 
   
    let pagesAmount = Math.ceil(totalAmount / elementsOnPage);

    divideOnPages(elementsArr,totalAmount, elementsOnPage);

    createBtn(paginationContainer,pagesAmount); 
};
function createBtn (paginationContainer, pagesAmount) {
    for(let i = 0; i < pagesAmount; i++) {
        paginationContainer.insertAdjacentHTML("beforeEnd", `<button class="navigation-btn btn">${i+1}</button>`);
    };
};

function divideOnPages (arrOfElements, totalAmount, elementsOnPage) {
    let elementsArr = document.querySelectorAll('.wish-item-wrapper');
    
    for(let i = 0; i < elementsOnPage; i++) {
        arrOfElements[i].style ='display:block';
        if(arrOfElements.length < 8) break;
    }
    for(let i = elementsOnPage; i < totalAmount; i++) {
        arrOfElements[i].style ='display:none';
    }

    $('.pagination').on('click',(e)=> {
        
        let target = e.target;
        let pageNumber = target.textContent;
        elementsArr.forEach(function(item){
            item.style='display:none'
        });
        
        for(let i = 0; i < totalAmount; i++) {
            let hRange = elementsOnPage * pageNumber;
            let lRange  = hRange - elementsOnPage;
            if(arrOfElements.length < 8) break;
            
            if(i >= lRange && i < hRange) {
                
                arrOfElements[i].style='display:block';
            }
            else {
                arrOfElements[i].style='display:none';
            };
        };
    })
};
pagination();