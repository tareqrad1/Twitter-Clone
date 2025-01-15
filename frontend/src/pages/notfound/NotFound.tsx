import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { ArrowLeft } from "lucide-react"
const NotFound: React.FC = (): JSX.Element => {
    const Navigate = useNavigate();
  return (
    <div className="container px-2 sm:px-0 flex flex-col h-[100vh] w-full items-center justify-center space-y-6 select-none text-center">
        <h3 className="text-6xl font-bold hover:text-6xl hover:sm:text-7xl hover:transition-all">404</h3>
        <h1 className="text-grayWithOpacity">Looks like you've ventured into the unknown digital realm.</h1>
        <Button onClick={() => Navigate('/')} className="bg-white text-black hover:bg-slate-100 flex items-center text-sm">< ArrowLeft className="animate-bounce" />Back</Button>
    </div>
  )
}

export default NotFound