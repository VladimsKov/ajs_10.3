import GameSavingLoader from '../gameSavingLoader';
// import read from '../reader';

jest.mock('../reader.js', () => jest.fn(() => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i += 1) {
    bufferView[i] = data.charCodeAt(i);
  }
  return buffer;
}));

test('check GameSavingLoader:', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual(
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  );
});
