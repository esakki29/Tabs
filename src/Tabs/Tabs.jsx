import { useState, useEffect } from "react";
import TabButtons from "./TabButtons/TabButtons";
import TabContent from "./TabContents/TabContents";
export default function Tabs({
  data,
  activeTab,
  setActiveTab,
  prevHandler,
  nextHanlder,
  removeTab,
}) {
  //mobile view
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 600 ? true : false
  );
  const delay = 100;
  useEffect(() => {
    //resize event with deboucing
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 600 ? true : false);
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);
  return (
    <>
      <TabButtons
        data={data}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        prevHandler={prevHandler}
        nextHanlder={nextHanlder}
        mobile={isMobile}
      />
      <TabContent
        data={data}
        activeTab={activeTab}
        removeTab={removeTab}
        mobile={isMobile}
      />
    </>
  );
}
