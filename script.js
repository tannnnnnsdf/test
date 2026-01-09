document.getElementById("prayerForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData();
  data.append("entry.123456", e.target.name.value);
  data.append("entry.654321", e.target.prayer.value);

  fetch("https://docs.google.com/forms/d/e/FORM_ID/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: data
  });

  e.target.reset();
  document.getElementById("msg").textContent =
    "ขอบคุณสำหรับคำอธิษฐาน 🙏";
});
