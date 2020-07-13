import client from "../config/client";

const chatRepository = {
  async sendMessage(text) {
    try {
      const response = await client.post("/chat", null, {
        data: {
          text,
        },
      });

      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default chatRepository;
