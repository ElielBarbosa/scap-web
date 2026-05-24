import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

// eslint-disable-next-line react-refresh/only-export-components
export const ObjectContext = createContext();

export const ObjectStorage = ({ children }) => {
  const [objects, setObjects] = useState([]);
  const [objectsRecentlyAdded, setObjectsRecentlyAdded] = useState([]);

  async function getObjectsRecentlyAdded(campusId) {
    try {
      const response = await api.get(`/object/campus/${campusId}`);
      //console.log(response.data);
      setObjectsRecentlyAdded(response.data);
      //console.log(objectsRecentlyAdded);
    } catch (error) {
      console.error("Error fetching recently added objects:", error);
    }
  }

  console.log(objectsRecentlyAdded);

  return (
    <ObjectContext.Provider
      value={{
        objects,
        setObjects,
        objectsRecentlyAdded,
        getObjectsRecentlyAdded,
      }}
    >
      {children}
    </ObjectContext.Provider>
  );
};
