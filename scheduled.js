const dayOfWeek = new Date().getDay();
if (dayOfWeek == 2 || dayOfWeek == 5 || dayOfWeek == 0)
  require("./index");
else
  console.log("Skipping task run");