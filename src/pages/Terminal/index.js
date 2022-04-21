import moment from 'moment'
import { Fragment, useState, useEffect } from 'react'
import { View, Text } from '../../components/atoms'

const Terminal = () => {
  const [timeReal, setTimeReal] = useState(
    moment().format('MMMM Do, YYYY - hh:mm:ss'),
  )

  useEffect(() => {
    setInterval(
      () => setTimeReal(moment().format('MMMM Do, YYYY - hh:mm:ss')),
      1000,
    )
  }, [])

  return (
    <Fragment>
      <View className="w-full h-screen bg-gradient-to-r from-[#00DBED] to-[#FC00FF]">
        <View className="bg-[#111111] w-[960px] h-[500px] origin-bottom -rotate-[30deg] absolute -top-[280px] left-[100px] rounded-3xl border border-[15px] border-white">
          <View className="relative">
            <Text className="fixed font-orbitron mb-[16px] mx-[100px] text-[28px] text-[#00FF00] bottom-0">{`< SPE / FRONTEND >`}</Text>
            <Text className="fixed font-orbitron text-[10px] text-[#00FF00] tracking-[3px] rotate-[90deg] -left-[90px] bottom-[230px]">
              {timeReal}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default Terminal
