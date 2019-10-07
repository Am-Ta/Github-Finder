import React from "react";

import Search from "../layout/Search";
import Users from "../users/Users";
import Alerts from "../layout/Alerts";

const Home = () => {
  return (
    <div>
      <Alerts />
      <Search />
      <Users />
    </div>
  );
};

export default Home;
