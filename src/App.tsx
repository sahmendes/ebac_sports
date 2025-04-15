import { useGetProdutosQuery } from './reducer/cartApi'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { adicionarAoCarrinho, favoritar } from './reducer/cartSlice'
import { Produto } from './reducer/cartApi'
import Carrinho from './components/Carrinho'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  // Pegando o estado do Redux
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.itens)
  const favoritos = useSelector((state: RootState) => state.cart.favoritos)

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(favoritar(produto))
  }

  const removerDoCarrinho = (id: number) => {
    dispatch({ type: 'cart/removerDoCarrinho', payload: id })
  }

  return (
    <>
      <Carrinho
        itensNoCarrinho={itensNoCarrinho}
        removerDoCarrinho={removerDoCarrinho}
      />
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={itensNoCarrinho} />

        {isLoading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar produtos.</p>}

        {!isLoading && !error && (
          <Produtos
            produtos={produtos ?? []}
            favoritos={favoritos}
            adicionarAoCarrinho={handleAdicionarAoCarrinho}
            favoritar={handleFavoritar}
          />
        )}
      </div>
    </>
  )
}

export default App
