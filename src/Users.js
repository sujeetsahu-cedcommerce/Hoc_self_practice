import { useState } from "react";
import Hoc from "./Hoc";

const Users = ({ result, filter }) => {
//   console.log(filter);
  return (
    <div>
      {filter.length > 0
        ? filter.map((user, index) =>
            user !== "" ? <p key={index}>{user}</p> : <></>
          )
        : result.map((user, index) => <p key={index}>{user.name}</p>)}
    </div>
  );
};

// export default Hoc(Users, "users");
const SearchUsers = Hoc(Users, "users");
export default SearchUsers;
