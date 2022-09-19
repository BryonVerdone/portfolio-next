import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import headshot from '../public/portfolio-img.JPG';
export default function Home() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image
          className='rounded-full'
          width={'300'}
          height={'300'}
          src={headshot}
        />
        <div>
          <h1 className='text-5xl font-bold'>Bryon Verdone</h1>
          <p className='py-6'>
            IT professtional with a passion for networking and web development
          </p>
          <div>
            <ul className='flex gap-3 '>
              <li>
                <a href='https://github.com/BryonVerdone'>GitHub</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/bryon-verdone/'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://twitter.com/_thebryguy'>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
