$('.wish-item-wrapper').on('click',function(e) {
    let target = e.target;
    if(target.classList.contains('trash')){
        let parent = event.target.closest('.wish-item-wrapper');
        parent.remove();
    }
});