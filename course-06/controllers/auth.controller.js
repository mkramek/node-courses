const signin = (req, res) => {
  const { email, password } = req.body;
  // TODO: Logowanie
};

const signout = (req, res) => {
  // TODO: Wylogowanie
};

const signup = (req, res) => {
  const {
    name,
    password,
    email,
    phone
  } = req.body;
  // TODO: rejestracja
};

module.exports = {
  signin,
  signout,
  signup,
};
