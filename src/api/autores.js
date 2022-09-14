import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://livros-elias.herokuapp.com/autores");
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://livros-elias.herokuapp.com/autores/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post("https://livros-elias.herokuapp.com/autores", autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livros-elias.herokuapp.com/autores/${id}`);
    return response.data;
  }
}