import { createMockCurrentGameData } from '@/entities/game/tests-index';
import { getInformationDescriptionItems } from './getInformationDescriptionItems';

describe('Function: getInformationDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockCurrentGameData = createMockCurrentGameData();

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: mockCurrentGameData.genre,
      },
      {
        key: '2',
        label: 'Developer',
        children: mockCurrentGameData.developer,
      },
      {
        key: '3',
        label: 'Publisher',
        children: mockCurrentGameData.publisher,
      },
      {
        key: '4',
        label: 'Release Date',
        children: mockCurrentGameData.releaseDate,
      },
    ];

    const result = getInformationDescriptionItems(mockCurrentGameData);

    expect(result).toEqual(expectedResult);
  });
});

