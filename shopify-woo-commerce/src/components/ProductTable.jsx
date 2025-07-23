import React from 'react';

function ProductTable({products,inputUrl, nextpage}) {

   const titleLength = (text, maxLength) => {
       if(!text) return "";

       if(text.length < maxLength) {
           return text
       }


       return text.slice(0, maxLength)+"...";
    }

    return (
        <>
            {
                (products && products.length > 0) ? <div className={'flex flex-col justify-center items-center m-20'}>


                    <div className="relative overflow-x-auto  sm:rounded-lg w-full">
                        <div> <p className={'text-right text-lg m-5 text-white font-bold'}>Total Product Found : {products.length}</p></div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {/*<th scope="col" className="p-4">*/}
                                {/*    <div className="flex items-center">*/}
                                {/*        <input id="checkbox-all-search" type="checkbox"*/}
                                {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                                {/*        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>*/}
                                {/*    </div>*/}
                                {/*</th>*/}
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tags
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                products && products.length > 0 ?(
                                    products.map((product) => (

                                        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            {/*<td className="w-4 p-4">*/}
                                            {/*    <div className="flex items-center">*/}
                                            {/*        <input id="checkbox-table-search-1" type="checkbox"*/}
                                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                                            {/*        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>*/}
                                            {/*    </div>*/}
                                            {/*</td>*/}
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {titleLength(product.title,50)}
                                            </th>
                                            <td className="px-6 py-4">
                                                {product.variants[0].price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {`${product.tags}  ,`}
                                                {/*{product.tags}*/}
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.variants[0].available == true ? "Available" : "Not Available"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href={`${inputUrl.endsWith('/') ? inputUrl.slice(0,-1) : inputUrl}/products/${product.handle}`}
                                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Product</a>
                                            </td>
                                        </tr>

                                    ))
                                ) : (
                                    <tr className="bg-white dark:bg-gray-800">
                                        <td colSpan="7" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                                            No products found. Please enter a valid Shopify store URL and click Submit.
                                        </td>
                                    </tr>
                                )

                            }










                            </tbody>
                        </table>


                        {/*<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"*/}
                        {/*     aria-label="Table navigation">*/}
                        {/*    <span*/}
                        {/*        className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span*/}
                        {/*        className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span*/}
                        {/*        className="font-semibold text-gray-900 dark:text-white">1000</span></span>*/}
                        {/*    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#" aria-current="page"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#"*/}
                        {/*               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</nav>*/}

                    </div>
                        <div><button className={'w-30 h-10 m-5 bg-sky-500'} onClick={nextpage}>Next Page</button></div>
                </div>

                    : null
            }



        </>


    );
}

export default ProductTable;