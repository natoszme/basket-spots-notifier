const dayOfWeek = new Date().getDay();
if (dayOfWeek == 2)
  require("./index");
else
  console.log("Skipping task run");
