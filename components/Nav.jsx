import React from 'react';

import Link from 'next/link';

const Nav = () => {
  const mobileNav = document.getElementById('mobile-nav');
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            id='mobile-nav'
            tabIndex={0}
            className=' menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 '
          >
            <li>
              <Link onClick={mobileNav.blur()} href='/'>
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <button>Projects</button>
              </Link>
            </li>

            <li>
              <Link href='/blog'>
                <button>Blog</button>
              </Link>
            </li>
          </ul>
        </div>
        {/* <a className='btn btn-ghost normal-case text-xl'></a> */}
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link href='/'>
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <button>Projects</button>
            </Link>
          </li>

          <li>
            <Link href='/blog'>
              <button>Blog</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href='/contact'>
          <a className='btn'>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
