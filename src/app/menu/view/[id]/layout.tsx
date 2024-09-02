export default function Layout({
    menuDetail,
    cartDetail,
  }: {
    menuDetail: React.ReactNode
    cartDetail: React.ReactNode
  }) {
    return (
        <div className="container mx-auto">
        <div className="flex space-x-6">
            <div className="w-[70%]">
                {menuDetail}
            </div>
            <div className="w-[30%]">
                {cartDetail}  
            </div>
        </div>
    </div>

    )
  }