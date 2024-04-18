function sendMail() {
    var params = {
      from_name  : document.getElementById("fname").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_577dt45", "template_0z5mb57", params).then(function () {
      document.getElementById('form-label').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // ... handle the form data, e.g., send it to a server
        this.reset(); // Reset the form fields after handling the submission
      });
  })}
  
  
  
  
  
  
  