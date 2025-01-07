import HeaderBox from '@/components/ui/HeaderBox'

const Home = () => {
  const loggedIn = {firstName: "Chatanya" }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome to Horizon'
            user={loggedIn?.firstName || 'Guest'}
            subtext={`We're happy to see you again!`}
          />
        </header>
      </div>
    </section>
  )
}

export default Home
