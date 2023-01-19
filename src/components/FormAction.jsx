export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-1 px-4 border border-[#04fd8c] text-lg font-large rounded-[15px] bg-[#fff] hover:bg-[#04fd8c] mt-10 text-[#1e2532] font-semibold font_outline transition ease-in-out duration-300 hover:translate-y-px"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}