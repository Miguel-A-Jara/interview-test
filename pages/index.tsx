import useToggleTheme from "../src/hooks/useToggleTheme";

const Home = () =>  {

  const { toggleTheme } = useToggleTheme();

  return (
    <>
      <div className='bg-red-500 dark:bg-blue-500'>Hello World</div>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  )
}

export default Home;