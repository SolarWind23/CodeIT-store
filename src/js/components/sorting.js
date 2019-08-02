
$('#sort').on('keyup', function () {

    let inputValue = document.getElementById('sort').value.toUpperCase();
    filterCards(inputValue);
    isDisabledClearBtn(inputValue);
});



$('.clear-btn').on('click',()=> {
    let input = document.getElementById('sort');
    let filter = input.value.toUpperCase();
    filter='';
    input.value='';
    isDisabledClearBtn(filter);
    filterCards(filter);
})

function filterCards(filter) {
    let paginationContainer = document.querySelector('.pagination');
    let elementsOnPage = 8
    let itemsArr = document.querySelectorAll('.wish-item-wrapper');
    let filteredItemsArr = [];

    for (let i = 0; i < itemsArr.length; i++) {
        let a = itemsArr[i].querySelector(".model");
        if(itemsArr[i] == 'undefined') break;
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            itemsArr[i].style.display = "";
        } else {
            itemsArr[i].style.display = "none";
        }
    }
    
    for(let i = 0; i < itemsArr.length; i++) {
        if(!!(itemsArr[i].getAttribute('style') == '')) {
            filteredItemsArr.push(itemsArr[i]);
        }
    }
   
    let totalAmountFiltered = filteredItemsArr.length;

    divideOnPages (filteredItemsArr, totalAmountFiltered, elementsOnPage);

    let pagesAmount = Math.ceil(totalAmountFiltered / elementsOnPage);

    paginationContainer.innerHTML='';

    createBtn(paginationContainer, pagesAmount);
}

function isDisabledClearBtn(filter) {   
        
    if(filter.length > 0) {
        $('.clear-btn').prop('disabled', false);
    } else if(filter.length == 0) {
        $('.clear-btn').prop('disabled', true) 
    }
}