import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Sidebar } from "../components"
import { yearService } from "../service"

const SidebarView = () => {

    const [years, setYears] = useState([])
    const { id } = useParams()

    const getYears = () => {
        yearService.getYears()
            .then(res => {
                setYears(res.data.data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => getYears(), [id])

    return (
        <div className="flex flex-col gap-10 p-10 rounded-t-[0px] overflow-y-auto bg-[#273140] mt-6 w-[30%] h-[85vh] ">
            <div className="flex flex-row justify-evenly gap-4 bg-[#273140]">
                <input type="search" placeholder="Search..." style={{ border: "1px solid #D0D2D5" }}
                    className="pl-6 placeholder: text-[15px] text-[#202833] font-medium py-3 px-3 border-none outline-none bg-[#D0D2D5] rounded-[5px] h-[40px] w-[80%]" />
                <a href="#">
                    <img src="/public/images/Filter.svg" className="h-[40px]" alt="#" />
                </a>
            </div>
            {
                years.map(elem => <Sidebar key={elem.id} {...elem} />)
            }
        </div>
    )
}

export default SidebarView