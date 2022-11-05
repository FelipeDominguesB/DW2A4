import {fireEvent, getByPlaceholderText, getByText, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
describe('App component', () =>{
    it('should render list items', () =>{
        const { getByText } = render(<App/>);

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Rodz')).toBeInTheDocument();
        expect(getByText('Mayk')).toBeInTheDocument();
    });

    it('should be able to add new item to list', async () =>{
        const {getByText, getByPlaceholderText, findByText, getAllByText} = render(<App/>);


        const inputElement = getByPlaceholderText("Novo item");
        const addButton = getAllByText("Remover");

        userEvent.type(inputElement, 'Novo')
        userEvent.click(addButton[0]);

        await waitForElementToBeRemoved(async () =>{
            getByText('Diego');

        });
    });
})