import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BaseTable() {
  const [nome, setNome] = useState("");
  const [posts, setPosts] = useState([]);
  const [direcao, setDirecao] = useState("");
  const [elenco, setElenco] = useState([]);
  const [classificacao, setClassificacao] = useState([]);
  const [id, setId] = useState([]);
  const apiEndPoint = "";

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  //Inserindo o post - const
  const handPost = async () => {
    const post = {
      id: id,
      nome: nome,
      direcao: direcao,
      elenco: elenco,
      classificacao: classificacao,
    };

    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };
  //Atualizando - put
  const handUpdate = async (post) => {
    console.log(post.id);
    post.nome = nome;
    post.direcao = direcao;
    post.elenco = elenco;
    post.classificacao = classificacao;
    await axios.put(apiEndPoint + "/" + post.id);
    const postClone = [...posts];
    const index = postClone.indexOf(post);
    postClone[index] = { ...post };
    setPosts(postClone);
  };
  //deletar - delete
  const handDelete = async (post) => {
    console.log(post);
    await axios.delete(apiEndPoint + "/" + post.id);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handlerNome = (e) => {
    setNome(e.target.value);
  };
  const handlerDirecao = (e) => {
    setDirecao(e.target.value);
  };
  const handlerElenco = (e) => {
    setElenco(e.target.value);
  };
  const handlerClassificacao = (e) => {
    setClassificacao(e.target.value);
  };
  const handlerID = (e) => {
    setId(e.target.value);
  };

  return (
    <div className="container">
      <label><h5>ID</h5></label>
      <input onChange={(e) => handlerID(e)} />
      <label><h5>Nome</h5></label>
      <input onChange={(e) => handlerNome(e)} />
      <label><h5>Direcao</h5></label>
      <input onChange={(e) => handlerDirecao(e)} />
      <label><h5>Elenco</h5></label>
      <input onChange={(e) => handlerElenco(e)} />
      <br />
      <label><h5>Classificacao</h5></label>
      <input onChange={(e) => handlerClassificacao(e)} />
      <Button style={{"margin-left": "5px","margin-bottom": "5px"}}  variant="secondary" onClick={handPost} >
        Adicionar
      </Button>
      <Table striped responsive bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Direcao</th>
            <th>Elenco</th>
            <th>Classificacao</th>
            <th>Atualização</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td> {post.id} </td>
              <td> {post.nome} </td>
              <td> {post.direcao} </td>
              <td> {post.elenco} </td>
              <td> {post.classificacao} </td>
              <td>
                <Button responsive variant="success"
                  onClick={() => handUpdate(post)}
            
                >
                  Update
                </Button>
              </td>
              <td>
                <Button variant="warning"
                  onClick={() => handDelete(post)}
                  
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}