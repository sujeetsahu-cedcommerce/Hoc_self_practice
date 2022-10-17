import React, { useEffect, useState } from "react";

const Hoc = (WrappedComponent, entity) => {
  const NewComponent = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    var filter = "";
    useEffect(() => {
      let result = fetch(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((res) => res.json())
        .then((res) => {
          //   console.log(res);
          setData(res);
        });
    }, []);

    const filteredData = () => {
      filter = data.slice(0, 10).map((item) => {
        if (term !== "") {
          if (entity === "users") {
            if (item.name.includes(term)) {
              return item.name;
            } else return "";
          }
          if (entity === "todos") {
            if (entity === "todos" && item.title.includes(term)) {
              return item.title;
            } else return "";
          }
        }
      });
      console.log(filter);
    };

    if (term !== "") {
      filteredData();
    }
    return (
      <div>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent result={data} filter={filter} />
      </div>
    );
  };
  return NewComponent;
};

export default Hoc;
