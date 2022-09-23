// TODO: write your code here

import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const data = await GameSavingLoader.load();
    return data;
  } catch (err) {
    return err.name;
  }
})();
