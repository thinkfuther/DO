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
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
