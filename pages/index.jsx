import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='https://placeimg.com/260/400/arch'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Bryon Verdone</h1>
          <p className='py-6'>
            IT professtional with a passion for networking and web development
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
