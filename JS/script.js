
function create(){
	alert(" You should check the Terms of Use regularly to ensure that you understand and are familiar with any changes. You will be deemed to have accepted any changes to the Terms of Use after you have been notified of the changes on our Website home page and you continue to access or use the Website.");
}
function Privacy(){
		alert(" Under GDPR, the main grounds that we rely upon in order to process your Information are the following:Necessary for compliance with a legal obligation – we are subject to certain legal requirements which may require us to process your Information. We may also be obliged by law to disclose your Information to a regulatory body or law enforcement agency;ith any changes. You will be deemed to have accepted any changes to the Terms of Use after you have been notified of the changes on our Website home page and you continue to access or use the Website.");

}
function Covid(){
		alert("It is important that businesses should check photo ID when checking Proof of Immunity. There are some limited circumstances when this may not be necessary e.g. where a person is well-known to the business. Unaccompanied minors are required to present Proof of Immunity. Outdoor Hospitality can continue to operate for customers who are unable to provide evidence of COVID-19 vaccination or immunity following recovery. A maximum of 15 people including no more than 10 adults may be seated at a table.");

}


document.getElementById("myForm").onsubmit = function() {myFunction()};


function myFunction() {
 var z= document.getElementById("datetimepicker1").value;
 var y = document.getElementById("datetimepicker2").value;
 
  var x = document.getElementById("fname").value;
  var a=parseInt(document.getElementById("person_number").value);
  var b=parseInt(document.getElementById("res_facilities").value);
  var q = document.getElementById("email").value;
  //alert(x + z + y + a + b + q);


  if (a <= 6 && b == 1 ){
		alert("thank you "+x+ ",we will confirm your booking on " +y+ " via "+q);
	}
	else if (a <= 6 && b == 2){
		alert("Unfortunately, unvaccinated parties must dine outdoors, we don't have outdoor dining.  apologies ");
	}
	
	else{
		alert("Covid Guidelines currently allows only vaccinated parties to sit indoors, with a limit of 6 on the table ");
	
	}
}

document.getElementById("voucher").onsubmit = function() {myVoucher()};
function myVoucher(){
	var d = document.getElementById("cfname").value;
	var e = document.getElementById("cemail").value;
	alert("Hi " + d + " thank you for your message we will respond to you soon via " + e );
}
	


