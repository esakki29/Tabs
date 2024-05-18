export default function TabContent({ data, activeTab, removeTab, mobile }) {
  console.log(data, "content");
  return (
    <div className="tab__container ">
      {mobile &&
        data?.map((item, idx) => (
          <div className="tab__content" key={idx}>
            <p>{item.content}</p>
            <button onClick={() => removeTab(idx)}>Remove</button>
          </div>
        ))}
      {!mobile && (
        <div className="tab__content">
          <p>{data[activeTab].content}</p>
          <button onClick={() => removeTab(activeTab)}>Remove</button>
        </div>
      )}
    </div>
  );
}
