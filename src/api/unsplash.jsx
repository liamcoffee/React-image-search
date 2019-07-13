import axios from "axios";

// create instance of axios client
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 6c273cebce0473d11dc06bcddf2175aeec32470e7d236072c878f7bd981a025c"
  }
});
