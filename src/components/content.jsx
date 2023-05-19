import { CopyToClipboard } from "react-copy-to-clipboard"
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookShareButton, TelegramShareButton } from "react-share"

/* eslint-disable react/no-unescaped-entities */
const Content = ({ ...data }) => {


    const clipBoard = () => {
        toast.success('Share link copied to clipboard!', {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <>
            <div className="flex flex-col gap-2 mt-6 w-[70%]">
                <div className="flex flex-row justify-between pt-10 pb-5 pl-16">
                    <h1 className="text-[27px] font-semibold">{data.year}</h1>
                    <div className="flex flex-row justify-between gap-5 ite">
                        <h1 className="text-[16px] font-normal">Ulashing: </h1>
                        <div className="flex flex-row justify-between gap-4">
                            <TelegramShareButton className="mb-[18px]" url={`https://xrono.uz/year/${data.id}`} title={'keling siz ham bilim oling!'}>
                                <img src="/images/logos_telegram.svg" className="h-8" alt="telegram" />
                            </TelegramShareButton>
                            <FacebookShareButton className="mb-[18px]" url={`https://xrono.uz/year/${data.id}`} title={'keling siz ham bilim oling!'}>
                                <img src="/images/instagram.svg" className="h-8 m-0 p-0" alt="instagram" />
                            </FacebookShareButton >
                            <CopyToClipboard text={`https://xrono.uz/year/${data.id}`} onCopy={() => clipBoard()}>
                                <img src="/images/ep_copy-document.svg" className="h-8 cursor-pointer" alt="copy link" />
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <img src="/images/Line 1.svg" alt="line" className="w-[95%] ml-16" />

                <div className="flex flex-col justify-between py-1 pl-16 gap-10 mt-12 w-[100%] ml-2">
                    {
                        data.contents?.map(elem => {
                            return (
                                <li className="text-[16px] text-[#273140] font-medium w-full" key={elem.id}>
                                    {data.year} - {elem.content}
                                </li>
                            )
                        })
                    }
                </div>
            </div >
            <ToastContainer className={'text-2xl'} transition={Flip} />
        </>
    )
}

export default Content