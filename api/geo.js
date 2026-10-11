/* 접속한 나라 (Vercel 이 요청마다 붙여 주는 x-vercel-ip-country). 한국이면 한국어, 그 밖이면 영어 */
module.exports = function (req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ country: req.headers['x-vercel-ip-country'] || '' });
};
