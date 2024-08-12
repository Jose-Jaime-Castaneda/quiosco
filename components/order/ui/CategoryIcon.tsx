import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    return (
        <div className={`w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
            <Link
                className="flex items-center justify-center sm:justify-normal gap-4"
                href={`/order/${category.slug}`}
            >
                <div className="w-16 h-16 relative">
                    <Image
                        src={`/icon_${category.slug}.svg`}
                        alt="Imagen Category"
                        fill
                    />
                </div>
                <p className="text-xl font-bold hidden sm:block">{category.name}</p>
            </Link>
        </div>
    );
};