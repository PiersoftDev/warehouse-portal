import { Select } from 'antd'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SearchInput = (props) => {
  const [data, setData] = useState([])

  const [value, setValue] = useState('')

  const { form, dataIndex, style, placeholder } = props

  const getSearchSuggestions = async (name) => {
    if (name === '') {
      return
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await response.json()
      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      )
      setData(filteredUsers)
      return filteredUsers
    } catch (error) {
      console.error('Error fetching user data: ' + error)
    }
  }

  const fetchSearchData = useCallback(
    debounce(async (name) => {
      getSearchSuggestions(name)
    }, 750),
    []
  )

  const handleSearch = (newValue) => {
    fetchSearchData(newValue)
  }

  const handleChange = (newValue) => {
    try {
      const { name } = JSON.parse(newValue)

      form.setFieldsValue({
        [dataIndex]: name,
      })

      setValue(newValue)
    } catch (error) {
      console.log(' some error while parsing the value')
    }
  }

  return (
    <Wrapper width={style?.width}>
      <Select
        // className="search-input"
        showSearch
        value={value}
        placeholder={placeholder}
        style={{
          width: '100%',
          marginBottom: 0,
          minWidth: '7rem',
          fontSize: '0.7rem',
        }}
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(data || []).map((d) => ({
          value: JSON.stringify(d),
          label: d.name,
        }))}
      />
    </Wrapper>
  )
}
export default SearchInput

const Wrapper = styled.div`
  .ant-select-in-form-item {
    width: ${({ width }) => (width ? width : 200)} !important;
  }

  margin-bottom: 0 !important;
`
