 const btn_modal_window = document.querySelector('.button')
 function hendleBtnClick(event) {
    event.preventDefault();
    let counteClickBtn = btn_modal_window.textContent;
    btn_modal_window.texContent = parseInt(counteClickBtn) + 1;

 }

 btn_modal_window,addEventListener('click', hendleBtnClick );

 