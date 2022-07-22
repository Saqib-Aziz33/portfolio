

function Footer() {
    const date = new Date()
  return <footer className='flex justify-center p-5 footer'>
      <p>Portfolio saqib aziz &copy;{date.getFullYear()} </p>
  </footer>;
}

export default Footer;
