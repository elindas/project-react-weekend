import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response1 = await axios.get(
      "https://api.github.com/users/hendrik1914"
    );
    const response2 = await axios.get("https://api.github.com/users/elindas");

    setData([response1.data, response2.data]);
  };

  return (
            <div>
                {data.map((item, index) =>
                    <div key={index} >
                        <div >No : {item.id}</div>
                        <div >Login : {item.login}</div>
                        <div >Url : {item.html_url}</div>
                    </div>
                    )}
            </div> 
          )                 
}
