document.getElementById("voucher").onsubmit = function() {myVoucher()};
function myVoucher(){
	var d = document.getElementById("cfname").value;
	var e = document.getElementById("cemail").value;
	alert("Hi " + d + " thank you for your message we will respond to you soon via " + e );
}