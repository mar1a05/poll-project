import { registerUser, emailExists } from '../../user.js';

export default async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(500).send({error: "Email of password does not exist"});
    return;
  }

  try {
    await registerUser(email, password);
  } catch (err) {
    res.status(500).send({error: String(err)})
  }
};