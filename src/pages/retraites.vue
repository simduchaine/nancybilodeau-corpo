<template>
  <Layout>
    <div style="margin-top:-3rem">
      <div
        class="parallax-effect top hero is-medium is-dark"
        style="background-image: url('/img/Retraite.png'); "
      >
        <div class="hero-body">
          <h1 class="has-text-centered title is-family-primary is-size-2 ">
            Quand le ressourcement prend soin des affaires
          </h1>
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <div>
            <p>
              La santé et l’équilibre d’une compagnie sont directement reliés à
              ceux de ses dirigeants. Des dirigeants en santé et bien équilibrés
              arrivent à créer des milieux de travail agréables et performants.
            </p>
            <p>
              À la vitesse d’aujourd’hui, les dirigeants manquent souvent de
              temps pour prendre soin d’eux. Je suis fière d’être pionnière dans
              l’offre de retraite exécutive où l’on combine santé, mieux-être et
              affaires!
            </p>
            <g-image
              src="../../uploads/moins-de-40.png"
              style="padding-bottom:2em"
            />

            <p>
              Riche de mon expérience de fondatrice et gestionnaire du Centre
              Holistique Om Prana, je combine maintenant mes expériences
              d’entrepreneure, de consultante et de MBA à celle de développement
              et de déploiement de retraites de méditation, de réflexion, de
              yoga, d’alimentation saine, de cure au jus, de cohérence cardiaque
              et d’autres méthodes de ressourcement pour développer des
              retraites sur mesure pour vos équipes.
            </p>
          </div>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/duree2.png'); "
      >
        <div class="hero-body has-text-centered">
          <h2 class=" title is-family-primary is-size-2 ">
            Durée 2 à 7 jours
          </h2>
          <h3 class="title">Selon vos besoins et votre budget</h3>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            J’ai de nombreux outils tant du côté des affaires que du mieux-être.
            En déterminant vos objectifs, le nombre de participants et la durée
            désirée (2 à 7 jours), je peux concevoir quelque chose complètement
            sur mesure pour une expérience unique qui permettra à vos dirigeants
            de relaxer, de « recharger leurs batteries » et de déployer le
            meilleur d’eux-mêmes dans la résolution des points d’affaires à
            l’horaire.
          </p>
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Les sujets d’affaires régulièrement abordés sont :
          </p>
          <VueSlickCarousel
            :dots="false"
            :arrows="true"
            :autoplay="true"
            :autoplaySpeed="4000"
            :speed="2000"
            :infinite="true"
            :slidesToShow="3"
            :slidesToScroll="3"
          >
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Travail-d-equipe.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Performance.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Gestion-de-conflit.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Planification.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Priorisation.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Communications.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Transformation.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/5-dysfunctions.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Restructuration.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Reorganisation.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Gestion-de-conflit.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Changement.png" />
                </figure>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div class="section ">
        <div class="container">
          <p>
            Les activités de mieux-être régulièrement incorporées sont :
          </p>
          <g-image src="../../uploads/activites-mieux-etre.png" />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Les retraites ont lieu dans un endroit bien sélectionné propice au
            ressourcement. Mes endroits favoris au Québec sont :
          </p>
          <div class="columns">
            <div class="column">
              <div class="card">
                <a href="https://monastere.ca/" target="_blank">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../uploads/monastere-augustines.png" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <a href="https://www.spa-eastman.com/" target="_blank">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../uploads/spa-eastman.png" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <a href="https://www.lecouventvalmorin.ca/" target="_blank">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../uploads/couvent-val-morin.png" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <a href="https://kio-o.ca/" target="_blank">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../uploads/CentreKio.png" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p>
            Je peux aussi me déplacer à l’international pour faciliter votre
            retraite à l’endroit de votre choix. Je peux travailler en étroite
            collaboration avec une agence de voyages pour cibler le meilleur
            forfait pour votre groupe.
          </p>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/retraite-repas.png'); "
      >
        <div class="hero-body has-text-centered">
          <h2 class=" title is-family-primary is-size-2">
            Repas santé
          </h2>
          <h3 class="title">Simple ou gastronomique, planifié avec soins</h3>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            Je m’occupe de tous les détails jusqu’aux repas. Les repas servis
            sont de haute qualité, préférablement biologiques et sans alcool
            pour favoriser la présence, l’énergie, le repos et la clarté
            d’esprit. La retraite se veut une expérience complète de
            ressourcement. C’est une nouvelle façon de travailler en prenant
            soin de son personnel et de l’entreprise.
          </p>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/bienfaits.png'); "
      >
        <div class="hero-body">
          <h2 class="has-text-centered title is-family-primary is-size-2">
            Les bienfaits
          </h2>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            Il peut être difficile au quotidien, et tout particulièrement en
            télétravail, de développer l’esprit d’équipe, montrer votre
            appréciation et renforcer la culture d’entreprise souhaitée. Un
            changement de décor permet de briser la routine et offre une
            occasion exceptionnelle de se concentrer sur des sujets donnés et de
            voir les choses différemment tout en investissant dans la santé et
            le mieux-être de vos employés. Voici les bénéfices généralement
            recherchés :
          </p>
          <ul>
            <li>Renforcement de l’esprit d’équipe</li>
            <li>Amélioration des communications</li>
            <li>Résolution de conflits</li>
            <li>Mobilisation vers un ou des buts communs</li>
            <li>Augmentation de la créativité</li>
            <li>Gestion mature de l’égo</li>
            <li>Appréciation de la direction démontrée de façon tangible</li>
            <li>
              Personnel inspiré à prendre soin d’eux pour offrir le meilleur
              d’eux même
            </li>
            <li>Amélioration du sentiment d’appartenance à la compagnie</li>
            <li>
              Augmentation de la capacité d’adaptation dans d’un monde en
              ébullition
            </li>
            <li>Correction des dysfonctions de l’équipe</li>
            <li>
              Rétablissement d’un climat de travail agréable et en confiance
            </li>
            <li>Transformation réelle des leaders et de la culture</li>
            <li>BOOST de performance</li>
            <li>RESET!</li>
          </ul>
          <p>
            On peut accomplir plus en deux jours bien structurés qu’en des
            heures de meeting au bureau ou chacun continue d’opérer selon les
            mêmes principes et paradigmes qui ont mené aux résultats actuels.
          </p>
          <h3 class="title is-size-6">Exemple de Retraite Exécutive</h3>
          <ul>
            <li>Client : Kerry Usine de Ste-Claire</li>
            <li>Nombre de participants : 10 participants</li>
            <li>Durée : 2 nuits, 2 jours</li>
            <li>Lieu : Monastère des Augustines</li>
            <li>Thème : Team Upgrade!</li>
            <li>
              Repas : Menu santé pré sélectionné préparé et servi par le bistro
              du Monastère des Augustines
            </li>
            <li>
              Objectifs :
              <ul>
                <li>Communiquer l’appréciation sincère pour tous et chacun.</li>
                <li>Reconnaître la réalité du changement continue.</li>
                <li>
                  Prendre un moment d’arrêt et de réflexion sur les essentiels
                  au succès de l’équipe.
                </li>
                <li>
                  Aligner le portefeuille de projet correctement avec les
                  objectifs annuels.
                </li>
                <li>
                  Améliorer la communication et les échanges entre les membres
                  de l’équipe.
                </li>
                <li>
                  Trouver des moyens efficaces pour rester aligné tout au cours
                  de l’année.
                </li>
                <li>
                  Développer le sens d’appartenance à l’usine au-delà des lignes
                  de supervision.
                </li>
                <li>
                  Apprendre à communiquer de façon authentique, respectueuse et
                  axé sur l’avancement et la résolution des problèmes.
                </li>
                <li>Améliorer la gestion de l’égo.</li>
                <li>Vaincre les 5 dysfonctions d’une équipe.</li>
                <li>Vivre un bon moment d’appréciation et d’ouverture.</li>
              </ul>
            </li>
          </ul>
          <h3 class="title is-size-5">Références</h3>
          <hr />
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <g-image
                  class="is-rounded"
                  src="../../uploads/Jimmy.png"
                ></g-image>
              </figure>
            </div>

            <div class="media-content">
              <div>
                <p>
                  Ayant collaboré et travaillé avec Nancy à plusieurs occasions
                  dans le passé, je n’avais aucun doute que notre expérience
                  serait gagnante, et ce fût au-delà de mes attentes et celles
                  de mon équipe.
                </p>
                <p>
                  Lors d’une activité récente de retraite et team building avec
                  mon équipe de gestionnaires, nous étions en quête d’une
                  expérience qui nous permettrait à la fois de nous recentrer
                  afin de travailler plus efficacement, mais aussi une occasion
                  pour prendre soins de nous tous, l’humain, derrière chaque
                  gestionnaire, ce qui ne se fait malheureusement pas assez
                  souvent en entreprise.
                </p>
                <p>
                  C’est une activité très hors du commun, qui demande de
                  l’audace et qui sort du cadre ‘’normal’’ de formation/cadre de
                  gestion courante, mais je vous le dis, c’est le meilleur
                  investissement que vous pouvez faire, prêtez-vous au jeu et à
                  l’expérience.
                </p>
                <p>
                  Nancy a définitivement fait de nous une équipe renouvelée,
                  soudée plus que jamais, ce qui a contribué a augmenté
                  significativement l’efficacité globale de l’équipe. Le mix
                  entre l’approche plus conventionnelle de fonctionnement d’une
                  équipe (Lancioni, les 5 dysfonctions d’une équipe) enseigné,
                  et les techniques de cohérence appliquées et maîtrisées par
                  Nancy ont résulté en un cocktail gagnant. Le changement est
                  radical, et les résultats sont tangibles!
                </p>
                <p>
                  Merci Nancy, ce fût une de mes meilleures expériences
                  professionnelles jusqu’à maintenant, et je tiens à dire qu’en
                  tant que dirigeant d’entreprise, c’est quelque chose que nous
                  devrions tous prendre le temps de faire, plus souvent! Osez!
                </p>
              </div>
              <h2 class="title is-size-6 is-family-primary">
                Jimmy Chabot
                <span>, Kerry</span>
              </h2>
            </div>
          </div>
          <hr />
          <g-image
            src="../../uploads/seulement-42-pourcent.png"
            style="padding-top: 2em"
          />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Il est possible d’incorporer des enseignements sur le mieux-être, la
            croissance personnelle et même la gestion dans la conception de la
            retraite. Les sujets souvent abordés sont :
          </p>
          <VueSlickCarousel
            :dots="false"
            :arrows="true"
            :autoplay="true"
            :autoplaySpeed="4000"
            :speed="2000"
            :infinite="true"
            :slidesToShow="3"
            :slidesToScroll="3"
          >
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/pensees.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/emotions.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Stress-icone.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Alimentation.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Exercice.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/Sommeil.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/environnement.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/relations.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/resilience.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../uploads/energie.png" />
                </figure>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/grand-maitre.png'); "
      >
        <div class="hero-body has-text-centered ">
          <h2 class="title is-family-primary is-size-2">
            Ralentir et trouver l'équilibre
          </h2>
          <h3 class="title">Pour avancer plus vite</h3>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            Offrez l’enseignement des grands maîtres et des plus belles
            traditions bien enveloppés dans le contexte des affaires. Permettez
            à vos employés d’apprendre des attitudes et des comportements
            bienfaisants et bénéfiques pour eux, leur famille, leurs employés et
            leurs collègues. Tous les principes et outils peuvent aussi être
            accompagnés des données les plus à jour en termes d’études et de
            recherches scientifiques disponibles.
          </p>
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Pour plus d’informations sur les autres sujets disponibles, vous
            pouvez consulter
          </p>
          <div class="columns">
            <div class="column">
              <g-link to="/formations">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image
                        src="../../uploads/Formation-Corporative-2.png"
                      />
                    </figure>
                  </div>
                </div>
              </g-link>
            </div>
            <div class="column">
              <g-link to="/conference">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image
                        src="../../uploads/conferences-corporatives.png"
                      />
                    </figure>
                  </div>
                </div>
              </g-link>
            </div>
            <div class="column">
              <a href="https://coaching.nancybilodeau.com/formations">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../uploads/formations-individu.png" />
                    </figure>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <h2 class="title is-size-6">
            Vous aimeriez avoir plus d’information ou une soumission?
          </h2>

          <a class="button" href="/contact" target="_self">Contactez-moi</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Retraites",
  },
  components: { VueSlickCarousel },
};
</script>

<style scoped lang="scss">
.top {
  &::before {
    background-color: rgba(255, 255, 255, 0.25);
  }
}
.parallax-effect {
  position: relative;
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
}

.title {
  color: #004369;
  position: relative;
}
.slick-slider {
  .card {
    box-shadow: none;
  }
}
.slick-prev,
.slick-next {
  &::before {
    color: #363636;
  }
}
.slick-prev {
  left: -60px;
}
.slick-next {
  right: -60px;
}
</style>
