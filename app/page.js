"use client"
import SearchForm from '@/components/SearchForm'
import { useInView } from 'framer-motion'
import debounce from 'lodash/debounce'
import {useState, useEffect, useCallback} from 'react'

export default function Home() {
  const {searchTerm, setSearchTerm} = useState('')
  const [category, setCategory] = useState('')
  const [paper, setPaper] = useState('')
  const [isLoading, setIsLoading] = useState('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const { ref, inView } = useInView({
    threshold : 0,
  })

  const debouncedSearch = useCallback(
    debounce((term, cat) => {
      handleSearch(term, cat)
    }, 300),
    []
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ResearchHub</h1>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>
  );
}
