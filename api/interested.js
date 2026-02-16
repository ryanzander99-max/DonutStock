// In-memory counter (resets on cold starts — use Upstash Redis for persistence)
let count = 0;

export default function handler(req, res) {
  if (req.method === 'POST') {
    count++;
    return res.status(200).json({ count });
  }

  return res.status(200).json({ count });
}
