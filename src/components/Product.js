import { useEffect, useState } from 'react';
import Card from './Card';
import "./style.css"

function Product() {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)


    const featchData = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=200`)
        const json = await data.json();
        setData(json?.products)
    }

    useEffect(() => {
        featchData()
    }, [])

    const PAGE_SIZE = 10;
    const TOTAL_PRODUCT = data?.length;
    const NO_OF_PAGES = Math.ceil(TOTAL_PRODUCT / PAGE_SIZE)
    const startIndex = currentPage * PAGE_SIZE
    const LastIndex = startIndex + PAGE_SIZE


    const hadlePageChange = (n) => {
        setCurrentPage(n)
    }

    const handlePrevious = () => {
        setCurrentPage((prev) =>
            prev - 1
        )
    }

    const handleNext = () => {
        setCurrentPage((prev) =>
            prev + 1
        )
    }


    if (!data.length) {
        return <h2>loading...</h2>
    }
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Pagination</h2>
            <div className='pagination-section'>
              {currentPage !==0 && <button className='page-number'  onClick={handlePrevious}>⏮️</button>}
                {
                    [...Array(NO_OF_PAGES).keys()].map((n) => {
                        return <span className={`${n === currentPage ? "active-page-number" : "page-number"}`} onClick={() => hadlePageChange(n)}>{n}</span>
                    })
                }
               {(currentPage !== NO_OF_PAGES -1) && <button className='page-number' onClick={handleNext}>⏭️</button>}

            </div>
            <div className='main-container'>
                {data?.slice(startIndex, LastIndex).map((item, index) => {
                    return <div key={item.id}>
                        <Card data={item} />
                    </div>
                })}

            </div>


        </div>

    );
}
export default Product;
