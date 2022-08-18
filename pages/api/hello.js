// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json({ test_id: process.env.TEST_ID })
}
