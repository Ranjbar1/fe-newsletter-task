import { Box, Chip, Option, Select } from "@mui/joy";
import { useNavigate } from "@tanstack/react-router";
import { sourceList } from "../core";

export default function SelectSourceDropDown() {
  const navigate = useNavigate();
  function handleSelectSource(
    _: React.SyntheticEvent | null,
    newValue: Array<string> | null
  ) {
    navigate({
      search: (prev) => ({ ...prev, sourceList: newValue }),
    });
  }
  return (
    <Select
      multiple
      placeholder="Select Sources"
      onChange={handleSelectSource}
      defaultValue={sourceList as any}
      renderValue={(selected) => (
        <Box sx={{ display: "flex", gap: "0.25rem" }}>
          {selected.map((selectedOption) => (
            <Chip key={selectedOption.id} variant="soft" color="primary">
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      size="lg"
      sx={{ maxWidth: "10rem" }}
    >
      {sourceList.map((source) => (
        <Option key={source} value={source}>
          {source}
        </Option>
      ))}
    </Select>
  );
}
