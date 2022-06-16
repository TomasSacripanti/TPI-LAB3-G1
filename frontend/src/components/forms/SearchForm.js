import React from 'react'

const SearchForm = () => {
  return (
    <form class="d-flex">
        <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
        Buscar
        </button>
    </form>
  )
}

export default SearchForm