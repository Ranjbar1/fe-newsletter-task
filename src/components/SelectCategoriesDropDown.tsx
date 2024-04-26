import { Box, Chip, Option, Select } from "@mui/joy";
import { useNavigate } from "@tanstack/react-router";
import { categoryList } from "../core";

export default function SelectCategoriesDropDown() {
  const navigate = useNavigate();
  function handleSelectCategory(
    _: React.SyntheticEvent | null,
    newValue: Array<string> | null
  ) {
    navigate({
      search: (prev) => ({ ...prev, categoryList: newValue }),
    });
  }
  return (
    <Select
      size="lg"
      multiple
      placeholder="Select Categories..."
      onChange={handleSelectCategory}
      defaultValue={categoryList as any}
      renderValue={(selected) => (
        <Box sx={{ display: "flex", gap: "0.25rem" }}>
          {selected.map((selectedOption) => (
            <Chip variant="soft" color="primary">
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
    >
      {categoryList.map((category) => (
        <Option key={category} value={category}>
          {category}
        </Option>
      ))}
    </Select>
  );
}
