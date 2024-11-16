<template>
  <div class="search-page">
    <h1>Search Movies</h1>

    <!-- Filter Section -->
    <div class="filters">
      <div>
        <label for="genre">Genre:</label>
        <select v-model="selectedGenre" id="genre">
          <option value="">All</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="rating">Rating:</label>
        <select v-model="selectedRating" id="rating">
          <option value="">All</option>
          <option v-for="rating in ratingOptions" :key="rating" :value="rating">
            {{ rating }}+
          </option>
        </select>
      </div>

      <div>
        <label for="sort">Sort by:</label>
        <select v-model="selectedSort" id="sort">
          <option value="popularity.desc">Popularity (High to Low)</option>
          <option value="popularity.asc">Popularity (Low to High)</option>
          <option value="release_date.desc">Release Date (New to Old)</option>
          <option value="release_date.asc">Release Date (Old to New)</option>
          <option value="vote_average.desc">Rating (High to Low)</option>
          <option value="vote_average.asc">Rating (Low to High)</option>
        </select>
      </div>

      <button @click="resetFilters">Reset Filters</button>
    </div>

    <!-- Movie Table -->
    <div class="movie-table">
      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="movie in filteredMovies"
            :key="movie.id"
            @click="toggleWishlist(movie)"
            :class="{ added: isInWishlist(movie) }"
          >
            <td>
              <img :src="getPosterUrl(movie.poster_path)" :alt="movie.title" />
            </td>
            <td>{{ movie.title }}</td>
            <td>{{ getMovieGenres(movie.genre_ids) }}</td>
            <td>{{ movie.vote_average }}</td>
            <td>{{ movie.release_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchMovies",
  data() {
    return {
      movies: [],
      genres: [],
      wishlist: [],

      // Filters
      selectedGenre: "",
      selectedRating: "",
      selectedSort: "popularity.desc",

      // Rating options
      ratingOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {
    filteredMovies() {
      let filtered = [...this.movies];

      // Genre filter
      if (this.selectedGenre) {
        filtered = filtered.filter((movie) =>
          movie.genre_ids.includes(parseInt(this.selectedGenre))
        );
      }

      // Rating filter
      if (this.selectedRating) {
        filtered = filtered.filter(
          (movie) => movie.vote_average >= this.selectedRating
        );
      }

      // Sort by selected criteria
      filtered.sort((a, b) => {
        if (this.selectedSort.includes(".desc")) {
          return (
            b[this.selectedSort.split(".")[0]] -
            a[this.selectedSort.split(".")[0]]
          );
        } else {
          return (
            a[this.selectedSort.split(".")[0]] -
            b[this.selectedSort.split(".")[0]]
          );
        }
      });

      return filtered;
    },
  },
  methods: {
    async fetchMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
            sort_by: this.selectedSort,
          },
        }
      );
      this.movies = response.data.results;
    },
    async fetchGenres() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.genres = response.data.genres;
    },
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    getMovieGenres(genreIds) {
      return genreIds
        .map(
          (id) =>
            this.genres.find((genre) => genre.id === id)?.name || "Unknown"
        )
        .join(", ");
    },
    toggleWishlist(movie) {
      const exists = this.wishlist.some((item) => item.id === movie.id);
      if (exists) {
        this.wishlist = this.wishlist.filter((item) => item.id !== movie.id);
      } else {
        this.wishlist.push(movie);
      }
      this.saveWishlist();
    },
    isInWishlist(movie) {
      return this.wishlist.some((item) => item.id === movie.id);
    },
    loadWishlist() {
      const saved = localStorage.getItem("wishlist");
      this.wishlist = saved ? JSON.parse(saved) : [];
    },
    saveWishlist() {
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    },
    resetFilters() {
      this.selectedGenre = "";
      this.selectedRating = "";
      this.selectedSort = "popularity.desc";
    },
  },
  async created() {
    await Promise.all([this.fetchMovies(), this.fetchGenres()]);
    this.loadWishlist();
  },
};
</script>

<style scoped>
.search-page {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

.filters label {
  margin-right: 5px;
}

.filters select,
.filters button {
  padding: 5px 10px;
}

.movie-table table {
  width: 100%;
  border-collapse: collapse;
}

.movie-table th,
.movie-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.movie-table th {
  background-color: #f4f4f4;
}

.movie-table td img {
  width: 100px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.movie-table td img:hover {
  transform: scale(1.1);
}

.added {
  background-color: #e6f7ff; /* 추천된 영화 강조 */
  border: 2px solid #007bff;
}
</style>
