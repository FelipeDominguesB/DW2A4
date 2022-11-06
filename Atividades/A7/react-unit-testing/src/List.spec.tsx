import {fireEvent, getByPlaceholderText, screen, getByText, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import List from './components/List';

describe('App component', () =>{
    it('should render list items', () =>{
        const { getByText, rerender } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']}/>);

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Rodz')).toBeInTheDocument();
        expect(getByText('Mayk')).toBeInTheDocument();

        //Não deu certo, igual no video
        rerender(<List initialItems={['Julia']}/>)
        expect(getByText('Julia')).toBeInTheDocument();
        expect(getByText('Mayk')).not.toBeInTheDocument();
        
    });

    it('should be able to add new item to list', async () =>{
        const {getByText, getByPlaceholderText, findByText, getAllByText} = render(<List initialItems={[]}/>);

        const addButton = getByText('Adicionar');

        userEvent.click(addButton).then(async () =>{

            await waitFor(async () =>{
                expect(findByText('Novo')).toBeInTheDocument();

            })
        });


    });

    it('should be able to remove item from list', async () =>{
        const {getByText, getByPlaceholderText, findByText, getAllByText} = render(<List initialItems={['Diego']}/>);
        const removeButton = getAllByText('Remover');

        userEvent.click(removeButton[0])
        await waitForElementToBeRemoved(() =>{
            return getByText('Diego');
        })


    });
})