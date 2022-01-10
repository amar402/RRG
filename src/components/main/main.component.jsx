import React from "react";
import { useState, useEffect } from "react";
import "./main.component.css";
import { UserList } from "../userList/userList.component";
import { SearchComponent } from "../search/search.component";
import { UserDetail } from "../userDetail/userDetail.component";

export const MainComponent = () => {
  const [users, setUsers] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const filterUser = (name) => {
    let filetredUser = users.filter((userData) =>
      userData.login.includes(name)
    );
    if (filetredUser.length > 0 && name.length > 0) {
      setSearchList(filetredUser);
    } else {
      getUserList();
      setSearchList([]);
    }
  };
  const getUserList = () => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  };

  const getUser = (name) => {
    fetch("https://api.github.com/users/" + name)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        let response = [];
        response.push(result);
        setUserDetails(response);
      });
  };
  useEffect(() => {
    console.log("loaded from MainComponent");
    getUserList();
  }, []);
  useEffect(() => {}, [userDetails]);

  return (
    <>
      <h1> Welcome to GUTHUB users list</h1>
      <SearchComponent getUser={filterUser} />
      {userDetails.length > 0 && <UserDetail userDetails={userDetails} />}
      <div className="container-fluid mt-3 adjacent" style={{ padding: "1%" }}>
        {users.length > 0 && searchList.length < 1
          ? users.map((user, i) => {
              return (
                <div
                  key={i}
                  className="users col-sm-1"
                  style={{
                    float: "left",
                    margin: "1px",
                    border: "grey 2px dotted",
                  }}
                >
                  <UserList data={user} fetchUser={getUser} />
                </div>
              );
            })
          : searchList.length > 0
          ? searchList.map((user, i) => {
              return (
                <div
                  key={i}
                  className="users col-sm-2"
                  style={{
                    float: "left",

                    border: "red 2px dotted",
                  }}
                >
                  <UserList data={user} />
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};
