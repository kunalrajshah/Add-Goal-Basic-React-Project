import React, { useState, useEffect } from "react";

const Output = (props) => {
  // Initialize state to hold the list of data items
  const [dataList, setDataList] = useState([]);

  // This useEffect will run whenever props.data changes
  useEffect(() => {
    // Check if props.data is not empty before adding to dataList
    // The trim() method is used to remove any leading and trailing whitespaces from the string. It is useful to check if the data contains only spaces or is entirely empty (blank). The trim() method does not modify the original string but returns a new string with the leading and trailing whitespaces removed.

    if (props.data.trim() !== "") {
      setDataList((prevDataList) => [props.data,...prevDataList]);
    }}, [props.data]); // The dependency array makes sure this effect runs when props.data changes

    // For Delete List on click
    const deleteList=(index)=>{
      const updatedDataList=[...dataList];
      updatedDataList.splice(index,1);
      setDataList(updatedDataList);
    }


  return (
    <div >
     {/* Check if dataList is not empty before rendering the list */}
     {dataList.length > 0 ? (
        <ul>
          {/* Map through the dataList and create a list item for each data */}
          {dataList.map((data, index) => (
            <li key={index} className="output-list" onClick={()=>deleteList(index)} style={{cursor:"pointer"}}>{data}</li>
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: "center", color: "red" }}>No data available.</h2>
      )}
    </div>
  );
};

export default Output;
