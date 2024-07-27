document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("input[type='email']");
  const passwordInput = document.querySelector("input[type='password']");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission

      // Validate email and password
      if (emailInput.value === "") {
          alert("Please enter your email.");
          emailInput.focus();
          return;
      }

      if (passwordInput.value === "") {
          alert("Please enter your password.");
          passwordInput.focus();
          return;
      }

      // If validation passes, submit the form
      form.submit();
  });
});
