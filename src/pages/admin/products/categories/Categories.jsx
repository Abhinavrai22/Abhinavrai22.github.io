import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Urls from '../../../../config/apiEndpoints'
import Table1 from '../../../../components/table/Extra'

const Categories = () => {
  const { token, user, authenticated } = useSelector(state => state.auth)
  const [categories, setCategories] = useState([])
  const getCategories = () => {
    axios.get(`${Urls.baseUrl + Urls.category}`, {
      headers: {
        'Authorization': token?.authToken
      }
    }).then((res) => {
      if (res.status === 200) {
        alert(res?.data?.message)
        setCategories(res?.data?.data)
      }
    })
  }

  const colums = [
    { header: 'Category Name', accessor: 'categoryName' },
    { header: 'Category Description', accessor: 'description' },
  ]

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div className='w-full h-fit' >
      <Table1 columns={colums} title='All Categories' data={categories} />
    </div>
  )
}

export default Categories