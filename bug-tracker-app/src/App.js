import { Fragment } from "react"
import Projects from './projects';
import Bugs from './bugs';

const App = () => {
  return (
    <Fragment>
      <div>
        <Projects  />
        <Bugs  />
      </div>
    </Fragment>
  )
}

export default App;