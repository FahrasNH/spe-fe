import RouteList from './routes/MainRoutes'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { View } from './components/atoms'

function App() {
  return (
    <Router>
      <View>
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact}
              element={
                <Fragment>
                  {/* {el.permission && <Navbar />} */}
                  {el.component}
                </Fragment>
              }
              key={index}
            />
          ))}
        </Routes>
      </View>
    </Router>
  )
}

export default App
