<template>
  <English-Layout>
    <div style="margin-top:-3rem">
      <div
        class="parallax-effect top hero is-medium is-dark"
        style="background-image: url('/img/Care_Engl.png'); "
      >
        <!-- <div class="hero-body">
          <h1 class="has-text-centered title is-family-primary is-size-2 ">
            When caring takes care of Business!
          </h1>
        </div> -->
      </div>

      <div class="section">
        <div class="container">
          <g-image src="../../../uploads/RETREAT-Slogan-RGB-ANG-2_bleu.jpg" quality="100" />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <div>
            <p>
              The health and balance of a company is directly linked to the one
              of its managers. Healthy, well-rounded leaders create fun and
              efficient workplaces.
            </p>
            <p>
              At today's speed, leaders often lack the time to take care of
              themselves. I am proud to be a pioneer in the Executive Retreat
              space offering program that combines integrative health
              experience, happiness, wellness and business!
            </p>
            <g-image
              src="../../../uploads/ENG_moins-de-40.png"
              style="padding-bottom:2em"
            />

            <p>
              Rich in my experience as the founder and manager of the Om Prana
              Holistic Center, I now combine my experiences as an entrepreneur,
              consultant and MBA with that of developing and deploying
              meditation, yoga, happiness and health retreats. I can also
              incorporate coaching in heart coherence, healthy cooking, juicing
              and more. All my retreats are tailor-made for your team specific
              needs to address your most important business and wellbeing
              objective.
            </p>
          </div>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/duree3.png'); "
      >
        <div class="hero-body has-text-centered">
          <h2 class=" title is-family-primary is-size-2 ">
            DURATION 2 to 7 days
          </h2>
          <h3 class="title">Based on your needs and budget</h3>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h1 class="title is-size-6 ">
            When the healing takes care of business
          </h1>
          <p>
            I have multiple tools for both business & wellness. You can provide
            me with your objectives, the number of participants, the desired
            duration, and your budget and I will design something for a unique
            experience that will allow your leaders to relax, recharge, reset,
            reboot and to deploy the best of themselves in solving the business
            subjects at hand.
          </p>
          <g-image src="../../../uploads/RETRAITE-Logo-Long-RGB_bleu-moyen.png" width="800" class="center" />
          <p>
          The dictionary definition of a lighthouse is: A tall structure topped by a powerful light used as a beacon or signal to aid nautical navigation. Since its creation, it has been seen as a pillar and even a refuge. Over the years, the lighthouse has been used to represent our ability to reach our inner light and our full potential, to illuminate the dark areas of our experience. It also expresses the light of those who guide us. The lighthouse is the symbol of protection, hope, calm after the storm, and material and psychological security. It is also the symbol of our anchoring points such as are our values, our families, our friendships, and our professional relationships. In the workplace, the lighthouse can also represent the light we need to shed on the solutions needed to help it shine to its full potential, while remaining firmly rooted in its values, mission, and vision.
          </p>
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            The most popular business topics are:
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
                  <g-image src="../../../uploads/ENG-travail-equipe.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-communication.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-gestion-conflit.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Performance.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/5-dysfunctions.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-changement.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-projet.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-priorisation.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-Objectif.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-restructuration.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/ENG-reorganisation.png" />
                </figure>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div class="section ">
        <div class="container">
          <p>
            The most popular wellness activities are:
          </p>
          <g-image src="../../../uploads/ENG_activites-mieux-etre.png" />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Retreats are taking place in well-selected location conductive to
            change, transformation and rest. My favorite places in Quebec are:
          </p>
          <div class="columns">
            <div class="column">
              <div class="card">
                <a href="https://monastere.ca/" target="_blank">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../../uploads/ENG_Monastere.png" />
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
                      <g-image src="../../../uploads/ENG_Eastman.png" />
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
                      <g-image src="../../../uploads/ENG_Couvent.png" />
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
                      <g-image src="../../../uploads/CentreKio.png" />
                    </figure>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p>
            I can also travel internationally to facilitate your retreat at
            either a location of your choice or one that I can find for you. I
            can also work closely with a travel agency to target the best
            package for your group.
          </p>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/retraite-repas3.png'); "
      >
        <div class="hero-body has-text-centered">
          <h2 class=" title is-family-primary is-size-2">
            Healthy Meal
          </h2>
          <h3 class="title">Simple or gastronomic, planned with care</h3>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            I am taking care of all the details including the right foods. Meals
            of high quality are served, preferably organic and alcohol-free to
            promote presence, energy, rest and clarity of mind. The retreat is
            meant to be a complete resourcing and rejuvenating experience. It's
            a new way of working where you take care of your people as they take
            care of business.
          </p>
        </div>
      </div>

      <div
        class="parallax-effect hero is-medium is-dark"
        style="background-image: url('/img/bienfaits.png'); "
      >
        <div class="hero-body">
          <h2 class="has-text-centered title is-family-primary is-size-2">
            The benefits
          </h2>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <p>
            It can be difficult on a day-to-day basis, and especially when
            working from home, to develop team spirit, show appreciation and
            strengthen the desired corporate culture. A change of scenery breaks
            the routine and offers a unique opportunity to focus on specific
            topics and see things differently while investing in the health and
            well-being of your employees. The benefits generally looked for are:
          </p>
          <ul>
            <li>Team spirit uplifted</li>
            <li>Communications enhanced</li>
            <li>Conflict resolution</li>
            <li>Mobilization towards one or more goals</li>
            <li>Increased creativity</li>
            <li>Improve ego management</li>
            <li>Appreciation demonstrated in a tangible way</li>
            <li>
              Staff inspired to take care of themselves to offer the best of
              themselves
            </li>
            <li>Improved feeling of belonging to the company</li>
            <li>
              Increased adaptability in a changing world
            </li>
            <li>Overcoming the 5 dysfunctions of a team</li>
            <li>
              Restoration of pleasant working atmosphere
            </li>
            <li>Real Leaders transformation</li>
            <li>Performance BOOST</li>
            <li>RESET!</li>
          </ul>
          <p>
            More can be accomplished in two well-structured days than in hours
            of meeting in the office where everyone continues to operate
            according to the same principles and paradigms that led to the
            current results.
          </p>
          <h3 class="title is-size-6">Executive Retreat Sample</h3>
          <ul>
            <li>Client : Kerry Ste-Claire factory</li>
            <li>Number of participants: 10</li>
            <li>Duration: 2 nights, 2 days</li>
            <li>Location: Le Monastère des Augustines</li>
            <li>Theme: Team Upgrade!</li>
            <li>
              Meal: Healthy breakfast, lunch and dinner served by Le Monastère.
            </li>
            <li>
              Objectives:
              <ul>
                <li>Communicate sincere appreciation.</li>
                <li>Recognize the continuously changing reality.</li>
                <li>
                  Take a moment to stop and reflect on the essentials for team
                  success.
                </li>
                <li>
                  Align the project portfolio with the annual objectives.
                </li>
                <li>
                  Improve communication and exchanges between team members.
                </li>
                <li>
                  Find effective ways to stay aligned throughout the year.
                </li>
                <li>
                  Develop a sense of belonging to the factory beyond supervision
                  lines.
                </li>
                <li>
                  Learn to communicate authentically, respectfully and focused
                  on advancing and solving problems.
                </li>
                <li>Improve ego management.</li>
                <li>Overcome the 5 dysfunctions of a team.</li>
                <li>Have a good time.</li>
              </ul>
            </li>
          </ul>
          <h3 class="title is-size-6">Referral to be provided</h3>
          <hr />
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <g-image
                  class="is-rounded"
                  src="../../../uploads/Jimmy.png"
                ></g-image>
              </figure>
            </div>

            <div class="media-content">
              <div>
                <p>
                  Having collaborated and worked with Nancy on several occasions
                  in the past, I had no doubt that our experience would be a
                  winning one. It was beyond my expectations and those of my
                  team.
                </p>
                <p>
                  During a recent retreat and team building activity with my
                  team of managers, we were looking for an experience that would
                  allow us both to refocus in order to work more efficiently,
                  but also an opportunity to take care of us, the human
                  individual being behind each manager, which unfortunately is
                  not done often enough in companies.
                </p>
                <p>
                  It is a very unusual activity, which requires daring and which
                  goes beyond the `` normal '' framework of training / current
                  management framework, but I tell you, it is the best
                  investment you can make.
                </p>
                <p>
                  Nancy has definitely made us a renewed team, more united than
                  ever, which has significantly increased the overall
                  effectiveness of the team. The mix between the more
                  conventional approach to team functioning (Lancioni, the 5
                  dysfunctions of a team) taught, and the heart coherence
                  teaching applied and mastered by Nancy resulted in a winning
                  cocktail. The change is radical, and the results are tangible!
                </p>
                <p>
                  Thank you Nancy, it has been one of my best professional
                  experiences so far, and I want to say that as a business
                  leader, this is something we should all take the time to do,
                  more often! Dare!
                </p>
              </div>
              <h2 class="title is-size-6 is-family-primary">
                Jimmy Chabot
                <span>, Kerry</span>
              </h2>
            </div>
          </div>
          <g-image
            src="../../../uploads/ENG-seulement-42-pourcent.png"
            style="padding-top: 2em"
          />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            Additional wellbeing, personal growth, leadership and management
            topic can be added. The subjects often selected are:
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
                  <g-image src="../../../uploads/thoughts.png" />
                </figure>
              </div>
            </div>
            <!-- <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/emotions.png" />
                </figure>
              </div>
            </div> -->
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/stress-icon.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Food.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Exercise.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/sleep.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Environment.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Relationship.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Resilience-ENG.png" />
                </figure>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image src="../../../uploads/Energy.png" />
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
        <!-- <div class="hero-body">
          <h2 class="has-text-centered title">Repas inclus</h2>
        </div> -->
      </div>

      <div class="section">
        <div class="container">
          <p>
            Offer the teaching of great masters, and sages wrapped in business
            context. Empower your employees to learn attitudes and behaviors
            that are beneficial for them, their families, their employees and
            their colleagues. All the principles and tools can also be
            accompanied by the most up-to-date data in terms of studies and
            scientific research available.
          </p>
          <g-image
            src="../../../uploads/RETREAT-Slogan-RGB-ANG_bleu-moyen.jpg"
            style="padding-top: 2em"
            quality="100"
          />
        </div>
      </div>

      <div class="section has-background-info">
        <div class="container">
          <p>
            For more information on other available topics, you can consult
          </p>
          <div class="columns">
            <div class="column">
              <g-link to="/en/training">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image src="../../../uploads/corporate-training.png" />
                    </figure>
                  </div>
                </div>
              </g-link>
            </div>
            <div class="column">
              <g-link to="/en/conferences">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image
                        src="../../../uploads/corporate-conference.png"
                      />
                    </figure>
                  </div>
                </div>
              </g-link>
            </div>
            <div class="column">
              <a href="https://coaching.nancybilodeau.com/en/training">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <g-image
                        src="../../../uploads/ENG-formations-individu.png"
                      />
                    </figure>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <h2 class="title is-size-6">
            Show them your appreciation and give them a unique experience that
            will help them in all areas of their life.
          </h2>

          <a class="button" href="/en/contact" target="_self"
            >Contact me to learn more!</a
          >
        </div>
      </div>
    </div>
  </English-Layout>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Retreat",
    htmlAttrs: {
      lang: "en",
    },
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
  min-height: 850px;
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
.slick-prev:before,
.slick-next:before {
  color: #363636;
}
</style>
