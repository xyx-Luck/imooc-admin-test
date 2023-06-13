import { requestLogin } from "@/api/api";
import md5 from "md5";
export default {
  namespaced: true,
  state: () => {},
  mutations: {},
  actions: {
    login(context, payload) {
      const { username, password } = payload;
      requestLogin({ username, password: md5(password) })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
