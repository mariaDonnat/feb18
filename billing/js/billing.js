function billingFunction()
{
    let sourceName = document.getElementById("shippingName");
    let sourceZip = document.getElementById("shippingZip");

    let billingName = document.getElementById("billingName");
    let billingZip = document.getElementById("billingZip");

    let cBox = document.getElementById("same");

    if (cBox.checked) /*default na neto ung TRUE */
    {
        billingName.value = sourceName.value;
        billingZip.value = sourceZip.value;
    }
    else
    {
        billingName.value = "";
        billingZip.value = "";
    }
}

function compareEntries()
{
    let sourceName = document.getElementById("shippingName");
    let sourceZip = document.getElementById("shippingZip");

    let billingName = document.getElementById("billingName");
    let billingZip = document.getElementById("billingZip");

    if (sourceName.value == billingName.value && sourceZip.value == billingZip.value)
    /*may nakalagay na value becoz pag wala na yon ung mismong default na laman ung pag cocomparin kaya mag fafalse yon, kaya kelangan ung value, ung mismong laman at the moment nung ano na yon.  */
    {
        alert("entries were sent to the server");
    }
    else
    {
        alert("entries does not match");
    }

}
    