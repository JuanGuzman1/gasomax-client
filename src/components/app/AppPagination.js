import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'
const AppPagination = ({ currentPage, lastPage, setCurrentPage }) => {
  return (
    <CPagination aria-label="Page navigation" align="end">
      <CPaginationItem
        aria-label="Previous"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {currentPage - 3 >= 1 && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage - 3)}>
          {currentPage - 3}
        </CPaginationItem>
      )}
      {currentPage - 2 >= 1 && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage - 2)}>
          {currentPage - 2}
        </CPaginationItem>
      )}
      {currentPage - 1 >= 1 && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </CPaginationItem>
      )}
      <CPaginationItem active>{currentPage}</CPaginationItem>
      {currentPage + 1 <= lastPage && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </CPaginationItem>
      )}
      {currentPage + 2 <= lastPage && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage + 2)}>
          {currentPage + 2}
        </CPaginationItem>
      )}
      {currentPage + 3 <= lastPage && (
        <CPaginationItem onClick={() => setCurrentPage(currentPage + 3)}>
          {currentPage + 3}
        </CPaginationItem>
      )}
      <CPaginationItem
        aria-label="Next"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}

export default AppPagination
