import Filter from './Filter'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { FilterProps } from '../../interface';

const props:FilterProps = {
    setFilteredValue: () => {}
}
describe("<Filter />", () => {
    beforeEach(() => render(<Filter {...props}/>));
    it('should render the filter UI', () => {
        expect(screen.getByLabelText(/Favourite/i)).toBeInTheDocument();
    })

    it('it should change from any to favourite', () => {
        const filterComponent: HTMLInputElement = screen.getByLabelText(/favourite/i);
        expect(filterComponent.value).toBe("any");
        userEvent.selectOptions(filterComponent, "favourite");
        expect(filterComponent.value).toBe("favourite");
        userEvent.selectOptions(filterComponent, "not favourite");
        expect(filterComponent.value).toBe("not favourite");
    })
});