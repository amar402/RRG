import React, { useEffect } from "react";

import "./userList.component.css";
import Card from "react-bootstrap/Card";

export const UserList = ({ data, fetchUser }) => {
  useEffect(() => {}, [data]);
  return (
    <div>
      {data && (
        <Card onClick={() => fetchUser(data.login)}>
          <Card.Img src={data.avatar_url} alt={`{data.login}`} />
          <Card.Body style={{ fontSize: "12px", wordWrap: "normal" }}>
            {data && data.login}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
