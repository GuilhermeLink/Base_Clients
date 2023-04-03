import { createContext, ReactNode, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiFake} from "../../services/api";

interface iSearchProviderProps {
  children: ReactNode;
}
interface iSearchContext {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: iBooks[] | undefined;
  setSearchResults: React.Dispatch<React.SetStateAction<iBooks[] | undefined>>;
  currentBook: iBooks | undefined;
  setTypeModal: React.Dispatch<React.SetStateAction<string[]>>;
  submitSearch: () => void;
  library: iBooks[] | undefined;
}

export interface iBooks {
  id: string;
  volumeInfo: {
    title: string;
    authors: string | undefined;
    description: string;
    imageLinks:
      | {
          thumbnail: string;
        }
      | undefined;
  };
}
interface iBooksArray {
  items: iBooks[];
}
export const SearchContext = createContext<iSearchContext>(
  {} as iSearchContext
);

export const SearchProvider = ({ children }: iSearchProviderProps) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<iBooks[]>();
  const [currentBook, setCurrentBook] = useState<iBooks>();
  const [library, setLibrary] = useState<iBooks[] | undefined>([]);
  const [typeModal, setTypeModal] = useState<string[]>([]);
  const [wishList, setWishList] = useState<iBooks[] | undefined>([]);
  const [recomended, setRecomended] = useState<iBooks[] | undefined>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("@BaseClients:userId");
  const token = localStorage.getItem("@BaseClients:token");

  async function getInfoUserLogin() {
    const { data } = await apiFake.get(`users/${userId}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const livrosUser = data.library;
    const order = livrosUser?.reverse();
    setLibrary(order);
    setWishList(data.wishlist.reverse());
  } 

  useEffect(() => {
    getInfoUserLogin();
    setLoading(false);
  }, [library]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        loading,
        setLoading
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
