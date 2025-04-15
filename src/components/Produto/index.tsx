import { type Produto } from '../../styles/types' // Caminho correto para os tipos
import * as S from './styles' // Estilos do produto

type Props = {
  produto: Produto
  estaNosFavoritos: boolean
  aoComprar: (produto: Produto) => void
  favoritar: (produto: Produto) => void
}

const ProdutoComponent = ({
  produto,
  estaNosFavoritos,
  aoComprar,
  favoritar
}: Props) => {
  return (
    <S.ProdutoContainer>
      <S.ProdutoImagem src={produto.imagem} alt={produto.nome} />
      <S.ProdutoInfo>
        <strong>{produto.nome}</strong>
        <p>Preço: R$ {produto.preco.toLocaleString('pt-BR')}</p>
        <S.BotoesContainer>
          <S.Botao onClick={() => aoComprar(produto)}>
            Adicionar ao carrinho
          </S.Botao>
          <S.BotaoFavorito
            onClick={() => favoritar(produto)}
            estaNosFavoritos={estaNosFavoritos}
          >
            {estaNosFavoritos ? 'Desfavoritar' : 'Favoritar'}
          </S.BotaoFavorito>
        </S.BotoesContainer>
      </S.ProdutoInfo>
    </S.ProdutoContainer>
  )
}

export default ProdutoComponent
