
import Image from "next/image";
import Contents from "./Components/Contents";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SliderPage from "./Components/SliderPage";
import Digonode from "./Components/Digonode";
import Footer from "./Components/Footer";
import PrinterSetupGuide from "./Components/PrinterSetupGuide";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mt-16">
    <Header/>
  </div>
  <SliderPage/>
  <Digonode/>
  <PrinterSetupGuide/>
  <Footer/>
      {/* <Contents/> */}
      
      {/* <Footer/> */}
      


    </>
  );
}
