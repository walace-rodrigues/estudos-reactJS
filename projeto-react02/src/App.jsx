import "./App.css";
import Header from "./componentes/Header";
import Section from "./componentes/Section";
import ListItem from "./componentes/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelsListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/",
    imageUrl: "/assets/twitch.svg",
    alt: "Imagem do Twitch",
  },
  {
    url: "https://www.instagram.com/walace_rod/",
    imageUrl: "/assets/instagram.svg",
    alt: "Imagem do Insta",
  },
  {
    url: "https://www.youtube.com",
    imageUrl: "/assets/youtube.svg",
    alt: "Imagem do Youtube",
  },
  {
    url: "https://www.x.com",
    imageUrl: "/assets/twitter.svg",
    alt: "Imagem do Twitter",
  },
];

export default function App() {

  return (
    <div className="App">
      {/* Incluir Header Componente aqui*/}
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}

          {/* Incluir ListItem Componente aqui
          <ListItem
            url="https://www.twitch.tv/directory/game/League%20of%20Legends"
            imageUrl="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            alt="Imagem do jogo League of Legends"
          />*/}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que eu nao perco"
          className="channel-list"
        >
          {channelsListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  )
}


