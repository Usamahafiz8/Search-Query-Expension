import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import { top100Films } from "../content/seachResultRelated";

export const QuerySearch: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  console.log(suggestions);

  const handleSelectionChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setSelectedItem(value);
    if (value) {
      const selectedFilm = top100Films.find((film) => film.docstring === value);
      if (selectedFilm) {
        setCode(selectedFilm.code);
      }
      else{
        setCode('')
      }

      setPreviousSearches((prevSearches) => [...prevSearches, value]);
    }
  };

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    const input = value.toLowerCase();
    const filteredSuggestions = top100Films
      .map((option) => option.docstring)
      .filter((docstring) => docstring.toLowerCase().includes(input));
    setSuggestions(filteredSuggestions);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* search aera */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={suggestions}
            onChange={handleSelectionChange}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search your Query"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div>
      </div>
      {/* show previos search */}
      <div>
      {selectedItem && (
        <>
            <b>History</b>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "4px",
              }}
              >
              {previousSearches.map((search, index) => (
                <>
                  <p
                    key={index}
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "16px",
                      padding: 8,
                      color: "green",
                      margin: 3,
                    }}
                  >
                    {search},
                  </p>
                </>
              ))}
            </div>
          </>
        ) }
      </div>
      {/* show related code */}
      <div>
        {code && (
          <>
            <b>Code:</b>
            <pre>{code}</pre>
          </>
        )}
      </div>
      {/* {selectedItem && (
        <>
          <p>Selected Item: &nbsp; {selectedItem}</p>
          {code && (
            <>
              <p>Code:</p>
              <pre>{code}</pre>
            </>
          )}
        </>
      ) } */}

    </div>
  );
};
