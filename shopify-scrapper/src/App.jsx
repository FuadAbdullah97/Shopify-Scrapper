import {useState} from "react";


function App() {
    const [inputUrl, setInputUrl] = useState('')
    const [products, setProducts] = useState([])

    const formSubmmit = (e) => {
        e.preventDefault()
        if (!inputUrl.trim()) {
            alert('Please Enter A Valid Shopify Store Link')
            return;
        }
        setProducts([])
        getProducts()


    }

    const getProducts = async () => {

        const url = `${inputUrl.endsWith('/') ? inputUrl.slice(0, -1) : inputUrl}/products.json`;


        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response Status ${response.status}`);
            }

            const data = await response.json()
            if (data && Array.isArray(data.products)) {
                setProducts(data.products)
            }

        } catch (error) {
            console.error(error.message);
        }

    }

    const titleLength = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

    return (
        <>
            <div className={'bg-gray-900 w-full h-full flex flex-col justify-center items-center gap-5'}>
                <form onSubmit={formSubmmit}>
                    <input className={'bg-white rounded-xl h-10 w-80 m-1.5 p-3'} type="text" value={inputUrl}
                           onChange={(e) => setInputUrl(e.target.value)} placeholder={'e.g my-shopify-shore.com'}/>
                    <button className={'bg-amber-200 h-10 w-20 rounded-xl m-1.5'}>Scrape</button>
                </form>
                <div className={' flex flex-row justify-center items-center flex-wrap gap-5'}>
                    {
                        products.map((product) => (
                                <div key={product.id} className={'flex flex-col '}>

                                    {
                                        ((product.images[0].src).length > 0) ?
                                            <a href={product.images[0].src} style={{width: '200px'}} target={'_blank'}><img
                                                src={product.images[0].src} alt="No Image" width={200}/></a> :
                                            <p>No Image Found</p>
                                    }

                                    <p className="text-lg font-semibold mb-2 text-white"> {titleLength(product.title,
                                        20)} </p>
                                    <a
                                        className={'bg-amber-950 text-white p-3 m-1.5 rounded-xs text-center'}
                                        href={`${inputUrl.endsWith('/') ? inputUrl.slice(0, -1) : inputUrl}/products/${product.handle}`}
                                        target={'_blank'}>Open Product</a>

                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default App


