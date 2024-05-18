export default function TabButtons({
  data,
  activeTab,
  setActiveTab,
  prevHandler,
  nextHanlder,
  mobile,
}) {
  return (
    <ul className={`${mobile && "hidden"} tab__header`}>
      <li onClick={prevHandler}>&lt;</li>
      {data.map((item, index) => (
        <li
          key={index}
          className={`${index === activeTab && "active"} tab__button`}
          onClick={() => setActiveTab(index)}>
          {item.title}
        </li>
      ))}
      <li onClick={nextHanlder}>&gt;</li>
    </ul>
  );
}
