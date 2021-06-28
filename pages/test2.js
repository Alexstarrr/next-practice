import Link from 'next/link';
import { withRouter } from 'next/router';

const Test2 = ({router}) => {
  return (
        <>
            <h1>{`This is Test 3`}</h1>
            <div>{router.query.name}</div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}

export default withRouter(Test2);
