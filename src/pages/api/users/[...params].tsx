import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  // const id = request.query.

  const users = [
    { id: 1, name: "Marcos" },
    { id: 2, name: "Lara" },
    { id: 3, name: "Letícia" },
  ];

  return response.json(users);
};
