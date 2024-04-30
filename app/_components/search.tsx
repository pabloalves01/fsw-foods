import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
const Search = () => {
    return (
        <div className="flex gap-2">
            <Input className='border-none' placeholder="Buscar Restaurantes" />
            <Button size='icon'>
                <SearchIcon size={18} />
            </Button>
        </div>
    );
}

export default Search;