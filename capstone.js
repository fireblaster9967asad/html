var myIndex = 0;


function carousel() {

    var i;
    var x = document.getElementsByClassName("mySlides"); 

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex = myIndex + 1

    if (myIndex > x.length) 

        { 
            myIndex = 1 

        }

    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);

    
}


carousel();