// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function stopClick(noclick) {
    noclick.preventDefault(noclick);

    }
    HREF_LINK.addEventListener('click', stopClick);

    function stopFlex(stopped) {
        stopped.preventDefault(stopped);
        
    } INPUT_CHECKBOX.addEventListener('click', stopFlex);
   
    function stopKey(stopped) {
        const letra = stopped.key;
        if (letra !== 'a'){
            stopped.preventDefault();
        }

        /* stopped.preventDefault(stopped); */
        

    } INPUT_TEXT.addEventListener('keypress', stopKey);

