<template>
  <main class="country">
    <NavBar />
    <section class="main-frame">
      <router-link to="/"
        ><button class="back" to="/">
          <i class="fa fa-long-arrow-left"></i> Back
        </button></router-link
      >
      <section v-for="data in countryData" :key="data.id">
        <article class="details" v-for="data in countryData" :key="data.id">
          <figure>
            <img :src="data.flags.svg" />
          </figure>
          <section class="description">
            <header>{{ data.name.official }}</header>
            <section class="list">
              <ul class="row1">
                <li>
                  Native Name:
                  <span>{{
                    Object.values(data.name.nativeName)[0].official
                  }}</span>
                </li>
                <li>
                  Population:
                  <span>{{
                    data.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}</span>
                </li>
                <li>
                  Region: <span>{{ data.region }}</span>
                </li>
                <li>
                  Sub Region: <span>{{ data.subregion }}</span>
                </li>
                <li>
                  Capital: <span>{{ data.capital + "" }}</span>
                </li>
              </ul>
              <ul class="row2">
                <li>
                  Top Level Domain:
                  <span>{{ data.tld + "" }}</span>
                </li>
                <li>
                  Currencies:
                  <span>{{ Object.values(data.currencies)[0].name }}</span>
                  <span> ({{ Object.values(data.currencies)[0].symbol }})</span>
                </li>
                <li>
                  Languages:
                  <span>{{ Object.values(data.languages).join(", ") }}</span>
                </li>
              </ul>
            </section>
            <section class="border-countries">
              <p v-if="data.borders">
                Border Countries:
                <button
                  v-for="data in borders"
                  :key="data.id"
                  v-on:click="openCard(`${data.name.common}`)"
                >
                  <!-- 
                    
                  v-on:click="extractBorders(`${data}`)"
                   -->

                  {{ data.name.common }}
                </button>
              </p>

              <p v-else>Border Countries: <span>None</span></p>
            </section>
          </section>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
import countrydetails from "./countrydetails";

export default countrydetails;
</script>

<style lang="scss" src="./countrydetails.scss" scoped></style>
