# PODCAST MANAGER

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios podcasts separados por categorias.

### Domínio
Podcast feitos em vídeos.

### Features
- Listar os episódios dos podcasts em sessões de categorias:
   - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast.

---

## Como
- Listar os episódios podcasts em sessões de categorias.

### Como vou implementar:
Vou retornar em uma API REST(json) o nome podcast, nome do episódio, ID do vídeo, imagem de capa, link e as categorias.

``` js
[{
    podcastName: "Flow",
    episode: "CBUM - FLOW # 319",
    videoId: "pQSuQmVfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmVfS30",
    link: "www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"]
}]

```