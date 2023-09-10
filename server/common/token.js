const jwt = require("jsonwebtoken");

exports.createAccessToken = async (cUser) => {
  // Get immutable data to create token
  const userInfo = {};
  userInfo.id = cUser.dataValues.id;
  userInfo.user = cUser.dataValues.user;
  userInfo.mail = cUser.dataValues.mail;
  userInfo.role = "access";

  //Expiration Time => 90 days
  let expTime = Math.floor(60 * 60 * 24 * 90);

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
    { algorithm: "RS256" },
    {
      expiresIn: exp,
    }
  );
  return token;
};
