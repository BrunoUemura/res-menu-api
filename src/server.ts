import 'dotenv/config';
import './util/module-alias';
import server from '@src/config/server-config';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Menu API running on port ${PORT}`);
});
