// import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete, {
//   AutocompleteInputChangeReason,
// } from "@mui/material/Autocomplete";
// import { top100Films } from "../content/seachResultRelated";

// export const QuerySearch: React.FC = () => {
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);
//   const [code, setCode] = useState<string | null>(null);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [previousSearches, setPreviousSearches] = useState<string[]>([]);

//   console.log(suggestions);

//   const handleSelectionChange = (
//     event: React.ChangeEvent<{}>,
//     value: string | null
//   ) => {
//     setSelectedItem(value);
//     if (value) {
//       const selectedFilm = top100Films.find((film) => film.docstring === value);
//       if (selectedFilm) {
//         setCode(selectedFilm.code);
//       } else {
//         setCode("");
//       }

//       setPreviousSearches((prevSearches) => [...prevSearches, value]);
//     }
//   };

//   const handleInputChange = (
//     event: React.SyntheticEvent<Element, Event>,
//     value: string,
//     reason: AutocompleteInputChangeReason
//   ) => {
//     const input = value.toLowerCase();
//     const filteredResults = top100Films.filter((film) =>
//       film.docstring.toLowerCase().includes(input)
//     );
//     const matchingStrings = filteredResults.map((film) => film.docstring);
//     const matchingCode = filteredResults.map((film) => film.code);
//     setSuggestions(matchingStrings);
//     setCode(matchingCode.join("\n")); // Combine relevant code into a single paragraph
//   };

// // setting a log of the json file
// const [data, setData] = useState<any[]>([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("bscs-2019-2023\src\content\test1.jsonl");
//       const content = await response.text();
//       const lines = content.split("\n");
//       const dataArray = lines.map((line) => {
//         const jsonData = JSON.parse(line);
//         console.log(jsonData, 'file'); // Log the parsed JSON object
//         return jsonData;
//       });
//       setData(dataArray);
//     } catch (error) {
//       console.error("Error fetching JSONL file:", error);
//     }
//   };
// const test = "bscs-2019-2023\src\content\test1.jsonl"
//   console.log('----',  test);

//   fetchData();
// }, []);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//       {/* search area */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ width: "50%" }}>
//           <Autocomplete
//             freeSolo
//             id="free-solo-2-demo"
//             disableClearable
//             options={suggestions}
//             onChange={handleSelectionChange}
//             onInputChange={handleInputChange}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Search your Query"
//                 InputProps={{
//                   ...params.InputProps,
//                   type: "search",
//                 }}
//               />
//             )}
//           />
//         </div>
//       </div>
//       {/* show previous search */}
//       <div>
//         {selectedItem && (
//           <>
//             <b>History</b>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 gap: "4px",
//               }}
//             >
//               {previousSearches.map((search, index) => (
//                 <p
//                   key={index}
//                   style={{
//                     backgroundColor: "lightgreen",
//                     borderRadius: "16px",
//                     padding: 8,
//                     color: "green",
//                     margin: 3,
//                   }}
//                 >
//                   {search},
//                 </p>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* show matching strings, URL, and code */}
//       {code && (
//         <div>
//           <b>Matching Strings, URL, and Code:</b>
//           {suggestions.map((matchingString, index) => (
//             <div key={index}>
//               <p>{matchingString}</p>
//               <a href={top100Films[index].url}>{top100Films[index].url}</a>
//               <pre>{code[index]}</pre>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete, {
//   AutocompleteInputChangeReason,
// } from "@mui/material/Autocomplete";
// import { top100Films } from "../content/seachResultRelated";

// export const QuerySearch: React.FC = () => {
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);
//   const [code, setCode] = useState<string | undefined>(undefined);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [previousSearches, setPreviousSearches] = useState<string[]>([]);

//   console.log(suggestions);

//   const handleSelectionChange = (
//     event: React.ChangeEvent<{}>,
//     value: string | null
//   ) => {
//     setSelectedItem(value);
//     if (value) {
//       const selectedFilm = top100Films.find((film : any) => film.docstring === value);
//       if (selectedFilm) {
//         setCode(selectedFilm.code);
//       } else {
//         setCode("");
//       }

//       setPreviousSearches((prevSearches) => [...prevSearches, value]);
//     } else {
//       setCode(undefined);
//     }
//   };

//   const handleInputChange = (
//     event: React.SyntheticEvent<Element, Event>,
//     value: string,
//     reason: AutocompleteInputChangeReason
//   ) => {
//     const input = value.toLowerCase();
//     const filteredSuggestions: any= top100Films
//       .map((option: any) => option.docstring)
//       .filter((docstring) => docstring && docstring.toLowerCase().includes(input));
//     setSuggestions(filteredSuggestions);
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//       {/* search area */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ width: "50%" }}>
//           <Autocomplete
//             freeSolo
//             id="free-solo-2-demo"
//             disableClearable
//             options={suggestions}
//             onChange={handleSelectionChange}
//             onInputChange={handleInputChange}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Search your Query"
//                 InputProps={{
//                   ...params.InputProps,
//                   type: "search",
//                 }}
//               />
//             )}
//           />
//         </div>
//       </div>
//       {/* show previous searches */}
//       <div>
//         {selectedItem && (
//           <>
//             <b>History</b>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 gap: "4px",
//               }}
//             >
//               {previousSearches.map((search, index) => (
//                 <p
//                   key={index}
//                   style={{
//                     backgroundColor: "lightgreen",
//                     borderRadius: "16px",
//                     padding: 8,
//                     color: "green",
//                     margin: 3,
//                   }}
//                 >
//                   {search}
//                 </p>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//       {/* show related code */}
//       <div>
//         {code && (
//           <>
//             <b>Code:</b>
//             <pre>{code}</pre>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import { top100Films } from "../content/seachResultRelated";
import Typography from "@mui/material/Typography";

export const QuerySearch: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [code, setCode] = useState<string[]>([]); // Changed to string[]
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  console.log(suggestions);

  // const handleSelectionChange = (
  //   event: React.ChangeEvent<{}>,
  //   value: string | null
  // ) => {
  //   setSelectedItem(value);
  //   if (value) {
  //     const selectedFilms = top100Films.filter((film) => film.docstring === value);
  //     if (selectedFilms.length > 0) {
  //       const selectedCodes = selectedFilms.map((film) => film.code);
  //       // setCode(selectedCodes.join("\n")); // Combine relevant code into a single paragraph
  //     } else {
  //       setCode("");
  //     }

  //     setPreviousSearches((prevSearches) => [...prevSearches, value]);
  //   } else {
  //     setCode(null);
  //   }
  // };
  const handleSelectionChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setSelectedItem(value);
    if (value) {
      const selectedFilms = top100Films.filter(
        (film) => film.docstring === value
      );
      if (selectedFilms.length > 0) {
        const selectedCodes = selectedFilms.map((film) => film.code);
        setCode(selectedCodes); // Update code state with an array of codes
      } else {
        setCode([]);
      }

      setPreviousSearches((prevSearches) => [...prevSearches, value]);
    } else {
      setCode([]);
    }
  };
  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    const input = value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    if (input === "") {
      // If input is empty, clear the suggestions and code state
      setSuggestions([]);
      setCode([]);
      return;
    }

    const filteredResults = top100Films.filter((film) =>
      film.docstring.toLowerCase().includes(input)
    );
    const matchingStrings = filteredResults.map((film) => film.docstring);
    const matchingCodes = filteredResults.map((film) => film.code);
    setSuggestions(matchingStrings);
    setCode(matchingCodes);
  };

  // setting a log of the json file
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("bscs-2019-2023srccontent\test1.jsonl");
        const content = await response.text();
        const lines = content.split("\n");
        const dataArray = lines.map((line) => {
          const jsonData = JSON.parse(line);
          console.log(jsonData, "file"); // Log the parsed JSON object
          return jsonData;
        });
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching JSONL file:", error);
      }
    };
    const test = "bscs-2019-2023srccontent\test1.jsonl";
    console.log("----", test);

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
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
              style={{color:"red"}}
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
      {/* <div>
        {selectedItem && (
          <>
           <b style={{fontSize:"28px"}}>History</b>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection:"row",
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
      </div> */}

      {/* show matching strings, URL, and code */}
      <br />
      <br />
      <br />
      <br />
      {code.length > 0 && ( // Check if code array is not empty
        <div>
          <b style={{ fontSize: "24px" }}>Search Results For :</b>
          {suggestions.map((matchingString, index) => (
            <div key={index}>
              <br />
              <div
                style={{
                  border: "2px solid green",
                  padding: "16px",
                  borderRadius: "16px",
                }}
              >
                <b style={{ fontSize: "16px" }}>
                  <b>{matchingString}</b>
                </b>
                <pre>{code[index]}</pre>
                <br />
                <b>
                  <a href={top100Films[index].url}>{top100Films[index].url}</a>
                </b>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
