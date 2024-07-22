import "./App.css";
import Routers from '@/src/route/router';

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  console.log("目前環境：", process.env.NODE_ENV);
}


const Root = () => (
  <Routers />
);

export default Root;
