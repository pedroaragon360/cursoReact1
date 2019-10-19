import React, {useEffect, useState} from 'react'

function useApiCall(url){
    const [data, setData] = useState([])

    useEffect(() => {
      getData(url)
    }, [])

    const getData = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setData(data)
      }

      return data

}

export default useApiCall