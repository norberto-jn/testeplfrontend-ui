import { Bounce, toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ToastTypeEnum from './enums/ToastTypeEnum'

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  style: { backgroundColor: '#343B41' },
  transition: Bounce,
}

type ToastMessage = {
  method: (message: string, options?: ToastOptions) => void
}

const toastMessages: Record<ToastTypeEnum, ToastMessage> = {
  [ToastTypeEnum.SUCCESS]: {
    method: toast.success,
  },
  [ToastTypeEnum.ERROR]: {
    method: toast.error,
  },
}

const toastContainerCP = (type: ToastTypeEnum, message: string) => {
  const toastType = toastMessages[type]

  if (toastType)
    toastType.method(message, toastConfig)
  else
    console.warn(`Tipo de toast não suportado: ${type}`)

}

export default toastContainerCP