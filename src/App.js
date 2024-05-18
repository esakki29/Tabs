import React, { useState, useEffect } from "react";
import "./App.css";
import useFetchData from "./Hooks/useFetch";
import Tabs from "./Tabs/Tabs";
export default function App() {
  const { loading, error, data } = useFetchData();
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    if (data) {
      setTabData(data);
    }
  }, [data]);

  //remove active tab
  const removeTab = (idx) => {
    const updatedData = tabData.filter((pet, i) => i !== idx);
    setTabData(updatedData);
    if (idx === tabData.length - 1) setActiveTab(tabData.length - 2);
  };
  //rest back to original
  const resetTab = () => {
    setTabData(data);
    setActiveTab(0);
  };
  //prev handler
  const prevHandler = () => {
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };
  //next handler
  const nextHanlder = () => {
    if (data.length - 1 > activeTab) setActiveTab(activeTab + 1);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="App">
      {tabData.length > 0 ? (
        <Tabs
          data={tabData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          prevHandler={prevHandler}
          nextHanlder={nextHanlder}
          removeTab={removeTab}
        />
      ) : (
        <p>No tab content available</p>
      )}
      <hr />
      <button onClick={resetTab} className="resetMe">
        reset
      </button>
    </div>
  );
}
