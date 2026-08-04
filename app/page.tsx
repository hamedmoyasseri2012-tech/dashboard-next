import Chart1 from "./common/Chart1"
import Chart2 from "./common/Chart2";
import Chart3 from "./common/Chart3";
import Chat from "./common/Chat";
import Header from "./common/Header"
import Items from "./common/Items"
import Map from "./common/Map";
import SocialChart from "./common/SocialChart";


const page = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <Items />
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <Map/>
      <SocialChart/>
      <Chat/>
    </div>
  );
}

export default page
