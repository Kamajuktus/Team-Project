function sendMail() {

  // Email.send({
  //   Host: "smtp.gmail.com",
  //   SecureToken: "05ae023f-2665-499e-b60d-3ba71f4e61cb",
  //   To: "amirsaduov6@gmail.com",
  //   From: document.getElementById("senderMail").value,
  //   Subject: "Sending Email using javascript",
  //   Body: document.getElementById("mailBody").value,
  // })
  //   .then(function (message) {
  //     alert("mail sent successfully")
  //   });
}

function sendEmail() {
    var link = "mailto:amirsaduov6@gmail.com"
             //+ "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("Email from Infinity")
             + "&body=" + encodeURIComponent(document.getElementById('mailBody').value)
    ;

    window.location.href = link;
}

// 05ae023f-2665-499e-b60d-3ba71f4e61cb
