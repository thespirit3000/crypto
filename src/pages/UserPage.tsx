// import { getUserInfo } from "../services";
import WebApp from "@twa-dev/sdk";
import { useState, useEffect } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

const UserPage = () => {
  const [UserData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  return (
    <div>
      {UserData ? (
        <div>
          <h1> User detail</h1>
          <ul>
            <li>
              <h2>{UserData.first_name}</h2>
            </li>
            <li>
              <h2>{UserData.last_name}</h2>{" "}
            </li>
            <li>
              <h2>{UserData.language_code}</h2>
            </li>
          </ul>
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </div>
  );
};

export default UserPage;
