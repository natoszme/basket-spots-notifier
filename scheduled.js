const dayOfWeek = new Date().getDay();
if (dayOfWeek == 0)
  require("./index");
else
  console.log("Skipping task run");
