const jwt = require("jsonwebtoken");

exports.createAccessToken = async (cUser) => {
  console.log(cUser);
  //Expiration Time => 90 days
  let expTime = Math.floor(60 * 60 * 24 * 90);

  // Get immutable data to create token
  const userInfo = {};
  userInfo.id = cUser.dataValues.user_id;
  userInfo.email = cUser.dataValues.email;
  userInfo.role = "access";
  userInfo.exp = Math.floor(Date.now() / 1000) + expTime;

  //Create token
  const token = await this.issueToken(userInfo, expTime);
  return token;
};

exports.issueToken = async (payload, exp) => {
  // Get private key
  // const PRIV_KEY = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8');
  const PRIV_KEY = process.env.RSA_PRIV_KEY;

  //Issue token
  const token = jwt.sign(
    payload,
    { key: PRIV_KEY, passphrase: process.env.AES_KEY },
    { algorithm: "RS256" }
  );
  return token;
};
