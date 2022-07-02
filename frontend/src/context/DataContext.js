import React, {useState} from 'react';

const DataContext = React.createContext();

const DATA = [
    {
      id: 1,
      userId: 1,
      title: "Sword Art Online",
      chaptersCount: 24,
      comment: "Empieza bien, pero después del capítulo 10, decae mucho",
      category: "anime",
    },
    {
      id: 2,
      userId: 1,
      title: "Black Clover",
      chaptersCount: 170,
      comment: "Shonen de peleas que está piola pero tarda en arrancar",
      category: "anime",
    },
    {
      id: 3,
      userId: 1,
      title: "SpyXFamily",
      chaptersCount: 12,
      comment: "Slice of life muy bueno y divertido",
      category: "anime",
    },
  
    {
      id: 4,
      userId: 1,
      title: "Peaky Blinders",
      chaptersCount: 36,
      comment: "Muy picante de principio a fin",
      category: "serie",
    },
    {
      id: 5,
      userId: 1,
      title: "Vikings",
      chaptersCount: 89,
      comment: "Aguante Ragnar lcdsm, a pedazos a partir de la temporada 4",
      category: "serie",
    },
    {
      id: 6,
      userId: 1,
      title: "Breaking Bad",
      chaptersCount: 62,
      comment: "VAMOS A HACER META",
      category: "serie",
    },
  
    {
      id: 7,
      userId: 1,
      title: "El Show de Truman",
      director: "Peter Weir",
      duration: 103,
      comment: "Tremendo plot twist",
      category: "pelicula",
    },
    {
      id: 8,
      userId: 1,
      title: "Gangster Americano",
      director: "Ridley Scott",
      duration: 176,
      comment: "Peliculón de chill",
      category: "pelicula",
    },
    {
      id: 9,
      userId: 1,
      title: "El Señor de los Anillos: El Retorno del Rey",
      director: "Peter Jackson",
      duration: 201,
      comment: "La única tercera pelicula mejor que las anteriores",
      category: "pelicula",
    },
    {
      id: 10,
      userId: 1,
      title: "Berserk",
      chaptersCount: 364,
      comment: "Obra maestra, de los mejores mangas que existen.",
      category: "manga",
    },
    {
      id: 11,
      userId: 1,
      title: "Magi",
      chaptersCount: 369,
      comment:
        "Shonen de aventura, muy creativo pero con un final controversial.",
      category: "manga",
    },
    {
      id: 12,
      userId: 1,
      title: "Dragon Ball",
      chaptersCount: 520,
      comment: "Clasico de clasicos, goku le gana.",
      category: "manga",
    },
  ];
export function DataContextProvider({children}){
    const [data, setData] = useState(DATA)
    return (
        <DataContext.Provider value={{ data, setData }}>
          {children}
        </DataContext.Provider>
      );
}

export default DataContext;