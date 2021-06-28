import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'

const url = "https://60d1d27f5b017400178f46f4.mockapi.io/api/list/list"

export async function getStaticProps() {
    // const data = {
    //     id: 1,
    //     name: 'hi'
    // }
    const response = await axios.get(url)
    const listItems = response.data
    if (!listItems) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    console.log(listItems);
    return {
      props: { listItems } , // will be passed to the page component as props
    }
}

export default function Test(props) {
    const router = useRouter();
    const list = props.listItems;
    console.log(list);
    return (
        <>
            <h1 className="header1">{`Hello I'm test 1`}</h1>
            <div>{router.query.name}</div>
            {
                list.map((el,index) => <div key={index}>{el.name}</div>)
            }
            <style jsx>{`
                h1 {
                    color: blue;
                }
            `}</style>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}




