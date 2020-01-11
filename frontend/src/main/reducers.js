import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler meu Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Não pagar o cartão',
            done: false
        }, {
            _id: 3,
            description: 'Fazer lista',
            done: false
        }]
    })
})

export default rootReducer