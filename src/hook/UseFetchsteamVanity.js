import { useEffect, useState } from "react";
import { getSteamId } from "../helper/SteamAPIvanityToId";

export const useFetchId = (vanityName) => {
    const [steamId, setSteamId] = useState([]);


    
        const getId = async () =>  {
            try{
                const [newSteamId ] = await Promise.all([
                    getSteamId(vanityName),
    
                  ]);
              
                  setSteamId(newSteamId);
    
                } catch (error) {
                  // Manejar cualquier error que ocurra durante la obtención de los datos
                  console.error(error);
                } 
            }
    
    
        useEffect(() => {
            getId();
        }, []);
        return {steamId}
    }


