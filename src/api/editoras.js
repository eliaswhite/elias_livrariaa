import axios from "axios";
export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://livros-elias.herokuapp.com/editoras");
    return response.data;
  }
  async buscarEditora(id) {
    const response = await axios.get(`https://livros-elias.herokuapp.com/editoras/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "https://livros-elias.herokuapp.com/editoras",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`https://livros-elias.herokuapp.com/editoras/${id}`);
    return response.data;
  }
}