import url from "url";
import querystring from "querystring";

const addr =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=doctor+strange";

const parsedUrl = url.parse(addr);

console.log(parsedUrl.query);
