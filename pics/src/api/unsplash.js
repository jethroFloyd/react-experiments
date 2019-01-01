import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 83171c7f594c24ef8c3923abd6c2754e4c910e37a48048fe8d85e352a138cb67"
  }
});
