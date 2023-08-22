import Description from "/components/Description"
import Buttons from "/components/Buttons"

export const metadata = {
  title: "Contest Hive",
  description: "Contest Hive provides you with the lastest informations about the upcoming contests from 7 different platforms"
}

export default function Home() {
  return (
    <div>
      <Description />
      <Buttons />
    </div>
  )
}
