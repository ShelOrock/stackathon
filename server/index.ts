import chalk from 'chalk';

import app from './server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(chalk.magenta(`App is listening on localhost:${ PORT }`))
})
