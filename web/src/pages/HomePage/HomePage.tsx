import { MetaTags } from '@redwoodjs/web'
import Search from 'src/components/Search/Search'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>HomePage</h1>
      <Search />
    </>
  )
}

export default HomePage
