import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const SearchComponent = (props) => {
  const [searchUser, setSearchUser] = useState("");
  return (
    <div>
      Search User :
      <input
        style={{
          borderRadius: "2px",
          display: "inline",
        }}
        type="search"
        placeholder="enter username"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <br />
      <Button
        className="primary mt-3"
        onClick={() => props.getUser(searchUser)}
      >
        Search
      </Button>
    </div>
  );
};
