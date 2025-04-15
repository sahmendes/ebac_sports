import { Produto } from '../../styles/types' // Corrigido!

type HeaderProps = {
  favoritos: Produto[]
  itensNoCarrinho: Produto[]
}

const Header = ({ favoritos, itensNoCarrinho }: HeaderProps) => {
  return (
    <header>
      <p>Favoritos: {favoritos.length}</p>
      <p>Carrinho: {itensNoCarrinho.length}</p>
    </header>
  )
}

export default Header
