const form = document.querySelector("#signup-form");
const note = document.querySelector("#form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    note.textContent = "Add an email and you are in.";
    return;
  }

  note.textContent = "You are on the early access list.";
  form.reset();
});
