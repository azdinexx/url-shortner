function ShortnerCard() {
  return (
    <section className='py-6 px-8 shadow-lg rounded-lg bg-white max-w-3xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-6 mt-4'>Shorten a Long Link</h1>
      <form action='' className='flex gap-3 flex-col'>
        <span className='text-green-600/80'>Paste as a Long Link</span>
        <input
          type='text'
          placeholder='Example: https://www.google.com'
          className=' border-black border py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out focus:ring-opacity'
        />
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex gap-2 flex-col relative'>
            <span className='text-green-600/80'>Domain</span>
            <label
              htmlFor='domain'
              className='absolute top-4 right-4 h-full w-10 text-center text-green-600/80 flex items-center justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z'
                />
              </svg>
            </label>
            <input
              id='domain'
              name='domain'
              type='text'
              value={'localhost:3000/'}
              className='bg-green-500/10 border-green-800 border py-2 px-6 rounded-lg w-full'
              disabled
            />
          </div>
          <div className='flex gap-2 flex-col'>
            <span>
              Enter a back-half for your link{' '}
              <span className='text-green-600/80'>(optional)</span>
            </span>
            <input
              type='text'
              placeholder='something unique'
              className=' border-black border py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out focus:ring-opacity w-full'
            />
          </div>
        </div>
        <div className='bg-green-400/5 text-green-600 p-6 my-2 rounded-md'>
          End your link with words that will make it unique
        </div>
        <button className='text-white bg-green-500 py-2 px-4 w-fit text-lg rounded-lg'>
          Shorten
        </button>
      </form>
    </section>
  );
}

export default ShortnerCard;
