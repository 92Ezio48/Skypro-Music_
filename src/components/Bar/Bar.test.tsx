import { render, fireEvent, screen } from '@testing-library/react';
import Bar from './Bar';
import { Provider } from 'react-redux';
import { testStore } from './test.store';
import * as useLikeTracks from '@/hooks/useLikeTracks';
beforeAll(() => {
  jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => Promise.resolve());
  jest
    .spyOn(window.HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => {}); // можно так оставить, pause по DOM-спеке возвращает void
});
jest.mock('@/hooks/useLikeTracks');

describe('Bar лайк тесты', () => {
  beforeEach(() => {
    (useLikeTracks.useLikeTrack as jest.Mock).mockReturnValue({
      isLike: false,
      toggleLike: jest.fn(),
      isLoading: false,
      errorMsg: null,
    });
  });

  it('Ставит лайк по клику', () => {
    render(
      <Provider store={testStore}>
        <Bar />
      </Provider>,
    );
    const likeBtn = screen.getByTestId('like-btn'); // если не добавил - добавь в Bar
    fireEvent.click(likeBtn);

    const mockLike = (useLikeTracks.useLikeTrack as jest.Mock).mock.results[0]
      .value.toggleLike;
    expect(mockLike).toHaveBeenCalled();
  });
});
