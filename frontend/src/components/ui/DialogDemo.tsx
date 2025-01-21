import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog"
import { MessageCircle, Trash2  } from 'lucide-react'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex group">
        <MessageCircle className="className='w-4 h-4  text-slate-500 group-hover:text-sky-400" />
          <span className='text-sm text-slate-500 group-hover:text-sky-400'>12</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <div className="grid gap-4 pt-3 w-full">
          <div className="">
            <textarea
											className='textarea w-full h-[100px] p-1 rounded text-md resize-none border focus:outline-none bg-transparent border-gray-800'
											placeholder='Add a comment...'
										/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="hover:bg-white hover:text-black">Save Comment</Button>
        </DialogFooter>

        {/* all comments */}
        <div className="flex justify-center items-center gap-3 border-t border-[#333] border-solid py-2">
          <div className="user">
            <img src="../../../public/avatars/girl1.png" alt="name" className="h-10 rounded-full" />
            <p className="text-[13px] text-primaryColor text-center">username</p>
          </div>
          <div className="All-Comments bg-stone-900 w-full p-4">
              <h1>Hello im medo</h1>
          </div>
          <Trash2 className="cursor-pointer hover:fill-red-700" />
        </div>
      </DialogContent>
    </Dialog>
  )
}