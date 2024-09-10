
//import useSWR from "swr";
import LatestOrderItem from "@/components/order/LatestOrderItem";
import Logo from "@/components/ui/Logo";
import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

async function getOrdersReady() {
    const orders = await prisma.order.findMany({
        take: 5,
        where: {
            orderReadyAt: {
                not: null
            }
        },
        orderBy: {
            orderReadyAt: 'desc'
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })

    return orders
}

export default async function page() {
    /** For SWR 
     * 
     *  const url = '/orders/api'
     *  const fetcher = fetch(url).then(res => res.json()).then(data => data)
     *  const {data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
     *      refreshInterval: 60000,
     *      revalidateOnFocus: false,
     *  })
     */

    const orders = await getOrdersReady()

    const handleSubmit = async () => {
        "use server"
        revalidatePath('/orders')
    }

    return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black">Ordenes Listas</h1>

            <Logo />

            <form
                className="w-2/3 mx-auto"
                action={handleSubmit}>
                <input
                    type="submit"
                    className="bg-amber-400 w-full lg:w-auto text-xl px-3 py-3 text-center font-bold cursor-pointer"
                    value="Actualizar Ordenes" />
            </form>

            {orders.length ? (
                <div className="grid grid-cols-2 p-5 gap-5 max-w-5xl mx-auto mt-10">
                    {orders.map(order => (
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className='text-center my-10'>No hay ordenes listas</p>}
        </>
    );
};