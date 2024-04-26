import { IconButton, Input } from "@mui/joy";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 3) {
      navigate({
        search: (prev) => ({ ...prev, searchFor: searchQuery }),
      });
    }
  }, [searchQuery, navigate]);
  return (
    <Input
      placeholder="Search..."
      size="lg"
      endDecorator={<IconButton>🔎</IconButton>}
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
    />
  );
}
