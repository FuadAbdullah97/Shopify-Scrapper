import React from 'react';
import ProuctLimit from "./ProuctLimit.jsx";


function SearchForm({searchValue, onInputChange, submitAcion}) {




    return (
        <div id={'search-section'} className={'flex flex-row justify-center items-center  '}>
            <form onSubmit={submitAcion}>
                <div className={'flex flex-row gap-5 justify-center items-end'}>
                    <div>
                        <label htmlFor="url-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Shopify Store Link :</label>
                        <input type="text"
                               id={'url-input'}
                               value={searchValue}
                               onChange={onInputChange}
                               className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="e.g Your-store.shopify.com" required/>
                    </div>
                    <ProuctLimit />
                    <button id={'form-btn'} type={"submit"}>Submit</button>

                </div>
            </form>
        </div>
    );
}

export default SearchForm;