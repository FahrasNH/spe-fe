import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Image, Text, View } from '../../components/atoms'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y`,
        'Content-Type': 'application/json',
      },
    }

    async function fetchData() {
      const { data } = await axios.get(
        ` https://spe-academy.spesolution.net/api/recruitment`,
        config,
      )

      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <View className="bg-[#F4F7FD] w-full h-full">
        <View className="w-10/12 flex mx-auto bg-white p-[16px]">
          <table className="table-auto w-full">
            <thead className="border-b">
              <tr className="bg-[#111111] text-white">
                <th className="text-center p-4 font-medium">PRODUCT</th>
                <th className="text-center p-4 font-medium">QUANTITY</th>
                <th className="text-center p-4 font-medium">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                (products || []).map((product) => {
                  return (
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <View className="flex gap-4">
                          <View>
                            <Image
                              src={product.product.media_url}
                              alt="thumb"
                              className="w-[120px] h-[120px] shadow-md"
                            />
                          </View>
                          <View>
                            <Text className="text-[#5DA0C8] text-[16px]">
                              {product.product.code}
                            </Text>
                            <Text className="text-[#111111] text-[18px] font-medium">
                              {product.product.name}
                            </Text>
                            <Text className="text-[#ADACAE] text-[16px]">
                              {product.product.price}
                            </Text>
                            <Text className="text-[#D0676E] text-[14px]">
                              {product.product.stock} in stock
                            </Text>
                          </View>
                        </View>
                      </td>
                      <td className="p-4 text-center">5</td>
                      <td className="p-4 text-center">IDR. 15.000.000</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </View>
      </View>
    </Fragment>
  )
}

export default Products
