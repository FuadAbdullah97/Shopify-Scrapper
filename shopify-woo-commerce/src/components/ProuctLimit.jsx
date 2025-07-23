import {useLimitContext} from "../context/ProductLimitContext.jsx";

function ProuctLimit() {
    const {productLimit,setProductLimit } = useLimitContext()
    return (
        <div>

                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Limit</label>
                <select id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={productLimit}
                        onChange={setProductLimit}
                >

                    <option value="10" >10</option>
                    <option value="30" >30</option>
                    <option value="100" >100</option>
                    <option value="200" >200</option>
                    <option value="250" >250</option>
                </select>

        </div>
    );
}

export default ProuctLimit;