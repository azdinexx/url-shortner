function Hero() {
  return (
    <div className='bg-white mb-20 border-b '>
      <section className='relative max-w-4xl mx-auto py-20 text-xl'>
        <img
          className='absolute top-15 left-24 w-full h-48 object-cover'
          src='https://docrdsfx76ssb.cloudfront.net/static/1692819390/pages/wp-content/uploads/2022/10/homepage-hero-a-bit-closer-desktop-v2.png'
          alt=''
        />
        <h1 className='text-4xl'>Make every connection count</h1>
        <p className='max-w-lg text-xl text-gray-400'>
          Create short links, QR Codes, and Link-in-bio pages. Share them
          anywhere. Track what&pos;s working, and what&apos;s not. All inside
          the Bitly Connections Platform.
        </p>
        <button className='bg-green-500 rounded-md text-white my-4 px-4 py-2'>
          Get Started For Free
        </button>
      </section>
    </div>
  );
}

export default Hero;
