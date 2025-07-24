import {useState} from "react";
import './app.css'
import SearchForm from "./components/SearchForm.jsx";
import ProductTable from "./components/ProductTable.jsx";
import { useLimitContext} from "./context/ProductLimitContext.jsx";


function App() {
    const [inputValue, setInputValue] = useState('')
    const [products, setProducts] = useState([])
    const {productLimit} = useLimitContext()
    const [pagination,setPagination] = useState('')


    const formAction = (e) => {
        e.preventDefault();
        const restartPage =  1;
        setPagination(restartPage)
        getProduct(inputValue, productLimit, 1, );
    }


    const getProduct = async (urlInput, limit, currentPage) => {

        const url = `${urlInput.endsWith('/') ? urlInput.slice(0,-1) : urlInput}/products.json?page=${currentPage}&limit=${limit}` ;


        const response = await fetch(url)

        if (!response.ok) {

            throw new Error(`HTTP error : Status ${response.status}`)

        }

        const data = await response.json();

        setProducts(data.products)
        console.log(products)


    }

    const escapeCsvValue = (value) => {
        if (value === null || value === undefined) return '""';
        let stringValue = String(value);
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
            stringValue = stringValue.replace(/"/g, '""');
            return `"${stringValue}"`;
        }
        return stringValue;
    };

    const exportToCsv = () => {
        if (products.length === 0) {
            alert('No products to export');
            return;
        }

        const headers = ['ID', 'Title', 'Price', 'Handle', 'Image URL', 'Tags', 'Stock Status'];

        const csvRows = products.map(product => {
            const id = escapeCsvValue(product.id);
            const title = escapeCsvValue(product.title);
            const price = escapeCsvValue(product.variants?.[0]?.price ?? 'N/A');
            const handle = escapeCsvValue(product.handle);
            const imageUrl = escapeCsvValue(product.images?.[0]?.src ?? 'N/A');
            const tags = escapeCsvValue(product.tags?.join(';') ?? 'N/A');
            const stockStatus = escapeCsvValue(product.variants?.[0]?.available ? 'In Stock' : 'Out of Stock');
            return `${id},${title},${price},${handle},${imageUrl},${tags},${stockStatus}`;
        });

        const csvContent = [headers.join(','), ...csvRows].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "products.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>

            <SearchForm
                searchValue ={inputValue}
                onInputChange = {(e) => setInputValue(e.target.value)}
                submitAcion = {formAction}

            />
            <ProductTable
                products = {products}
                inputUrl = {inputValue}
                nextpage={() => {
                    const newPage = pagination + 1;
                    setPagination(newPage)
                    getProduct(inputValue, productLimit, newPage)
                } }
                prevPage={() => {
                    const prevPage = pagination - 1;
                    setProducts(prevPage)
                    getProduct(inputValue, productLimit, prevPage)
                }}
                csvExport={exportToCsv}


            />

        </>
    )
}

export default App
