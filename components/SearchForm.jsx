import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchForm = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="mb-b4">
      <Input type="text" placeholder="Search for papers ..." className="mb-4" />
      <div className="flex space-x-2 mb-2">
        <Button
          onClick={() => setCategory("Core Engineering")}
          variant={category == "Core Engineering" ? "default" : "outline"}
        >
          Core Engineering
        </Button>
        <Button
          onClick={() => setCategory("AI/ML")}
          variant={category == "AI/ML" ? "default" : "outline"}
        >
          AI/ML
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
