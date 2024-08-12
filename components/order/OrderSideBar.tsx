import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "./ui/CategoryIcon";

async function getCaregories() {
    return await prisma.category.findMany()
}

export default async function OrderSideBar() {
    const categories = await getCaregories()

    return (
        <aside className="bg-white h-screen w-16 sm:w-60">
            <nav className="mt-10">
                {categories.map(category => (
                    <CategoryIcon
                        key={category.id}
                        category={category}
                    />
                ))}
            </nav>
        </aside>
    );
};