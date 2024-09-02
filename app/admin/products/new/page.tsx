import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function NewProductPage() {
    return (
        <>
            <Heading>Nuevo Prodcuto</Heading>

            <AddProductForm >
                <ProductForm />
            </AddProductForm>
        </>
    );
};