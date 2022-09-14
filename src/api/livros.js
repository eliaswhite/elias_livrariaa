import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://livros-elias.herokuapp.com/livros");
    return response.data;
  }
  async buscarLivro(id) {
    const response = await axios.get(`https://livros-elias.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("https://livros-elias.herokuapp.com/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://livros-elias.herokuapp.com/livros/${id}`);
    return response.data;
  }

}