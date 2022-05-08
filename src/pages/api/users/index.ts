import { NextApiRequest, NextApiResponse } from "next";

// Estratégias de Autenticação

// JWT (Storage)
// Nesxt Auth (Social)
// Cognito, Auth0  => Autentication as a Server

// Serveless
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Marcos" },
    { id: 2, name: "Lara" },
    { id: 3, name: "Letícia" },
  ];

  return response.json(users);
};

