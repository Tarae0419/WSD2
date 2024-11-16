<template>
  <div class="home">
    <h1>Welcome to Movie Hub</h1>

    <!-- Loading -->
    <div v-if="loading" class="loading">Loading movies...</div>

    <!-- Sections -->
    <section v-else>
      <div
        class="movie-section"
        v-for="section in movieSections"
        :key="section.title"
      >
        <h2>{{ section.title }}</h2>
        <swiper
          :slides-per-view="5"
          space-between="20"
          navigation
          pagination
          class="movie-slider"
        >
          <swiper-slide
            v-for="movie in section.movies"
            :key="movie.id"
            :class="getCardClass(movie)"
            @click="toggleRecommendation(movie)"
          >
            <img
              :src="getPosterUrl(movie.poster_path)"
              :alt="movie.title"
              class="movie-poster"
            />
            <h3>{{ movie.title }}</h3>
            <p>{{ truncateDescription(movie.overview) }}</p>
            <p>⭐ Rating: {{ movie.vote_average }}</p>
            <p>📅 Release: {{ movie.release_date }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      movieSections: [
        { title: "Trending Movies", movies: [] },
        { title: "Top Rated Movies", movies: [] },
        { title: "Upcoming Movies", movies: [] },
        { title: "Popular Movies", movies: [] },
      ],
      recommendedMovies: [], // 로컬 스토리지에서 불러온 추천 영화
      loading: true,
    };
  },
  methods: {
    async fetchMovies(url, sectionIndex) {
      try {
        const response = await axios.get(url, {
          params: { api_key: "338afe18473748636f29d4cb0fedaa87" },
        });
        this.movieSections[sectionIndex].movies = response.data.results;
      } catch (error) {
        console.error(
          `Failed to fetch movies for ${this.movieSections[sectionIndex].title}`,
          error
        );
      }
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    truncateDescription(description) {
      return description.length > 100
        ? description.substring(0, 100) + "..."
        : description;
    },
    toggleRecommendation(movie) {
      const exists = this.recommendedMovies.some(
        (recommended) => recommended.id === movie.id
      );

      if (exists) {
        this.recommendedMovies = this.recommendedMovies.filter(
          (recommended) => recommended.id !== movie.id
        );
        alert(`${movie.title} has been removed from your Wishlist.`);
      } else {
        this.recommendedMovies.push(movie);
        alert(`${movie.title} has been added to your Wishlist.`);
      }

      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      const saved = localStorage.getItem("recommendedMovies");
      this.recommendedMovies = saved ? JSON.parse(saved) : [];
    },
    saveToLocalStorage() {
      localStorage.setItem(
        "recommendedMovies",
        JSON.stringify(this.recommendedMovies)
      );
    },
    getCardClass(movie) {
      const isRecommended = this.recommendedMovies.some(
        (recommended) => recommended.id === movie.id
      );
      return isRecommended ? "movie-card recommended-card" : "movie-card";
    },
  },
  async created() {
    const urls = [
      "https://api.themoviedb.org/3/trending/movie/day",
      "https://api.themoviedb.org/3/movie/top_rated",
      "https://api.themoviedb.org/3/movie/upcoming",
      "https://api.themoviedb.org/3/movie/popular",
    ];

    const fetchPromises = urls.map((url, index) =>
      this.fetchMovies(url, index)
    );
    await Promise.all(fetchPromises);

    this.loadFromLocalStorage();
    this.loading = false;
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

.loading {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.movie-section {
  margin-bottom: 40px;
}

.movie-slider {
  margin-bottom: 20px;
}

.movie-card {
  width: 200px;
  background-color: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
}

.recommended-card {
  background-color: #e6f7ff;
  border: 2px solid #007bff;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-card h3 {
  font-size: 16px;
  margin: 10px 0;
}

.movie-card p {
  font-size: 14px;
  color: #555;
}
</style>
