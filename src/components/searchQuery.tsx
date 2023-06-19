import React, { useEffect, useState } from "react";
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
      } else {
        setCode("");
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
    const filteredResults = top100Films.filter((film) =>
      film.docstring.toLowerCase().includes(input)
    );
    const matchingStrings = filteredResults.map((film) => film.docstring);
    const matchingCode = filteredResults.map((film) => film.code);
    setSuggestions(matchingStrings);
    setCode(matchingCode.join("\n")); // Combine relevant code into a single paragraph
  };



// setting a log of the json file 
const [data, setData] = useState<any[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("bscs-2019-2023\src\content\test1.jsonl");
      const content = await response.text();
      const lines = content.split("\n");
      const dataArray = lines.map((line) => {
        const jsonData = JSON.parse(line);
        console.log(jsonData, 'file'); // Log the parsed JSON object
        return jsonData;
      });
      setData(dataArray);
    } catch (error) {
      console.error("Error fetching JSONL file:", error);
    }
  };
const test = "bscs-2019-2023\src\content\test1.jsonl"
  console.log('----',  test);
  
  fetchData();
}, []);




  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* search area */}
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
      {/* show previous search */}
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
              ))}
            </div>
          </>
        )}
      </div>

      {/* show matching strings, URL, and code */}
      {code && (
        <div>
          <b>Matching Strings, URL, and Code:</b>
          {suggestions.map((matchingString, index) => (
            <div key={index}>
              <p>{matchingString}</p>
              <a href={top100Films[index].url}>{top100Films[index].url}</a>
              <pre>{code[index]}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};