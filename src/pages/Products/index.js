import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Image, Input, Text, View } from '../../components/atoms'

const Products = () => {
  const [products, setProducts] = useState([])
  const [subTotal, setSubTotal] = useState([])

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

      data.forEach((sub) => {
        setSubTotal((oldArray) => [...oldArray, sub.product.price])
      })

      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <View className="bg-[#F4F7FD] w-full h-full">
        <View className="w-10/12 mx-auto bg-white p-[16px]">
          <View className="flex">
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
                  (products || []).map((product, idx) => {
                    const handleQuantity = (value) => {
                      const newProducts = products.map((item) => ({ ...item }))

                      newProducts[idx].quantity = Number(value || 0)
                      newProducts[idx].product.price =
                        Number(value || 0) * subTotal[idx]

                      setProducts(newProducts)
                    }

                    return (
                      <tr key={idx} className="border-b hover:bg-gray-50">
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
                                IDR.{' '}
                                {Intl.NumberFormat('id-ID').format(
                                  subTotal[idx],
                                )}
                              </Text>
                              <Text className="text-[#D0676E] text-[14px]">
                                {product.product.stock} in stock
                              </Text>
                            </View>
                          </View>
                        </td>
                        <td className="p-4 text-center">
                          <Input
                            value={product.product.quantity}
                            name="quantity"
                            type="number"
                            className="w-[100px]"
                            onChange={(e) => handleQuantity(e.target.value)}
                          />
                        </td>
                        <td className="p-4 text-center">
                          <Text>
                            IDR.{' '}
                            {Intl.NumberFormat('id-ID').format(
                              product.product.price,
                            )}
                          </Text>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </View>
          <View className="bg-[#111111] text-white p-[12px] flex justify-end">
            <Text className="font-bold text-[20px]">Total</Text>
            <Text className="font-bold text-[20px] w-[250px] text-right">
              IDR. {Intl.NumberFormat('id-ID').format(0)}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default Products
