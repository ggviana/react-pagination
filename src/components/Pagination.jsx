import React     from 'react'
import Paginator from 'paginator'
import caller    from 'util/caller'
import range     from 'util/range'
import noop      from 'util/noop'
import Handle    from 'components/Handle'
import Page      from 'components/Page'

export default ({ 
    perPage = 10, 
    pages = 10, 
    currentPage = 6, 
    maxPageToShow = 10, 
    totalItemsCount = 1000, 
    onPageClick = noop,
    elasticCount 
  }) => {

  const paginator = new Paginator(perPage, pages).build(totalItemsCount, currentPage)

  const numbers = range(1, pages, {
    including: currentPage,
    max: maxPageToShow
  })

  return (
    <ul className="pagination">
      {/* Draws Previous before page numbers */}
      {paginator.has_previous_page ? Handle(paginator, 'Previous', caller(paginator.previous_page, onPageClick)) : null}

      {/* Draws Page numbers */}
      {numbers.map(number => Page(number, number, currentPage, caller(number, onPageClick)))}

      {/* Draws Next after page numbers */}
      {paginator.has_next_page ? Handle(paginator, 'Next', caller(paginator.next_page, onPageClick)) : null}
    </ul>
  )
}

// pages: Integer - Quantidade de páginas existentes.
// currentPage: Integer - Numero da página atual.
// maxPageToShow: Integer - Quantos números podem ser mostrados. Para título de exemplo, na imagem acima o maxPageToShow é 10.
// elasticCount: Integer - Quantos números números devem ser exibidos á frente e atras do item atual. 
//  Para título de exemplo, na imagem acima o elasticCount é 5 atras e 4 a frente (mas você pode fazer ser os dois lado serem iguais se preferir).
//  
// Quando o usuário clica em algum dos links, você dispara um callback onPageClick indicando o número da página clicada.
// Os links "previous" e "next" só aparecem se realmente tiver paginas alem do que já esta sendo mostrado nos números.
// Quando o user clicar em "previous" ou "next" você dispara o mesmo callback onPageClick citado acima. 
// Ex: página atual é 3 e o usuário clicam em "next", então você dispara um callback onPageClick passando como parâmetro o número 4.