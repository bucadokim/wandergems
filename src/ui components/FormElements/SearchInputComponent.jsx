import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

const SearchInputComponent = () => {
  return (
    <Field orientation="horizontal" className="w-50">
      <InputGroup>
        <InputGroupInput placeholder="Where do you want to explore?" />
        <InputGroupAddon align="inline-end">
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};

export default SearchInputComponent;
