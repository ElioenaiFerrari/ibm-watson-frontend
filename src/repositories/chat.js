import client from "../config/client";

const chatRepository = {
  async sendMessage(params) {
    try {
      const response = await client.post("/chat", params);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default chatRepository;
