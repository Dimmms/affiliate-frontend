fetch("https://affiliate-backend.up.railway.app/create-transaction", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    nama,
    email,
    whatsapp
  })
})
