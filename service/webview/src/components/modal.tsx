interface PropsType {
  setIsClose: () => void
  children: React.JSX.Element
  modalType?: keyof typeof ModalHeight
}

const ModalHeight = {
  comment: 'h-[67%]',
}

const Modal = ({ setIsClose, children, modalType }: PropsType) => {
  const heightStyle = modalType ? ModalHeight[modalType] : ''
  return (
    <div className="w-full h-full absolute top-0 flex flex-col z-30">
      <div className="bg-black grow opacity-40" onClick={setIsClose}></div>
      <div
        className={`flex flex-col text-white bg-gray900 w-full absolute bottom-0 animate-[commentPullUp_80ms_linear_forwards] pb-[34px] opacity-100 rounded-t-[10px] ${heightStyle}`}
      >
        <div className="flex items-end justify-center h-[15px]">
          <div className="w-16 h-[5px] rounded-sm bg-gray700"></div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
