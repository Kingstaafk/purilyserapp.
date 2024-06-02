document
  .getElementById("buyProductForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const notes = document.getElementById("notes").value;

    // Displaying form data in console (for testing)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Zip:", zip);
    console.log("Product:", product);
    console.log("Quantity:", quantity);
    console.log("Notes:", notes);

    alert("Your order has been submitted!");

    // Clear the form after submission
    document.getElementById("buyProductForm").reset();
  });
