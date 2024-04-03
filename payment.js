const form = document.getElementById('payment-form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = form.querySelector('input[name="amount"]').value;
    const email = form.querySelector('input[name="email"]').value;

    // You can add PayPal integration logic here
    console.log(`Amount: ${amount}, Email: ${email}`);
    
});