import { loginUser } from "../../user.js";

export default async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    res.status(500).send({error: "Username of password does not exist"});
    return;
  }

  try {
    const accessToken = await loginUser(username, password);
    res.json({accessToken});
  } catch (err) {
    res.status(500).send({error: String(err)})
  }
}