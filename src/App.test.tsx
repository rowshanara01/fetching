import App from './App';
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event';


describe("<App />", () => {
    beforeEach(() => render(<App />));
    it("should render posts without any error", async() => {
        const postList = await screen.findAllByRole('article')
        expect(postList.length).toBe(5)
    })
    it("should filter posts by favourite", async() => {
        const posts = await screen.findAllByRole('article')
        userEvent.selectOptions(screen.getByLabelText(/favourite/i), 'favourite');
        expect(screen.getAllByRole('article')).toStrictEqual([posts[2]]);
        expect(screen.getAllByRole('article').length).toBe(1);

    })
    it("should filter posts by not favourite", async() => {
        const posts = await screen.findAllByRole('article');
        userEvent.selectOptions(screen.getByLabelText(/favourite/i), 'not favourite');
        expect(screen.getAllByRole('article')).toStrictEqual([posts[0], posts[1], posts[3], posts[4]]);
        expect(screen.getAllByRole('article').length).toBe(4);
    })
})