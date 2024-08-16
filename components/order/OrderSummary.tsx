'use client'
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";

export default function OrderSumary() {

    const { order } = useStore()
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <aside className="h-screen overflow-y-scroll w-64 p-5">
            <h1 className="text-4xl text-center font-black">Mi pedido</h1>

            {order.length === 0 ? <p className="text-center my-10">El carrito está vacío</p> :
                (
                    <div className="mt-5">
                        {order.map(item => (
                            <ProductDetails
                                key={item.id}
                                product={item}
                            />
                        ))}

                        <p className="text-2xl mt-20 text-center">
                            Total a pagar: {''}
                            <span className="font-bold ">{formatCurrency(total)}</span>
                        </p>
                    </div>
                )}
        </aside>
    );
};