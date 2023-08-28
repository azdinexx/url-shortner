import Hero from '../components/hero';
import ShortnerCard from '../components/shortnerCard';

function Home() {
  return (
    <div className=' bg-stone-50 min-h-screen'>
      <Hero />
      <div className='pb-20'>
        <ShortnerCard />
      </div>
    </div>
  );
}

export default Home;
