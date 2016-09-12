import React     from 'react'
import Paginator from 'paginator'
import caller    from 'util/caller'
import range     from 'util/range'
import noop      from 'util/noop'
import Handle    from 'components/Handle'
import Page      from 'components/Page'

export default ({ 
    perPage = 10,
    pages = 20,
    currentPage = 10,
    maxPageToShow = 15,
    totalItemsCount = 2000,
    onPageClick = noop,
    elasticCount = [1, 1]
  }) => {

  const paginator = new Paginator(perPage, pages).build(totalItemsCount, currentPage)

  const numbers = range(1, pages, {
    including: currentPage,
    max: maxPageToShow,
    elasticCount
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