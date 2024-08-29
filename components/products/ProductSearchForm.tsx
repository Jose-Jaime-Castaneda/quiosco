"use client"
import { SearchShema } from "@/src/schema";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductSearchForm() {

    const handleSearchAction = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchShema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        redirect(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form
            className="flex items-center"
            action={handleSearchAction}
        >

            <input
                type="text"
                name="search"
                className="p-2 placeholder-gray-400 w-full"
                placeholder="Buscar Producto"
            />

            <input
                type="submit"
                className="p-2 bg-indigo-600 uppercase text-white cursor-pointer"
                value={'Buscar'}
            />
        </form>
    );
};