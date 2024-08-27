import * as React from 'react'
import Card from './card'

interface DialogProps extends React.PropsWithChildren {
  isOpen: boolean
  close: () => void
  title: string
}

export default function Dialog({ isOpen, close, title, children }: DialogProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal()
    } else if (!isOpen && dialogRef.current) {
      dialogRef.current.close()
    }
  }, [isOpen])

  return (
    <dialog className="bg-transparent" ref={dialogRef}>
      {/* Allow clicking outside the dialog to close it */}
      <div className="fixed inset-0" onClick={() => close()} />
      <div className="min-w-96 bg-white rounded-md shadow border z-50 relative">
        <div className="bg-neutral-50 p-4 rounded-t-lg  shadow-md">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="p-4 bg-white rounded-b-lg shadow-md">{children}</div>
      </div>
    </dialog>
  )
}
