import { loginUser } from "../../user.js";

export default async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(500).send({error: "Email of password does not exist"});
    return;
  }

  try {
    const accessToken = await loginUser(email, password);
    res.json({accessToken});
  } catch (err) {
    res.status(500).send({error: String(err)})
  }
}