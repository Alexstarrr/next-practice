import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const goToTest2 = () => {
    router.push('/test2?name=what')
  }

  return (
    <>
      <Link href={{
        pathname: '/test',
        query:{ name: 'who'}
      }}>
        <a>Test</a>
      </Link>
      <div>
        <button onClick={goToTest2}>Test2</button>
      </div>
      <Link href={{
        pathname:'/time',
        query:{ dateFormat: 'China'}
      }}>
        <a>Time</a>
      </Link>
    </>

  )
}
