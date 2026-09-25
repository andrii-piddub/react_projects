import {Header} from '../components/Header';
import './PageNotFound.css'
export function PageNotFound ({cart}) {
  return (
    <>
    <Header cart={cart} />
    <p className={'page-not-found'}>Page not Found</p>
    </>
  )
}