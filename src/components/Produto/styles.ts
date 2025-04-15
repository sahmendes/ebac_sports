import styled from 'styled-components'
import * as S from './styles'

// Contêiner do produto
export const ProdutoContainer = styled.div`
  border: 1px solid #ddd;
  padding: 12px;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 180px; /* Definir largura máxima */
  background-color: #f9f9f9;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`

// Imagem do produto
export const ProdutoImagem = styled.img`
  width: 120px; /* Reduzindo ainda mais a largura */
  height: 120px; /* Mantendo altura fixa */
  object-fit: contain; /* Mantendo proporção correta */
  border-radius: 5px;
  margin-bottom: 8px;
  height: 100px !important; /* Mantendo proporção */
  max-width: 100px;
`

export const ProdutoInfo = styled.div`
  font-size: 14px;
  text-align: center;
`

export const BotoesContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
  justify-content: center;
`

export const Botao = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`

export const BotaoFavorito = styled(Botao)<{ estaNosFavoritos: boolean }>`
  background-color: ${(props) =>
    props.estaNosFavoritos ? '#dc3545' : '#28a745'};

  &:hover {
    background-color: ${(props) =>
      props.estaNosFavoritos ? '#b02a37' : '#218838'};
  }
`
