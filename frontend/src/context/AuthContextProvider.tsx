import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  import toast from "react-hot-toast";
import AXIOS from "../../apis/api";
import axios from "axios";
  
  interface AuthContextShape {
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean;
  }
  type AuthUserType = {
    _id: string
    username: string;
    email: string;
    fullname: string;
    following: string[];
    followers: string[];
    bio: string;
    link: string;
    profileImage: string;
    coverImage: string;
    updatedAt: string;
  };
  const AuthContext = createContext<AuthContextShape>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: true,
  });

  export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchAuthUser = async () => {
        try {
          const response = await AXIOS.get("/auth/me", {
            withCredentials: true,
          });
          setAuthUser(response.data.user);
        } catch (error: unknown) {
          if(axios.isAxiosError(error)) {
            toast.error(error.message);
          };
        } finally {
          setIsLoading(false);
        }
      };
      fetchAuthUser();
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          authUser,
          isLoading,
          setAuthUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };


  export const useAuthContext = () => {
    return useContext(AuthContext);
  };