import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

function ServerCall() {
  const [data, setData] = useState([]);
  const [sliceData, setSliceData] = useState([]);

  useEffect(function () {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      //   console.log(res);
      setData(res.data);
      setSliceData(data.slice(0, 10));
    });
  }, []); //why this empty array here?

  function onchange(e) {
    let lastIndex = e.target.value * 10;
    let startIndex = lastIndex - 10;
    setSliceData(data.slice(startIndex, lastIndex));
  }

  return (
    <div className="parent">
      <div className="grid">
        {sliceData.map((ele) => (
          <PostCard Title={ele.title} Image={ele.thumbnailUrl} />
        ))}
      </div>
      <label>Page</label>
      <select onChange={onchange}>
        {Array(data.length / 10)
          .fill()
          .map((e, i) => (
            <option>{i + 1}</option>
          ))}
      </select>
    </div>
  );
}

export default ServerCall;
