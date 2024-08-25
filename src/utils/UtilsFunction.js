import { format } from "date-fns";

export const objectKeyValues = (data) => {
  var concateData = [];
  var arrayData = Object.entries(data);
  arrayData.forEach((a) => {
    let str = "";
    a.forEach((b) => {
      str = str + " " + b;
    });
    concateData.push(str);
  });
  return concateData.map((a) => a.trim());
};

export const formateDate = (data) => {
  const date = new Date(data);
  return format(date, "yyyy-MM-dd HH:mm:ss");
};
