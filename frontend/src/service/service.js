import axios from "@/axios";
import * as ep from "../endpoints/endpoints";

export default class {
  static async getContent(payload) {
    return await axios.post(ep.viewLog, payload).then((res) => res.data);
  }
}
