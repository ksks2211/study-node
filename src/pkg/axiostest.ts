import axios, { AxiosRequestConfig } from "axios";

type GetResponse = {
  name: string;
  population: {
    [year: string]: number;
  };
};

type PostResponse = {
  msg: string;
};

const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

axios
  .get<GetResponse>(
    "https://raw.githubusercontent.com/ksks2211/datasets/main/json/usa.json",
    config
  )
  .then(({ data, status, statusText, headers, config }) => {
    console.log(data);
    console.log(data.name);
    console.log(data.population);
    console.log(data.population["2020"]);

    console.log(status); // 200
    console.log(statusText); // 'OK'
    console.log(headers); // AxiosHeaders
    console.log(config); //
  })
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  });

axios
  .post<PostResponse>(
    "https://example.com",
    {
      username: "example",
      password: "12345",
    },
    config
  )
  .then(({ data, status }) => {
    console.log(data.msg);
  })
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  });
