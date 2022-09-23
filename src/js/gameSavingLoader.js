import read from './reader';
import json from './parser';
import GameSaving from './gameSavings';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const outputData = await json(data);
    const res = JSON.parse(outputData);
    return new GameSaving(
      res.id,
      res.created,
      res.userInfo,
    );
  }
}
