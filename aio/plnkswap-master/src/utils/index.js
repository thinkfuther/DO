export function bigNumberTransform(value) {
  const newValue = ["", "", ""];
  let fr = 1000;
  let num = 3;
  let text1 = "";
  let fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000) + "";
    newValue[1] = "thousand";
  } else if (num <= 8) {
    // 万
    text1 = parseInt(num - 4) / 3 > 1 ? "ten millio" : "ten thousand";
    // tslint:disable-next-line:no-shadowed-variable
    fm = text1 === "万" ? 10000 : 10000000;
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + "";
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(1) + "";
    }
    newValue[1] = text1;
  } else if (num <= 16) {
    // 亿
    text1 = (num - 8) / 3 > 1 ? "myriads" : "Hundred million";
    text1 = (num - 8) / 4 > 1 ? "trillion" : text1;
    text1 = (num - 8) / 7 > 1 ? "Billions" : text1;
    // tslint:disable-next-line:no-shadowed-variable
    fm = 1;
    if (text1 === "Hundred million") {
      fm = 100000000;
    } else if (text1 === "myriads") {
      fm = 100000000000;
    } else if (text1 === "trillion") {
      fm = 1000000000000;
    } else if (text1 === "Billions") {
      fm = 1000000000000000;
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + "";
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + "";
    }
    newValue[1] = text1;
  }
  if (value < 1000) {
    newValue[0] = value + "";
    newValue[1] = "";
  }
  return newValue.join("");
}
//获取浏览器参数
export function getQueryParam(name) {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars[name];
}

//时间格式化
export function formatTime(str, type = "") {
  if (!str || str == "") return "Loading";
  const Str = str.replace(/-/g, "/"); //兼容TP钱包
  const date = new Date(Str);
  let yy = date.getFullYear(),
    MM = formatNum(date.getMonth() + 1),
    dd = formatNum(date.getDate()),
    hh = formatNum(date.getHours()),
    mm = formatNum(date.getMinutes()),
    ss = formatNum(date.getSeconds());
  if (type == "HHMM") {
    return hh + ":" + mm;
  }
  return { yy, MM, dd, hh, mm, ss };
}

//剩余时间转化
export function formatRemainTime(str) {
  if (str == "") return;
  let temp_s = (str - new Date().getTime()) / 1000;
  let dd = parseInt(temp_s / 60 / 60 / 24, 10); //计算剩余的天数
  let hh = formatNum(parseInt((temp_s / 60 / 60) % 24, 10)); //计算剩余的小时数
  let mm = formatNum(parseInt((temp_s / 60) % 60, 10)); //计算剩余的分钟数
  let ss = formatNum(parseInt(temp_s % 60, 10)); //计算剩余的秒数
  return dd + "days " + hh + ":" + mm + ":" + ss;
}

function formatNum(num) {
  if (num < 0) return "00";
  if (num >= 10) {
    return num;
  }
  return "0" + num;
}
