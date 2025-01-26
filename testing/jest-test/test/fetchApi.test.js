// import fetchDataAxios from "../fetchApi.js";
// import axios from "axios";

const fetchDataAxios=require("../fetchApi.js");
const axios=require("axios");

jest.mock("axios");

test("fetch data", async () => {
  const mockData = { id: 1, name: "gordo", email: "gmail.com" };
  axios.get.mockResolvedValue({ data: mockData });

  const data = await fetchDataAxios.fetchDataAxios();
  expect(data).toEqual(mockData);
});