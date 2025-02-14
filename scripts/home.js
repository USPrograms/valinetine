

function updateMargin() {
    var rejected = document.getElementById('reject-button');
    var computed_style = window.getComputedStyle(rejected);
    
    console.log(typeof(computed_style.marginTop));
    let length = computed_style.marginTop.length
    let margin = computed_style.marginTop.substring(0,length-2);
    console.log(margin);
    let new_val = parseInt(margin,10) +1000;
    rejected.style.marginTop = new_val + "px";
    rejected.style.transition= '2s';
}
