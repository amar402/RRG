import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

export const UserDetail = ({ userDetails }) => {
  useEffect(() => {}, [userDetails]);
  return (
    <div className="mt-3" style={{ height: "15%", width: "25%" }}>
      This is the detail data of selected user
      {userDetails.length > 0 &&
        userDetails.map((user, index) => {
          return (
            <Card key={index}>
              <Card.Img src={user.avatar_url} alt={`{data.login}`} />
              <br />
              <Card.Body style={{ fontSize: "12px", wordWrap: "normal" }}>
                <label htmlFor="name">Name:</label>
                <Card.Title>{user.name}</Card.Title>

                <label htmlFor="email">
                  Email:{user.email ? user.email : " not listed"}
                </label>
                <br />
                <label htmlFor="company">Work - {user.company}</label>
                <br />
              </Card.Body>
            </Card>
          );
        })}
      <br />
    </div>
  );
};
