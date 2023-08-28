function Header() {
  return (
    <header className='flex justify-between gap-10 py-2 max-w-6xl mx-auto items-center'>
      <div>Url Shortner</div>
      <nav>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className='flex gap-4'>
        <button className='py-2 px-4'>Log in</button>
        <button className='py-2 px-4 rounded-md bg-green-50'>
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
