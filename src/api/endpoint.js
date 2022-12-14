// export const url = "https://rutine-server.herokuapp.com"

const dev = "http://localhost:5000";
const prod = "https://rutine-server.vercel.app";
export const url = process.env.NODE_ENV === "development" ? dev : prod;
