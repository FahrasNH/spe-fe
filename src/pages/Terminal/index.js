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
      <View className="w-screen h-screen bg-gradient-to-r from-[#00DBED] to-[#FC00FF]">
        <View className="bg-[#111111] mobile:flex mobile:justify-center tab:flex tab:justify-center mobile:h-[40%] tab:h-[40%] tab:w-full smallPc:w-[900px] smallPc:h-[500px] largePc:w-[900px] largePc:h-[500px] origin-bottom smallPc:-rotate-[30deg] largePc:-rotate-[30deg] mobile:relative tab:relative smallPc:absolute largePc:absolute smallPc:-top-[280px] smallPc:left-[100px] largePc:-top-[280px] largePc:left-[100px] smallPc:rounded-3xl largePc:rounded-3xl mobile:border-b-[15px] tab:border-b-[15px] smallPc:border-[15px] largePc:border-[15px] border-white">
          <View className="relative mobile:text-center tab:text-center mobile:absolute mobile:bottom-[20px] tab:absolute tab:bottom-[20px]">
            <Text className="smallPc:fixed largePc:fixed font-orbitron mb-[16px] smallPc:mx-[100px] largePc:mx-[100px] text-[28px] text-[#00FF00] bottom-0">{`< SPE / FRONTEND >`}</Text>
            <Text className="smallPc:fixed largePc:fixed font-orbitron text-[10px] text-[#00FF00] tracking-[3px] smallPc:rotate-[90deg] largePc:rotate-[90deg] smallPc:-left-[90px] largePc:-left-[90px] smallPc:bottom-[230px] largePc:bottom-[230px]">
              {timeReal}
            </Text>
          </View>
        </View>
      </View>
    </Fragment>
  )
}

export default Terminal
