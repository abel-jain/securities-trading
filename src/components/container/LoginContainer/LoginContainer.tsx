import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Login from "@/src/components/presentational/Login/Login";
import database from "@/src/utils/firebaseConfig";

import { ref, onValue } from "firebase/database";

interface IUserInfo {
  account: string;
  password: string;
}

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      //rememberMe: true
    },

    onSubmit: async (values) => {
      // 目前用firebase db，沒使用加密，後期更改

      const collectionRef = ref(database, "userList");

      const fetchUserInfo = () => {
        onValue(collectionRef, (snapshot) => {
          const userData: IUserInfo[] = snapshot.val();

          if (userData) {
            const user = Object.values(userData).find(
              (item) => item.account === values.username
            );

            if (user) {
              if (user.password === values.password) {
                localStorage.setItem("account", user.account);
                alert("登入成功");
                navigate("/");
              } else {
                alert("請輸入正確密碼");
              }
            } else {
              alert("請輸入正確帳號");
            }
          }
        });
      };
      fetchUserInfo();
    },
  });

  const showEventProps = { showPassword, handleShowClick, formik };

  return <Login showEventProps={showEventProps} />;
};

export default LoginContainer;
