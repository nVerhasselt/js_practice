let numberOfCopies;
let button_html = document.getElementById("button");
let receipt_html = document.getElementById("receiptMessage");

button.addEventListener("click", calculateReceipt, false);

function calculateReceipt()
{
    numberOfCopies = document.getElementById("copies").value;
    let receiptValue = 0;

    if(numberOfCopies<=10) 
    {
        receiptValue = numberOfCopies * 0.10;
    } 
    else if (numberOfCopies<=30) 
    {
        receiptValue = (numberOfCopies-10) * 0.09 + (10*0.10);
    }
    else 
    {
        receiptValue = (numberOfCopies-30) * 0.08 + (20 * 0.09);
    }

    console.log(receiptValue);
    
    receipt_html.innerHTML = '<div class = "alert alert-info" role="alert">Votre facture s\'élève à ' + receiptValue + ' euros.</div>';

}