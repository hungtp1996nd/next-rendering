// client side rendering --> without pre-rendering

import useSWR from 'swr'

export default function Products() {

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:4000/products')
        return res.json()
    }

    const { data: products = [], error, isLoading } = useSWR('getProducts', fetchProducts)

    // has error
    if (error) return <div>Error occur {JSON.stringify(error)}</div>

    // has loading
    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {products?.map((product: any) => <li key={product?.id}>
                {product?.title}
            </li>)}
        </div>
    )
}