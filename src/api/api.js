import request from "@/utils/request";

export const requestLogin = (data) => {
  return request({
    url: "/sys/login",
    method: "post",
    data,
  });
};
