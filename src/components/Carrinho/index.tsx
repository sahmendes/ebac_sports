import * as S from './styles'
import type { Produto } from '../../styles/types'

type CarrinhoProps = {
  itensNoCarrinho: Produto[]
  removerDoCarrinho: (id: number) => void
}

const Carrinho = ({ itensNoCarrinho, removerDoCarrinho }: CarrinhoProps) => {
  return (
    <S.CarrinhoContainer>
      <h2>Carrinho de Compras</h2>
      {itensNoCarrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <S.ListaProdutos>
          {itensNoCarrinho.map((produto) => (
            <S.ItemCarrinho key={produto.id}>
              <S.ImagemProduto src={produto.imagem} alt={produto.nome} />
              <S.InfoProduto>
                <strong>{produto.nome}</strong>
                <p>R$ {produto.preco.toFixed(2)}</p>
              </S.InfoProduto>
              <S.RemoverBotao onClick={() => removerDoCarrinho(produto.id)}>
                Remover
              </S.RemoverBotao>
            </S.ItemCarrinho>
          ))}
        </S.ListaProdutos>
      )}
    </S.CarrinhoContainer>
  )
}

export default Carrinho
