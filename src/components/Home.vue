<template>
  <div class="home">
    <h1>Movie Lists</h1>

    <!-- Trending Movies -->
    <section>
      <h2>Trending Movies</h2>
      <div class="movie-list">
        <div class="movie-card" v-for="movie in trendingMovies" :key="movie.id">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :alt="movie.title"
          />
          <h3>{{ movie.title }}</h3>
        </div>
      </div>
    </section>

    <!-- Top Rated Movies -->
    <section>
      <h2>Top Rated Movies</h2>
      <div class="movie-list">
        <div class="movie-card" v-for="movie in topRatedMovies" :key="movie.id">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :alt="movie.title"
          />
          <h3>{{ movie.title }}</h3>
        </div>
      </div>
    </section>

    <!-- Upcoming Movies -->
    <section>
      <h2>Upcoming Movies</h2>
      <div class="movie-list">
        <div class="movie-card" v-for="movie in upcomingMovies" :key="movie.id">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :alt="movie.title"
          />
          <h3>{{ movie.title }}</h3>
        </div>
      </div>
    </section>

    <!-- Popular Movies -->
    <section>
      <h2>Popular Movies</h2>
      <div class="movie-list">
        <div class="movie-card" v-for="movie in popularMovies" :key="movie.id">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :alt="movie.title"
          />
          <h3>{{ movie.title }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      trendingMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      popularMovies: [],
    };
  },
  methods: {
    async fetchTrendingMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.trendingMovies = response.data.results;
    },
    async fetchTopRatedMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.topRatedMovies = response.data.results;
    },
    async fetchUpcomingMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.upcomingMovies = response.data.results;
    },
    async fetchPopularMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.popularMovies = response.data.results;
    },
  },
  async created() {
    await Promise.all([
      this.fetchTrendingMovies(),
      this.fetchTopRatedMovies(),
      this.fetchUpcomingMovies(),
      this.fetchPopularMovies(),
    ]);
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  margin: 20px 0;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.movie-card {
  width: 150px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
}
</style>
