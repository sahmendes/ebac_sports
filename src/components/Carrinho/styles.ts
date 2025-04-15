import styled from 'styled-components'

export const CarrinhoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const ListaProdutos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ItemCarrinho = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`

export const ImagemProduto = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
`

export const InfoProduto = styled.div`
  flex: 1;
  strong {
    display: block;
    font-size: 14px;
  }
  p {
    font-size: 12px;
    color: #555;
  }
`

export const RemoverBotao = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #b02a37;
  }
`
