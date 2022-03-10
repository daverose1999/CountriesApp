<template>
  <main class="home">
    <NavBar />
    <section class="main-frame">
      <section class="top-frame">
        <section class="search">
          <input
            placeholder="Search for any country..."
            autofocus
            v-model="searchQuery"
          />
          <svg
            class="input-icon"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SearchIcon"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
        </section>

        <section class="filter" v-show="result">
          <select v-model="region" name="slct" id="slct">
            <option value="">Filter by Region</option>
            <option
              v-for="{ region } in result"
              :key="region.id"
              :value="region"
            >
              {{ region }}
            </option>
          </select>
        </section>
      </section>
      <section v-if="resultQuery.length === 0 && !loading">
        <article class="nodata">
          <figure>
            <img
              src="../../assets/lost-tourists-foreign-country-people-vacation-unable-find-way-knowing-direction-bad-planning-route-navigation-language-problems-illustration-with-faceless-characters_89224-3622.jpg"
            />
          </figure>
          <h1>No Country Found!</h1>
          <p>We've packed our bags and searched the ends of the earth</p>
        </article>
      </section>
      <section
        class="skeleton"
        v-show="loading"
        v-else-if="loading && resultQuery.length === 0"
      >
        <skeleton-loader :loading="loading"></skeleton-loader>
        <skeleton-loader :loading="loading"></skeleton-loader>
        <skeleton-loader :loading="loading"></skeleton-loader>
        <skeleton-loader :loading="loading"></skeleton-loader>
      </section>
      <section class="cards" v-else>
        <article
          class="card"
          v-for="data in resultQuery"
          :key="data.id"
          v-on:click="openCard(`${data.name.common}`)"
        >
          <figure>
            <img :src="data.flags.svg" />
          </figure>
          <header>
            <h1 class="heading">{{ data.name.official }}</h1>

            <p class="body">
              Population:
              <span>{{
                data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</span>
            </p>
            <p class="body">
              Region: <span>{{ data.region }}</span>
            </p>
            <p class="body" v-if="data.capital">
              Capital: <span>{{ data.capital + "" }}</span>
            </p>
            <p class="body" v-else>Capital: <span>No capital</span></p>
          </header>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
import home from "./home";

export default home;
</script>

<style lang="scss" src="./home.scss" scoped></style>
