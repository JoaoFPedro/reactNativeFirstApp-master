import axios from "axios";

interface Game {
    id: number;
    nome: string;
    plataforma: string;   
    imagem: string;
  }


const getGames = async (): Promise<Game[]> => {
    const response = await axios.get('http://192.168.0.11:3000/api/games'); 
    return response.data;
  };
  

 
export default getGames;
export type { Game };
