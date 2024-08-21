import OrderSideBar from "@/components/order/OrderSideBar";
import OrderSumary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotifications";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="flex">
                <OrderSideBar />

                <main className="flex-1 h-screen overflow-y-scroll p-5">
                    {children}
                </main>

                <OrderSumary />
            </div>

            <ToastNotification />
        </>
    )
}