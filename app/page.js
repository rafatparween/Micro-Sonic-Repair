
import Image from "next/image";
import Contents from "./Components/Contents";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SliderPage from "./Components/SliderPage";
import Digonode from "./Components/Digonode";
import Footer from "./Components/Footer";
import PrinterSetupGuide from "./Components/PrinterSetupGuide";
import PrinterSetupSection from "./Components/PrinterSetupSection";
import JivoChat from "./JivoChat";


export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mt-[85px]">
    <Header/>
  </div>
  <SliderPage/>
  <PrinterSetupSection/>

  <Digonode/>
  <PrinterSetupGuide/>
  <Footer/>
  <JivoChat/>
      {/* <Contents/> */}
      
      {/* <Footer/> */}
      


    </>
  );
}
