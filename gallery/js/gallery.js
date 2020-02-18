/*Name this external file gallery.js*/

function upDate(previewPic)
    {
     
        let target = document.getElementById("image"); /*eto yung div id para don sa may "hover over image"*/
        let sourceImage = "url(" + previewPic.src + ")";
        /* hardcode (pag gusto mo isa isahin) = target.style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')"*/
        target.style.backgroundImage = sourceImage;
        target.innerHTML = previewPic.alt;
        /* */

    }
   
function unDo()
    {

        let target = document.getElementById("image"); 
        target.style.backgroundImage = "url('__')";  
        /*binalik sa walang bgimage yung bg ng div na image (which is nasa target na element) */
        target.innerHTML = "Hover over an image below to display here.";

    }