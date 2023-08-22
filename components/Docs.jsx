import "/styles/docs.css"

import GetAllContest from "./examples/GetAllContest"
import GetAtcoder from "./examples/GetAtcoder"

export const metadata = {
  title: "Docs - Contest Hive",
  description: "Documentaion for Contest Hive API that allows you to get the lastest informations about the upcoming contests from 7 different platforms"
}


const Docs = () => {
  return (
    <div>
        <GetAllContest />
        <GetAtcoder />
    </div>
  )
}

export default Docs